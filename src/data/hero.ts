import type messages from "@/locales/en.json";
export interface HeroSlide {
  readonly src: string;
  readonly altKey: keyof typeof messages.Hero;
}
export const heroSlides = [
  {
    src: "/images/hero/polymer-granules-01.webp",
    altKey: "translucent_polymer_pellets",
  },
  {
    src: "/images/hero/polymer-granules-02.webp",
    altKey: "white_polymer_granules",
  },
  {
    src: "/images/hero/polymer-granules-03.webp",
    altKey: "natural_polymer_resin_pellets",
  },
] as const satisfies readonly HeroSlide[];
export const HERO_SLIDE_INTERVAL = 6500;
