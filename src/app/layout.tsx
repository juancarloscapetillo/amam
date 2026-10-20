import type { Metadata } from "next";
import { Open_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
});

const siteUrl = process.env.RAILWAY_PUBLIC_DOMAIN
  ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Amam — 11 residencias exclusivas en San Ramón Norte, Mérida | MID OBRAS",
  description:
    "Amam: 11 casas independientes en San Ramón Norte, Mérida, sin régimen de condominio. 184 m² de construcción, 186 m² de terreno, 3 recámaras, 3.5 baños y alberca propia. Entrega junio 2027.",
  openGraph: {
    title: "Amam · San Ramón Norte",
    description: "11 residencias exclusivas sin régimen de condominio en el norte de Mérida, Yucatán.",
    images: ["/renders/conjunto.jpg"],
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${openSans.variable} ${dmSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
