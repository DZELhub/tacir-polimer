
"use client";

import {
  useState,
  type FormEvent,
} from "react";
import { Send } from "lucide-react";

type Status = "idle" | "success" | "error";

const inputClassName = [
  "w-full rounded-md",
  "border border-brand/15",
  "bg-white px-4 py-3",
  "text-sm text-charcoal",
  "outline-none transition-colors",
  "placeholder:text-charcoal/40",
  "focus:border-forest",
  "focus:ring-2",
  "focus:ring-forest/10",
].join(" ");

export default function ContactForm() {
  const [pending, setPending] =
    useState(false);

  const [status, setStatus] =
    useState<Status>("idle");

  const [feedback, setFeedback] =
    useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (pending) return;

    const form = event.currentTarget;
    const data = new FormData(form);

    setPending(true);
    setStatus("idle");
    setFeedback("");

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            name: data.get("name"),
            email: data.get("email"),
            company: data.get("company"),
            message: data.get("message"),
            website: data.get("website"),
          }),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
            "Unable to send your message.",
        );
      }

      setStatus("success");
      setFeedback(
        "Your inquiry has been " +
          "submitted successfully.",
      );

      form.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong.",
      );
    } finally {
      setPending(false);
    }
  }

  return (
    <div
      className={[
        "rounded-xl border",
        "border-brand/10",
        "bg-surface p-5",
        "sm:p-7 lg:p-8",
      ].join(" ")}
    >
      <h3
        className={[
          "font-heading text-xl",
          "font-bold text-brand",
        ].join(" ")}
      >
        Send an Inquiry
      </h3>

      <p
        className={[
          "mt-2 text-sm leading-6",
          "text-charcoal/70",
        ].join(" ")}
      >
        Tell us what you&apos;re looking
        for and we&apos;ll be happy to
        hear from you.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 space-y-4"
      >
        <div
          className={[
            "absolute left-[9999px]",
            "h-px w-px overflow-hidden",
          ].join(" ")}
          aria-hidden="true"
        >
          <label htmlFor="contact-website">
            Website
          </label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div
          className={[
            "grid gap-4",
            "sm:grid-cols-2",
          ].join(" ")}
        >
          <div>
            <label
              htmlFor="contact-name"
              className={[
                "mb-2 block text-xs",
                "font-semibold text-brand",
              ].join(" ")}
            >
              Full Name *
            </label>

            <input
              id="contact-name"
              name="name"
              type="text"
              required
              minLength={2}
              maxLength={100}
              autoComplete="name"
              placeholder="Your name"
              className={inputClassName}
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className={[
                "mb-2 block text-xs",
                "font-semibold text-brand",
              ].join(" ")}
            >
              Email Address *
            </label>

            <input
              id="contact-email"
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              placeholder="you@company.com"
              className={inputClassName}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-company"
            className={[
              "mb-2 block text-xs",
              "font-semibold text-brand",
            ].join(" ")}
          >
            Company
          </label>

          <input
            id="contact-company"
            name="company"
            type="text"
            maxLength={150}
            autoComplete="organization"
            placeholder="Company name"
            className={inputClassName}
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className={[
              "mb-2 block text-xs",
              "font-semibold text-brand",
            ].join(" ")}
          >
            Your Message *
          </label>

          <textarea
            id="contact-message"
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={5}
            placeholder={
              "Tell us about your " +
              "material requirements..."
            }
            className={[
              inputClassName,
              "resize-y",
            ].join(" ")}
          />
        </div>

        <button
          type="submit"
          disabled={pending}
          className={[
            "inline-flex items-center",
            "justify-center gap-2",
            "rounded-md bg-brand",
            "px-5 py-3",
            "text-sm font-semibold",
            "text-white",
            "transition-colors",
            "hover:bg-forest",
            "disabled:cursor-not-allowed",
            "disabled:opacity-60",
          ].join(" ")}
        >
          {pending
            ? "Sending..."
            : "Send Inquiry"}

          <Send
            size={16}
            aria-hidden="true"
          />
        </button>

        {status !== "idle" && (
          <p
            role={
              status === "error"
                ? "alert"
                : "status"
            }
            className={[
              "text-sm leading-6",
              status === "success"
                ? "text-forest"
                : "text-red-700",
            ].join(" ")}
          >
            {feedback}
          </p>
        )}
      </form>
    </div>
  );
}
