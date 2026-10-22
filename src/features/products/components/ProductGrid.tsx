"use client";
import { useProducts } from "./ProductProvider";
import ProductCard from "./ProductCard";
export default function ProductGrid() {
  const { products, select } = useProducts();
  return (
    <div
      className={[
        "grid grid-cols-2",
        "gap-3 sm:gap-4",
        "lg:grid-cols-4",
        "lg:gap-5",
      ].join(" ")}
    >
      {products.map((product) => (
        <ProductCard key={product.code} product={product} onSelect={select} />
      ))}
    </div>
  );
}
