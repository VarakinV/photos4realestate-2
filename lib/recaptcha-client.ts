"use client";

import type { RecaptchaAction } from "@/lib/recaptcha";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: RecaptchaAction }) => Promise<string>;
    };
  }
}

export function getRecaptchaToken(siteKey: string, action: RecaptchaAction) {
  if (!siteKey) return Promise.resolve("");

  return new Promise<string>((resolve, reject) => {
    const recaptcha = window.grecaptcha;

    if (!recaptcha?.ready || !recaptcha.execute) {
      reject(new Error("reCAPTCHA is not ready."));
      return;
    }

    recaptcha.ready(() => {
      recaptcha.execute(siteKey, { action }).then(resolve).catch(reject);
    });
  });
}