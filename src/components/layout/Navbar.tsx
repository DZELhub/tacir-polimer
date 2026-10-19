
"use client";

import Image from "next/image";
import {
  useEffect,
  useState,
} from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Contact", href: "#contact" },
];

const languages = ["EN", "DE", "NL"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("home");

  const [activeLanguage, setActiveLanguage] =
    useState("EN");

  useEffect(() => {
    const sections = links
      .map((link) =>
        document.getElementById(
          link.href.slice(1)
        )
      )
      .filter(
        (section): section is HTMLElement =>
          section !== null
      );

    const updateActiveSection = () => {
      const offset = 140;

      let current = "home";

      for (const section of sections) {
        if (
          section.getBoundingClientRect().top
          <= offset
        ) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();

    window.addEventListener(
      "scroll",
      updateActiveSection,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateActiveSection
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateActiveSection
      );

      window.removeEventListener(
        "resize",
        updateActiveSection
      );
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  const handleNavigation = (
    section: string
  ) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  const renderLanguageButtons = (
    mobile = false
  ) => (
    <div className="flex items-center gap-2">
      {languages.map((language) => {
        const active =
          activeLanguage === language;

        return (
          <button
            key={language}
            type="button"
            aria-pressed={active}
            onClick={() =>
              setActiveLanguage(language)
            }
            className={[
              "rounded-md font-semibold",
              "transition-colors",
              mobile
                ? "px-4 py-2 text-sm"
                : "px-3 py-2 text-xs",
              active
                ? "bg-sage text-brand"
                : "text-charcoal",
              !active
                ? "hover:bg-sage/60"
                : "",
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
      className={[
        "sticky top-0 z-50",
        "border-b border-sage",
        "bg-white",
      ].join(" ")}
    >
      <nav
        className={[
          "container-custom flex",
          "h-20 items-center",
          "justify-between",
        ].join(" ")}
        aria-label="Main navigation"
      >
        <a
          href="#home"
          aria-label="Tacir Polimer Home"
          onClick={() =>
            handleNavigation("home")
          }
          className="shrink-0"
        >
          <Image
            src={
              "/images/logo/" +
              "tacir-polimer-logo.png"
            }
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

        <div
          className={[
            "hidden items-center",
            "gap-2 lg:flex",
          ].join(" ")}
        >
          {links.map((link) => {
            const section =
              link.href.slice(1);

            const active =
              activeSection === section;

            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={
                  active ? "location" : undefined
                }
                onClick={() =>
                  handleNavigation(section)
                }
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

        <div className="hidden lg:block">
          {renderLanguageButtons()}
        </div>

        <button
          type="button"
          aria-label={
            menuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() =>
            setMenuOpen((previous) => !previous)
          }
          className={[
            "flex h-11 w-11",
            "items-center justify-center",
            "text-brand lg:hidden",
          ].join(" ")}
        >
          <span
            aria-hidden="true"
            className="text-2xl"
          >
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
          <div
            className={[
              "container-custom flex",
              "flex-col py-6",
            ].join(" ")}
          >
            {links.map((link) => {
              const section =
                link.href.slice(1);

              const active =
                activeSection === section;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={
                    active
                      ? "location"
                      : undefined
                  }
                  onClick={() =>
                    handleNavigation(section)
                  }
                  className={[
                    "border-b py-4",
                    "text-lg",
                    "transition-colors",
                    active
                      ? "border-brand font-semibold"
                      : "border-transparent",
                    active
                      ? "text-brand"
                      : "text-charcoal",
                  ].join(" ")}
                >
                  {link.label}
                </a>
              );
            })}

            <div
              className={[
                "mt-5 border-t",
                "border-sage pt-6",
              ].join(" ")}
            >
              {renderLanguageButtons(true)}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
