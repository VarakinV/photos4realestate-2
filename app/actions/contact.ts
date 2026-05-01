"use server";

import { siteConfig } from "@/lib/site";

type ContactInput = {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  consent: boolean;
};

export type ContactResult =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: Partial<Record<keyof ContactInput, string>> };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(input: ContactInput): Promise<ContactResult> {
  const fieldErrors: Partial<Record<keyof ContactInput, string>> = {};

  const name = (input.name ?? "").trim();
  const email = (input.email ?? "").trim();
  const phone = (input.phone ?? "").trim();
  const service = (input.service ?? "").trim();
  const message = (input.message ?? "").trim();

  if (name.length < 2) fieldErrors.name = "Please enter your full name.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Please enter a valid email address.";
  if (message.length < 10) fieldErrors.message = "Please include a short message (10+ characters).";
  if (!input.consent) fieldErrors.consent = "Please agree to be contacted.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      message: "Please correct the highlighted fields and try again.",
      fieldErrors,
    };
  }

  // TODO: wire up transactional email provider (Resend/SendGrid) or persist to DB.
  // For now, log on the server so submissions are captured in dev.
  console.log("[contact]", {
    to: siteConfig.email,
    from: { name, email, phone: phone || null },
    service: service || null,
    message,
    receivedAt: new Date().toISOString(),
  });

  return {
    ok: true,
    message: "Thanks! We received your message and will be in touch shortly.",
  };
}
