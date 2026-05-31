export type RecaptchaAction = "contact_form" | "hotel_project" | "free_headshots";

const RECAPTCHA_ENDPOINT = "https://www.google.com/recaptcha/api/siteverify";
const DEFAULT_MIN_SCORE = 0.5;

type RecaptchaResponse = {
  success?: boolean;
  score?: number;
  action?: string;
  hostname?: string;
  "error-codes"?: string[];
};

export async function verifyRecaptchaToken(token: string, expectedAction: RecaptchaAction, context: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[${context}] RECAPTCHA_SECRET_KEY is not configured. Skipping reCAPTCHA verification in development.`);
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

  if (data.action !== expectedAction) {
    return { ok: false, error: `Unexpected action: ${data.action ?? "missing"}.` } as const;
  }

  const configuredMinScore = Number(process.env.RECAPTCHA_MIN_SCORE ?? DEFAULT_MIN_SCORE);
  const minScore = Number.isFinite(configuredMinScore) ? configuredMinScore : DEFAULT_MIN_SCORE;
  if (typeof data.score !== "number" || data.score < minScore) {
    return { ok: false, error: `Low score: ${data.score ?? "missing"}.` } as const;
  }

  return { ok: true } as const;
}