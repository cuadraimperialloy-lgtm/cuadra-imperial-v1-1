"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  MessageCircle,
  Share2,
  Calendar,
  Volume2,
  AlertCircle,
  Download,
  FileCheck2,
  CheckCircle2
} from "lucide-react";
import { jsPDF } from "jspdf";
import { HORSES, STATUS_CONFIG, Horse } from "@/data/horses";
import VisitaSection from "@/components/home/VisitaSection";
import GarantiaSection from "@/components/home/GarantiaSection";
import { useLocale } from "@/context/LocaleContext";

const WHATSAPP_NUMBER = "523317026066";

interface HorseDetailClientProps {
  horse: Horse;
}

export default function HorseDetailClient({ horse }: HorseDetailClientProps) {
  const { language, currency } = useLocale();
  const [activePhoto, setActivePhoto] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const statusStyle = STATUS_CONFIG[horse.status];
  const otherHorses = HORSES.filter((h) => h.id !== horse.id);

  // Generador de PDF oficial de alta gama para asesores y caballerangos
  const generateHorsePdf = () => {
    setIsGeneratingPdf(true);
    try {
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });

      // Paleta
      const gold = [168, 137, 79];
      const dark = [20, 20, 20];
      const gray = [90, 85, 78];

      // Fondo superior
      doc.setFillColor(dark[0], dark[1], dark[2]);
      doc.rect(0, 0, 210, 42, "F");

      // Encabezado
      doc.setTextColor(gold[0], gold[1], gold[2]);
      doc.setFont("times", "bold");
      doc.setFontSize(20);
      doc.text("CUADRA IMPERIAL LOY", 105, 18, { align: "center" });

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(239, 234, 225);
      doc.text("ZAPOTLANEJO, JALISCO · IMPORTADOS DE HOLANDA · REGISTRO OFICIAL KFPS", 105, 26, { align: "center" });
      doc.text("FICHA TÉCNICA Y RESUMEN PARA ASESOR / CABALLERANGO", 105, 33, { align: "center" });

      // Línea divisoria dorada
      doc.setDrawColor(gold[0], gold[1], gold[2]);
      doc.setLineWidth(0.8);
      doc.line(15, 46, 195, 46);

      // Título del caballo
      doc.setTextColor(dark[0], dark[1], dark[2]);
      doc.setFont("times", "bold");
      doc.setFontSize(26);
      doc.text(horse.name.toUpperCase(), 15, 58);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(gold[0], gold[1], gold[2]);
      doc.text(`${horse.tag.toUpperCase()} · ${horse.level.toUpperCase()} · ESTADO: ${horse.status.toUpperCase()}`, 15, 65);

      // Cuadrícula de Datos Físicos y Registro
      doc.setDrawColor(214, 205, 189);
      doc.setFillColor(247, 244, 238);
      doc.roundedRect(15, 70, 180, 48, 2, 2, "FD");

      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.setTextColor(gray[0], gray[1], gray[2]);
      doc.text("EDAD:", 22, 78);
      doc.text("ALZADA A LA CRUZ:", 82, 78);
      doc.text("SEXO:", 142, 78);

      doc.text("CAPA:", 22, 92);
      doc.text("LIBRO KFPS:", 82, 92);
      doc.text("CHIP SUBCLAVICULAR:", 142, 92);

      doc.text("USO RECOMENDADO:", 22, 106);
      doc.text("REGISTRO DOCUMENTAL:", 82, 106);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(dark[0], dark[1], dark[2]);
      doc.text(horse.age, 22, 84);
      doc.text(horse.height, 82, 84);
      doc.text(horse.gender, 142, 84);

      doc.text(horse.coat, 22, 98);
      doc.text(horse.registration.book, 82, 98);
      doc.text("Verificado con lector", 142, 98);

      doc.text(horse.idealUse, 22, 112);
      doc.text(horse.documents, 82, 112);

      // Genealogía oficial
      doc.setFont("times", "bold");
      doc.setFontSize(12);
      doc.setTextColor(gold[0], gold[1], gold[2]);
      doc.text("GENEALOGÍA OFICIAL KFPS (PEDIGRÍ)", 15, 128);

      doc.setFillColor(247, 244, 238);
      doc.roundedRect(15, 131, 180, 22, 2, 2, "FD");

      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(gray[0], gray[1], gray[2]);
      doc.text("PADRE:", 22, 138);
      doc.text("MADRE:", 82, 138);
      doc.text("PADRE DE LA MADRE:", 142, 138);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.5);
      doc.setTextColor(dark[0], dark[1], dark[2]);
      doc.text(horse.pedigree.sire, 22, 145);
      doc.text(horse.pedigree.dam, 82, 145);
      doc.text(horse.pedigree.damSire, 142, 145);

      // Notas de la Cuadra
      doc.setFont("times", "bold");
      doc.setFontSize(12);
      doc.setTextColor(gold[0], gold[1], gold[2]);
      doc.text("NOTAS DE LA CUADRA", 15, 163);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(dark[0], dark[1], dark[2]);
      const splitNotes = doc.splitTextToSize(`"${horse.stableNotes}"`, 180);
      doc.text(splitNotes, 15, 170);

      // Lo que le falta (Transparencia obligatoria)
      doc.setFont("times", "bold");
      doc.setFontSize(12);
      doc.setTextColor(138, 63, 26);
      doc.text("PUNTO POR MEJORAR / LO QUE LE FALTA (TRANSPARENCIA TOTAL)", 15, 190);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(dark[0], dark[1], dark[2]);
      const splitFlaw = doc.splitTextToSize(horse.flaw, 180);
      doc.text(splitFlaw, 15, 197);

      // Garantía por Contrato
      doc.setDrawColor(gold[0], gold[1], gold[2]);
      doc.setFillColor(20, 20, 20);
      doc.roundedRect(15, 215, 180, 25, 2, 2, "F");

      doc.setTextColor(gold[0], gold[1], gold[2]);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.text("LA GARANTÍA DEL CONTRATO:", 22, 223);

      doc.setTextColor(239, 234, 225);
      doc.setFont("times", "italic");
      doc.setFontSize(11);
      doc.text('"El contrato garantiza: pasaporte y papeles de Holanda, que pasan a su nombre, y salud al entregar."', 22, 231);

      // Footer con contacto y link
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(gray[0], gray[1], gray[2]);
      doc.text("Atención en Zapotlanejo, Jalisco · Citas vía WhatsApp: +52 33 1702 6066", 105, 260, { align: "center" });
      doc.text(`Ficha web verificada: https://cuadra-imperial-v1.vercel.app/caballos/${horse.slug}`, 105, 265, { align: "center" });
      doc.text("© 2026 Cuadra Imperial Loy. Trato directo con la cuadra.", 105, 270, { align: "center" });

      doc.save(`Ficha-${horse.name}-CuadraImperialLoy.pdf`);
    } catch (err) {
      console.error("Error generating PDF:", err);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  // Enviar ficha completa a WhatsApp para compartir con su experto/asesor
  const handleShareToExpert = () => {
    const pageUrl = typeof window !== "undefined" ? window.location.href : `https://cuadra-imperial-v1.vercel.app/caballos/${horse.slug}`;
    const text = encodeURIComponent(
      `Buen día. Te comparto la ficha técnica de ${horse.name} de Cuadra Imperial Loy para que la revises:\n\n` +
      `🐴 Ejemplar: ${horse.name} (${horse.tag})\n` +
      `• Edad y Alzada: ${horse.age} · ${horse.height}\n` +
      `• Nivel: ${horse.level}\n` +
      `• Registro KFPS: ${horse.registration.book}\n` +
      `• Linaje: ${horse.pedigree.sire} x ${horse.pedigree.dam} (${horse.pedigree.damSire})\n` +
      `• Notas del caballerango: "${horse.stableNotes}"\n` +
      `• Lo que le falta: ${horse.flaw}\n` +
      `• Garantía: Pasaporte y papeles de Holanda a su nombre, salud al entregar.\n\n` +
      `🔗 Ficha completa en la web:\n${pageUrl}`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  const handlePedirPrecio = () => {
    const text = encodeURIComponent(
      language === "en"
        ? `Hello. I am interested in ${horse.name}. Could you please send me the price in ${currency} and terms?`
        : `Buen día. Me interesa ${horse.name}. ¿Me puede dar su precio en ${currency}?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const scrollToVisita = () => {
    const el = document.getElementById("visita");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#141414] text-[#EFEAE1] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Barra superior de navegación */}
        <div className="flex items-center justify-between py-4 mb-6 border-b border-[#34312C]">
          <Link
            href="/caballos"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C9C2B5] hover:text-[#D4AF37] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Todos los caballos</span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={generateHorsePdf}
              disabled={isGeneratingPdf}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#D4AF37]/60 bg-[#1D1C1A] text-xs font-mono text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#141414] transition-all"
              title="Descargar Ficha en PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isGeneratingPdf ? "Generando..." : "Descargar PDF"}</span>
            </button>

            <button
              type="button"
              onClick={handleShareToExpert}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#34312C] hover:border-[#D4AF37] text-xs font-mono text-[#C9C2B5] hover:text-[#D4AF37] transition-colors"
              title="Compartir con asesor"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Compartir con asesor</span>
            </button>
          </div>
        </div>

        {/* Encabezado del Caballo */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              {horse.tag}
            </span>
            <span
              style={{ backgroundColor: statusStyle.bg, color: statusStyle.text }}
              className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider"
            >
              {horse.status}
            </span>
            {!horse.canBeMounted && (
              <span className="px-2 py-0.5 rounded bg-black/60 border border-[#34312C] text-[10px] font-mono text-[#C9C2B5]">
                Todavía no se monta
              </span>
            )}
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-[#EFEAE1] mb-2">
            {horse.name}
          </h1>

          <p className="font-mono text-xs sm:text-sm text-[#9A958B]">
            {horse.tag} · {horse.age} · {horse.height} · Capa {horse.coat.toLowerCase()} · Importado de Holanda
          </p>
        </div>

        {/* Galería & Video y Datos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          
          {/* Columna Izquierda: Medios Visuales */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#34312C] bg-[#1D1C1A]">
              <Image
                src={horse.images[activePhoto] || "/images/hero.jpg"}
                alt={horse.name}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-4 gap-3">
              {horse.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActivePhoto(idx)}
                  className={`relative aspect-[4/3] rounded overflow-hidden border transition-all ${
                    activePhoto === idx ? "border-[#D4AF37] scale-95" : "border-[#34312C] opacity-75 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`${horse.name} foto ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>

            {/* Video sin cortes y con sonido real */}
            <div className="p-4 rounded-lg bg-[#1D1C1A] border border-[#34312C] mt-2">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#D4AF37] flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5" />
                  Video completo sin cortes
                </span>
                <span className="font-mono text-[11px] text-[#9A958B]">
                  Sonido real de la cuadra
                </span>
              </div>
              <div className="relative aspect-video rounded overflow-hidden border border-[#34312C] bg-black">
                <video controls playsInline className="w-full h-full object-cover" poster={horse.images[0]}>
                  <source src={horse.videoUrl} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Ficha Técnica Oficial */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="p-5 rounded-lg bg-[#1D1C1A] border border-[#34312C]">
                <h2 className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] mb-4 font-semibold">
                  Ficha Técnica
                </h2>
                <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs font-sans">
                  <div>
                    <span className="font-mono text-[10px] text-[#9A958B] uppercase block">Edad</span>
                    <strong className="text-[#EFEAE1]">{horse.age}</strong>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#9A958B] uppercase block">Alzada</span>
                    <strong className="text-[#EFEAE1]">{horse.height}</strong>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#9A958B] uppercase block">Sexo</span>
                    <strong className="text-[#EFEAE1]">{horse.gender}</strong>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#9A958B] uppercase block">Nivel</span>
                    <strong className="text-[#EFEAE1]">{horse.level}</strong>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#9A958B] uppercase block">Uso ideal</span>
                    <strong className="text-[#EFEAE1]">{horse.idealUse}</strong>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#9A958B] uppercase block">Capa</span>
                    <strong className="text-[#EFEAE1]">{horse.coat}</strong>
                  </div>
                </div>
              </div>

              {/* Cómo es montarlo */}
              <div className="p-5 rounded-lg bg-[#1D1C1A] border border-[#34312C]">
                <h3 className="font-serif text-lg font-semibold text-[#EFEAE1] mb-2">
                  {horse.canBeMounted ? "Cómo es montarlo" : "Cómo es"}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#C9C2B5] leading-relaxed mb-3">
                  {horse.stableNotes}
                </p>
                <span className="font-mono text-[11px] text-[#D4AF37] block">
                  Notas de la cuadra
                </span>
              </div>

              {/* Lo que le falta */}
              <div className="p-5 rounded-lg bg-[#1D1C1A] border-l-4 border-l-[#D4AF37] border border-[#34312C]">
                <div className="flex items-center gap-2 mb-1.5 text-[#D4AF37]">
                  <AlertCircle className="w-4 h-4" />
                  <h3 className="font-mono text-xs uppercase tracking-wider font-semibold">
                    Lo que le falta
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#EFEAE1] leading-relaxed">
                  {horse.flaw}
                </p>
                <span className="font-mono text-[10px] text-[#9A958B] mt-2 block">
                  Mejor saberlo antes de agendar su visita.
                </span>
              </div>

              {/* Botón Principal: Comprar este caballo / Compartir con Asesor */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={handleShareToExpert}
                  className="w-full py-4 px-4 rounded bg-[#D4AF37] hover:bg-[#F5D061] text-[#141414] text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Comprar / Compartir Ficha por WhatsApp</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={generateHorsePdf}
                    disabled={isGeneratingPdf}
                    className="py-3 px-3 rounded border border-[#D4AF37]/60 bg-[#1D1C1A] hover:bg-[#D4AF37] hover:text-[#141414] text-[#EFEAE1] text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{isGeneratingPdf ? "Generando..." : "Descargar PDF"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={scrollToVisita}
                    className="py-3 px-3 rounded border border-[#34312C] hover:border-[#D4AF37] text-[#EFEAE1] text-xs font-mono uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 bg-[#141414]"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Agendar Visita</span>
                  </button>
                </div>

                <p className="font-mono text-[10px] text-[#9A958B] text-center pt-1">
                  El PDF incluye medidas, linaje KFPS, notas y url oficial para su caballerango o veterinario.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Sección: Sus papeles · KFPS */}
        <div className="mb-16 p-6 sm:p-10 rounded-lg bg-[#1D1C1A] border border-[#34312C]">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] block mb-2 font-semibold">
            Sus papeles · KFPS
          </span>
          <h2 className="font-serif text-3xl font-semibold text-[#EFEAE1] mb-2">
            Pasaporte y certificado de Holanda
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#C9C2B5] max-w-2xl mb-8 leading-relaxed">
            {horse.documents} Criado por {horse.breeder.name} en {horse.breeder.location}. Así lo dice su pasaporte.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 rounded bg-[#141414] border border-[#34312C]">
              <span className="font-mono text-[10px] text-[#9A958B] uppercase block mb-1">Libro de Registro</span>
              <strong className="text-sm text-[#EFEAE1] font-mono block mb-1">{horse.registration.book}</strong>
              {horse.registration.number && (
                <span className="text-[11px] font-mono text-[#D4AF37] block mb-2">Registro: {horse.registration.number}</span>
              )}
              <div className="pt-2 border-t border-[#34312C]/60">
                <span className="font-mono text-[10px] text-[#D4AF37] block mb-0.5">¿Qué significa?</span>
                <p className="font-sans text-xs text-[#C9C2B5] leading-relaxed">{horse.registration.meaning}</p>
              </div>
            </div>

            {horse.kfpsAward ? (
              <div className="p-4 rounded bg-[#141414] border border-[#34312C]">
                <span className="font-mono text-[10px] text-[#9A958B] uppercase block mb-1">Calificación KFPS</span>
                <strong className="text-sm text-[#EFEAE1] block mb-2">{horse.kfpsAward.title}</strong>
                <div className="pt-2 border-t border-[#34312C]/60">
                  <span className="font-mono text-[10px] text-[#D4AF37] block mb-0.5">¿Qué significa?</span>
                  <p className="font-sans text-xs text-[#C9C2B5] leading-relaxed">{horse.kfpsAward.meaning}</p>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded bg-[#141414] border border-[#34312C]">
                <span className="font-mono text-[10px] text-[#9A958B] uppercase block mb-1">Inspección</span>
                <strong className="text-sm text-[#EFEAE1] block mb-2">Conforme al estándar KFPS</strong>
                <p className="font-sans text-xs text-[#C9C2B5] leading-relaxed">
                  Conforme con los estándares oficiales de conformación y movimiento en Leeuwarden.
                </p>
              </div>
            )}

            <div className="p-4 rounded bg-[#141414] border border-[#34312C]">
              <span className="font-mono text-[10px] text-[#9A958B] uppercase block mb-1">Microchip</span>
              <strong className="text-sm text-[#EFEAE1] block mb-2">Verificación de identidad</strong>
              <p className="font-sans text-xs text-[#C9C2B5] leading-relaxed mb-2">{horse.chip}</p>
              <span className="font-mono text-[10px] text-[#D4AF37] block">Disponemos de lector en la cuadra</span>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#34312C]">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#D4AF37] mb-4 font-semibold">
              Genealogía (pedigrí)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3 rounded bg-[#141414] border border-[#34312C]">
                <span className="font-mono text-[10px] text-[#9A958B] block">Padre</span>
                <strong className="text-sm text-[#EFEAE1]">{horse.pedigree.sire}</strong>
              </div>
              <div className="p-3 rounded bg-[#141414] border border-[#34312C]">
                <span className="font-mono text-[10px] text-[#9A958B] block">Madre</span>
                <strong className="text-sm text-[#EFEAE1]">{horse.pedigree.dam}</strong>
              </div>
              <div className="p-3 rounded bg-[#141414] border border-[#34312C]">
                <span className="font-mono text-[10px] text-[#9A958B] block">Padre de la madre</span>
                <strong className="text-sm text-[#EFEAE1]">{horse.pedigree.damSire}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Visita */}
        <VisitaSection preselectedHorse={horse.name} />

        {/* Sección de Garantía */}
        <GarantiaSection />

        {/* Otros caballos */}
        {otherHorses.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#34312C]">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] block mb-2">
              Caballos frisones en venta
            </span>
            <h2 className="font-serif text-3xl font-semibold text-[#EFEAE1] mb-8">
              Otros caballos de <i className="italic font-serif font-normal text-[#D4AF37]">la cuadra.</i>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherHorses.map((other) => (
                <div key={other.id} className="rounded-lg bg-[#1D1C1A] border border-[#34312C] p-4 flex flex-col justify-between">
                  <div>
                    <div className="relative aspect-[4/3] rounded overflow-hidden mb-3 bg-black/60">
                      <Image src={other.images[0]} alt={other.name} fill className="object-cover" />
                    </div>
                    <span className="font-mono text-[11px] text-[#D4AF37] block mb-1">{other.tag}</span>
                    <h3 className="font-serif text-xl font-semibold text-[#EFEAE1] mb-1">{other.name}</h3>
                    <p className="font-mono text-xs text-[#9A958B] mb-2">{other.age} · {other.height}</p>
                    <p className="font-sans text-xs text-[#C9C2B5] line-clamp-2 mb-4">{other.stableNotes}</p>
                  </div>
                  <Link
                    href={`/caballos/${other.slug}`}
                    className="w-full py-2 px-3 rounded text-center border border-[#34312C] hover:border-[#D4AF37] text-xs font-mono text-[#EFEAE1] hover:text-[#D4AF37] transition-colors"
                  >
                    Conocer a {other.name} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Barra fija inferior en móvil */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#141414]/95 backdrop-blur-md border-t border-[#34312C] p-3 flex items-center gap-3">
        <button
          type="button"
          onClick={handleShareToExpert}
          className="flex-1 py-3 px-3 rounded bg-[#D4AF37] text-[#141414] font-bold text-xs uppercase tracking-wider text-center"
        >
          Comprar / WhatsApp
        </button>
        <button
          type="button"
          onClick={generateHorsePdf}
          className="flex-1 py-3 px-3 rounded border border-[#34312C] text-[#EFEAE1] font-mono text-xs uppercase tracking-wider text-center bg-[#1D1C1A]"
        >
          Descargar PDF
        </button>
      </div>

    </div>
  );
}
