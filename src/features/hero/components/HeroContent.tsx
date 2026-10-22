import { useTranslations } from "next-intl";
import { company } from "@/data";
import HeroCarousel from "./HeroCarousel";

export default function HeroContent() {
  const t = useTranslations("Hero");
  return (
    <section id="home" className="bg-surface py-10 sm:py-14 lg:py-20">
      <div
        className={[
          "container-custom grid",
          "items-center gap-8",
          "sm:gap-10",
          "lg:grid-cols-[1.1fr_0.9fr]",
          "lg:gap-12",
        ].join(" ")}
      >
        <div>
          <p
            className={[
              "mb-3 text-[11px]",
              "font-semibold uppercase",
              "tracking-[0.18em]",
              "text-forest lg:mb-5",
            ].join(" ")}
          >
            {company.heroName}
          </p>

          <h1
            className={[
              "font-heading font-bold",
              "tracking-tight text-brand",
              "text-[2rem] leading-[1.12]",
              "sm:text-5xl",
              "lg:text-[3rem]",
              "xl:text-[3.25rem]",
            ].join(" ")}
          >
            {t("connecting_materials")}
            <br />
            {t("creating_opportunities")}
          </h1>

          <p
            className={[
              "mt-4 max-w-lg",
              "text-sm leading-6",
              "text-charcoal/80",
              "sm:text-base sm:leading-7",
              "lg:mt-6",
            ].join(" ")}
          >
            {t("reliable_polymer_trading_and_sourcing_solutions_connecting")}
          </p>

          <div
            className={[
              "mt-6 flex flex-wrap",
              "gap-2 sm:gap-3",
              "lg:mt-8",
            ].join(" ")}
          >
            <a
              href="#products"
              className={[
                "inline-flex items-center",
                "justify-center rounded-md",
                "bg-brand px-4 py-2.5",
                "text-xs font-semibold",
                "text-white",
                "hover:bg-forest",
                "sm:px-6 sm:py-3",
                "sm:text-sm",
              ].join(" ")}
            >
              {t("explore_products")}
            </a>

            <a
              href="#contact"
              className={[
                "inline-flex items-center",
                "justify-center rounded-md",
                "border border-brand/20",
                "px-4 py-2.5",
                "text-xs font-semibold",
                "text-brand",
                "hover:bg-sage",
                "sm:px-6 sm:py-3",
                "sm:text-sm",
              ].join(" ")}
            >
              {t("get_in_touch")}
            </a>
          </div>
        </div>

        <HeroCarousel />
      </div>
    </section>
  );
}
