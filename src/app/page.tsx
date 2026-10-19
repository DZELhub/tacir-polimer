import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Products />
      </main>
      <Footer />
    </>
  );
}
