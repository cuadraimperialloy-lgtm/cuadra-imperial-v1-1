"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { HORSES, STATUS_CONFIG } from "@/data/horses";
import { useLocale } from "@/context/LocaleContext";

const WHATSAPP_NUMBER = "523317026066";

export default function InventoryShowcase() {
  const { t, language, currency } = useLocale();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const { clientWidth } = carouselRef.current;
    const scrollAmount = clientWidth > 768 ? clientWidth * 0.5 : clientWidth * 0.85;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  const handleAskPrice = (horseName: string) => {
    const text = encodeURIComponent(
      language === "en"
        ? `Hello. I am interested in ${horseName}. Could you please share the price in ${currency}?`
        : `Buen día. Me interesa ${horseName}. ¿Me puede dar su precio en ${currency}?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const handleCustomSearch = () => {
    const text = encodeURIComponent("Buen día. Busco un caballo frisón específico. ¿Podemos platicar qué tengo en mente?");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const handleNotifyNew = () => {
    const text = encodeURIComponent("Buen día. Quisiera que me avisen cuando llegue un caballo nuevo a la cuadra.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <section id="caballos" className="py-20 sm:py-28 bg-[#141414] text-[#EFEAE1] border-b border-[#34312C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header con Controles de Carrusel (estilo cuadra-imperial.vercel.app) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF37] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{t("catalog.eyebrow")}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[44px] text-[#EFEAE1] font-semibold">
              {t("catalog.title")}{" "}
              <i className="italic font-serif font-normal text-[#D4AF37]">
                {t("catalog.titleItalic")}
              </i>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#C9C2B5] mt-3 max-w-2xl leading-relaxed">
              {t("catalog.subtitle")}
            </p>
          </div>

          {/* Botones de control del carrusel */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full border transition-all ${
                canScrollLeft
                  ? "border-[#D4AF37] text-[#EFEAE1] hover:bg-[#D4AF37] hover:text-[#141414]"
                  : "border-[#34312C] text-[#5F584E] cursor-not-allowed"
              }`}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-3 rounded-full border transition-all ${
                canScrollRight
                  ? "border-[#D4AF37] text-[#EFEAE1] hover:bg-[#D4AF37] hover:text-[#141414]"
                  : "border-[#34312C] text-[#5F584E] cursor-not-allowed"
              }`}
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carrusel Deslizable */}
        <div
          ref={carouselRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {HORSES.map((horse) => {
            const statusStyle = STATUS_CONFIG[horse.status];
            return (
              <div
                key={horse.id}
                className="w-[84vw] sm:w-[360px] lg:w-[380px] shrink-0 snap-start rounded-lg bg-[#1D1C1A] border border-[#34312C] hover:border-[#D4AF37]/60 transition-all flex flex-col overflow-hidden shadow-lg group"
              >
                {/* Visual con Badge y Foto */}
                <div className="relative aspect-[4/3] w-full bg-black/60 overflow-hidden">
                  <Image
                    src={horse.images[0] || "/images/hero.jpg"}
                    alt={horse.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      style={{ backgroundColor: statusStyle.bg, color: statusStyle.text }}
                      className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider shadow"
                    >
                      {horse.status}
                    </span>
                  </div>
                  {!horse.canBeMounted && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="px-2 py-0.5 rounded bg-black/70 border border-[#34312C] text-[10px] font-mono text-[#C9C2B5]">
                        {language === "en" ? "In Training" : "Todavía no se monta"}
                      </span>
                    </div>
                  )}
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[11px] text-[#D4AF37] uppercase tracking-wider block mb-1">
                      {horse.tag}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#EFEAE1] mb-2">
                      {horse.name}
                    </h3>

                    <div className="flex items-center gap-3 text-xs font-mono text-[#9A958B] pb-3 mb-3 border-b border-[#34312C]">
                      <span>{horse.age}</span>
                      <span>·</span>
                      <span>{horse.height}</span>
                      <span>·</span>
                      <span>Capa {horse.coat.toLowerCase()}</span>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-[#C9C2B5] leading-relaxed line-clamp-3 mb-4">
                      {horse.stableNotes}
                    </p>
                  </div>

                  {/* Acciones: Ver más y Pedir Precio */}
                  <div className="pt-3 border-t border-[#34312C] flex flex-col gap-2.5">
                    <Link
                      href={`/caballos/${horse.slug}`}
                      className="w-full py-3 px-4 rounded bg-transparent border border-[#34312C] hover:border-[#D4AF37] text-[#EFEAE1] hover:text-[#D4AF37] text-xs font-medium uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                    >
                      <span>{t("catalog.viewMore")}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleAskPrice(horse.name)}
                      className="w-full py-3 px-4 rounded bg-[#D4AF37] hover:bg-[#F5D061] text-[#141414] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{t("catalog.askPrice")}</span>
                    </button>

                    <p className="font-mono text-[10px] text-[#9A958B] text-center pt-1">
                      {currency === "USD"
                        ? "Price quoted on request in USD/MXN. Guaranteed transparency."
                        : "El precio se da por mensaje en pesos o dólares, el mismo día."}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bloque ¿Busca algo específico? Podemos buscarlo (PDF) */}
        <div className="mt-16 p-8 rounded-lg bg-[#1D1C1A] border border-[#34312C] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-[#EFEAE1] mb-1">
              ¿Busca algo específico? <i className="italic font-normal text-[#D4AF37]">Podemos buscarlo.</i>
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#C9C2B5] max-w-xl">
              Díganos qué edad, alzada o disciplina busca, o regístrese para recibir un aviso una sola vez cuando llegue un ejemplar que coincida.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              type="button"
              onClick={handleCustomSearch}
              className="px-5 py-3 rounded bg-[#D4AF37] hover:bg-[#F5D061] text-[#141414] text-xs font-medium uppercase tracking-wider transition-colors text-center"
            >
              Dígame qué tiene en mente
            </button>
            <button
              type="button"
              onClick={handleNotifyNew}
              className="px-5 py-3 rounded border border-[#34312C] hover:border-[#D4AF37] text-[#EFEAE1] hover:text-[#D4AF37] text-xs font-medium uppercase tracking-wider transition-colors text-center bg-[#141414]"
            >
              Avíseme cuando llegue uno nuevo
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
