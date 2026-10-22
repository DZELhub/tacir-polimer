"use client";
import { useTranslations } from "next-intl";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

type Product = {
  code: string;
  name: string;
  description: string;
  applications: string[];
  image: string;
};

export default function Products() {
  const t = useTranslations("Products");
  const common = useTranslations("Common");
  const dialog = useRef<HTMLDivElement>(null);

  const products: Product[] = [
    {
      code: "PET",
      name: t("polyethylene_terephthalate"),
      description: t("a_versatile_thermoplastic_widely_used_in_packaging"),
      applications: [
        t("bottles_and_containers"),
        t("food_packaging"),
        t("polyester_fibers"),
      ],
      image: "/images/products/pet.webp",
    },
    {
      code: "PP",
      name: t("polypropylene"),
      description: t("a_lightweight_polymer_valued_for_its_chemical"),
      applications: [
        t("rigid_packaging"),
        t("automotive_components"),
        t("household_products"),
      ],
      image: "/images/products/pp.webp",
    },
    {
      code: "PS",
      name: t("polystyrene"),
      description: t("a_widely_used_polymer_suitable_for_rigid"),
      applications: [
        t("food_containers"),
        t("disposable_products"),
        t("consumer_goods"),
      ],
      image: "/images/products/ps.webp",
    },
    {
      code: "HIPS",
      name: t("high_impact_polystyrene"),
      description: t("a_modified_polystyrene_designed_for_improved_impact"),
      applications: [
        t("appliance_housings"),
        t("electronic_enclosures"),
        t("thermoformed_packaging"),
      ],
      image: "/images/products/hips.webp",
    },
    {
      code: "EPS",
      name: t("expanded_polystyrene"),
      description: t("a_lightweight_cellular_material_known_for_insulation"),
      applications: [
        t("thermal_insulation"),
        t("protective_packaging"),
        t("construction_products"),
      ],
      image: "/images/products/eps.webp",
    },
    {
      code: "POM",
      name: t("polyoxymethylene"),
      description: t(
        "an_engineering_thermoplastic_suited_to_precision_mechanical",
      ),
      applications: [
        t("gears_and_bearings"),
        t("precision_components"),
        t("industrial_mechanisms"),
      ],
      image: "/images/products/pom.webp",
    },
    {
      code: "ABS",
      name: t("acrylonitrile_butadiene_styrene"),
      description: t("a_durable_engineering_polymer_combining_toughness_and"),
      applications: [
        t("automotive_components"),
        t("electronic_housings"),
        t("consumer_products"),
      ],
      image: "/images/products/abs.webp",
    },
    {
      code: "PE",
      name: t("polyethylene"),
      description: t("a_widely_used_polymer_family_offering_flexibility"),
      applications: [
        t("films_and_bags"),
        t("pipes_and_containers"),
        t("industrial_packaging"),
      ],
      image: "/images/products/pe.webp",
    },
  ];

  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const selected =
    products.find((product) => product.code === selectedCode) ?? null;

  useEffect(() => {
    if (!selectedCode) return;

    const trigger =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    dialog.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        const controls =
          dialog.current?.querySelectorAll<HTMLElement>("button, a[href]");
        const first = controls?.[0];
        const last = controls?.[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
      if (event.key === "Escape") {
        setSelectedCode(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      trigger?.focus({ preventScroll: true });
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedCode]);

  return (
    <section id="products" className="bg-sage py-12 lg:py-20">
      <div className="container-custom">
        <div className="mb-7 max-w-2xl lg:mb-10">
          <p
            className={[
              "mb-3 text-xs font-semibold",
              "uppercase tracking-[0.18em]",
              "text-forest",
            ].join(" ")}
          >
            {t("our_products")}
          </p>

          <h2
            className={[
              "font-heading text-3xl",
              "font-bold tracking-tight",
              "text-brand",
              "sm:text-4xl",
            ].join(" ")}
          >
            {t("polymer_solutions")}
          </h2>

          <p
            className={[
              "mt-4 text-sm leading-7",
              "text-charcoal/75",
              "sm:text-base",
            ].join(" ")}
          >
            {t("explore_our_polymer_portfolio_and_discover_materials")}
          </p>
        </div>

        <div
          className={[
            "grid grid-cols-2",
            "gap-3 sm:gap-4",
            "lg:grid-cols-4",
            "lg:gap-5",
          ].join(" ")}
        >
          {products.map((product) => (
            <button
              key={product.code}
              type="button"
              onClick={() => setSelectedCode(product.code)}
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
          ))}
        </div>
      </div>

      {selected && (
        <div
          className={[
            "fixed inset-0 z-100",
            "flex items-center",
            "justify-center",
            "bg-black/60 p-4",
          ].join(" ")}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedCode(null);
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
              onClick={() => setSelectedCode(null)}
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
                  className={[
                    "font-heading text-3xl",
                    "font-bold text-brand",
                  ].join(" ")}
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
                  className={[
                    "mt-5 text-sm",
                    "leading-7",
                    "text-charcoal/80",
                  ].join(" ")}
                >
                  {selected.description}
                </p>

                <h4
                  className={["mt-6 text-sm", "font-bold text-brand"].join(" ")}
                >
                  {t("typical_applications")}
                </h4>

                <ul
                  className={[
                    "mt-3 space-y-2",
                    "text-sm",
                    "text-charcoal/75",
                  ].join(" ")}
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
                  onClick={() => setSelectedCode(null)}
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
      )}
    </section>
  );
}
