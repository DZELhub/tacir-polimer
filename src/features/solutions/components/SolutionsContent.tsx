import { useTranslations } from "next-intl";
import { solutions } from "@/data";
import SolutionCard from "./SolutionCard";

export default function SolutionsContent() {
  const t = useTranslations("Solutions");
  return (
    <section
      id="solutions"
      className={["bg-surface", "py-10 sm:py-12 lg:py-20"].join(" ")}
    >
      <div className="container-custom">
        <div className={["mb-6 max-w-2xl", "lg:mb-12"].join(" ")}>
          <p
            className={[
              "mb-2 text-[11px]",
              "font-semibold uppercase",
              "tracking-[0.18em]",
              "text-forest",
              "lg:mb-3",
            ].join(" ")}
          >
            {t("what_we_do")}
          </p>

          <h2
            className={[
              "font-heading text-[1.75rem]",
              "font-bold tracking-tight",
              "text-brand",
              "sm:text-4xl",
            ].join(" ")}
          >
            {t("our_solutions")}
          </h2>

          <p
            className={[
              "mt-3 text-sm leading-6",
              "text-charcoal/75",
              "sm:mt-4 sm:leading-7",
              "sm:text-base",
            ].join(" ")}
          >
            {t(
              "supporting_industrial_businesses_through_polymer_trading_material",
            )}
          </p>
        </div>

        <div className={["grid gap-3", "md:grid-cols-3", "lg:gap-5"].join(" ")}>
          {solutions.map((solution) => (
            <SolutionCard key={solution.number} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
}
