import Hero from "../../components/hero/page"
import ProductsSection from "../../components/products/ProductsSection"
import About from "../../components/about/page"
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProductsSection />
    </main>
  );
}
