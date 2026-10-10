"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { MexicoFlag, UsaFlag, NetherlandsFlag } from "@/components/ui/Flags";

const WHATSAPP_NUMBER = "523317026066";

// Inline Social Media SVGs
const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TikTokIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.77 1.52V6.82a4.85 4.85 0 0 1-1-.13z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-[#EFEAE1] pt-16 pb-12 border-t border-[#34312C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#34312C]">
          
          {/* Main Brand Info */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src="/images/cuadra-imperial-loy-dorado.svg"
                  alt="Cuadra Imperial Loy"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-serif tracking-[0.14em] uppercase text-lg font-semibold text-[#EFEAE1]">
                Cuadra Imperial Loy
              </span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#C9C2B5] leading-relaxed max-w-md">
              Caballos frisones en venta en Zapotlanejo, Jalisco. Entrega en México y Estados Unidos. Trato directo con la cuadra.
            </p>

            {/* Banderas visuales */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5" title="Sede: Jalisco, México">
                <MexicoFlag className="w-5 h-3.5" />
                <span className="font-mono text-[10px] text-[#D4AF37]">México</span>
              </div>
              <span className="text-[#34312C]">•</span>
              <div className="flex items-center gap-1.5" title="Entrega: Estados Unidos">
                <UsaFlag className="w-5 h-3.5" />
                <span className="font-mono text-[10px] text-[#D4AF37]">USA</span>
              </div>
              <span className="text-[#34312C]">•</span>
              <div className="flex items-center gap-1.5" title="Origen: Países Bajos (KFPS)">
                <NetherlandsFlag className="w-5 h-3.5" />
                <span className="font-mono text-[10px] text-[#D4AF37]">Holanda</span>
              </div>
            </div>

            {/* Redes Sociales Oficiales */}
            <div className="pt-2 flex items-center gap-3 text-[#C9C2B5]">
              <a
                href="https://www.facebook.com/CuadraImperialLoy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#1D1C1A] border border-[#34312C] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                title="Facebook Oficial"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/cuadraimperialloy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#1D1C1A] border border-[#34312C] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                title="Instagram Oficial"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@cuadraimperialloy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#1D1C1A] border border-[#34312C] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                title="TikTok Oficial"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#1D1C1A] border border-[#34312C] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                title="WhatsApp Oficial"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Menú de Navegación del PDF */}
          <div className="md:col-span-4 flex flex-col space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              Navegación
            </h4>
            <ul className="space-y-2 font-sans text-xs text-[#C9C2B5]">
              <li><Link href="/caballos" className="hover:text-[#D4AF37] transition-colors">Caballos en venta</Link></li>
              <li><Link href="/#visita" className="hover:text-[#D4AF37] transition-colors">La visita</Link></li>
              <li><Link href="/#garantia" className="hover:text-[#D4AF37] transition-colors">Garantía</Link></li>
              <li><Link href="/#la-cuadra" className="hover:text-[#D4AF37] transition-colors">La cuadra</Link></li>
              <li><Link href="/#entrega" className="hover:text-[#D4AF37] transition-colors">La entrega</Link></li>
              <li><Link href="/#la-raza" className="hover:text-[#D4AF37] transition-colors">La raza KFPS</Link></li>
              <li><Link href="/#preguntas" className="hover:text-[#D4AF37] transition-colors">Preguntas frecuentes</Link></li>
            </ul>
          </div>

          {/* Contacto & Atención */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              Atención Comercial
            </h4>
            <div className="space-y-2 text-xs text-[#C9C2B5]">
              <p>
                <strong className="text-[#EFEAE1] block">Zapotlanejo, Jalisco, México</strong>
                A 38 minutos de Guadalajara.
              </p>
              <p className="pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Buen día. Quisiera pedir información sobre los caballos disponibles.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#D4AF37] hover:underline font-mono"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  +52 33 1702 6066
                </a>
              </p>
              <p className="text-[11px] text-[#9A958B]">
                Atención directa · Respuesta el mismo día
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9A958B] gap-4">
          <p>© 2026 Cuadra Imperial Loy. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacidad" className="hover:text-[#EFEAE1] transition-colors">
              Aviso de privacidad
            </Link>
            <Link href="/terminos" className="hover:text-[#EFEAE1] transition-colors">
              Términos
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
