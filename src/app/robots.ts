import type { MetadataRoute } from "next";

function resolveBase(): URL {
  const fromEnv =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
    (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : "");
  const raw = fromEnv || "https://al-qudairani.com";
  try {
    return new URL(raw);
  } catch {
    return new URL("https://al-qudairani.com");
  }
}

export default function robots(): MetadataRoute.Robots {
  const base = resolveBase();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [new URL("/sitemap.xml", base).toString()],
    host: base.origin,
  };
}
