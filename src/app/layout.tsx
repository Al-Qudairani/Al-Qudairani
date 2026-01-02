import "./globals.css";
import Navbar from "../../components/navbar/page";
import localFont from "next/font/local";
import { Cairo } from "next/font/google";
import { I18nProvider } from "@/i18n/I18nProvider";
import { getLocaleFromCookie, getDirection, loadMessages } from "@/i18n/server";
import type { Messages } from "@/i18n/server";
import { resolvePath } from "@/i18n/shared";
import type { Metadata } from "next";

const expoArabic = localFont({
  src: "../../public/Fonts/alfont_com_AlFont_com_ExpoArabic-Book-1.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-expo",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic"],
  display: "swap",
});

function getBaseUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
    (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : "") ||
    "http://localhost:3000";
  try {
    return new URL(raw);
  } catch {
    return new URL("http://localhost:3000");
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromCookie();
  const messages: Messages = await loadMessages(locale);
  const brand = String(
    resolvePath(messages, "navbar.brand_name") ||
      (locale === "ar" ? "شركة القديراني" : "Al-Qudairani Company")
  );
  const description = String(
    resolvePath(messages, "about.description") ||
      resolvePath(messages, "hero.description") ||
      (locale === "ar"
        ? "شركة القديراني للدواجن في سوريا تقدم منتجات وخدمات متكاملة بجودة عالية."
        : "Al-Qudairani Poultry in Syria provides high-quality integrated products and services.")
  );
  const keywords =
    locale === "ar"
      ? ["الدواجن", "بيض مائدة", "بيض تفقيس", "لحوم دواجن", "أعلاف", "معدات", "لقاحات", "سوريا", "حلب", "الباب", "شركة القديراني"]
      : ["poultry", "table eggs", "hatching eggs", "poultry meat", "feeds", "equipment", "vaccines", "Syria", "Aleppo", "Al-Bab", "Al-Qudairani"];
  const base = getBaseUrl();
  const ogImage = "/icons/13.png";
  return {
    metadataBase: base,
    title: {
      default: brand,
      template: `%s | ${brand}`,
    },
    description,
    applicationName: brand,
    keywords,
    authors: [{ name: brand }],
    creator: brand,
    category: "business",
    alternates: { canonical: "/" },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      type: "website",
      url: base,
      siteName: brand,
      title: brand,
      description,
      locale: locale === "ar" ? "ar" : "en",
      images: [{ url: ogImage, alt: brand }],
    },
    twitter: {
      card: "summary_large_image",
      title: brand,
      description,
      images: [ogImage],
    },
    icons: {
      icon: ["/icons/13.png"],
    },
    viewport: {
      width: "device-width",
      initialScale: 1,
      viewportFit: "cover",
    },
    themeColor: "#FBBF22",
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocaleFromCookie();
  const dir = getDirection(locale);
  const messages = await loadMessages(locale);
  return (
    <html lang={locale} dir={dir} className={expoArabic.variable}>
      <head>
        <link rel="preconnect" href="https://lh3.googleusercontent.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: String(resolvePath(messages, "navbar.brand_name") || (locale === "ar" ? "شركة القديراني" : "Al-Qudairani Company")),
              url: getBaseUrl().origin,
              logo: new URL("/icons/13.png", getBaseUrl()).toString(),
              email: String(resolvePath(messages, "footer.contact.email") || "info@alqudairani.com"),
              address: {
                "@type": "PostalAddress",
                addressCountry: "SY",
                addressLocality: String(resolvePath(messages, "footer.contact.address") || (locale === "ar" ? "سوريا - حلب - الباب" : "Syria - Aleppo - Al-Bab")),
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+963989889025",
                  contactType: "customer service",
                  areaServed: "SY",
                  availableLanguage: [locale],
                },
              ],
            }),
          }}
        />
      </head>
      <body className={cairo.className}>
        <I18nProvider locale={locale} dir={dir} messages={messages}>
          <Navbar/>
          {children}
        </I18nProvider>
        </body>
    </html>
  );
}
