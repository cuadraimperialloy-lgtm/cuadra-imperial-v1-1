"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const WHATSAPP_NUMBER = "523317026066";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const { language } = useLocale();

  const message =
    language === "en"
      ? "Hello. I visited your website and would like to know more about the available Friesian horses."
      : "Buen día. Visité su página web de Cuadra Imperial Loy. Me gustaría conocer más sobre los caballos frisones disponibles.";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Tooltip flotante en escritorio */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden md:flex items-center mr-3 px-3.5 py-2 rounded-full bg-[#1D1C1A]/95 border border-[#D4AF37]/50 shadow-2xl backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] mr-2 animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-[#EFEAE1] whitespace-nowrap">
              {language === "en" ? "Chat on WhatsApp" : "Atención por WhatsApp"}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón Flotante Oro Brillante de Lujo */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#C59B27] via-[#D4AF37] to-[#F5D061] text-[#141414] shadow-[0_8px_25px_rgba(212,175,55,0.45)] hover:shadow-[0_12px_35px_rgba(212,175,55,0.7)] transition-shadow duration-300 border border-[#FFF2CD]/60"
        aria-label="Contactar por WhatsApp a Cuadra Imperial Loy"
      >
        {/* Anillo de pulso sutil */}
        <span className="absolute -inset-1 rounded-full bg-[#D4AF37]/30 animate-ping opacity-75 duration-1000" />

        {/* Brillo metálico shimmer */}
        <span className="absolute inset-0 rounded-full overflow-hidden">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </span>

        {/* Ícono de WhatsApp */}
        <MessageCircle className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 fill-[#141414] stroke-[#141414]" />
      </motion.a>
    </div>
  );
}
