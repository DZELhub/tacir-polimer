
import {
  ArrowUpRight,
  Building2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import ContactForm from "./ContactForm";

const mapUrl =
  "https://www.google.com/maps/place/" +
  "/data=!4m2!3m1!1s" +
  "0x14caaf658890238b:" +
  "0xcf807711d44238da";

const contactDetails = [
  {
    label: "Address",
    value:
      "İkitelli O.S.B. Pik Dökümcüler " +
      "Sitesi B3 Blok No: 16/1, " +
      "34490 Başakşehir / İstanbul",
    href: mapUrl,
    icon: MapPin,
    action: "View on Google Maps",
    external: true,
  },
  {
    label: "Email",
    value: "info@tacirpolimer.com",
    href: "mailto:info@tacirpolimer.com",
    icon: Mail,
    action: "Send an Email",
    external: false,
  },
  {
    label: "Phone",
    value: "+90 212 485 44 85",
    href: "tel:+902124854485",
    icon: Phone,
    action: "Call Us",
    external: false,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className={[
        "scroll-mt-20 bg-white",
        "py-12 lg:py-20",
      ].join(" ")}
    >
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
            CONTACT US
          </p>

          <h2
            className={[
              "font-heading text-3xl",
              "font-bold tracking-tight",
              "text-brand sm:text-4xl",
            ].join(" ")}
          >
            Let&apos;s Connect
          </h2>

          <p
            className={[
              "mt-4 max-w-2xl",
              "text-sm leading-7",
              "text-charcoal/75",
              "sm:text-base",
            ].join(" ")}
          >
            Looking for polymer materials
            or interested in working with
            us? Get in touch to discuss
            your requirements.
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
                <Building2
                  size={21}
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3
                  className={[
                    "font-heading text-lg",
                    "font-bold text-brand",
                  ].join(" ")}
                >
                  Tacir Polimer
                </h3>

                <p
                  className={[
                    "mt-1 text-sm",
                    "text-charcoal/70",
                  ].join(" ")}
                >
                  Sanayi ve Ticaret A.Ş.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div
                    key={detail.label}
                    className="flex gap-3"
                  >
                    <div
                      className={[
                        "flex h-10 w-10",
                        "shrink-0 items-center",
                        "justify-center",
                        "rounded-lg bg-sage",
                        "text-brand",
                      ].join(" ")}
                    >
                      <Icon
                        size={19}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="min-w-0">
                      <p
                        className={[
                          "text-xs font-semibold",
                          "uppercase tracking-wider",
                          "text-brand",
                        ].join(" ")}
                      >
                        {detail.label}
                      </p>

                      <p
                        className={[
                          "mt-1 max-w-sm",
                          "text-sm leading-6",
                          "text-charcoal/75",
                        ].join(" ")}
                      >
                        {detail.value}
                      </p>

                      <a
                        href={detail.href}
                        target={
                          detail.external
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          detail.external
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className={[
                          "mt-2 inline-flex",
                          "items-center gap-1",
                          "text-xs font-semibold",
                          "text-forest",
                          "hover:underline",
                          "underline-offset-4",
                        ].join(" ")}
                      >
                        {detail.action}

                        <ArrowUpRight
                          size={14}
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
