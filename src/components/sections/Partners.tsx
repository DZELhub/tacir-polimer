import { useTranslations } from "next-intl";
import Image from "next/image";
import { partners } from "@/data/partners";

export default function Partners() {
  const t = useTranslations("Partners");

  return (
    <section
      id="partners"
      aria-labelledby="partners-title"
      className="bg-sage py-10 sm:py-12 lg:py-16"
    >
      <div className="container-custom">
        <div className="relative isolate mb-6 sm:mb-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 right-0 bottom-0 -z-10 hidden w-1/2 overflow-hidden opacity-[0.12] md:block lg:-top-16 lg:w-[55%] lg:opacity-[0.18]"
          >
            <Image
              src="/images/decorations/world-network.svg"
              alt=""
              aria-hidden="true"
              fill
              unoptimized
              sizes="(min-width: 1280px) 660px, (min-width: 1024px) 55vw, 50vw"
              className="object-contain object-right-top"
            />
          </div>
          <div className="max-w-2xl">
            <p className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-forest lg:text-xs">
              <span aria-hidden="true" className="h-px w-8 shrink-0 bg-forest" />
              {t("eyebrow")}
            </p>
            <h2
              id="partners-title"
              className="font-heading text-[1.75rem] font-bold leading-tight tracking-tight text-brand sm:text-4xl"
            >
              {t("heading")}
            </h2>
            <p className="mt-3 text-sm leading-6 text-charcoal/80 sm:text-base sm:leading-7">
              {t("description")}
            </p>
          </div>
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 gap-3 min-[360px]:grid-cols-4 md:grid-cols-6 xl:grid-cols-10 xl:gap-4"
        >
          {/* Two tracks per card allow half-column offsets for incomplete rows. */}
          {partners.map((name, index) => (
            <li
              key={name}
              className={[
                "flex h-22 min-w-0 flex-col items-center justify-center gap-2 rounded-xl border border-[#D4DED4] bg-white px-3 py-3 text-center font-heading text-sm font-semibold leading-5 text-brand shadow-[0_1px_3px_rgb(16_48_16/0.04)] transition-[translate,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-forest/40 hover:shadow-[0_3px_8px_rgb(16_48_16/0.08)] motion-reduce:hover:translate-y-0 motion-reduce:transition-none min-[360px]:col-span-2 sm:px-4 sm:text-base sm:leading-6",
                index === partners.length - 1
                  ? "min-[360px]:col-start-2 md:col-start-auto"
                  : "",
                index === partners.length - 2
                  ? "md:col-start-2 xl:col-start-auto"
                  : "",
                index === partners.length - 4 ? "xl:col-start-2" : "",
              ].join(" ")}
            >
              <span className="max-w-full [overflow-wrap:anywhere]">{name}</span>
              <span aria-hidden="true" className="h-0.5 w-6 shrink-0 bg-forest/45" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
