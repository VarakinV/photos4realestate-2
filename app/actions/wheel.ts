"use server";

import { verifyRecaptchaToken } from "@/lib/recaptcha";

const VALID_PRIZES = new Set([
  "3,500 Loyalty Points",
  "Free Drone Photos",
  "5,000 Loyalty Points",
  "3 Free Virtual Staging Images",
  "Free Virtual Twilight",
  "Free Style Shots",
  "Free Short Drone Video",
  "7,000 Loyalty Points",
]);

type WheelInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  prize: string;
  recaptchaToken?: string;
};

export type WheelFieldErrors = Partial<Record<keyof WheelInput, string>>;

export type WheelResult =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: WheelFieldErrors };

type PreparedWheelLead = Omit<WheelInput, "recaptchaToken">;

type GhlUpsertResponse = {
  contact?: {
    id?: string;
  };
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildTags(prize: string) {
  return ["realtor", "realtor calgary", "golf tournament event", `won ${prize}`];
}

export async function submitWheelLead(input: WheelInput): Promise<WheelResult> {
  const fieldErrors: WheelFieldErrors = {};

  const lead: PreparedWheelLead = {
    firstName: (input.firstName ?? "").trim(),
    lastName: (input.lastName ?? "").trim(),
    email: (input.email ?? "").trim(),
    phone: (input.phone ?? "").trim(),
    prize: (input.prize ?? "").trim(),
  };
  const recaptchaToken = (input.recaptchaToken ?? "").trim();

  if (lead.firstName.length < 2) fieldErrors.firstName = "Please enter your first name.";
  if (lead.lastName.length < 2) fieldErrors.lastName = "Please enter your last name.";
  if (!EMAIL_RE.test(lead.email)) fieldErrors.email = "Please enter a valid email address.";
  if (lead.phone.length < 7) fieldErrors.phone = "Please enter your phone number.";
  if (!lead.prize || !VALID_PRIZES.has(lead.prize)) fieldErrors.prize = "We couldn't identify the prize you selected.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      message: "Please correct the highlighted fields and try again.",
      fieldErrors,
    };
  }

  const recaptchaResult = await verifyRecaptchaToken(recaptchaToken, "wheel_spin", "wheel");
  if (!recaptchaResult.ok) {
    console.error("[wheel] reCAPTCHA verification failed", recaptchaResult.error);
    return {
      ok: false,
      message: "We couldn’t verify this submission. Please try again.",
      fieldErrors: { recaptchaToken: "We couldn’t verify this submission. Please try again." },
    };
  }

  const ghlResult = await upsertGhlContactAndApplyTags(lead);
  if (!ghlResult.ok) {
    console.error("[wheel] Go HighLevel submission failed", ghlResult.error);
    return {
      ok: false,
      message: "Sorry, we couldn’t save your request. Please try again in a moment.",
    };
  }

  return {
    ok: true,
    message: "Your prize has been claimed.",
  };
}

async function upsertGhlContactAndApplyTags(lead: PreparedWheelLead) {
  const apiBase = process.env.GHL_API_BASE;
  const apiKey = process.env.GHL_API_KEY;
  const apiVersion = process.env.GHL_API_VERSION;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!apiBase || !apiKey || !apiVersion || !locationId) {
    return { ok: false, error: "Go HighLevel environment variables are not fully configured." } as const;
  }

  const headers = {
    Authorization: `Bearer ${apiKey}`,
    Version: apiVersion,
    "Content-Type": "application/json",
    accept: "application/json",
  };

  const upsertResponse = await fetch(new URL("/contacts/upsert", apiBase).toString(), {
    method: "POST",
    headers,
    body: JSON.stringify({
      firstName: lead.firstName,
      lastName: lead.lastName,
      email: lead.email,
      locationId,
      phone: lead.phone,
      customFields: [
        { key: "prize", field_value: lead.prize },
      ],
    }),
    cache: "no-store",
  });

  const upsertData = (await upsertResponse.json().catch(() => null)) as GhlUpsertResponse | null;
  const contactId = upsertData?.contact?.id;

  if (!upsertResponse.ok || !contactId) {
    return { ok: false, error: `Contact upsert failed with status ${upsertResponse.status}.` } as const;
  }

  const tagsResponse = await fetch(new URL(`/contacts/${encodeURIComponent(contactId)}/tags`, apiBase).toString(), {
    method: "POST",
    headers,
    body: JSON.stringify({ tags: buildTags(lead.prize) }),
    cache: "no-store",
  });

  if (!tagsResponse.ok) {
    return { ok: false, error: `Tag application failed with status ${tagsResponse.status}.` } as const;
  }

  return { ok: true } as const;
}
