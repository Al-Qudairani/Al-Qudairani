import "./globals.css";
import Navbar from "../../components/navbar/page";
import localFont from "next/font/local";

const expoArabic = localFont({
  src: "../../public/Fonts/alfont_com_AlFont_com_ExpoArabic-Book-1.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-expo",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={expoArabic.variable}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
