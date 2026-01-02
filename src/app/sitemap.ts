import type { MetadataRoute } from "next";
import data from "../../components/products/data.json";

function resolveBase(): URL {
  const fromEnv =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
    (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : "");
  const raw = fromEnv || "http://localhost:3000";
  try {
    return new URL(raw);
  } catch {
    return new URL("http://localhost:3000");
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = resolveBase();
  const now = new Date();
  const items: MetadataRoute.Sitemap = [
    { url: new URL("/", base).toString(), lastModified: now },
    { url: new URL("/ar", base).toString(), lastModified: now },
    { url: new URL("/en", base).toString(), lastModified: now },
  ];
  const slugs = Object.keys(data as Record<string, unknown>);
  for (const slug of slugs) {
    items.push({
      url: new URL(`/products/${slug}`, base).toString(),
      lastModified: now,
    });
  }
  return items;
}
