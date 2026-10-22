"use client";
import { useEffect, useRef } from "react";
export function useProductModal(
  selectedCode: string | null,
  close: () => void,
) {
  const dialog = useRef<HTMLDivElement>(null);
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
        close();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      trigger?.focus({ preventScroll: true });
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedCode, close]);
  return dialog;
}
