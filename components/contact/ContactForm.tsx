"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/lib/site";
import { submitContact } from "@/app/actions/contact";

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "service" | "message" | "consent", string>>;

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  consent: false,
};

export function ContactForm() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isPending, startTransition] = useTransition();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    startTransition(async () => {
      const result = await submitContact(values);
      if (result.ok) {
        toast.success(result.message);
        setValues(INITIAL);
      } else {
        toast.error(result.message);
        setErrors(result.fieldErrors ?? {});
      }
    });
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-2">
        <Label htmlFor="contact-name">Full name</Label>
        <Input
          id="contact-name"
          name="name"
          autoComplete="name"
          required
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          aria-invalid={!!errors.name}
          className="h-11"
        />
        {errors.name ? (
          <p className="text-sm text-destructive">{errors.name}</p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            aria-invalid={!!errors.email}
            className="h-11"
          />
          {errors.email ? (
            <p className="text-sm text-destructive">{errors.email}</p>
          ) : null}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="contact-phone">Phone (optional)</Label>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
            className="h-11"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact-service">What are you interested in?</Label>
        <Select
          value={values.service}
          onValueChange={(v) => setValues((prev) => ({ ...prev, service: String(v ?? "") }))}
        >
          <SelectTrigger id="contact-service" className="h-11 w-full">
            <SelectValue placeholder="Select a service (optional)" />
          </SelectTrigger>
          <SelectContent>
            {services.map((s) => (
              <SelectItem key={s.slug} value={s.slug}>
                {s.name}
              </SelectItem>
            ))}
            <SelectItem value="bundle">Bundle / multiple services</SelectItem>
            <SelectItem value="other">Something else</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          placeholder="Listing address, timeline, and anything else we should know."
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          aria-invalid={!!errors.message}
          className="min-h-32"
        />
        {errors.message ? (
          <p className="text-sm text-destructive">{errors.message}</p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="contact-consent" className="items-start gap-2.5">
          <Checkbox
            id="contact-consent"
            checked={values.consent}
            onCheckedChange={(checked) =>
              setValues((v) => ({ ...v, consent: checked === true }))
            }
            aria-invalid={!!errors.consent}
            className="mt-0.5"
          />
          <span className="text-sm text-[var(--text-muted)] leading-snug">
            I agree to be contacted about my enquiry. We never share your
            details.
          </span>
        </Label>
        {errors.consent ? (
          <p className="text-sm text-destructive">{errors.consent}</p>
        ) : null}
      </div>

      <div className="pt-2">
        <Button type="submit" size="lg" disabled={isPending} className="h-11 px-6 bg-[var(--brick)] text-white hover:bg-[var(--brick-dark)] [a]:hover:bg-[var(--brick-dark)]">
          {isPending ? "Sending…" : "Send message"}
          <ArrowRight className="ml-1" data-icon="inline-end" />
        </Button>
      </div>
    </form>
  );
}
