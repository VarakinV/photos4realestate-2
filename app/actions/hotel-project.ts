"use server";

import {
  hotelDecisionOptions,
  hotelPackageOptions,
  hotelPhotographyNeedOptions,
  hotelTimelineOptions,
  type HotelProjectFieldErrors,
  type HotelProjectInput,
  type HotelProjectResult,
  isHotelOption,
} from "@/lib/hotel-project-form";
import { siteConfig } from "@/lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SMTP2GO_ENDPOINT = "https://api.smtp2go.com/v3/email/send";
const RECAPTCHA_ENDPOINT = "https://www.google.com/recaptcha/api/siteverify";

type PreparedHotelProject = Omit<HotelProjectInput, "recaptchaToken"> & {
  receivedAt: string;
};

type Smtp2GoResponse = {
  data?: {
    succeeded?: number;
    failed?: number;
    failures?: unknown[];
  };
  error?: string;
};

type RecaptchaResponse = {
  success?: boolean;
  hostname?: string;
  "error-codes"?: string[];
};

export async function submitHotelProject(input: HotelProjectInput): Promise<HotelProjectResult> {
  const fieldErrors: HotelProjectFieldErrors = {};
  const recaptchaToken = (input.recaptchaToken ?? "").trim();
  const project = prepareHotelProject(input);

  if (project.propertyName.length < 2) fieldErrors.propertyName = "Please enter the property name.";
  if (project.roomCount.length < 1) fieldErrors.roomCount = "Please enter the number of rooms or suites.";
  if (project.cityLocation.length < 2) fieldErrors.cityLocation = "Please enter the city or location.";
  if (project.needs.length === 0) fieldErrors.needs = "Please select at least one area to photograph.";
  if (!isHotelOption(project.twilightPhotography, hotelDecisionOptions)) fieldErrors.twilightPhotography = "Please choose an option.";
  if (!isHotelOption(project.videography, hotelDecisionOptions)) fieldErrors.videography = "Please choose an option.";
  if (!isHotelOption(project.timeline, hotelTimelineOptions)) fieldErrors.timeline = "Please choose a timeline.";
  if (!isHotelOption(project.packageInterest, hotelPackageOptions)) fieldErrors.packageInterest = "Please choose a package option.";
  if (project.fullName.length < 2) fieldErrors.fullName = "Please enter your full name.";
  if (!EMAIL_RE.test(project.email)) fieldErrors.email = "Please enter a valid email address.";
  if (project.phone.replace(/\D/g, "").length < 7) fieldErrors.phone = "Please enter a valid phone number.";
  if (project.notes.length > 1500) fieldErrors.notes = "Please keep this under 1,500 characters.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      message: "Please correct the highlighted fields and try again.",
      fieldErrors,
    };
  }

  const recaptchaResult = await verifyRecaptcha(recaptchaToken);
  if (!recaptchaResult.ok) {
    console.error("[hotel-project] reCAPTCHA verification failed", recaptchaResult.error);
    return {
      ok: false,
      message: "Please complete the reCAPTCHA check and try again.",
      fieldErrors: { recaptchaToken: "Please complete the reCAPTCHA check." },
    };
  }

  const emailResult = await sendHotelProjectEmails(project);
  if (!emailResult.ok) {
    console.error("[hotel-project] SMTP2GO send failed", emailResult.error);
    return {
      ok: false,
      message: "Sorry, we couldn’t send your project request. Please call or email us directly.",
    };
  }

  return {
    ok: true,
    message: "Thanks! We received your hotel project request and emailed you a confirmation.",
  };
}

async function verifyRecaptcha(token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[hotel-project] RECAPTCHA_SECRET_KEY is not configured. Skipping reCAPTCHA verification in development.");
      return { ok: true } as const;
    }

    return { ok: false, error: "RECAPTCHA_SECRET_KEY is not configured." } as const;
  }

  if (!token) return { ok: false, error: "Missing reCAPTCHA token." } as const;

  const body = new URLSearchParams({ secret: secretKey, response: token });
  const response = await fetch(RECAPTCHA_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });

  const data = (await response.json().catch(() => null)) as RecaptchaResponse | null;

  if (!response.ok || !data?.success) {
    return { ok: false, error: data?.["error-codes"]?.join(", ") ?? response.statusText } as const;
  }

  return { ok: true } as const;
}

function prepareHotelProject(input: HotelProjectInput): PreparedHotelProject {
  const needs = Array.isArray(input.needs)
    ? input.needs.map((need) => need.trim()).filter((need) => isHotelOption(need, hotelPhotographyNeedOptions))
    : [];

  return {
    propertyName: (input.propertyName ?? "").trim(),
    roomCount: (input.roomCount ?? "").trim(),
    cityLocation: (input.cityLocation ?? "").trim(),
    needs,
    twilightPhotography: (input.twilightPhotography ?? "").trim(),
    videography: (input.videography ?? "").trim(),
    timeline: (input.timeline ?? "").trim(),
    packageInterest: (input.packageInterest ?? "").trim(),
    fullName: (input.fullName ?? "").trim(),
    email: (input.email ?? "").trim().toLowerCase(),
    phone: (input.phone ?? "").trim(),
    notes: (input.notes ?? "").trim(),
    receivedAt: new Date().toISOString(),
  };
}

