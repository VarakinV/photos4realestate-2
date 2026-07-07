"use client";

import Script from "next/script";
import { useRouter } from "next/navigation";
import { useState, useTransition, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { submitWheelLead, type WheelFieldErrors } from "@/app/actions/wheel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getRecaptchaToken } from "@/lib/recaptcha-client";

interface PrizeModalProps {
  open: boolean;
  prize: string;
  onClose: () => void;
  recaptchaSiteKey?: string;
}

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_VALUES: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

export function PrizeModal({ open, prize, onClose, recaptchaSiteKey }: PrizeModalProps) {
  const router = useRouter();
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<WheelFieldErrors>({});
  const [statusMessage, setStatusMessage] = useState("");
  const [isVerifyingRecaptcha, setIsVerifyingRecaptcha] = useState(false);
  const [isPending, startTransition] = useTransition();
  const isSubmitting = isPending || isVerifyingRecaptcha;

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function validate(v: FormValues): Partial<FormValues & { prize: string }> {
    const e: Partial<FormValues & { prize: string }> = {};
    if (v.firstName.trim().length < 2) e.firstName = "Please enter your first name.";
    if (v.lastName.trim().length < 2) e.lastName = "Please enter your last name.";
    if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email address.";
    if (v.phone.trim().length < 7) e.phone = "Please enter your phone number.";
    return e;
  }

  function resetAndClose() {
    setValues(INITIAL_VALUES);
    setErrors({});
    setStatusMessage("");
    onClose();
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setStatusMessage("");
    if (Object.keys(nextErrors).length > 0) return;

    startTransition(async () => {
      let recaptchaToken = "";
      if (recaptchaSiteKey) {
        try {
          setIsVerifyingRecaptcha(true);
          recaptchaToken = await getRecaptchaToken(recaptchaSiteKey, "wheel_spin");
        } catch {
          setErrors({ recaptchaToken: "We couldn’t verify this submission. Please try again." });
          setIsVerifyingRecaptcha(false);
          return;
        }
        setIsVerifyingRecaptcha(false);
      }

      const result = await submitWheelLead({ ...values, prize, recaptchaToken });

      if (result.ok) {
        setValues(INITIAL_VALUES);
        setErrors({});
        setStatusMessage("");
        onClose();
        router.push("/lp/wheel/success?prize=" + encodeURIComponent(prize));
        return;
      }

      setStatusMessage(result.message);
      setErrors(result.fieldErrors ?? {});
    });
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) resetAndClose();
      }}
    >
      <DialogContent className="wheel-prize-dialog max-w-[calc(100%-2rem)] gap-0 p-0 sm:max-w-[480px]">
        <DialogHeader className="wheel-prize-dialog-header">
          <span className="section-label">Congratulations!</span>
          <DialogTitle className="wheel-prize-dialog-title">
            You Won &ldquo;{prize}&rdquo;
          </DialogTitle>
          <DialogDescription className="wheel-prize-dialog-description">
            Fill in your details below to claim your prize.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} noValidate className="contact-form wheel-prize-form">
          <div className="contact-form-grid">
            <div className="contact-form-group">
              <Label htmlFor="wheel-first-name" className="contact-form-label">
                First Name<span className="contact-form-required">*</span>
              </Label>
              <Input
                id="wheel-first-name"
                autoComplete="given-name"
                value={values.firstName}
                onChange={(event) => updateField("firstName", event.target.value)}
                aria-invalid={!!errors.firstName}
                className="contact-form-control"
              />
              {errors.firstName ? <p className="contact-form-error">{errors.firstName}</p> : null}
            </div>
            <div className="contact-form-group">
              <Label htmlFor="wheel-last-name" className="contact-form-label">
                Last Name<span className="contact-form-required">*</span>
              </Label>
              <Input
                id="wheel-last-name"
                autoComplete="family-name"
                value={values.lastName}
                onChange={(event) => updateField("lastName", event.target.value)}
                aria-invalid={!!errors.lastName}
                className="contact-form-control"
              />
              {errors.lastName ? <p className="contact-form-error">{errors.lastName}</p> : null}
            </div>
          </div>

          <div className="contact-form-grid">
            <div className="contact-form-group">
              <Label htmlFor="wheel-email" className="contact-form-label">
                Email<span className="contact-form-required">*</span>
              </Label>
              <Input
                id="wheel-email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(event) => updateField("email", event.target.value)}
                aria-invalid={!!errors.email}
                className="contact-form-control"
              />
              {errors.email ? <p className="contact-form-error">{errors.email}</p> : null}
            </div>
            <div className="contact-form-group">
              <Label htmlFor="wheel-phone" className="contact-form-label">
                Phone<span className="contact-form-required">*</span>
              </Label>
              <Input
                id="wheel-phone"
                type="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                aria-invalid={!!errors.phone}
                className="contact-form-control"
              />
              {errors.phone ? <p className="contact-form-error">{errors.phone}</p> : null}
            </div>
          </div>

          {recaptchaSiteKey ? (
            <Script
              src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
              strategy="afterInteractive"
            />
          ) : null}

          {errors.recaptchaToken ? <p className="contact-form-error">{errors.recaptchaToken}</p> : null}

          {statusMessage ? <p className="contact-form-error">{statusMessage}</p> : null}

          <div className="wheel-prize-dialog-actions">
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Claiming..." : "Claim My Prize"}
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
