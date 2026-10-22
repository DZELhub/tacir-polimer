"use client";
import { useTranslations } from "next-intl";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

type Status = "idle" | "success" | "error";
type Feedback =
  "invalid" | "unavailable" | "rateLimited" | "failed" | "success" | null;

export default function ContactForm() {
  const t = useTranslations("ContactForm");
  const common = useTranslations("Common");

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

  const [pending, setPending] = useState(false);

  const [status, setStatus] = useState<Status>("idle");

  const [feedback, setFeedback] = useState<Feedback>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (pending) return;

    const form = event.currentTarget;
    const data = new FormData(form);

    if (!form.checkValidity()) {
      setStatus("error");
      setFeedback("invalid");
      form.querySelector<HTMLElement>(":invalid")?.focus();
      return;
    }
    setPending(true);
    setStatus("idle");
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus("error");
        setFeedback(
          response.status === 503
            ? "unavailable"
            : response.status === 429
              ? "rateLimited"
              : response.status === 400
                ? "invalid"
                : "failed",
        );
        return;
      }

      if (result.success !== true) throw new Error(common("failed"));
      setStatus("success");
      setFeedback("success");

      form.reset();
    } catch {
      setStatus("error");
      setFeedback("failed");
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
        className={["font-heading text-xl", "font-bold text-brand"].join(" ")}
      >
        {t("send_an_inquiry")}
      </h3>

      <p className={["mt-2 text-sm leading-6", "text-charcoal/70"].join(" ")}>
        {t("tell_us_what_youre_looking_for_and")}
      </p>

      <form
        noValidate
        aria-describedby={status !== "idle" ? "contact-feedback" : undefined}
        aria-busy={pending}
        onSubmit={handleSubmit}
        className="mt-6 space-y-4"
      >
        <div
          className={[
            "absolute -left-[9999px]",
            "h-px w-px overflow-hidden",
          ].join(" ")}
          aria-hidden="true"
        >
          <label htmlFor="contact-website">{t("website")}</label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className={["grid gap-4", "sm:grid-cols-2"].join(" ")}>
          <div>
            <label
              htmlFor="contact-name"
              className={[
                "mb-2 block text-xs",
                "font-semibold text-brand",
              ].join(" ")}
            >
              {t("full_name")}
            </label>

            <input
              id="contact-name"
              name="name"
              type="text"
              required
              minLength={2}
              maxLength={100}
              autoComplete="name"
              placeholder={t("your_name")}
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
              {t("email_address")}
            </label>

            <input
              id="contact-email"
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              placeholder={t("youcompanycom")}
              className={inputClassName}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-company"
            className={["mb-2 block text-xs", "font-semibold text-brand"].join(
              " ",
            )}
          >
            {t("company")}
          </label>

          <input
            id="contact-company"
            name="company"
            type="text"
            maxLength={150}
            autoComplete="organization"
            placeholder={t("company_name")}
            className={inputClassName}
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className={["mb-2 block text-xs", "font-semibold text-brand"].join(
              " ",
            )}
          >
            {t("your_message")}
          </label>

          <textarea
            id="contact-message"
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={5}
            placeholder={t("tell_us_about_your_material_requirements")}
            className={[inputClassName, "resize-y"].join(" ")}
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
          {pending ? t("sending") : t("send_inquiry")}

          <Send size={16} aria-hidden="true" />
        </button>

        {status !== "idle" && (
          <p
            id="contact-feedback"
            role={status === "error" ? "alert" : "status"}
            className={[
              "text-sm leading-6",
              status === "success" ? "text-forest" : "text-red-700",
            ].join(" ")}
          >
            {feedback === "success"
              ? t("your_inquiry_has_been_submitted_successfully")
              : feedback
                ? common(feedback)
                : null}
          </p>
        )}
      </form>
    </div>
  );
}
