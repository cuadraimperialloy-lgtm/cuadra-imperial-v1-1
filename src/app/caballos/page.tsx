"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowRight, ArrowLeft, Filter, Search, RotateCcw } from "lucide-react";
import { HORSES, STATUS_CONFIG } from "@/data/horses";
import { useLocale } from "@/context/LocaleContext";

const WHATSAPP_NUMBER = "523317026066";

export default function CaballosCatalogPage() {
  const { language, currency } = useLocale();
  const [selectedLevel, setSelectedLevel] = useState<string>("TODOS");
  const [selectedGender, setSelectedGender] = useState<string>("TODOS");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"defecto" | "edad" | "alzada">("defecto");

  const filteredHorses = useMemo(() => {
    return HORSES.filter((horse) => {
      if (selectedLevel !== "TODOS" && horse.level !== selectedLevel) return false;
      if (selectedGender !== "TODOS" && horse.gender !== selectedGender) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          horse.name.toLowerCase().includes(q) ||
          horse.tag.toLowerCase().includes(q) ||
          horse.level.toLowerCase().includes(q) ||
          horse.stableNotes.toLowerCase().includes(q);
        if (!matches) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "edad") return parseInt(b.age) - parseInt(a.age);
      if (sortBy === "alzada") return parseFloat(b.height) - parseFloat(a.height);
      return 0;
    });
  }, [selectedLevel, selectedGender, searchQuery, sortBy]);

  const handleAskPrice = (horseName: string) => {
    const text = encodeURIComponent(
      language === "en"
        ? `Hello. I am interested in ${horseName}. Could you please send me the price in ${currency}?`
        : `Buen día. Me interesa ${horseName}. ¿Me puede dar su precio en ${currency}?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const resetFilters = () => {
    setSelectedLevel("TODOS");
    setSelectedGender("TODOS");
    setSearchQuery("");
    setSortBy("defecto");
  };

  return (
    <div className="min-h-screen bg-[#141414] text-[#EFEAE1] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header tipo Tienda Boutique Shopify */}
        <div className="mb-10 pb-8 border-b border-[#34312C]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#9A958B] hover:text-[#D4AF37] transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al inicio</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-2 block">
                Catálogo Oficial KFPS · Jalisco
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-[#EFEAE1]">
                Caballos Frisones en Venta
              </h1>
            </div>
            <p className="font-mono text-xs text-[#9A958B]">
              Mostrando {filteredHorses.length} de {HORSES.length} ejemplares disponibles
            </p>
          </div>
        </div>

        {/* Barra de Filtros y Búsqueda (Shopify Luxury Layout) */}
        <div className="bg-[#1D1C1A] p-4 sm:p-5 rounded-lg border border-[#34312C] mb-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 shadow-sm">
          
          {/* Buscador */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#9A958B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nombre, nivel o características..."
              className="w-full bg-[#141414] border border-[#34312C] focus:border-[#D4AF37] rounded pl-10 pr-4 py-2.5 text-xs text-[#EFEAE1] focus:outline-none transition-colors font-sans"
            />
          </div>

          {/* Filtros por Nivel y Sexo */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-mono text-[#9A958B] uppercase">Nivel:</span>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="bg-[#141414] border border-[#34312C] rounded px-3 py-1.5 text-xs text-[#EFEAE1] focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="TODOS">Todos los niveles</option>
                <option value="Bailador">Bailador</option>
                <option value="Montado">Montado</option>
                <option value="Potro">Potro</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-mono text-[#9A958B] uppercase">Sexo:</span>
              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="bg-[#141414] border border-[#34312C] rounded px-3 py-1.5 text-xs text-[#EFEAE1] focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="TODOS">Todos</option>
                <option value="Entero">Entero</option>
                <option value="Castrado">Castrado</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-mono text-[#9A958B] uppercase">Ordenar:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#141414] border border-[#34312C] rounded px-3 py-1.5 text-xs text-[#EFEAE1] focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="defecto">Recomendados</option>
                <option value="edad">Mayor a menor edad</option>
                <option value="alzada">Mayor alzada</option>
              </select>
            </div>

            {(selectedLevel !== "TODOS" || selectedGender !== "TODOS" || searchQuery) && (
              <button
                type="button"
                onClick={resetFilters}
                className="p-2 rounded border border-[#34312C] text-[#9A958B] hover:text-[#D4AF37] transition-colors"
                title="Limpiar filtros"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* Cuadrícula de Productos */}
        {filteredHorses.length === 0 ? (
          <div className="p-12 text-center rounded-lg bg-[#1D1C1A] border border-[#34312C]">
            <p className="font-serif text-xl text-[#EFEAE1] mb-2">No se encontraron caballos con esos criterios</p>
            <p className="font-sans text-xs text-[#9A958B] mb-4">Pruebe limpiando los filtros para ver el catálogo completo.</p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 rounded bg-[#D4AF37] text-[#141414] text-xs font-bold uppercase tracking-wider"
            >
              Ver todos los ejemplares
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredHorses.map((horse) => {
              const statusStyle = STATUS_CONFIG[horse.status];
              return (
                <div
                  key={horse.id}
                  className="rounded-lg bg-[#1D1C1A] border border-[#34312C] hover:border-[#D4AF37]/60 transition-all flex flex-col overflow-hidden shadow-sm group"
                >
                  {/* Foto de Producto con Efecto Hover */}
                  <Link href={`/caballos/${horse.slug}`} className="relative aspect-[4/3] w-full bg-black/60 overflow-hidden block">
                    <Image
                      src={horse.images[0] || "/images/hero.jpg"}
                      alt={horse.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 z-10">
                      <span
                        style={{ backgroundColor: statusStyle.bg, color: statusStyle.text }}
                        className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider"
                      >
                        {horse.status}
                      </span>
                    </div>
                    {!horse.canBeMounted && (
                      <div className="absolute top-3 right-3 z-10">
                        <span className="px-2 py-0.5 rounded bg-black/70 border border-[#34312C] text-[10px] font-mono text-[#C9C2B5]">
                          Todavía no se monta
                        </span>
                      </div>
                    )}
                  </Link>

                  {/* Ficha de Producto */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-[11px] text-[#D4AF37] uppercase tracking-wider block mb-1">
                        {horse.tag}
                      </span>
                      <h2 className="font-serif text-2xl font-semibold text-[#EFEAE1] mb-2 group-hover:text-[#D4AF37] transition-colors">
                        <Link href={`/caballos/${horse.slug}`}>{horse.name}</Link>
                      </h2>

                      <div className="flex items-center gap-3 text-xs font-mono text-[#9A958B] pb-3 mb-3 border-b border-[#34312C]">
                        <span>{horse.age}</span>
                        <span>·</span>
                        <span>{horse.height}</span>
                        <span>·</span>
                        <span>{horse.gender}</span>
                      </div>

                      <p className="font-sans text-xs text-[#C9C2B5] leading-relaxed line-clamp-3 mb-4">
                        {horse.stableNotes}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#34312C] flex flex-col gap-2">
                      <Link
                        href={`/caballos/${horse.slug}`}
                        className="w-full py-2.5 px-3 rounded bg-transparent border border-[#34312C] hover:border-[#D4AF37] text-[#EFEAE1] hover:text-[#D4AF37] text-xs font-medium uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span>Ver ficha de producto</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <button
                        type="button"
                        onClick={() => handleAskPrice(horse.name)}
                        className="w-full py-2.5 px-3 rounded bg-[#D4AF37] hover:bg-[#F5D061] text-[#141414] text-xs font-medium uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Pedir precio por WhatsApp</span>
                      </button>

                      <p className="font-mono text-[10px] text-[#9A958B] text-center pt-1">
                        Cotización en {currency} el mismo día.
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
