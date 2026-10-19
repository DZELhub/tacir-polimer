
const stats = [
  {
    value: "20K+",
    label: "Tons",
  },
  {
    value: "10+",
    label: "Plastic Types",
  },
  {
    value: "24+",
    label: "Countries",
  },
  {
    value: "200+",
    label: "Connections",
  },
];

export default function Stats() {
  return (
    <section
      aria-label="Tacir Polimer in numbers"
      className="bg-brand py-10 lg:py-14"
    >
      <div className="container-custom">
        <p
          className={[
            "mb-7 text-center",
            "text-[11px] font-semibold",
            "uppercase tracking-[0.18em]",
            "text-white/65",
            "lg:mb-9",
          ].join(" ")}
        >
          TACIR POLIMER IN NUMBERS
        </p>

        <div
          className={[
            "grid grid-cols-2",
            "gap-x-5 gap-y-8",
            "lg:grid-cols-4",
            "lg:gap-0",
          ].join(" ")}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={[
                "text-center",
                "lg:px-6",
                index !== 0
                  ? "lg:border-l lg:border-white/15"
                  : "",
              ].join(" ")}
            >
              <p
                className={[
                  "font-heading font-bold",
                  "text-3xl tracking-tight",
                  "text-white",
                  "sm:text-4xl",
                  "lg:text-[2.75rem]",
                ].join(" ")}
              >
                {stat.value}
              </p>

              <p
                className={[
                  "mt-2 text-xs",
                  "font-medium",
                  "text-white/70",
                  "sm:text-sm",
                ].join(" ")}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
