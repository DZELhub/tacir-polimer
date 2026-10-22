import { Navbar, Footer } from "@/shared";
import {
  Hero,
  Products,
  About,
  Stats,
  Solutions,
  Principles,
  Partners,
  Contact,
} from "@/sections";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content" tabIndex={-1} className="flex-1">
        <Hero />
        <Products />
        <About />
        <Stats />
        <Solutions />
        <Principles />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
