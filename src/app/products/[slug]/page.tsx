import type { Metadata } from "next";
import Script from "next/script";
import ProductPage from "../../../../components/products/[slug]/page";
import data from "../../../../components/products/data.json";

type Product = {
  slug?: string;
  name?: string;
  hero?: { image?: string; alt?: string };
  sections?: Array<{ title?: string; desc?: string; image?: string }>;
  phones?: string[];
};

export function generateStaticParams() {
  return Object.keys(data).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = (data as Record<string, Product>)[params.slug];
  const title = product?.name ? String(product.name) : "المنتج غير موجود";
  const desc =
    product?.sections?.[0]?.desc
      ? String(product.sections[0].desc)
      : "تفاصيل المنتج وخدماته.";
  const hero = product?.hero?.image ? String(product.hero.image) : "/icons/13.png";
  const heroAlt = product?.hero?.alt ? String(product.hero.alt) : title;
  const safeHero = typeof hero === "string" ? hero.replace(/[\u0600-\u06FF]/g, "") : hero;
  const keywords = [
    "الدواجن",
    "القديراني",
    params.slug,
    title,
  ];

  return {
    title,
    description: desc,
    keywords,
    alternates: {
      canonical: `/products/${params.slug}`,
    },
    openGraph: {
      type: "article",
      url: `/products/${params.slug}`,
      siteName: "شركة القديراني",
      title,
      description: desc,
      images: [{ url: safeHero, alt: heroAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [safeHero],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const product = (data as Record<string, Product>)[params.slug];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const image = product?.hero?.image ? String(product.hero.image).replace(/[\u0600-\u06FF]/g, "") : `${siteUrl}/icons/13.png`;
  const productLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product?.name || params.slug,
    image,
    url: `${siteUrl}/products/${params.slug}`,
    description: product?.sections?.[0]?.desc || "تفاصيل المنتج وخدماته.",
    brand: {
      "@type": "Brand",
      name: "شركة القديراني للدواجن",
    },
  };
  return (
    <>
      <Script id={`ld-json-product-${params.slug}`} type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(productLd)}
      </Script>
      <ProductPage params={params} />
    </>
  );
}
