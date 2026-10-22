"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { heroSlides } from "@/data";
import { useHeroCarousel } from "../hooks/useHeroCarousel";
export default function HeroCarousel() {
  const t = useTranslations("Hero");
  const common = useTranslations("Common");
  const slides = heroSlides.map((slide) => ({
    ...slide,
    alt: t(slide.altKey),
  }));
  const { active, setActive, setHovered, setFocused } = useHeroCarousel(
    slides.length,
  );
  return (
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
        className={["mt-3 flex", "justify-center gap-2", "lg:mt-5"].join(" ")}
        role="group"
        aria-label={t("hero_image_selection")}
      >
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActive(index)}
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
  );
}
