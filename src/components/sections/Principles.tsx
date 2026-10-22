import { useTranslations } from "next-intl";
import { Handshake, Leaf, Recycle, ShieldCheck } from "lucide-react";

const principles = [
  { key: "environmental_awareness", icon: Leaf },
  { key: "circular_economy", icon: Recycle },
  { key: "responsible_sourcing", icon: ShieldCheck },
  { key: "business_integrity", icon: Handshake },
] as const;

export default function Principles() {
  const t = useTranslations("Principles");

  return (
    <section
      id="principles"
      aria-labelledby="principles-title"
      className="bg-white py-10 sm:py-14 lg:py-20"
    >
      <div className="container-custom">
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-16">
          <div className="border-l-2 border-forest pl-4 sm:pl-5">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-forest lg:text-xs">
              {t("eyebrow")}
            </p>
            <h2
              id="principles-title"
              className="max-w-xl font-heading text-[1.75rem] font-bold leading-[1.2] tracking-tight text-brand wrap-anywhere sm:text-4xl"
            >
              {t("heading")}
            </h2>
          </div>
          <div className="max-w-xl space-y-3 text-sm leading-6 text-charcoal/80 sm:text-base sm:leading-7">
            <p>{t("introduction.partnerships")}</p>
            <p>{t("introduction.market")}</p>
            <p className="font-medium text-brand">
              {t("introduction.guidance")}
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2 sm:mt-8 sm:gap-4 lg:mt-10 lg:gap-5">
          {principles.map(({ key, icon: Icon }) => (
            <article
              key={key}
              className="flex items-start gap-3 rounded-lg border border-brand/10 bg-surface p-4 transition-colors hover:border-brand/25 motion-reduce:transition-none sm:gap-4 sm:p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sage text-forest lg:h-11 lg:w-11">
                <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading text-base font-bold leading-6 text-brand wrap-anywhere sm:text-lg">
                  {t(`${key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-6 text-charcoal/80">
                  {t(`${key}.description`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
