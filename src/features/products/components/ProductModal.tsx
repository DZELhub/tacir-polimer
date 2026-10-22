"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useProductModal } from "../hooks/useProductModal";
import { useProducts } from "./ProductProvider";
export default function ProductModal() {
  const t = useTranslations("Products");
  const common = useTranslations("Common");
  const { products, selectedCode, close } = useProducts();
  const selected =
    products.find((product) => product.code === selectedCode) ?? null;
  const dialog = useProductModal(selectedCode, close);
  if (!selected) return null;
  return (
    <div
      className={[
        "fixed inset-0 z-100",
        "flex items-center",
        "justify-center",
        "bg-black/60 p-4",
      ].join(" ")}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          close();
        }
      }}
    >
      <div
        ref={dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-title"
        className={[
          "relative w-full",
          "max-w-2xl",
          "overflow-hidden",
          "rounded-2xl bg-white",
          "shadow-2xl",
          "max-h-[90vh]",
          "overflow-y-auto",
        ].join(" ")}
      >
        <button
          type="button"
          onClick={() => close()}
          aria-label={t("close_details")}
          className={[
            "absolute right-4 top-4",
            "z-10 flex h-9 w-9",
            "items-center",
            "justify-center",
            "rounded-full",
            "bg-white/90",
            "text-charcoal",
            "shadow-sm",
            "hover:bg-sage",
          ].join(" ")}
        >
          ✕
        </button>

        <div className={["grid md:grid-cols-2"].join(" ")}>
          <div
            className={[
              "relative aspect-5/4",
              "bg-sage",
              "md:aspect-auto",
              "md:min-h-95",
            ].join(" ")}
          >
            <Image
              src={selected.image}
              alt={common("polymer", { code: selected.code })}
              fill
              sizes={["(max-width: 767px) 100vw,", "50vw"].join(" ")}
              className="object-cover"
            />
          </div>

          <div className="p-7 md:p-8">
            <p
              className={[
                "mb-2 text-xs",
                "font-semibold",
                "uppercase",
                "tracking-[0.15em]",
                "text-forest",
              ].join(" ")}
            >
              {t("polymer_portfolio")}
            </p>

            <h3
              id="product-title"
              className={["font-heading text-3xl", "font-bold text-brand"].join(
                " ",
              )}
            >
              {selected.code}
            </h3>

            <p
              className={[
                "mt-1 text-sm",
                "font-medium",
                "text-charcoal/75",
              ].join(" ")}
            >
              {selected.name}
            </p>

            <p
              className={["mt-5 text-sm", "leading-7", "text-charcoal/80"].join(
                " ",
              )}
            >
              {selected.description}
            </p>

            <h4 className={["mt-6 text-sm", "font-bold text-brand"].join(" ")}>
              {t("typical_applications")}
            </h4>

            <ul
              className={["mt-3 space-y-2", "text-sm", "text-charcoal/75"].join(
                " ",
              )}
            >
              {selected.applications.map((application) => (
                <li
                  key={application}
                  className={["flex items-start", "gap-2"].join(" ")}
                >
                  <span className="text-forest" aria-hidden="true">
                    •
                  </span>
                  {application}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={() => close()}
              className={[
                "mt-8 inline-flex",
                "items-center",
                "justify-center",
                "rounded-md",
                "bg-brand px-5 py-3",
                "text-sm font-semibold",
                "text-white",
                "hover:bg-forest",
              ].join(" ")}
            >
              {t("request_information")}
              <span className="ml-2" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
