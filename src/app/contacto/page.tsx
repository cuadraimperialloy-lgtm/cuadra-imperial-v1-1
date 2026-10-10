"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle, MapPin, Clock } from "lucide-react";
import VisitaSection from "@/components/home/VisitaSection";

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-[#141414] text-[#EFEAE1] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#9A958B] hover:text-[#D4AF37] transition-colors mb-8 font-mono text-xs uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" /> Volver al Inicio
        </Link>

        {/* Sección Visita & Contacto */}
        <VisitaSection />

      </div>
    </div>
  );
}
