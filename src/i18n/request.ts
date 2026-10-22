import * as rootParams from "next/root-params";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  const requested = locale ?? (await rootParams.locale());
  if (!hasLocale(routing.locales, requested)) notFound();
  return {
    locale: requested,
    messages: (await import(`../locales/${requested}.json`)).default,
    timeZone: "Europe/Istanbul",
  };
});
