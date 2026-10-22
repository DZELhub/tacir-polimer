import { useTranslations } from "next-intl";
import { Building2 } from "lucide-react";
import { company, contactDetails } from "@/data";
import ContactDetail from "./ContactDetail";
import ContactForm from "./ContactForm";

export default function ContactContent() {
  const t = useTranslations("Contact");
  return (
    <section id="contact" className={["bg-white", "py-12 lg:py-20"].join(" ")}>
      <div className="container-custom">
        <div className="mb-8 lg:mb-12">
          <p
            className={[
              "mb-3 text-[11px]",
              "font-semibold uppercase",
              "tracking-[0.18em]",
              "text-forest",
            ].join(" ")}
          >
            {t("contact_us")}
          </p>

          <h2
            className={[
              "font-heading text-3xl",
              "font-bold tracking-tight",
              "text-brand sm:text-4xl",
            ].join(" ")}
          >
            {t("lets_connect")}
          </h2>

          <p
            className={[
              "mt-4 max-w-2xl",
              "text-sm leading-7",
              "text-charcoal/75",
              "sm:text-base",
            ].join(" ")}
          >
            {t("looking_for_polymer_materials_or_interested_in")}
          </p>
        </div>

        <div
          className={[
            "grid gap-8",
            "lg:grid-cols-[0.9fr_1.1fr]",
            "lg:gap-14",
          ].join(" ")}
        >
          <div>
            <div
              className={[
                "mb-7 flex items-start",
                "gap-3 border-b",
                "border-brand/10 pb-6",
              ].join(" ")}
            >
              <div
                className={[
                  "flex h-11 w-11",
                  "shrink-0 items-center",
                  "justify-center",
                  "rounded-lg bg-sage",
                  "text-brand",
                ].join(" ")}
              >
                <Building2 size={21} strokeWidth={1.6} aria-hidden="true" />
              </div>

              <div>
                <h3
                  className={[
                    "font-heading text-lg",
                    "font-bold text-brand",
                  ].join(" ")}
                >
                  {company.name}
                </h3>

                <p className={["mt-1 text-sm", "text-charcoal/70"].join(" ")}>
                  {company.legalSuffix}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {contactDetails.map((detail) => (
                <ContactDetail key={detail.labelKey} detail={detail} />
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
