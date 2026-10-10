"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MexicoFlag, UsaFlag, NetherlandsFlag } from "@/components/ui/Flags";
import { useLocale } from "@/context/LocaleContext";

const WHATSAPP_NUMBER = "523317026066";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, currency, setCurrency, t } = useLocale();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: t("nav.horses"), href: "/#caballos" },
    { name: t("nav.visit"), href: "/#visita" },
    { name: t("nav.warranty"), href: "/#garantia" },
    { name: t("nav.stud"), href: "/#la-cuadra" },
  ];

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      language === "en"
        ? "Hello. I visited your website and would like to know more about the available Friesian horses."
        : "Buen día. Llegué a su página web. Me gustaría conocer más sobre los caballos frisones disponibles."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#141414]/95 backdrop-blur-md border-b border-[#34312C] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logotipo Oficial Cuadra Imperial Loy */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src="/images/cuadra-imperial-loy-dorado.svg"
                  alt="Cuadra Imperial Loy"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.16em] uppercase text-sm sm:text-base font-semibold text-[#EFEAE1]">
                  Cuadra Imperial Loy
                </span>
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#A8894F] uppercase">
                  Zapotlanejo, Jalisco · Países Bajos
                </span>
              </div>
            </Link>

            {/* Enlaces de Navegación del PDF */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.14em] text-[#C9C2B5] hover:text-[#A8894F] transition-colors font-medium py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Banderas visuales (México, USA, Holanda) & Selectores */}
            <div className="hidden xl:flex items-center gap-3 px-3 py-1.5 rounded-full bg-[#1D1C1A] border border-[#34312C]">
              <div className="flex items-center gap-2 pr-2 border-r border-[#34312C]" title="Operación: México · USA · Holanda">
                <div className="flex items-center gap-1" title="México (Sede Jalisco)">
                  <MexicoFlag className="w-4 h-3" />
                  <span className="text-[10px] font-mono text-[#9A958B]">MX</span>
                </div>
                <div className="flex items-center gap-1" title="Estados Unidos (Entrega)">
                  <UsaFlag className="w-4 h-3" />
                  <span className="text-[10px] font-mono text-[#9A958B]">USA</span>
                </div>
                <div className="flex items-center gap-1" title="Países Bajos (Origen KFPS)">
                  <NetherlandsFlag className="w-4 h-3" />
                  <span className="text-[10px] font-mono text-[#9A958B]">NL</span>
                </div>
              </div>

              {/* Selector de Moneda */}
              <button
                type="button"
                onClick={() => setCurrency(currency === "MXN" ? "USD" : "MXN")}
                className="px-2 py-0.5 rounded text-[10px] font-mono font-bold text-[#A8894F] hover:bg-[#141414] transition-colors"
                title="Cambiar moneda"
              >
                {currency}
              </button>

              {/* Selector de Idioma */}
              <div className="flex items-center rounded-full bg-[#141414] p-0.5 border border-[#34312C]">
                <button
                  type="button"
                  onClick={() => setLanguage("es")}
                  className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold transition-all ${
                    language === "es" ? "bg-[#A8894F] text-[#141414]" : "text-[#9A958B]"
                  }`}
                >
                  ES
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold transition-all ${
                    language === "en" ? "bg-[#A8894F] text-[#141414]" : "text-[#9A958B]"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            {/* Botón WhatsApp */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#A8894F] hover:bg-[#BFA063] text-[#141414] font-medium text-xs tracking-wider uppercase transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t("nav.whatsapp")}</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="p-2 text-[#EFEAE1] hover:text-[#A8894F] transition-colors"
                aria-label="Abrir Menú"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Menú Desplegable Móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#141414] text-[#EFEAE1] p-6 flex flex-col justify-between overflow-y-auto"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#34312C]">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <Image
                      src="/images/cuadra-imperial-loy-dorado.svg"
                      alt="Cuadra Imperial Loy"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-serif tracking-[0.14em] uppercase text-sm font-semibold text-[#EFEAE1]">
                    Cuadra Imperial Loy
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-[#EFEAE1] hover:text-[#A8894F]"
                  aria-label="Cerrar Menú"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Enlaces de Navegación */}
              <div className="py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-serif tracking-wider uppercase text-[#EFEAE1] hover:text-[#A8894F] transition-colors py-2 border-b border-[#34312C]/40"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Banderas e Idioma en Móvil */}
              <div className="py-4 border-t border-[#34312C] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MexicoFlag className="w-5 h-3.5" />
                  <UsaFlag className="w-5 h-3.5" />
                  <NetherlandsFlag className="w-5 h-3.5" />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setCurrency(currency === "MXN" ? "USD" : "MXN")}
                    className="px-2.5 py-1 rounded bg-[#1D1C1A] border border-[#34312C] text-xs font-mono font-bold text-[#A8894F]"
                  >
                    {currency}
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage(language === "es" ? "en" : "es")}
                    className="px-2.5 py-1 rounded bg-[#1D1C1A] border border-[#34312C] text-xs font-mono font-bold text-[#EFEAE1]"
                  >
                    {language.toUpperCase()}
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#34312C] flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  handleWhatsAppClick();
                }}
                className="w-full py-3.5 bg-[#A8894F] text-[#141414] rounded font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contactar por WhatsApp</span>
              </button>
              <p className="text-center font-mono text-[10px] text-[#9A958B]">
                Zapotlanejo, Jalisco · Entrega en México y USA
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
