import { useTranslations } from "next-intl";
import type { PrincipleDefinition } from "@/data";
export default function PrincipleCard({
  principle,
}: {
  principle: PrincipleDefinition;
}) {
  const t = useTranslations("Principles");
  const { key, icon: Icon } = principle;
  return (
    <article className="flex items-start gap-3 rounded-lg border border-brand/10 bg-surface p-4 transition-colors hover:border-brand/25 motion-reduce:transition-none sm:gap-4 sm:p-6">
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
  );
}
