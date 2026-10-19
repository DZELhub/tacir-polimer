
"use client";

import Image from "next/image";
import {
  useEffect,
  useState,
} from "react";

type Product = {
  code: string;
  name: string;
  description: string;
  applications: string[];
  image: string;
};

const products: Product[] = [
  {
    code: "PET",
    name: "Polyethylene Terephthalate",
    description:
      "A versatile thermoplastic widely used " +
      "in packaging and fiber applications.",
    applications: [
      "Bottles and containers",
      "Food packaging",
      "Polyester fibers",
    ],
    image: "/images/products/pet.webp",
  },
  {
    code: "PP",
    name: "Polypropylene",
    description:
      "A lightweight polymer valued for " +
      "its chemical resistance and versatility.",
    applications: [
      "Rigid packaging",
      "Automotive components",
      "Household products",
    ],
    image: "/images/products/pp.webp",
  },
  {
    code: "PS",
    name: "Polystyrene",
    description:
      "A widely used polymer suitable for " +
      "rigid packaging and consumer products.",
    applications: [
      "Food containers",
      "Disposable products",
      "Consumer goods",
    ],
    image: "/images/products/ps.webp",
  },
  {
    code: "HIPS",
    name: "High Impact Polystyrene",
    description:
      "A modified polystyrene designed " +
      "for improved impact resistance.",
    applications: [
      "Appliance housings",
      "Electronic enclosures",
      "Thermoformed packaging",
    ],
    image: "/images/products/hips.webp",
  },
  {
    code: "EPS",
    name: "Expanded Polystyrene",
    description:
      "A lightweight cellular material " +
      "known for insulation and cushioning.",
    applications: [
      "Thermal insulation",
      "Protective packaging",
      "Construction products",
    ],
    image: "/images/products/eps.webp",
  },
  {
    code: "POM",
    name: "Polyoxymethylene",
    description:
      "An engineering thermoplastic " +
      "suited to precision mechanical parts.",
    applications: [
      "Gears and bearings",
      "Precision components",
      "Industrial mechanisms",
    ],
    image: "/images/products/pom.webp",
  },
  {
    code: "ABS",
    name: "Acrylonitrile Butadiene Styrene",
    description:
      "A durable engineering polymer " +
      "combining toughness and processability.",
    applications: [
      "Automotive components",
      "Electronic housings",
      "Consumer products",
    ],
    image: "/images/products/abs.webp",
  },
  {
    code: "PE",
    name: "Polyethylene",
    description:
      "A widely used polymer family " +
      "offering flexibility and durability.",
    applications: [
      "Films and bags",
      "Pipes and containers",
      "Industrial packaging",
    ],
    image: "/images/products/pe.webp",
  },
];

export default function Products() {
  const [selected, setSelected] =
    useState<Product | null>(null);

  useEffect(() => {
    if (!selected) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [selected]);

  return (
    <section
      id="products"
      className="bg-surface py-12 lg:py-20"
    >
      <div className="container-custom">
        <div className="mb-7 max-w-2xl lg:mb-10">
          <p
            className={[
              "mb-3 text-xs font-semibold",
              "uppercase tracking-[0.18em]",
              "text-forest",
            ].join(" ")}
          >
            OUR PRODUCTS
          </p>

          <h2
            className={[
              "font-heading text-3xl",
              "font-bold tracking-tight",
              "text-brand",
              "sm:text-4xl",
            ].join(" ")}
          >
            Polymer Solutions
          </h2>

          <p
            className={[
              "mt-4 text-sm leading-7",
              "text-charcoal/75",
              "sm:text-base",
            ].join(" ")}
          >
            Explore our polymer portfolio
            and discover materials for
            diverse industrial applications.
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
              onClick={() =>
                setSelected(product)
              }
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
                  alt={
                    `${product.code} polymer`
                  }
                  fill
                  sizes={[
                    "(max-width: 639px) 100vw,",
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
      "mt-1 min-h-10",
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
    View Details
    <span aria-hidden="true">
      ↗
    </span>
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
            if (
              event.target ===
              event.currentTarget
            ) {
              setSelected(null);
            }
          }}
        >
          <div
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
              onClick={() =>
                setSelected(null)
              }
              aria-label="Close details"
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

            <div
              className={[
                "grid md:grid-cols-2",
              ].join(" ")}
            >
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
                  alt={
                    `${selected.code} polymer`
                  }
                  fill
                  sizes={[
                    "(max-width: 767px) 100vw,",
                    "50vw",
                  ].join(" ")}
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
                  POLYMER PORTFOLIO
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
                  className={[
                    "mt-6 text-sm",
                    "font-bold text-brand",
                  ].join(" ")}
                >
                  Typical Applications
                </h4>

                <ul
                  className={[
                    "mt-3 space-y-2",
                    "text-sm",
                    "text-charcoal/75",
                  ].join(" ")}
                >
                  {selected.applications.map(
                    (application) => (
                      <li
                        key={application}
                        className={[
                          "flex items-start",
                          "gap-2",
                        ].join(" ")}
                      >
                        <span
                          className="text-forest"
                          aria-hidden="true"
                        >
                          •
                        </span>
                        {application}
                      </li>
                    )
                  )}
                </ul>

                <a
                  href="#contact"
                  onClick={() =>
                    setSelected(null)
                  }
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
                  Request Information
                  <span
                    className="ml-2"
                    aria-hidden="true"
                  >
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
