import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import type { SolutionDefinition } from "@/data";
export default function SolutionCard({
  solution,
}: {
  solution: SolutionDefinition;
}) {
  const t = useTranslations("Solutions");
  const Icon = solution.icon;
  return (
    <article
      className={[
        "group rounded-xl bg-white",
        "border border-brand/10",
        "p-4 sm:p-5",
        "md:flex md:flex-col",
        "lg:p-8",
        "transition-colors",
        "hover:border-brand/25",
      ].join(" ")}
    >
      <div
        className={[
          "flex items-start",
          "gap-3",
          "md:mb-8",
          "md:justify-between",
          "lg:mb-12",
        ].join(" ")}
      >
        <div
          className={[
            "flex h-10 w-10",
            "shrink-0 items-center",
            "justify-center",
            "rounded-lg bg-sage",
            "text-brand",
            "lg:h-12 lg:w-12",
          ].join(" ")}
        >
          <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
        </div>

        <div className={["min-w-0 flex-1", "md:hidden"].join(" ")}>
          <h3
            className={["font-heading text-base", "font-bold text-brand"].join(
              " ",
            )}
          >
            {t(solution.titleKey)}
          </h3>

          <p
            className={["mt-1.5 text-xs", "leading-5", "text-charcoal/75"].join(
              " ",
            )}
          >
            {t(solution.descriptionKey)}
          </p>

          <a
            href="#contact"
            className={[
              "mt-3 inline-flex",
              "items-center gap-1",
              "text-xs font-semibold",
              "text-forest",
            ].join(" ")}
          >
            {t("get_in_touch")}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <span
          className={[
            "ml-auto text-[11px]",
            "font-semibold",
            "text-brand/35",
            "md:ml-0",
          ].join(" ")}
        >
          {solution.number}
        </span>
      </div>

      <div className={["hidden md:flex", "md:flex-1", "md:flex-col"].join(" ")}>
        <h3
          className={["font-heading text-xl", "font-bold text-brand"].join(" ")}
        >
          {t(solution.titleKey)}
        </h3>

        <p
          className={[
            "mt-3 flex-1",
            "text-sm leading-7",
            "text-charcoal/75",
          ].join(" ")}
        >
          {t(solution.descriptionKey)}
        </p>

        <a
          href="#contact"
          className={[
            "mt-8 inline-flex",
            "w-fit items-center",
            "gap-2 text-xs",
            "font-semibold",
            "text-forest",
            "hover:underline",
            "underline-offset-4",
          ].join(" ")}
        >
          {t("get_in_touch")}
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
