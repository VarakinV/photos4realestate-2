"use client";

import Script from "next/script";
import type { HTMLAttributes, ReactNode } from "react";
import { useEffect, useId, useRef, useState, useTransition } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, X } from "lucide-react";
import { toast } from "sonner";
import { submitHotelProject } from "@/app/actions/hotel-project";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getRecaptchaToken } from "@/lib/recaptcha-client";
import {
  hotelDecisionOptions,
  hotelPackageOptions,
  hotelPhotographyNeedOptions,
  hotelTimelineOptions,
  isHotelOption,
  type HotelProjectField,
  type HotelProjectFieldErrors,
  type HotelProjectInput,
} from "@/lib/hotel-project-form";

type HotelProjectDialogProps = {
  children?: ReactNode;
  triggerClassName?: string;
  srSuffix?: string;
  initialPackageInterest?: string;
  showIcon?: boolean;
  recaptchaSiteKey?: string;
  onOpen?: () => void;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let hasRegisteredBackForwardReload = false;

function createInitialValues(initialPackageInterest = ""): HotelProjectInput {
  return {
    propertyName: "",
    roomCount: "",
    cityLocation: "",
    needs: [],
    twilightPhotography: "",
    videography: "",
    timeline: "",
    packageInterest: initialPackageInterest,
    fullName: "",
    email: "",
    phone: "",
    notes: "",
  };
}

export function HotelProjectDialog({
  children = "Start Your Project",
  triggerClassName = "btn btn-primary hotel-project-trigger",
  srSuffix = " for hotel photography in Calgary and Alberta",
  initialPackageInterest = "",
  showIcon = true,
  recaptchaSiteKey,
  onOpen,
}: HotelProjectDialogProps) {
  const titleId = useId();
  const descriptionId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState<HotelProjectInput>(() => createInitialValues(initialPackageInterest));
  const [errors, setErrors] = useState<HotelProjectFieldErrors>({});
  const [isVerifyingRecaptcha, setIsVerifyingRecaptcha] = useState(false);
  const [isPending, startTransition] = useTransition();
  const isSubmitting = isPending || isVerifyingRecaptcha;

  useEffect(() => {
    if (hasRegisteredBackForwardReload) return;

    hasRegisteredBackForwardReload = true;

    const wasRestoredFromHistory = () => {
      const navigationEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
      return navigationEntry?.type === "back_forward";
    };

    function onPageShow(event: PageTransitionEvent) {
      if (event.persisted || wasRestoredFromHistory()) window.location.reload();
    }

    if (wasRestoredFromHistory()) window.location.reload();

    window.addEventListener("pageshow", onPageShow);
    return () => {
      window.removeEventListener("pageshow", onPageShow);
      hasRegisteredBackForwardReload = false;
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => dialogRef.current?.focus(), 0);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeDialog();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function openDialog() {
    onOpen?.();
    setSubmitted(false);
    setErrors({});
    setValues((current) => ({
      ...current,
      packageInterest: initialPackageInterest || current.packageInterest,
    }));
    setOpen(true);
  }

  function closeDialog() {
    setOpen(false);
    window.setTimeout(() => triggerRef.current?.focus({ preventScroll: true }), 0);
  }

  function updateField(field: HotelProjectField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    clearError(field);
  }

  function toggleNeed(need: string) {
    setValues((current) => ({
      ...current,
      needs: current.needs.includes(need)
        ? current.needs.filter((item) => item !== need)
        : [...current.needs, need],
    }));
    clearError("needs");
  }

  function clearError(field: HotelProjectField) {
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function validateForm() {
    const nextErrors: HotelProjectFieldErrors = {};
    const trimmed = {
      ...values,
      propertyName: values.propertyName.trim(),
      roomCount: values.roomCount.trim(),
      cityLocation: values.cityLocation.trim(),
      fullName: values.fullName.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      notes: values.notes.trim(),
    };

    if (trimmed.propertyName.length < 2) nextErrors.propertyName = "Please enter the property name.";
    if (trimmed.roomCount.length < 1) nextErrors.roomCount = "Please enter the number of rooms or suites.";
    if (trimmed.cityLocation.length < 2) nextErrors.cityLocation = "Please enter the city or location.";
    if (trimmed.needs.length === 0) nextErrors.needs = "Please select at least one area to photograph.";
    if (!isHotelOption(trimmed.twilightPhotography, hotelDecisionOptions)) nextErrors.twilightPhotography = "Please choose an option.";
    if (!isHotelOption(trimmed.videography, hotelDecisionOptions)) nextErrors.videography = "Please choose an option.";
    if (!isHotelOption(trimmed.timeline, hotelTimelineOptions)) nextErrors.timeline = "Please choose a timeline.";
    if (!isHotelOption(trimmed.packageInterest, hotelPackageOptions)) nextErrors.packageInterest = "Please choose a package option.";
    if (trimmed.fullName.length < 2) nextErrors.fullName = "Please enter your full name.";
    if (!EMAIL_RE.test(trimmed.email)) nextErrors.email = "Please enter a valid email address.";
    if (trimmed.phone.replace(/\D/g, "").length < 7) nextErrors.phone = "Please enter a valid phone number.";
    if (trimmed.notes.length > 1500) nextErrors.notes = "Please keep this under 1,500 characters.";

    return { trimmed, nextErrors };
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { trimmed, nextErrors } = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      toast.error("Please correct the highlighted fields and try again.");
      return;
    }

    let recaptchaToken = "";
    if (recaptchaSiteKey) {
      try {
        setIsVerifyingRecaptcha(true);
        recaptchaToken = await getRecaptchaToken(recaptchaSiteKey, "hotel_project");
      } catch {
        const message = "We couldn’t verify this submission. Please try again.";
        toast.error(message);
        setErrors((current) => ({ ...current, recaptchaToken: message }));
        setIsVerifyingRecaptcha(false);
        return;
      }
      setIsVerifyingRecaptcha(false);
    }

    startTransition(async () => {
      const result = await submitHotelProject({ ...trimmed, recaptchaToken });
      if (result.ok) {
        toast.success(result.message);
        setSubmitted(true);
        setValues(createInitialValues(initialPackageInterest));
        setErrors({});
      } else {
        toast.error(result.message);
        setErrors(result.fieldErrors ?? {});
      }
    });
  }

  return (
    <>
      <button ref={triggerRef} type="button" className={triggerClassName} onClick={openDialog}>
        {children}
        <span className="sr-only">{srSuffix}</span>
        {showIcon ? <ArrowRight size={16} aria-hidden="true" /> : null}
      </button>

      {open && typeof document !== "undefined"
        ? createPortal(
            <div className="hotel-project-modal" role="presentation">
              <div className="hotel-project-overlay" onClick={closeDialog} />
              <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                aria-describedby={descriptionId}
                className="hotel-project-dialog"
                tabIndex={-1}
              >
                <button type="button" className="hotel-project-close" onClick={closeDialog} aria-label="Close Start Your Project form">
                  <X size={20} aria-hidden="true" />
                </button>

                <div className="hotel-project-header">
                  <span className="section-label">Hotel Photography</span>
                  <h2 id={titleId}>Start Your Project</h2>
                  <p id={descriptionId}>Tell us about your property, timeline, and media needs. We&rsquo;ll follow up with next steps and a tailored quote.</p>
                </div>

                {submitted ? (
                  <div className="hotel-project-success" role="status">
                    <h3>Thanks — your request was sent.</h3>
                    <p>We emailed you a confirmation and sent your project details to our team. We&rsquo;ll be in touch shortly.</p>
                    <button type="button" className="btn btn-primary hotel-project-trigger" onClick={closeDialog}>
                      Close
                    </button>
                  </div>
                ) : (
                  <form className="hotel-project-form" onSubmit={onSubmit} noValidate>
                    {recaptchaSiteKey ? <Script src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`} strategy="afterInteractive" /> : null}
                <fieldset className="hotel-project-fieldset">
                  <legend>Section 1 — About the Property</legend>
                  <div className="hotel-project-grid">
                    <FormInput id="hotel-property-name" label="Property name" value={values.propertyName} error={errors.propertyName} onChange={(value) => updateField("propertyName", value)} autoComplete="organization" />
                    <FormInput id="hotel-room-count" label="Number of rooms / suites" value={values.roomCount} error={errors.roomCount} onChange={(value) => updateField("roomCount", value)} inputMode="numeric" />
                    <FormInput id="hotel-city-location" label="City / location" value={values.cityLocation} error={errors.cityLocation} onChange={(value) => updateField("cityLocation", value)} autoComplete="address-level2" />
                  </div>
                </fieldset>

                <fieldset className="hotel-project-fieldset">
                  <legend>Section 2 — About the Project</legend>
                  <ChoiceGroup legend="What needs to be photographed?" error={errors.needs}>
                    <div className="hotel-project-choice-grid">
                      {hotelPhotographyNeedOptions.map((need) => (
                        <label className="hotel-project-choice" key={need}>
                          <input type="checkbox" value={need} checked={values.needs.includes(need)} onChange={() => toggleNeed(need)} />
                          <span>{need}</span>
                        </label>
                      ))}
                    </div>
                  </ChoiceGroup>
                  <RadioGroup label="Do you need Twilight photography?" name="hotel-twilight" value={values.twilightPhotography} options={hotelDecisionOptions} error={errors.twilightPhotography} onChange={(value) => updateField("twilightPhotography", value)} />
                  <RadioGroup label="Do you need videography?" name="hotel-video" value={values.videography} options={hotelDecisionOptions} error={errors.videography} onChange={(value) => updateField("videography", value)} />
                </fieldset>

                <fieldset className="hotel-project-fieldset">
                  <legend>Section 3 — Timeline &amp; Budget</legend>
                  <RadioGroup label="Timeline" name="hotel-timeline" value={values.timeline} options={hotelTimelineOptions} error={errors.timeline} onChange={(value) => updateField("timeline", value)} />
                  <RadioGroup label="Package interest" name="hotel-package" value={values.packageInterest} options={hotelPackageOptions} error={errors.packageInterest} onChange={(value) => updateField("packageInterest", value)} />
                </fieldset>

                <fieldset className="hotel-project-fieldset">
                  <legend>Section 4 — Contact</legend>
                  <div className="hotel-project-grid">
                    <FormInput id="hotel-full-name" label="Full name" value={values.fullName} error={errors.fullName} onChange={(value) => updateField("fullName", value)} autoComplete="name" />
                    <FormInput id="hotel-email" label="Email" value={values.email} error={errors.email} onChange={(value) => updateField("email", value)} type="email" autoComplete="email" />
                    <FormInput id="hotel-phone" label="Phone" value={values.phone} error={errors.phone} onChange={(value) => updateField("phone", value)} type="tel" autoComplete="tel" />
                  </div>
                  <div className="contact-form-group">
                    <Label htmlFor="hotel-notes" className="contact-form-label">Anything else we should know?</Label>
                    <Textarea id="hotel-notes" rows={4} value={values.notes} onChange={(event) => updateField("notes", event.target.value)} aria-invalid={!!errors.notes} aria-describedby={errors.notes ? "hotel-notes-error" : undefined} className="contact-form-control" />
                    <FieldError id="hotel-notes-error" message={errors.notes} />
                  </div>
                </fieldset>

                {errors.recaptchaToken ? (
                  <div className="contact-form-recaptcha-wrap">
                    <FieldError id="hotel-recaptcha-error" message={errors.recaptchaToken} />
                  </div>
                ) : null}

                <div className="hotel-project-actions">
                  <button type="submit" className="btn btn-primary hotel-project-trigger" disabled={isSubmitting}>
                    {isSubmitting ? "Sending…" : "Send Project Request"}
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>
                  </form>
                )}
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

type FormInputProps = {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
};

function FormInput({ id, label, value, error, onChange, type = "text", autoComplete, inputMode }: FormInputProps) {
  return (
    <div className="contact-form-group">
      <Label htmlFor={id} className="contact-form-label">{label}<span className="contact-form-required">*</span></Label>
      <Input id={id} type={type} value={value} onChange={(event) => onChange(event.target.value)} required autoComplete={autoComplete} inputMode={inputMode} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : undefined} className="contact-form-control" />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}

function ChoiceGroup({ legend, error, children }: { legend: string; error?: string; children: ReactNode }) {
  return (
    <div className="hotel-project-choice-group">
      <p className="hotel-project-choice-title">{legend}<span className="contact-form-required">*</span></p>
      {children}
      <FieldError id="hotel-project-needs-error" message={error} />
    </div>
  );
}

function RadioGroup({
  label,
  name,
  value,
  options,
  error,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  options: readonly string[];
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="hotel-project-choice-group">
      <p className="hotel-project-choice-title">{label}<span className="contact-form-required">*</span></p>
      <div className="hotel-project-radio-row">
        {options.map((option) => (
          <label className="hotel-project-choice" key={option}>
            <input type="radio" name={name} value={option} checked={value === option} onChange={() => onChange(option)} />
            <span>{option}</span>
          </label>
        ))}
      </div>
      <FieldError id={`${name}-error`} message={error} />
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? <p id={id} className="contact-form-error">{message}</p> : null;
}