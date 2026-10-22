"use client";
import { useEffect, useState } from "react";
import { HERO_SLIDE_INTERVAL } from "@/data";
export function useHeroCarousel(slideCount: number) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
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
      setActive((current) => (current + 1) % slideCount);
    }, HERO_SLIDE_INTERVAL);

    return () => {
      window.clearTimeout(timer);
    };
  }, [active, paused, pageVisible, slideCount]);

  return { active, setActive, setHovered, setFocused };
}
