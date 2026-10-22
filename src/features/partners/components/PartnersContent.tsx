import { useTranslations } from "next-intl";
import { partners } from "@/data";
import PartnerCard from "./PartnerCard";
import PartnerNetworkDecoration from "./PartnerNetworkDecoration";

export default function PartnersContent() {
  const t = useTranslations("Partners");
  return (
    <section
      id="partners"
      aria-labelledby="partners-title"
      className="bg-sage py-10 sm:py-12 lg:py-16"
    >
      <div className="container-custom">
        <div className="relative isolate mb-6 sm:mb-8">
          <PartnerNetworkDecoration />
          <div className="max-w-2xl">
            <p className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-forest lg:text-xs">
              <span
                aria-hidden="true"
                className="h-px w-8 shrink-0 bg-forest"
              />
              {t("eyebrow")}
            </p>
            <h2
              id="partners-title"
              className="font-heading text-[1.75rem] font-bold leading-tight tracking-tight text-brand sm:text-4xl"
            >
              {t("heading")}
            </h2>
            <p className="mt-3 text-sm leading-6 text-charcoal/80 sm:text-base sm:leading-7">
              {t("description")}
            </p>
          </div>
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 gap-3 min-[360px]:grid-cols-4 md:grid-cols-6 xl:grid-cols-10 xl:gap-4"
        >
          {/* Two tracks per card allow half-column offsets for incomplete rows. */}
          {partners.map((name, index) => (
            <PartnerCard
              key={name}
              name={name}
              index={index}
              total={partners.length}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
