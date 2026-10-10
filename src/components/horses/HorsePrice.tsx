"use client";

import React from "react";
import { Horse } from "@/data/horses";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "523326060218";

interface HorsePriceProps {
  horse: Horse;
  isCompact?: boolean;
}

export default function HorsePrice({ horse }: HorsePriceProps) {
  const handleAskPrice = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = encodeURIComponent(`Buen día. Me interesa ${horse.name}. ¿Me puede dar su precio?`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <button
        type="button"
        onClick={handleAskPrice}
        className="w-full py-2.5 px-3 rounded bg-[#D4AF37] hover:bg-[#F5D061] text-[#141414] text-xs font-medium uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>Pedir precio por WhatsApp</span>
      </button>
      <span className="font-mono text-[10px] text-[#9A958B] text-center">
        El precio se da por mensaje, el mismo día.
      </span>
    </div>
  );
}
