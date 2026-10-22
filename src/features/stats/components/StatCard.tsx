import { useTranslations } from "next-intl";
import type { StatDefinition } from "@/data";
export default function StatCard({
  stat,
  index,
}: {
  stat: StatDefinition;
  index: number;
}) {
  const t = useTranslations("Stats");
  return (
    <div
      className={[
        "text-center",
        "lg:px-6",
        index !== 0 ? "lg:border-l lg:border-white/15" : "",
      ].join(" ")}
    >
      <p
        className={[
          "font-heading font-bold",
          "text-3xl tracking-tight",
          "text-white",
          "sm:text-4xl",
          "lg:text-[2.75rem]",
        ].join(" ")}
      >
        {stat.value}
      </p>

      <p
        className={[
          "mt-2 text-xs",
          "font-medium",
          "text-white/70",
          "sm:text-sm",
        ].join(" ")}
      >
        {t(stat.labelKey)}
      </p>
    </div>
  );
}
