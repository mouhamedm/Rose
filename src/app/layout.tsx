import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/ui/Preloader";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/ui/LenisProvider";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ROSÉ | Prêt-à-porter féminin",
    template: "%s | ROSÉ",
  },
  description:
    "ROSÉ, maison de prêt-à-porter féminin. Découvrez notre collection de robes et ensembles dans un univers chic, doux et contemporain.",
  keywords: ["mode femme", "robes", "prêt-à-porter", "ROSÉ", "collection"],
  openGraph: {
    title: "ROSÉ | Prêt-à-porter féminin",
    description: "Découvrez la collection ROSÉ | élégance et féminité.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body>
        <Preloader />
        <CustomCursor />
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
