"use client";
import { useLocale, useTranslations } from "next-intl";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const t = useTranslations("Navbar");

  const links = [
    { label: t("home"), href: "#home" },
    { label: t("products"), href: "#products" },
    { label: t("about"), href: "#about" },
    { label: t("solutions"), href: "#solutions" },
    { label: t("contact"), href: "#contact" },
  ];

  const languages = ["EN", "DE", "NL"];

  const [menuOpen, setMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  const activeLanguage = useLocale().toUpperCase();
  const router = useRouter();
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = ["home", "products", "about", "solutions", "contact"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const updateActiveSection = () => {
      const offset = 140;

      let current = "home";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= offset) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);

      window.removeEventListener("resize", updateActiveSection);
    };
  }, [activeLanguage]);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1024px)");
    const close = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", close);
    return () => {
      document.body.style.overflow = previous;
      desktop.removeEventListener("change", close);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (
        event.key === "Escape" &&
        header.current?.querySelector("#mobile-navigation")
      ) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
      if (
        event.key === "Tab" &&
        header.current?.querySelector("#mobile-navigation")
      ) {
        const controls = Array.from(
          header.current.querySelectorAll<HTMLElement>("a[href], button"),
        ).filter((el) => el.getClientRects().length > 0);
        const first = controls[0];
        const last = controls.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  const renderLanguageButtons = (mobile = false) => (
    <div className="flex items-center gap-2">
      {languages.map((language) => {
        const active = activeLanguage === language;

        return (
          <button
            key={language}
            type="button"
            aria-pressed={active}
            onClick={() => {
              setMenuOpen(false);
              router.push(
                `/${language.toLowerCase()}${window.location.search}${window.location.hash || `#${activeSection}`}`,
                { scroll: false },
              );
            }}
            className={[
              "rounded-md font-semibold",
              "transition-colors",
              mobile ? "px-4 py-2 text-sm" : "px-3 py-2 text-xs",
              active ? "bg-sage text-brand" : "text-charcoal",
              !active ? "hover:bg-sage/60" : "",
            ].join(" ")}
          >
            {language}
          </button>
        );
      })}
    </div>
  );

  return (
    <header
      ref={header}
      className={["sticky top-0 z-50", "border-b border-sage", "bg-white"].join(
        " ",
      )}
    >
      <nav
        className={[
          "container-custom flex",
          "h-20 items-center",
          "justify-between",
        ].join(" ")}
        aria-label={t("main_navigation")}
      >
        <a
          href="#home"
          aria-label={t("tacir_polimer_home")}
          onClick={() => handleNavigation("home")}
          className="shrink-0"
        >
          <Image
            src={"/images/logo/" + "tacir-polimer-logo.png"}
            alt="Tacir Polimer"
            width={190}
            height={65}
            priority
            className={[
              "h-auto w-40",
              "object-contain",
              "md:w-44 lg:w-48",
            ].join(" ")}
          />
        </a>

        <div className={["hidden items-center", "gap-2 lg:flex"].join(" ")}>
          {links.map((link) => {
            const section = link.href.slice(1);

            const active = activeSection === section;

            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active ? "location" : undefined}
                onClick={() => handleNavigation(section)}
                className={[
                  "relative rounded-md",
                  "px-3 py-3 text-sm",
                  "transition-colors",
                  "hover:bg-sage/50",
                  active
                    ? "font-semibold text-brand"
                    : "font-medium text-charcoal",
                ].join(" ")}
              >
                {link.label}

                {active && (
                  <span
                    aria-hidden="true"
                    className={[
                      "absolute bottom-1",
                      "left-3 right-3",
                      "h-0.5 bg-brand",
                    ].join(" ")}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="hidden lg:block">{renderLanguageButtons()}</div>

        <button
          type="button"
          aria-label={menuOpen ? t("close_menu") : t("open_menu")}
          aria-expanded={menuOpen}
          ref={menuButton}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((previous) => !previous)}
          className={[
            "flex h-11 w-11",
            "items-center justify-center",
            "text-brand lg:hidden",
          ].join(" ")}
        >
          <span aria-hidden="true" className="text-2xl">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className={[
            "absolute inset-x-0 top-full",
            "h-[calc(100dvh-5rem)]",
            "overflow-y-auto",
            "border-t border-sage",
            "bg-white lg:hidden",
          ].join(" ")}
        >
          <div className={["container-custom flex", "flex-col py-6"].join(" ")}>
            {links.map((link) => {
              const section = link.href.slice(1);

              const active = activeSection === section;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "location" : undefined}
                  onClick={() => handleNavigation(section)}
                  className={[
                    "border-b py-4",
                    "text-lg",
                    "transition-colors",
                    active
                      ? "border-brand font-semibold"
                      : "border-transparent",
                    active ? "text-brand" : "text-charcoal",
                  ].join(" ")}
                >
                  {link.label}
                </a>
              );
            })}

            <div className={["mt-5 border-t", "border-sage pt-6"].join(" ")}>
              {renderLanguageButtons(true)}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
