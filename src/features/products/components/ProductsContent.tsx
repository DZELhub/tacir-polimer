import { useTranslations } from "next-intl";
import { products as productDefinitions } from "@/data";
import ProductProvider from "./ProductProvider";
import ProductGrid from "./ProductGrid";
import ProductModal from "./ProductModal";

export default function ProductsContent() {
  const t = useTranslations("Products");
  const products = productDefinitions.map((product) => ({
    code: product.code,
    image: product.image,
    name: t(product.nameKey),
    description: t(product.descriptionKey),
    applications: product.applicationKeys.map((key) => t(key)),
  }));
  return (
    <ProductProvider products={products}>
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

          <ProductGrid />
        </div>

        <ProductModal />
      </section>
    </ProductProvider>
  );
}
