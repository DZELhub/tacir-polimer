
import {
  ArrowUpRight,
  ArrowLeftRight,
  Recycle,
  SearchCheck,
} from "lucide-react";

const solutions = [
  {
    number: "01",
    title: "Polymer Trading",
    description:
      "Connecting businesses with polymer " +
      "materials through international " +
      "trading relationships and a " +
      "market-focused approach.",
    icon: ArrowLeftRight,
  },
  {
    number: "02",
    title: "Recycling Initiatives",
    description:
      "Exploring recycling-oriented " +
      "material opportunities to support " +
      "more resource-conscious " +
      "industrial practices.",
    icon: Recycle,
  },
  {
    number: "03",
    title: "Custom Sourcing",
    description:
      "Helping businesses identify " +
      "polymer materials that align " +
      "with their specific requirements " +
      "and applications.",
    icon: SearchCheck,
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className={[
        "scroll-mt-20 bg-surface",
        "py-10 sm:py-12 lg:py-20",
      ].join(" ")}
    >
      <div className="container-custom">
        <div
          className={[
            "mb-6 max-w-2xl",
            "lg:mb-12",
          ].join(" ")}
        >
          <p
            className={[
              "mb-2 text-[11px]",
              "font-semibold uppercase",
              "tracking-[0.18em]",
              "text-forest",
              "lg:mb-3",
            ].join(" ")}
          >
            WHAT WE DO
          </p>

          <h2
            className={[
              "font-heading text-[1.75rem]",
              "font-bold tracking-tight",
              "text-brand",
              "sm:text-4xl",
            ].join(" ")}
          >
            Our Solutions
          </h2>

          <p
            className={[
              "mt-3 text-sm leading-6",
              "text-charcoal/75",
              "sm:mt-4 sm:leading-7",
              "sm:text-base",
            ].join(" ")}
          >
            Supporting industrial
            businesses through polymer
            trading, material sourcing,
            and responsible resource
            initiatives.
          </p>
        </div>

        <div
          className={[
            "grid gap-3",
            "md:grid-cols-3",
            "lg:gap-5",
          ].join(" ")}
        >
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <article
                key={solution.number}
                className={[
                  "group rounded-xl bg-white",
                  "border border-brand/10",
                  "p-4 sm:p-5",
                  "md:flex md:flex-col",
                  "lg:p-8",
                  "transition-colors",
                  "hover:border-brand/25",
                ].join(" ")}
              >
                <div
                  className={[
                    "flex items-start",
                    "gap-3",
                    "md:mb-8",
                    "md:justify-between",
                    "lg:mb-12",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "flex h-10 w-10",
                      "shrink-0 items-center",
                      "justify-center",
                      "rounded-lg bg-sage",
                      "text-brand",
                      "lg:h-12 lg:w-12",
                    ].join(" ")}
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>

                  <div
                    className={[
                      "min-w-0 flex-1",
                      "md:hidden",
                    ].join(" ")}
                  >
                    <h3
                      className={[
                        "font-heading text-base",
                        "font-bold text-brand",
                      ].join(" ")}
                    >
                      {solution.title}
                    </h3>

                    <p
                      className={[
                        "mt-1.5 text-xs",
                        "leading-5",
                        "text-charcoal/75",
                      ].join(" ")}
                    >
                      {solution.description}
                    </p>

                    <a
                      href="#contact"
                      className={[
                        "mt-3 inline-flex",
                        "items-center gap-1",
                        "text-xs font-semibold",
                        "text-forest",
                      ].join(" ")}
                    >
                      Get in Touch
                      <ArrowUpRight
                        size={14}
                        aria-hidden="true"
                      />
                    </a>
                  </div>

                  <span
                    className={[
                      "ml-auto text-[11px]",
                      "font-semibold",
                      "text-brand/35",
                      "md:ml-0",
                    ].join(" ")}
                  >
                    {solution.number}
                  </span>
                </div>

                <div
                  className={[
                    "hidden md:flex",
                    "md:flex-1",
                    "md:flex-col",
                  ].join(" ")}
                >
                  <h3
                    className={[
                      "font-heading text-xl",
                      "font-bold text-brand",
                    ].join(" ")}
                  >
                    {solution.title}
                  </h3>

                  <p
                    className={[
                      "mt-3 flex-1",
                      "text-sm leading-7",
                      "text-charcoal/75",
                    ].join(" ")}
                  >
                    {solution.description}
                  </p>

                  <a
                    href="#contact"
                    className={[
                      "mt-8 inline-flex",
                      "w-fit items-center",
                      "gap-2 text-xs",
                      "font-semibold",
                      "text-forest",
                      "hover:underline",
                      "underline-offset-4",
                    ].join(" ")}
                  >
                    Get in Touch
                    <ArrowUpRight
                      size={15}
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
