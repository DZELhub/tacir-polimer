import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { BackToTop } from "@/shared";
import { company } from "@/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "Common" });
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  const base = configured ? new URL(configured) : undefined;
  if (base && !["https:", "http:"].includes(base.protocol))
    throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTP(S) URL");
  return {
    title: t("title"),
    description: t("description"),
    ...(base
      ? {
          metadataBase: base,
          alternates: {
            canonical: "/" + locale,
            languages: { en: "/en", de: "/de", nl: "/nl", "x-default": "/en" },
          },
        }
      : {}),
    robots: { index: Boolean(base), follow: Boolean(base) },
    openGraph: {
      title: t("title"),
      description: t("description"),
      siteName: company.name,
      type: "website",
      locale: { en: "en_GB", de: "de_DE", nl: "nl_NL" }[locale],
      alternateLocale: routing.locales
        .filter((value) => value !== locale)
        .map((value) => ({ en: "en_GB", de: "de_DE", nl: "nl_NL" })[value]),
      ...(base ? { url: new URL("/" + locale, base) } : {}),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const messages = await getMessages();
  const t = await getTranslations("Common");
  return (
    <html lang={locale}>
      <body
        className={
          `${inter.variable} ` +
          `${manrope.variable} ` +
          "flex min-h-screen flex-col " +
          "antialiased"
        }
      >
        <a className="skip-link" href="#main-content">
          {t("skip")}
        </a>
        <NextIntlClientProvider
          messages={Object.fromEntries(
            (
              ["Navbar", "Hero", "Products", "ContactForm", "Common"] as const
            ).map((key) => [key, messages[key]]),
          )}
        >
          {children}
          <BackToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
