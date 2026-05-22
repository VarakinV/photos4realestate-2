"use server";

type FreeHeadshotsInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  brokerage: string;
  recaptchaToken?: string;
};

export type FreeHeadshotsFieldErrors = Partial<Record<keyof FreeHeadshotsInput, string>>;

export type FreeHeadshotsResult =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: FreeHeadshotsFieldErrors };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RECAPTCHA_ENDPOINT = "https://www.google.com/recaptcha/api/siteverify";
const FREE_HEADSHOT_TAGS = ["realtor", "free headshot requested"] as const;

type PreparedFreeHeadshotsLead = Omit<FreeHeadshotsInput, "recaptchaToken">;

type RecaptchaResponse = {
  success?: boolean;
  hostname?: string;
  "error-codes"?: string[];
};

type GhlUpsertResponse = {
  contact?: {
    id?: string;
  };
};

export async function submitFreeHeadshotsLead(input: FreeHeadshotsInput): Promise<FreeHeadshotsResult> {
  const fieldErrors: FreeHeadshotsFieldErrors = {};

  const lead: PreparedFreeHeadshotsLead = {
    firstName: (input.firstName ?? "").trim(),
    lastName: (input.lastName ?? "").trim(),
    email: (input.email ?? "").trim(),
    phone: (input.phone ?? "").trim(),
    brokerage: (input.brokerage ?? "").trim(),
  };
  const recaptchaToken = (input.recaptchaToken ?? "").trim();

  if (lead.firstName.length < 2) fieldErrors.firstName = "Please enter your first name.";
  if (lead.lastName.length < 2) fieldErrors.lastName = "Please enter your last name.";
  if (!EMAIL_RE.test(lead.email)) fieldErrors.email = "Please enter a valid email address.";
  if (lead.phone.length < 7) fieldErrors.phone = "Please enter your phone number.";
  if (lead.brokerage.length < 2) fieldErrors.brokerage = "Please enter your brokerage.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      message: "Please correct the highlighted fields and try again.",
      fieldErrors,
    };
  }

  const recaptchaResult = await verifyRecaptcha(recaptchaToken);
  if (!recaptchaResult.ok) {
    console.error("[free-headshots] reCAPTCHA verification failed", recaptchaResult.error);
    return {
      ok: false,
      message: "Please complete the reCAPTCHA check and try again.",
      fieldErrors: { recaptchaToken: "Please complete the reCAPTCHA check." },
    };
  }

  const ghlResult = await upsertGhlContactAndApplyTags(lead);
  if (!ghlResult.ok) {
    console.error("[free-headshots] Go HighLevel submission failed", ghlResult.error);
    return {
      ok: false,
      message: "Sorry, we couldn’t save your request. Please call or email us directly.",
    };
  }

  return {
    ok: true,
    message: "Thanks! Your complimentary headshot request was received.",
  };
}

async function verifyRecaptcha(token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[free-headshots] RECAPTCHA_SECRET_KEY is not configured. Skipping reCAPTCHA verification in development.");
      return { ok: true } as const;
    }

    return { ok: false, error: "RECAPTCHA_SECRET_KEY is not configured." } as const;
  }

  if (!token) return { ok: false, error: "Missing reCAPTCHA token." } as const;

  const response = await fetch(RECAPTCHA_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret: secretKey, response: token }),
    cache: "no-store",
  });
  const data = (await response.json().catch(() => null)) as RecaptchaResponse | null;

  if (!response.ok || !data?.success) {
    return { ok: false, error: data?.["error-codes"]?.join(", ") ?? response.statusText } as const;
  }

  return { ok: true } as const;
}

async function upsertGhlContactAndApplyTags(lead: PreparedFreeHeadshotsLead) {
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
      companyName: lead.brokerage,
      locationId,
      phone: lead.phone,
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
    body: JSON.stringify({ tags: FREE_HEADSHOT_TAGS }),
    cache: "no-store",
  });

  if (!tagsResponse.ok) {
    return { ok: false, error: `Tag application failed with status ${tagsResponse.status}.` } as const;
  }

  return { ok: true } as const;
}