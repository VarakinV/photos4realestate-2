"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState, useTransition } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { submitContact } from "@/app/actions/contact";

type FieldErrors = Partial<Record<"firstName" | "lastName" | "email" | "phone" | "message" | "recaptchaToken", string>>;

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      render: (
        container: HTMLElement,
        parameters: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
          "error-callback": () => void;
          size?: "normal" | "compact";
        }
      ) => number;
      reset: (widgetId?: number) => void;
    };
  }
}

const INITIAL = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

type ContactFormProps = {
  recaptchaSiteKey?: string;
};

export function ContactForm({ recaptchaSiteKey }: ContactFormProps) {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [isPending, startTransition] = useTransition();
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const recaptchaWidgetId = useRef<number | null>(null);

  const resetRecaptcha = useCallback(() => {
    if (recaptchaWidgetId.current !== null && window.grecaptcha) {
      window.grecaptcha.reset(recaptchaWidgetId.current);
    }
    setRecaptchaToken("");
  }, []);

  const renderRecaptcha = useCallback(() => {
    if (!recaptchaSiteKey || !recaptchaRef.current || recaptchaWidgetId.current !== null || !window.grecaptcha) return;

    if (typeof window.grecaptcha.render !== "function") {
      window.grecaptcha.ready(() => {
        window.setTimeout(renderRecaptcha, 0);
      });
      return;
    }

    recaptchaWidgetId.current = window.grecaptcha.render(recaptchaRef.current, {
      sitekey: recaptchaSiteKey,
      callback: (token: string) => setRecaptchaToken(token),
      "expired-callback": () => setRecaptchaToken(""),
      "error-callback": () => setRecaptchaToken(""),
      size: window.matchMedia("(max-width: 420px)").matches ? "compact" : "normal",
    });
  }, [recaptchaSiteKey]);

  useEffect(() => {
    renderRecaptcha();
  }, [renderRecaptcha]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});

    if (recaptchaSiteKey && !recaptchaToken) {
      toast.error("Please complete the reCAPTCHA check.");
      setErrors({ recaptchaToken: "Please complete the reCAPTCHA check." });
      return;
    }

    startTransition(async () => {
      const result = await submitContact({ ...values, recaptchaToken });
      if (result.ok) {
        toast.success(result.message);
        setValues(INITIAL);
        resetRecaptcha();
      } else {
        toast.error(result.message);
        setErrors(result.fieldErrors ?? {});
        if (result.fieldErrors?.recaptchaToken) resetRecaptcha();
      }
    });
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Contact form" className="contact-form">
      <div className="contact-form-grid">
        <div className="contact-form-group">
          <Label htmlFor="contact-first-name" className="contact-form-label">
            First Name<span className="contact-form-required">*</span>
          </Label>
          <Input
            id="contact-first-name"
            name="firstName"
            autoComplete="given-name"
            required
            value={values.firstName}
            onChange={(e) => setValues((v) => ({ ...v, firstName: e.target.value }))}
            aria-invalid={!!errors.firstName}
            className="contact-form-control"
          />
          {errors.firstName ? <p className="contact-form-error">{errors.firstName}</p> : null}
        </div>
        <div className="contact-form-group">
          <Label htmlFor="contact-last-name" className="contact-form-label">
            Last Name<span className="contact-form-required">*</span>
          </Label>
          <Input
            id="contact-last-name"
            name="lastName"
            autoComplete="family-name"
            required
            value={values.lastName}
            onChange={(e) => setValues((v) => ({ ...v, lastName: e.target.value }))}
            aria-invalid={!!errors.lastName}
            className="contact-form-control"
          />
          {errors.lastName ? <p className="contact-form-error">{errors.lastName}</p> : null}
        </div>
      </div>

      <div className="contact-form-grid">
        <div className="contact-form-group">
          <Label htmlFor="contact-email" className="contact-form-label">
            Email<span className="contact-form-required">*</span>
          </Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            aria-invalid={!!errors.email}
            className="contact-form-control"
          />
          {errors.email ? <p className="contact-form-error">{errors.email}</p> : null}
        </div>
        <div className="contact-form-group">
          <Label htmlFor="contact-phone" className="contact-form-label">
            Phone
          </Label>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
            className="contact-form-control"
          />
        </div>
      </div>

      <div className="contact-form-group contact-form-group-span-2">
        <Label htmlFor="contact-message" className="contact-form-label">
          Message<span className="contact-form-required">*</span>
        </Label>
        <Textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          placeholder="Listing address, timeline, and anything else we should know."
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          aria-invalid={!!errors.message}
          className="contact-form-control"
        />
        {errors.message ? <p className="contact-form-error">{errors.message}</p> : null}
      </div>

      {recaptchaSiteKey ? (
        <div className="contact-form-recaptcha-wrap">
          <Script src="https://www.google.com/recaptcha/api.js?render=explicit" strategy="afterInteractive" onLoad={renderRecaptcha} />
          <div ref={recaptchaRef} className="contact-form-recaptcha" />
          {errors.recaptchaToken ? <p className="contact-form-error">{errors.recaptchaToken}</p> : null}
        </div>
      ) : null}

      <div className="contact-form-actions">
        <Button
          type="submit"
          size="lg"
          disabled={isPending}
          className="contact-form-submit bg-[var(--brick)] text-white hover:bg-[var(--brick-dark)] [a]:hover:bg-[var(--brick-dark)]"
        >
          {isPending ? "Sending…" : "Send Message"}
          <ArrowRight className="ml-1" data-icon="inline-end" />
        </Button>
      </div>
    </form>
  );
}
