"use client";

import Script from "next/script";
import { useRouter } from "next/navigation";
import { useState, useTransition, type FormEvent, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { submitFreeHeadshotsLead, type FreeHeadshotsFieldErrors } from "@/app/actions/free-headshots";
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

type FreeHeadshotsOfferDialogProps = {
  children?: ReactNode;
  triggerClassName?: string;
  srSuffix?: string;
  showIcon?: boolean;
  recaptchaSiteKey?: string;
};

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  brokerage: string;
};

type FieldErrors = FreeHeadshotsFieldErrors;

const INITIAL_VALUES: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  brokerage: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function FreeHeadshotsOfferDialog({
  children = "Claim Complimentary Headshot",
  triggerClassName = "btn btn-primary",
  srSuffix = " to claim a complimentary realtor headshot offer",
  showIcon = true,
  recaptchaSiteKey,
}: FreeHeadshotsOfferDialogProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isVerifyingRecaptcha, setIsVerifyingRecaptcha] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isPending, startTransition] = useTransition();
  const isSubmitting = isPending || isVerifyingRecaptcha;

  function openDialog() {
    setValues(INITIAL_VALUES);
    setErrors({});
    setStatusMessage("");
    setOpen(true);
  }

  function closeDialog() {
    setOpen(false);
  }

  function updateField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function validate(nextValues: FormValues): FieldErrors {
    const nextErrors: FieldErrors = {};

    if (nextValues.firstName.trim().length < 2) nextErrors.firstName = "Please enter your first name.";
    if (nextValues.lastName.trim().length < 2) nextErrors.lastName = "Please enter your last name.";
    if (!EMAIL_RE.test(nextValues.email.trim())) nextErrors.email = "Please enter a valid email address.";
    if (nextValues.phone.trim().length < 7) nextErrors.phone = "Please enter your phone number.";
    if (nextValues.brokerage.trim().length < 2) nextErrors.brokerage = "Please enter your brokerage.";

    return nextErrors;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setStatusMessage("");

    if (Object.keys(nextErrors).length > 0) return;

    let recaptchaToken = "";
    if (recaptchaSiteKey) {
      try {
        setIsVerifyingRecaptcha(true);
        recaptchaToken = await getRecaptchaToken(recaptchaSiteKey, "free_headshots");
      } catch {
        setErrors((current) => ({ ...current, recaptchaToken: "We couldn’t verify this submission. Please try again." }));
        setIsVerifyingRecaptcha(false);
        return;
      }
      setIsVerifyingRecaptcha(false);
    }

    startTransition(async () => {
      const result = await submitFreeHeadshotsLead({ ...values, recaptchaToken });

      if (result.ok) {
        setValues(INITIAL_VALUES);
        setErrors({});
        setStatusMessage("");
        closeDialog();
        router.push("/lp/free-headshots/fh-success");
        return;
      }

      setStatusMessage(result.message);
      setErrors(result.fieldErrors ?? {});
    });
  }

  return (
    <>
      <button type="button" className={triggerClassName} onClick={openDialog}>
        {children}
        <span className="sr-only">{srSuffix}</span>
        {showIcon ? <ArrowRight size={16} aria-hidden="true" /> : null}
      </button>

      <Dialog
        open={open}
        onOpenChange={(nextOpen) => {
          setOpen(nextOpen);
          if (!nextOpen) {
            setErrors({});
            setStatusMessage("");
          }
        }}
      >
        <DialogContent className="free-headshots-dialog max-w-[calc(100%-2rem)] gap-0 p-0 sm:max-w-[720px]">
          <>
            <DialogHeader className="free-headshots-dialog-header">
              <span className="section-label">Complimentary Offer</span>
              <DialogTitle className="free-headshots-dialog-title">
                Claim Your Complimentary Realtor Headshot
              </DialogTitle>
              <DialogDescription className="free-headshots-dialog-description">
                Submit your information below and we&rsquo;ll save your complimentary
                headshot offer for your future listing booking.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={onSubmit} noValidate className="contact-form free-headshots-dialog-form">
              <div className="contact-form-grid">
                <div className="contact-form-group">
                  <Label htmlFor="free-headshots-first-name" className="contact-form-label">
                    First Name<span className="contact-form-required">*</span>
                  </Label>
                  <Input
                    id="free-headshots-first-name"
                    autoComplete="given-name"
                    value={values.firstName}
                    onChange={(event) => updateField("firstName", event.target.value)}
                    aria-invalid={!!errors.firstName}
                    className="contact-form-control"
                  />
                  {errors.firstName ? <p className="contact-form-error">{errors.firstName}</p> : null}
                </div>

                <div className="contact-form-group">
                  <Label htmlFor="free-headshots-last-name" className="contact-form-label">
                    Last Name<span className="contact-form-required">*</span>
                  </Label>
                  <Input
                    id="free-headshots-last-name"
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
                  <Label htmlFor="free-headshots-email" className="contact-form-label">
                    Email<span className="contact-form-required">*</span>
                  </Label>
                  <Input
                    id="free-headshots-email"
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
                  <Label htmlFor="free-headshots-phone" className="contact-form-label">
                    Phone Number<span className="contact-form-required">*</span>
                  </Label>
                  <Input
                    id="free-headshots-phone"
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

              <div className="contact-form-group">
                <Label htmlFor="free-headshots-brokerage" className="contact-form-label">
                  Brokerage<span className="contact-form-required">*</span>
                </Label>
                <Input
                  id="free-headshots-brokerage"
                  autoComplete="organization"
                  value={values.brokerage}
                  onChange={(event) => updateField("brokerage", event.target.value)}
                  aria-invalid={!!errors.brokerage}
                  className="contact-form-control"
                />
                {errors.brokerage ? <p className="contact-form-error">{errors.brokerage}</p> : null}
              </div>

              <p className="free-headshots-form-note">
                No upcoming listing? No problem. We&rsquo;ll keep your request on
                file until you&rsquo;re ready to book.
              </p>

              {recaptchaSiteKey ? <Script src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`} strategy="afterInteractive" /> : null}
              {errors.recaptchaToken ? (
                <div className="contact-form-recaptcha-wrap free-headshots-recaptcha-wrap">
                  <p className="contact-form-error">{errors.recaptchaToken}</p>
                </div>
              ) : null}

              {statusMessage ? <p className="contact-form-error">{statusMessage}</p> : null}

              <div className="free-headshots-dialog-actions">
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? "Sending…" : "Submit Request"}
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            </form>
          </>
        </DialogContent>
      </Dialog>
    </>
  );
}