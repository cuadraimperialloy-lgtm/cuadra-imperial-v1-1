import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/ui/Preloader";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { LocaleProvider } from "@/context/LocaleContext";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: '--font-cormorant'
});

const plexSans = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: '--font-sans'
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: "Caballos frisones en venta en Jalisco | Cuadra Imperial Loy",
  description: "Caballos frisones importados de Holanda, con pasaporte y papeles que pasan a su nombre. En venta en Zapotlanejo, Jalisco. Visita con cita.",
  icons: {
    icon: "/images/cuadra-imperial-loy-dorado.svg",
    apple: "/images/cuadra-imperial-loy-dorado.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${plexSans.variable} ${cormorant.variable} ${plexMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#141414] text-[#EFEAE1] selection:bg-[#D4AF37]/30 selection:text-white font-sans">
        <LocaleProvider>
          <Preloader />
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <WhatsAppButton />
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
