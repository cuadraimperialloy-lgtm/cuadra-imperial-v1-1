"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MexicoFlag, UsaFlag, NetherlandsFlag } from "@/components/ui/Flags";
import { useLocale } from "@/context/LocaleContext";

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

  return (
    <>
      <nav className="fixed top-0 w-full z-40 transition-all duration-300 bg-[#141414]/95 backdrop-blur-md border-b border-[#34312C] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logotipo Oficial Cuadra Imperial Loy (Solo Logo Limpio y Destacado) */}
            <Link href="/" className="flex items-center group py-2" title="Cuadra Imperial Loy">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_10px_rgba(212,175,55,0.25)]">
                <Image
                  src="/images/cuadra-imperial-loy-dorado.svg"
                  alt="Cuadra Imperial Loy"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Enlaces de Navegación */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.16em] text-[#C9C2B5] hover:text-[#D4AF37] transition-colors font-medium py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Banderas visuales (México, USA, Holanda) & Selectores de Moneda/Idioma */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#1D1C1A] border border-[#34312C]">
                <div className="hidden sm:flex items-center gap-2 pr-2 border-r border-[#34312C]" title="Operación: México · USA · Holanda">
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
                  className="px-2 py-0.5 rounded text-[10px] font-mono font-bold text-[#D4AF37] hover:bg-[#141414] transition-colors"
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
                      language === "es" ? "bg-[#D4AF37] text-[#141414]" : "text-[#9A958B]"
                    }`}
                  >
                    ES
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold transition-all ${
                      language === "en" ? "bg-[#D4AF37] text-[#141414]" : "text-[#9A958B]"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              {/* Mobile Hamburger Button */}
              <div className="lg:hidden flex items-center">
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="p-2 text-[#EFEAE1] hover:text-[#D4AF37] transition-colors"
                  aria-label="Abrir Menú"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
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
                  <div className="relative w-12 h-12">
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
                  className="p-2 text-[#EFEAE1] hover:text-[#D4AF37]"
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
                    className="text-lg font-serif tracking-wider uppercase text-[#EFEAE1] hover:text-[#D4AF37] transition-colors py-2 border-b border-[#34312C]/40"
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
                    className="px-2.5 py-1 rounded bg-[#1D1C1A] border border-[#34312C] text-xs font-mono font-bold text-[#D4AF37]"
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
