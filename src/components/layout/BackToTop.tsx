"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";

export default function BackToTop() {
  const t = useTranslations("Common");
  const [visible, setVisible] = useState(false);
  const current = useRef(false);
  useEffect(() => {
    const update = () => {
      const next = window.scrollY > 450;
      if (next !== current.current) {
        current.current = next;
        setVisible(next);
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <button
      type="button"
      aria-label={t("backToTop")}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
        });
        document.getElementById("main-content")?.focus({ preventScroll: true });
      }}
      className={`fixed z-40 flex h-10 w-10 items-center justify-center rounded-full bg-forest text-white shadow-sm transition-[opacity,transform,background-color] hover:bg-brand sm:h-11 sm:w-11 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"}`}
      style={{
        right: "max(1rem, env(safe-area-inset-right))",
        bottom: "max(1rem, env(safe-area-inset-bottom))",
      }}
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
}
