import ProductPage from "../../../../components/products/[slug]/page";
import type { Metadata } from "next";
import { getLocaleFromCookie, loadMessages } from "@/i18n/server";
import type { Messages } from "@/i18n/server";
import { resolvePath } from "@/i18n/shared";
import data from "../../../../components/products/data.json";

export default function Page({ params }: { params: { slug: string } }) {
  return <ProductPage params={params} />;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const locale = await getLocaleFromCookie();
  const messages: Messages = await loadMessages(locale);
  const brand = String(resolvePath(messages, "navbar.brand_name") || (locale === "ar" ? "شركة القديراني" : "Al-Qudairani Company"));
  const slug = String(params?.slug || "");
  const entry: unknown = (data as Record<string, unknown>)[slug];
  const name = String(resolvePath(messages, `productData.${slug}.name`) || (entry && typeof entry === "object" ? (entry as Record<string, unknown>)["name"] : slug) || slug);
  const description = String(
    resolvePath(messages, `productDescriptions.${slug}`) ||
      (() => {
        if (!entry || typeof entry !== "object") return resolvePath(messages, "hero.description") || "";
        const sections = (entry as Record<string, unknown>)["sections"];
        if (!Array.isArray(sections)) return resolvePath(messages, "hero.description") || "";
        const first = sections[0];
        if (first && typeof first === "object") {
          const d = (first as Record<string, unknown>)["desc"];
          if (typeof d === "string") return d;
        }
        return resolvePath(messages, "hero.description") || "";
      })()
  );
  const image = (() => {
    if (!entry || typeof entry !== "object") return "/icons/13.png";
    const hero = (entry as Record<string, unknown>)["hero"];
    if (hero && typeof hero === "object") {
      const img = (hero as Record<string, unknown>)["image"];
      if (typeof img === "string") return img;
    }
    return "/icons/13.png";
  })();
  return {
    title: `${name} | ${brand}`,
    description,
    alternates: { canonical: `/products/${slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      title: `${name} | ${brand}`,
      description,
      images: [{ url: image, alt: name }],
      locale: locale === "ar" ? "ar" : "en",
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} | ${brand}`,
      description,
      images: [image],
    },
  };
}
