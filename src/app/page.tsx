import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Products />
        <Reviews />
        <About />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </>
  );
}
