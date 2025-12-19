import Hero from "../../components/hero/page"
import ProductsSection from "../../components/products/ProductsSection"
import About from "../../components/about/page"
import WhyUs from "../../components/WhyUs/page"
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProductsSection />
      <WhyUs />
    </main>
  );
}
