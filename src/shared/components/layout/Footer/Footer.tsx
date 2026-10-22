import { useTranslations } from "next-intl";
import {
  company,
  developerCredit,
  navigation as navigationItems,
} from "@/data";

export default function Footer() {
  const t = useTranslations("Footer");

  const navigation = navigationItems
    .filter((item) => item.visibleIn?.includes("footer") ?? true)
    .sort((a, b) => a.order - b.order)
    .map((item) => ({ ...item, label: t(item.translationKey) }));

  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand text-white">
      <div className="container-custom">
        <div
          className={[
            "grid gap-8 py-8",
            "md:grid-cols-2",
            "md:items-start",
            "md:gap-12 md:py-10",
          ].join(" ")}
        >
          {/* Brand and social media */}
          <div>
            <a
              href="#home"
              className={[
                "font-heading text-xl",
                "font-bold tracking-tight",
              ].join(" ")}
            >
              {company.brandName}
            </a>

            <p
              className={["mt-2 text-sm", "leading-6 text-white/70"].join(" ")}
            >
              {t("connecting_materials")}
              <br />
              {t("creating_opportunities")}
            </p>

            <a
              href={company.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("tacir_polimer_on_linkedin")}
              className={[
                "mt-3 inline-flex",
                "h-9 w-9 items-center",
                "justify-center rounded-md",
                "border border-white/25",
                "text-white/80",
                "transition-colors",
                "hover:bg-white/10",
                "hover:text-white",
              ].join(" ")}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  d={
                    "M20.447 20.452h-3.554" +
                    "v-5.569c0-1.328-.027" +
                    "-3.037-1.852-3.037" +
                    "-1.853 0-2.136 1.445" +
                    "-2.136 2.939v5.667" +
                    "H9.35V9h3.414v1.561" +
                    "h.049c.476-.9 1.637" +
                    "-1.85 3.37-1.85 3.601" +
                    " 0 4.267 2.37 4.267" +
                    " 5.455v6.286ZM5.337" +
                    " 7.433a2.062 2.062" +
                    " 0 1 1 0-4.124" +
                    " 2.062 2.062 0 0 1" +
                    " 0 4.124ZM7.119" +
                    " 20.452H3.555V9" +
                    "h3.564v11.452ZM22.225" +
                    " 0H1.771C.792 0 0" +
                    " .774 0 1.729v20.542" +
                    "C0 23.227.792 24" +
                    " 1.771 24h20.451" +
                    "C23.2 24 24 23.227" +
                    " 24 22.271V1.729" +
                    "C24 .774 23.2 0" +
                    " 22.222 0h.003Z"
                  }
                />
              </svg>
            </a>
          </div>

          {/* Compact navigation */}
          <nav
            aria-label={t("footer_navigation")}
            className={["grid grid-cols-2", "gap-x-8 gap-y-3", "pt-1"].join(
              " ",
            )}
          >
            {navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={[
                  "w-fit text-sm",
                  "text-white/75",
                  "transition-colors",
                  "hover:text-white",
                ].join(" ")}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright and developer credit */}
        <div
          className={[
            "flex flex-col gap-2",
            "border-t border-white/20",
            "py-4",
            "md:flex-row",
            "md:items-center",
            "md:justify-between",
          ].join(" ")}
        >
          <p className="text-xs text-white/60">
            © {year} {company.name}.{t("all_rights_reserved")}
          </p>

          <p className="text-xs text-white/60">
            {t("designed_developed_by")}{" "}
            <a
              href={developerCredit.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className={[
                "font-semibold text-white",
                "transition-colors",
                "hover:text-[#B9D8BD]",
              ].join(" ")}
            >
              {developerCredit.label}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
