"use client";

import { Button } from "@/components/Button";
import {
  contactFormContent,
  getContactInterestOptions,
} from "@/lib/content";
import { contactSchema, type ContactFormValues } from "@/lib/validation";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { ZodError } from "zod";

type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;

export function ContactForm() {
  const searchParams = useSearchParams();
  const presetInterest = searchParams.get("interest");

  const interestOptions = useMemo(() => getContactInterestOptions(), []);

  const [values, setValues] = useState<ContactFormValues>(() => ({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    interests:
      presetInterest &&
      interestOptions.some((o) => o.value === presetInterest)
        ? [presetInterest]
        : [],
    message: "",
  }));

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formError, setFormError] = useState("");

  function toggleInterest(value: string) {
    setValues((prev) => {
      const exists = prev.interests.includes(value);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((v) => v !== value)
          : [...prev.interests, value],
      };
    });
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFieldErrors({});
    setFormError("");
    setStatus("loading");

    try {
      const parsed = contactSchema.parse(values);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed),
      });
      const data = (await res.json()) as { error?: string; message?: string };
      if (!res.ok) {
        setStatus("error");
        setFormError(data.error ?? "Unable to send your message.");
        return;
      }
      setStatus("success");
      setValues({
        name: "",
        businessName: "",
        email: "",
        phone: "",
        interests: [],
        message: "",
      });
    } catch (err) {
      if (err instanceof ZodError) {
        setStatus("idle");
        const errors: FieldErrors = {};
        for (const issue of err.issues) {
          const key = issue.path[0] as keyof ContactFormValues;
          if (!errors[key]) errors[key] = issue.message;
        }
        setFieldErrors(errors);
        setFormError("Please fix the highlighted fields.");
      } else {
        setStatus("error");
        setFormError("Something went wrong. Please try again.");
      }
    }
  }

  const inputClass = "input-underline";

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-growth-green/30 bg-growth-green/10 p-8"
        role="status"
      >
        <p className="font-display text-xl font-semibold text-ink">
          Message sent
        </p>
        <p className="mt-2 text-ink/70">
          Thanks for reaching out. We&apos;ll get back to you soon.
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-6"
          href="/"
        >
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            className={`mt-2 ${inputClass}`}
            value={values.name}
            onChange={(e) =>
              setValues((v) => ({ ...v, name: e.target.value }))
            }
            autoComplete="name"
          />
          {fieldErrors.name ? (
            <p className="mt-1 text-sm text-signal-red">{fieldErrors.name}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="businessName" className="text-sm font-medium">
            Business name
          </label>
          <input
            id="businessName"
            name="businessName"
            className={`mt-2 ${inputClass}`}
            value={values.businessName}
            onChange={(e) =>
              setValues((v) => ({ ...v, businessName: e.target.value }))
            }
          />
          {fieldErrors.businessName ? (
            <p className="mt-1 text-sm text-signal-red">
              {fieldErrors.businessName}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={`mt-2 ${inputClass}`}
            value={values.email}
            onChange={(e) =>
              setValues((v) => ({ ...v, email: e.target.value }))
            }
            autoComplete="email"
          />
          {fieldErrors.email ? (
            <p className="mt-1 text-sm text-signal-red">{fieldErrors.email}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={`mt-2 ${inputClass}`}
            value={values.phone}
            onChange={(e) =>
              setValues((v) => ({ ...v, phone: e.target.value }))
            }
            autoComplete="tel"
          />
          {fieldErrors.phone ? (
            <p className="mt-1 text-sm text-signal-red">{fieldErrors.phone}</p>
          ) : null}
        </div>
      </div>

      <fieldset>
        <legend className="text-sm font-medium">
          What are you interested in?
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {interestOptions.map((option) => (
            <label
              key={option.value}
              className="flex cursor-pointer items-start gap-2 rounded-lg border border-ink/10 px-3 py-2 text-sm hover:border-adco-blue/40"
            >
              <input
                type="checkbox"
                className="mt-1"
                checked={values.interests.includes(option.value)}
                onChange={() => toggleInterest(option.value)}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
        {fieldErrors.interests ? (
          <p className="mt-2 text-sm text-signal-red">
            {fieldErrors.interests}
          </p>
        ) : null}
      </fieldset>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`mt-2 ${inputClass}`}
          value={values.message}
          onChange={(e) =>
            setValues((v) => ({ ...v, message: e.target.value }))
          }
        />
        {fieldErrors.message ? (
          <p className="mt-1 text-sm text-signal-red">{fieldErrors.message}</p>
        ) : null}
      </div>

      {formError ? (
        <p className="text-sm text-signal-red" role="alert">
          {formError}
        </p>
      ) : null}

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : contactFormContent.submitLabel}
      </Button>
    </form>
  );
}