async function sendHotelProjectEmails(project: PreparedHotelProject) {
  const apiKey = process.env.SMTP2GO_API_KEY;

  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[hotel-project] SMTP2GO_API_KEY is not configured. Logging submission only.");
      console.log("[hotel-project]", { to: siteConfig.email, project, receivedAt: project.receivedAt });
      return { ok: true } as const;
    }

    return { ok: false, error: "SMTP2GO_API_KEY is not configured." } as const;
  }

  const internal = await sendSmtpEmail(apiKey, {
    to: [siteConfig.email],
    subject: `New hotel photography project from ${project.fullName}`,
    textBody: buildInternalTextEmail(project),
    htmlBody: buildInternalHtmlEmail(project),
    replyTo: formatEmailAddress(project.fullName, project.email),
  });

  if (!internal.ok) return internal;

  return sendSmtpEmail(apiKey, {
    to: [project.email],
    subject: "We received your hotel photography project request",
    textBody: buildConfirmationTextEmail(project),
    htmlBody: buildConfirmationHtmlEmail(project),
    replyTo: formatEmailAddress(siteConfig.name, siteConfig.email),
  });
}

async function sendSmtpEmail(
  apiKey: string,
  email: { to: string[]; subject: string; textBody: string; htmlBody: string; replyTo: string }
) {
  const response = await fetch(SMTP2GO_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Smtp2go-Api-Key": apiKey,
      accept: "application/json",
    },
    body: JSON.stringify({
      sender: siteConfig.email,
      to: email.to,
      subject: email.subject,
      text_body: email.textBody,
      html_body: email.htmlBody,
      custom_headers: [{ header: "Reply-To", value: email.replyTo }],
    }),
    cache: "no-store",
  });

  const data = (await response.json().catch(() => null)) as Smtp2GoResponse | null;
  const failed = data?.data?.failed ?? 0;
  const succeeded = data?.data?.succeeded;

  if (!response.ok || failed > 0 || succeeded === 0) {
    return { ok: false, error: data?.error ?? JSON.stringify(data) ?? response.statusText } as const;
  }

  return { ok: true } as const;
}

function buildInternalTextEmail(project: PreparedHotelProject) {
  return [
    "New hotel photography project request",
    "",
    "Section 1 — About the Property",
    `Property name: ${project.propertyName}`,
    `Number of rooms / suites: ${project.roomCount}`,
    `City / location: ${project.cityLocation}`,
    "",
    "Section 2 — About the Project",
    `What needs to be photographed: ${project.needs.join(", ")}`,
    `Twilight photography: ${project.twilightPhotography}`,
    `Videography: ${project.videography}`,
    "",
    "Section 3 — Timeline & Budget",
    `Timeline: ${project.timeline}`,
    `Package interest: ${project.packageInterest}`,
    "",
    "Section 4 — Contact",
    `Full name: ${project.fullName}`,
    `Email: ${project.email}`,
    `Phone: ${project.phone}`,
    "",
    "Anything else we should know:",
    project.notes || "Not provided",
  ].join("\n");
}

function buildInternalHtmlEmail(project: PreparedHotelProject) {
  return `
    <h2>New hotel photography project request</h2>
    ${buildHtmlSection("Section 1 — About the Property", [
      ["Property name", project.propertyName],
      ["Number of rooms / suites", project.roomCount],
      ["City / location", project.cityLocation],
    ])}
    ${buildHtmlSection("Section 2 — About the Project", [
      ["What needs to be photographed", project.needs.join(", ")],
      ["Twilight photography", project.twilightPhotography],
      ["Videography", project.videography],
    ])}
    ${buildHtmlSection("Section 3 — Timeline & Budget", [
      ["Timeline", project.timeline],
      ["Package interest", project.packageInterest],
    ])}
    ${buildHtmlSection("Section 4 — Contact", [
      ["Full name", project.fullName],
      ["Email", project.email],
      ["Phone", project.phone],
      ["Anything else we should know", project.notes || "Not provided"],
    ])}
  `;
}

function buildConfirmationTextEmail(project: PreparedHotelProject) {
  return [
    `Hi ${project.fullName},`,
    "",
    "Thanks for starting your hotel photography project with Photos 4 Real Estate. We received your request and will review the details shortly.",
    "",
    "Project summary:",
    `Property: ${project.propertyName}`,
    `Location: ${project.cityLocation}`,
    `Rooms / suites: ${project.roomCount}`,
    `Spaces: ${project.needs.join(", ")}`,
    `Timeline: ${project.timeline}`,
    `Package interest: ${project.packageInterest}`,
    "",
    `If anything changes, reply to this email or call ${siteConfig.phone}.`,
    "",
    siteConfig.name,
  ].join("\n");
}

function buildConfirmationHtmlEmail(project: PreparedHotelProject) {
  return `
    <p>Hi ${escapeHtml(project.fullName)},</p>
    <p>Thanks for starting your hotel photography project with Photos 4 Real Estate. We received your request and will review the details shortly.</p>
    <h2>Project summary</h2>
    ${buildHtmlSection("", [
      ["Property", project.propertyName],
      ["Location", project.cityLocation],
      ["Rooms / suites", project.roomCount],
      ["Spaces", project.needs.join(", ")],
      ["Timeline", project.timeline],
      ["Package interest", project.packageInterest],
    ])}
    <p>If anything changes, reply to this email or call ${escapeHtml(siteConfig.phone)}.</p>
    <p>${escapeHtml(siteConfig.name)}</p>
  `;
}

function buildHtmlSection(title: string, rows: Array<[string, string]>) {
  const heading = title ? `<h3>${escapeHtml(title)}</h3>` : "";
  const body = rows
    .map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value).replace(/\n/g, "<br />")}</p>`)
    .join("");

  return `${heading}${body}`;
}

function formatEmailAddress(name: string, email: string) {
  return `"${stripHeaderValue(name).replace(/"/g, "'")}" <${stripHeaderValue(email)}>`;
}

function stripHeaderValue(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });
}