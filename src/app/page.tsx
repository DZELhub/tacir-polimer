
export default function Home() {
  return (
    <main className="container-custom
      section-spacing">
      <p className="mb-4 text-sm
        font-semibold uppercase
        tracking-widest text-forest">
        Tacir Polimer
      </p>

      <h1 className="font-heading
        text-5xl font-bold
        tracking-tight md:text-6xl">
        Connecting Materials.
        <br />
        Creating Opportunities.
      </h1>

      <p className="mt-6 max-w-xl
        text-lg leading-relaxed
        text-charcoal">
        Reliable polymer trading
        and sourcing solutions,
        connecting businesses
        across European markets.
      </p>

      <div className="mt-10 flex
        flex-wrap gap-3">
        <div className="rounded-lg
          bg-brand px-6 py-3
          text-white">
          Brand Green
        </div>

        <div className="rounded-lg
          bg-forest px-6 py-3
          text-white">
          Forest Green
        </div>

        <div className="rounded-lg
          bg-sage px-6 py-3
          text-brand">
          Soft Sage
        </div>
      </div>
    </main>
  );
}
