"use client";
import { useTranslations } from "next-intl";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const t = useTranslations("Hero");
  const common = useTranslations("Common");
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const slides = [
    {
      src: "/images/hero/polymer-granules-01.webp",
      alt: t("translucent_polymer_pellets"),
    },
    {
      src: "/images/hero/polymer-granules-02.webp",
      alt: t("white_polymer_granules"),
    },
    {
      src: "/images/hero/polymer-granules-03.webp",
      alt: t("natural_polymer_resin_pellets"),
    },
  ];

  const INTERVAL = 6500;

  const [active, setActive] = useState(0);
  const paused = hovered || focused;
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    const updateVisibility = () => {
      setPageVisible(!document.hidden);
    };

    updateVisibility();

    document.addEventListener("visibilitychange", updateVisibility);

    return () => {
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (paused || !pageVisible) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActive((current) => (current + 1) % slides.length);
    }, INTERVAL);

    return () => {
      window.clearTimeout(timer);
    };
  }, [active, paused, pageVisible, slides.length]);

  const selectSlide = (index: number) => {
    setActive(index);
  };

  return (
    <section id="home" className="py-10 sm:py-14 lg:py-20">
      <div
        className={[
          "container-custom grid",
          "items-center gap-8",
          "sm:gap-10",
          "lg:grid-cols-[1.1fr_0.9fr]",
          "lg:gap-12",
        ].join(" ")}
      >
        <div>
          <p
            className={[
              "mb-3 text-[11px]",
              "font-semibold uppercase",
              "tracking-[0.18em]",
              "text-forest lg:mb-5",
            ].join(" ")}
          >
            TACIR POLIMER
          </p>

          <h1
            className={[
              "font-heading font-bold",
              "tracking-tight text-brand",
              "text-[2rem] leading-[1.12]",
              "sm:text-5xl",
              "lg:text-[3rem]",
              "xl:text-[3.25rem]",
            ].join(" ")}
          >
            {t("connecting_materials")}
            <br />
            {t("creating_opportunities")}
          </h1>

          <p
            className={[
              "mt-4 max-w-lg",
              "text-sm leading-6",
              "text-charcoal/80",
              "sm:text-base sm:leading-7",
              "lg:mt-6",
            ].join(" ")}
          >
            {t("reliable_polymer_trading_and_sourcing_solutions_connecting")}
          </p>

          <div
            className={[
              "mt-6 flex flex-wrap",
              "gap-2 sm:gap-3",
              "lg:mt-8",
            ].join(" ")}
          >
            <a
              href="#products"
              className={[
                "inline-flex items-center",
                "justify-center rounded-md",
                "bg-brand px-4 py-2.5",
                "text-xs font-semibold",
                "text-white",
                "hover:bg-forest",
                "sm:px-6 sm:py-3",
                "sm:text-sm",
              ].join(" ")}
            >
              {t("explore_products")}
            </a>

            <a
              href="#contact"
              className={[
                "inline-flex items-center",
                "justify-center rounded-md",
                "border border-brand/20",
                "px-4 py-2.5",
                "text-xs font-semibold",
                "text-brand",
                "hover:bg-sage",
                "sm:px-6 sm:py-3",
                "sm:text-sm",
              ].join(" ")}
            >
              {t("get_in_touch")}
            </a>
          </div>
        </div>

        <div
          className="min-w-0"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setFocused(false);
            }
          }}
        >
          <div
            className={[
              "relative overflow-hidden",
              "rounded-xl bg-sage",
              "aspect-video",
              "lg:aspect-4/3",
            ].join(" ")}
          >
            {slides.map((slide, index) => (
              <Image
                key={slide.src}
                src={slide.src}
                alt={index === active ? slide.alt : ""}
                aria-hidden={index !== active}
                fill
                priority={index === 0}
                sizes={[
                  "(max-width: 639px) 100vw,",
                  "(max-width: 1023px) 90vw,",
                  "45vw",
                ].join(" ")}
                className={[
                  "object-cover",
                  "transition-opacity",
                  "duration-700",
                  "motion-reduce:transition-none",
                  index === active ? "opacity-100" : "opacity-0",
                ].join(" ")}
              />
            ))}
          </div>

          <div
            className={["mt-3 flex", "justify-center gap-2", "lg:mt-5"].join(
              " ",
            )}
            role="group"
            aria-label={t("hero_image_selection")}
          >
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => selectSlide(index)}
                aria-label={common("showImage", { number: index + 1 })}
                aria-pressed={active === index}
                className={[
                  "h-2 rounded-full",
                  "transition-all",
                  "motion-reduce:transition-none",
                  active === index ? "w-7 bg-brand" : "w-2 bg-brand/20",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
