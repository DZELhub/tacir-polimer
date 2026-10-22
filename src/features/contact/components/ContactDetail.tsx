import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import type { ContactDetailDefinition } from "@/data";
export default function ContactDetail({
  detail,
}: {
  detail: ContactDetailDefinition;
}) {
  const t = useTranslations("Contact");
  const Icon = detail.icon;
  return (
    <div className="flex gap-3">
      <div
        className={[
          "flex h-10 w-10",
          "shrink-0 items-center",
          "justify-center",
          "rounded-lg bg-sage",
          "text-brand",
        ].join(" ")}
      >
        <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
      </div>

      <div className="min-w-0">
        <p
          className={[
            "text-xs font-semibold",
            "uppercase tracking-wider",
            "text-brand",
          ].join(" ")}
        >
          {t(detail.labelKey)}
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
          target={detail.external ? "_blank" : undefined}
          rel={detail.external ? "noopener noreferrer" : undefined}
          className={[
            "mt-2 inline-flex",
            "items-center gap-1",
            "text-xs font-semibold",
            "text-forest",
            "hover:underline",
            "underline-offset-4",
          ].join(" ")}
        >
          {t(detail.actionKey)}

          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
