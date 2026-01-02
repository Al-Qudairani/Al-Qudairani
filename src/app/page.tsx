import Hero from "../../components/hero/page"
import ProductsSection from "../../components/products/ProductsSection"
import About from "../../components/about/page"
import WhyUs from "../../components/WhyUs/page"
import Partner from "../../components/partner/page"
import Footer from "../../components/footer/page"
export const revalidate = 3600;
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
