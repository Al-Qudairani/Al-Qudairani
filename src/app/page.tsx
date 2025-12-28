'use client';
import { useEffect } from "react";
import Hero from "../../components/hero/page"
import ProductsSection from "../../components/products/ProductsSection"
import About from "../../components/about/page"
import WhyUs from "../../components/WhyUs/page"
import Partner from "../../components/partner/page"
import Footer from "../../components/footer/page"
export default function Home() {
  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash?.slice(1) : "";
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);
  return (
    <main>
      <Hero />
      <About />
      <ProductsSection />
      <WhyUs />
      <Partner />
      <Footer />
    </main>
  );
}
