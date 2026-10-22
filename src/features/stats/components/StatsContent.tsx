import { useTranslations } from "next-intl";
import { stats } from "@/data";
import StatCard from "./StatCard";

export default function StatsContent() {
  const t = useTranslations("Stats");
  return (
    <section
      aria-label={t("tacir_polimer_in_numbers")}
      className="bg-brand py-10 lg:py-14"
    >
      <div className="container-custom">
        <p
          className={[
            "mb-7 text-center",
            "text-[11px] font-semibold",
            "uppercase tracking-[0.18em]",
            "text-white/65",
            "lg:mb-9",
          ].join(" ")}
        >
          {t("tacir_polimer_in_numbers_")}
        </p>

        <div
          className={[
            "grid grid-cols-2",
            "gap-x-5 gap-y-8",
            "lg:grid-cols-4",
            "lg:gap-0",
          ].join(" ")}
        >
          {stats.map((stat, index) => (
            <StatCard key={stat.labelKey} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
