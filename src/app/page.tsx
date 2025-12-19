import Hero from "../../components/hero/page"
import ProductsSection from "../../components/products/ProductsSection"
import About from "../../components/about/page"
import WhyUs from "../../components/WhyUs/page"
import Partner from "../../components/partner/page"
import Footer from "../../components/Footer/page"
export default function Home() {
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
