import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "de", "nl"],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
  alternateLinks: false,
});
