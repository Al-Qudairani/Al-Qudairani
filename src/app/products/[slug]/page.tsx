import ProductPage from "../../../../components/products/[slug]/page";

export default function Page({ params }: { params: { slug: string } }) {
  return <ProductPage params={params} />;
}

