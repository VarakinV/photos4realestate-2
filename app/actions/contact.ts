"use server";

import { verifyRecaptchaToken } from "@/lib/recaptcha";
import { siteConfig } from "@/lib/site";

type ContactInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
  recaptchaToken?: string;
};

export type ContactResult =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: Partial<Record<keyof ContactInput, string>> };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SMTP2GO_ENDPOINT = "https://api.smtp2go.com/v3/email/send";

type PreparedContact = {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Smtp2GoResponse = {
  data?: {
    succeeded?: number;
    failed?: number;
    failures?: unknown[];
  };
  error?: string;
};

export async function submitContact(input: ContactInput): Promise<ContactResult> {
  const fieldErrors: Partial<Record<keyof ContactInput, string>> = {};

  const firstName = (input.firstName ?? "").trim();
  const lastName = (input.lastName ?? "").trim();
  const email = (input.email ?? "").trim();
  const phone = (input.phone ?? "").trim();
  const message = (input.message ?? "").trim();
  const recaptchaToken = (input.recaptchaToken ?? "").trim();

  if (firstName.length < 2) fieldErrors.firstName = "Please enter your first name.";
  if (lastName.length < 2) fieldErrors.lastName = "Please enter your last name.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Please enter a valid email address.";
  if (message.length < 10) fieldErrors.message = "Please include a short message (10+ characters).";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      message: "Please correct the highlighted fields and try again.",
      fieldErrors,
    };
  }

  const recaptchaResult = await verifyRecaptchaToken(recaptchaToken, "contact_form", "contact");
  if (!recaptchaResult.ok) {
    console.error("[contact] reCAPTCHA verification failed", recaptchaResult.error);
    return {
      ok: false,
      message: "We couldn’t verify this submission. Please try again.",
      fieldErrors: { recaptchaToken: "We couldn’t verify this submission. Please try again." },
    };
  }

  const preparedContact = {
    firstName,
    lastName,
    name: `${firstName} ${lastName}`.trim(),
    email,
    phone,
    message,
  };

  const emailResult = await sendContactEmail(preparedContact);
  if (!emailResult.ok) {
    console.error("[contact] SMTP2GO send failed", emailResult.error);
    return {
      ok: false,
      message: "Sorry, we couldn’t send your message. Please call or email us directly.",
    };
  }

  return {
    ok: true,
    message: "Thanks! We received your message and will be in touch shortly.",
  };
}

async function sendContactEmail(contact: PreparedContact) {
  const apiKey = process.env.SMTP2GO_API_KEY;

  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[contact] SMTP2GO_API_KEY is not configured. Logging submission only.");
      console.log("[contact]", { to: siteConfig.email, from: contact, receivedAt: new Date().toISOString() });
      return { ok: true } as const;
    }

    return { ok: false, error: "SMTP2GO_API_KEY is not configured." } as const;
  }

  const response = await fetch(SMTP2GO_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Smtp2go-Api-Key": apiKey,
      accept: "application/json",
    },
    body: JSON.stringify({
      sender: siteConfig.email,
      to: [siteConfig.email],
      subject: `New contact form enquiry from ${contact.name}`,
      text_body: buildTextEmail(contact),
      html_body: buildHtmlEmail(contact),
      custom_headers: [{ header: "Reply-To", value: formatEmailAddress(contact.name, contact.email) }],
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

function buildTextEmail(contact: PreparedContact) {
  return [
    "New contact form enquiry",
    "",
    `Name: ${contact.name}`,
    `Email: ${contact.email}`,
    `Phone: ${contact.phone || "Not provided"}`,
    "",
    "Message:",
    contact.message,
  ].join("\n");
}

function buildHtmlEmail(contact: PreparedContact) {
  return `
    <h2>New contact form enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(contact.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(contact.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(contact.phone || "Not provided")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(contact.message).replace(/\n/g, "<br />")}</p>
  `;
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
