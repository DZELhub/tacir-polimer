export default function PartnerCard({
  name,
  index,
  total,
}: {
  name: string;
  index: number;
  total: number;
}) {
  return (
    <li
      className={[
        "flex h-22 min-w-0 flex-col items-center justify-center gap-2 rounded-xl border border-[#D4DED4] bg-white px-3 py-3 text-center font-heading text-sm font-semibold leading-5 text-brand shadow-[0_1px_3px_rgb(16_48_16/0.04)] transition-[translate,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-forest/40 hover:shadow-[0_3px_8px_rgb(16_48_16/0.08)] motion-reduce:hover:translate-y-0 motion-reduce:transition-none min-[360px]:col-span-2 sm:px-4 sm:text-base sm:leading-6",
        index === total - 1 ? "min-[360px]:col-start-2 md:col-start-auto" : "",
        index === total - 2 ? "md:col-start-2 xl:col-start-auto" : "",
        index === total - 4 ? "xl:col-start-2" : "",
      ].join(" ")}
    >
      <span className="max-w-full [overflow-wrap:anywhere]">{name}</span>
      <span aria-hidden="true" className="h-0.5 w-6 shrink-0 bg-forest/45" />
    </li>
  );
}
