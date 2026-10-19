import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="home" className="flex-1">
        <section className="container-custom
          section-spacing">
          <p className="mb-4 text-sm font-semibold
            uppercase tracking-widest text-forest">
            Tacir Polimer
          </p>

          <h1 className="font-heading text-5xl
            font-bold tracking-tight md:text-6xl">
            Connecting Materials.
            <br />
            Creating Opportunities.
          </h1>

          <p className="mt-6 max-w-xl text-lg
            leading-relaxed text-charcoal">
            Reliable polymer trading and sourcing
            solutions, connecting businesses
            across European markets.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
