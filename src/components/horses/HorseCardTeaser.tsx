"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Horse, STATUS_CONFIG } from "@/data/horses";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "523326060218";

interface HorseCardTeaserProps {
  horse: Horse;
}

export default function HorseCardTeaser({ horse }: HorseCardTeaserProps) {
  const statusStyle = STATUS_CONFIG[horse.status];

  const handleAskPrice = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const text = encodeURIComponent(`Buen día. Me interesa ${horse.name}. ¿Me puede dar su precio?`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <div className="rounded-lg bg-[#1D1C1A] border border-[#34312C] hover:border-[#A8894F]/50 transition-all flex flex-col overflow-hidden shadow-sm">
      <div className="relative aspect-[4/3] w-full bg-black/60">
        <Image
          src={horse.images[0] || "/images/hero.jpg"}
          alt={horse.name}
          fill
          className="object-cover"
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
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="font-mono text-[11px] text-[#A8894F] uppercase tracking-wider block mb-1">
            {horse.tag}
          </span>
          <h3 className="font-serif text-2xl font-semibold text-[#EFEAE1] mb-2">
            {horse.name}
          </h3>

          <div className="flex items-center gap-3 text-xs font-mono text-[#9A958B] pb-3 mb-3 border-b border-[#34312C]">
            <span>{horse.age}</span>
            <span>·</span>
            <span>{horse.height}</span>
            <span>·</span>
            <span>Capa {horse.coat.toLowerCase()}</span>
          </div>

          <p className="font-sans text-xs text-[#C9C2B5] leading-relaxed line-clamp-3 mb-4">
            {horse.stableNotes}
          </p>
        </div>

        <div className="pt-3 border-t border-[#34312C] flex flex-col gap-2">
          <Link
            href={`/caballos/${horse.slug}`}
            className="w-full py-2.5 px-3 rounded bg-transparent border border-[#34312C] hover:border-[#A8894F] text-[#EFEAE1] hover:text-[#A8894F] text-xs font-medium uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Conocer a {horse.name}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <button
            type="button"
            onClick={handleAskPrice}
            className="w-full py-2.5 px-3 rounded bg-[#A8894F] hover:bg-[#BFA063] text-[#141414] text-xs font-medium uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Pedir precio por WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
