import "./globals.css";
import Navbar from "../../components/navbar/page";
import localFont from "next/font/local";
import { I18nProvider } from "@/i18n/I18nProvider";
import { getLocaleFromCookie, getDirection, loadMessages } from "@/i18n/server";

const expoArabic = localFont({
  src: "../../public/Fonts/alfont_com_AlFont_com_ExpoArabic-Book-1.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-expo",
  display: "swap",
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocaleFromCookie();
  const dir = getDirection(locale);
  const messages = await loadMessages(locale);
  return (
    <html lang={locale} dir={dir} className={expoArabic.variable}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body>
        <I18nProvider locale={locale} dir={dir} messages={messages}>
          <Navbar/>
          {children}
        </I18nProvider>
        </body>
    </html>
  );
}
