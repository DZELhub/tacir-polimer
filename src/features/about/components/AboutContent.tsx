import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutContent() {
  const t = useTranslations("About");
  return (
    <section
      id="about"
      className={["bg-white", "py-10 sm:py-14 lg:py-24"].join(" ")}
    >
      <div
        className={[
          "container-custom grid",
          "items-center gap-6",
          "sm:gap-10",
          "lg:grid-cols-2 lg:gap-16",
        ].join(" ")}
      >
        <div>
          <p
            className={[
              "mb-3 text-[11px]",
              "font-semibold uppercase",
              "tracking-[0.18em]",
              "text-forest",
              "lg:text-xs",
            ].join(" ")}
          >
            {t("about_tacir_polimer")}
          </p>

          <h2
            className={[
              "max-w-xl font-heading",
              "text-[1.75rem]",
              "font-bold leading-[1.2]",
              "tracking-tight text-brand",
              "sm:text-4xl",
              "lg:text-[2.65rem]",
            ].join(" ")}
          >
            {t("connecting_industries_through_reliable_polymer_trade")}
          </h2>

          <div
            className={[
              "mt-4 max-w-xl",
              "space-y-3",
              "text-sm leading-6",
              "text-charcoal/75",
              "sm:mt-6 sm:space-y-4",
              "sm:text-base sm:leading-7",
            ].join(" ")}
          >
            <p>{t("tacir_polimer_operates_in_polymer_trading_and")}</p>

            <p>{t("through_a_focus_on_reliable_partnerships_market")}</p>
          </div>

          <a
            href="#solutions"
            className={[
              "mt-5 inline-flex",
              "items-center gap-2",
              "rounded-md bg-brand",
              "px-4 py-2.5",
              "text-xs font-semibold",
              "text-white",
              "transition-colors",
              "hover:bg-forest",
              "sm:mt-8 sm:px-5",
              "sm:py-3 sm:text-sm",
            ].join(" ")}
          >
            {t("discover_our_solutions")}
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div
          className={[
            "relative aspect-video",
            "overflow-hidden rounded-xl",
            "bg-sage",
            "sm:aspect-16/10",
            "lg:aspect-4/3",
          ].join(" ")}
        >
          <Image
            src={"/images/about/polymer-trading.webp"}
            alt={t("polymer_materials_and_international_trading_logistics")}
            fill
            sizes={["(max-width: 1023px) 100vw,", "50vw"].join(" ")}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
