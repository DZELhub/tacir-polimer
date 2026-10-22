"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import type { Product } from "../types";
export default function ProductCard({
  product,
  onSelect,
}: {
  product: Product;
  onSelect: (code: string) => void;
}) {
  const t = useTranslations("Products");
  const common = useTranslations("Common");
  return (
    <button
      type="button"
      onClick={() => onSelect(product.code)}
      className={[
        "group overflow-hidden",
        "rounded-xl bg-white",
        "text-left",
        "border border-brand/10",
        "transition-all",
        "hover:-translate-y-1",
        "hover:border-brand/25",
        "hover:shadow-lg",
        "focus-visible:outline-2",
        "focus-visible:outline-offset-2",
        "focus-visible:outline-brand",
      ].join(" ")}
    >
      <div
        className={[
          "relative aspect-4/3",
          "overflow-hidden bg-sage",
          "sm:aspect-5/3",
        ].join(" ")}
      >
        <Image
          src={product.image}
          alt={common("polymer", { code: product.code })}
          fill
          sizes={[
            "(max-width: 639px) 50vw,",
            "(max-width: 1023px) 50vw,",
            "25vw",
          ].join(" ")}
          className={[
            "object-cover",
            "transition-transform",
            "duration-500",
            "group-hover:scale-105",
          ].join(" ")}
        />
      </div>

      <div className="p-3 sm:p-4 lg:p-5">
        <p
          className={[
            "font-heading font-bold",
            "text-base text-brand",
            "sm:text-lg lg:text-xl",
          ].join(" ")}
        >
          {product.code}
        </p>

        <p
          className={[
            "mt-1 min-h-10 wrap-anywhere",
            "text-[11px] leading-4",
            "text-charcoal/70",
            "sm:text-xs sm:leading-5",
            "lg:text-sm",
          ].join(" ")}
        >
          {product.name}
        </p>

        <span
          className={[
            "mt-3 inline-flex",
            "items-center gap-1",
            "text-[10px] font-semibold",
            "text-forest",
            "sm:mt-4 sm:text-xs",
          ].join(" ")}
        >
          {t("view_details")}
          <span aria-hidden="true">↗</span>
        </span>
      </div>
    </button>
  );
}
