"use client";
import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "../types";
interface ProductContextValue {
  products: readonly Product[];
  selectedCode: string | null;
  select: (code: string) => void;
  close: () => void;
}
const ProductContext = createContext<ProductContextValue | null>(null);
export default function ProductProvider({
  products,
  children,
}: {
  products: readonly Product[];
  children: ReactNode;
}) {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const close = useCallback(() => setSelectedCode(null), []);
  return (
    <ProductContext.Provider
      value={{ products, selectedCode, select: setSelectedCode, close }}
    >
      {children}
    </ProductContext.Provider>
  );
}
export function useProducts() {
  const value = useContext(ProductContext);
  if (!value) throw new Error("Product components require ProductProvider");
  return value;
}
