import "./globals.css";
import { Cairo } from "next/font/google";
import Navbar from "../../components/navbar/page";

const cairo = Cairo({ subsets: ["arabic", "latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.className}>
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
