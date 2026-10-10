"use client";

import { Award, BookOpen, ShieldCheck, TrendingUp, HeartHandshake } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export default function LaRazaSection() {
  const { t } = useLocale();

  return (
    <section id="la-raza" className="py-20 sm:py-28 bg-[#141414] text-[#EFEAE1] border-b border-[#34312C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-3 block">
            {t("breed.eyebrow")}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[44px] text-[#EFEAE1] font-semibold mb-6">
            {t("breed.title")}{" "}
            <i className="italic font-serif font-normal text-[#D4AF37]">
              {t("breed.titleItalic")}
            </i>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#C9C2B5] max-w-3xl leading-relaxed mb-4">
            La KFPS (Koninklijke Vereniging Het Friesch Paarden-Stamboek) lleva desde 1879 los libros genealógicos de cada frisón registrado: padres, criador, inspecciones y premios oficiales. Los de su caballo pasan a su nombre.
          </p>
          <p className="font-sans text-xs sm:text-sm text-[#9A958B] max-w-2xl leading-relaxed">
            Un gran caballo no es solo un placer personal o familiar; representa un símbolo de estatus, tradición y un activo patrimonial de valor perdurable.
          </p>
        </div>

        {/* Pilares de Rentabilidad, Compromiso y Pureza (Benchmark Finca Sanro & KFPS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Rentabilidad y Plusvalía */}
          <div className="p-6 rounded-lg bg-[#1D1C1A] border border-[#34312C] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#141414] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#EFEAE1] mb-2">
                Rentabilidad y Valor Patrimonial
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#C9C2B5] leading-relaxed mb-4">
                Un frisón con pasaporte y papeles de Holanda conserva y acrecienta su valor en el mercado mexicano y de Estados Unidos. La pureza de sangre certificada por la KFPS protege su inversión frente a ejemplares sin registro.
              </p>
            </div>
            <span className="font-mono text-[11px] text-[#D4AF37] border-t border-[#34312C] pt-3 block">
              Activo de alta plusvalía
            </span>
          </div>

          {/* Compromiso Zootécnico */}
          <div className="p-6 rounded-lg bg-[#1D1C1A] border border-[#34312C] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#141414] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#EFEAE1] mb-2">
                Compromiso de Autenticidad
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#C9C2B5] leading-relaxed mb-4">
                En Cuadra Imperial Loy escogemos ejemplares uno por uno. Cada caballo se entrega sano, con su pasaporte original y papeles que pasan formalmente a nombre de su nuevo dueño.
              </p>
            </div>
            <span className="font-mono text-[11px] text-[#D4AF37] border-t border-[#34312C] pt-3 block">
              Garantía por contrato
            </span>
          </div>

          {/* Rigor de los Libros KFPS */}
          <div className="p-6 rounded-lg bg-[#1D1C1A] border border-[#34312C] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#141414] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#EFEAE1] mb-2">
                Libros Veulenboek y Stamboek
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#C9C2B5] leading-relaxed mb-4">
                Los potros ingresan al Veulenboek; los machos enteros permanecen en él a menos que sean sementales aprobados (cerca de 100 en el mundo). Yeguas y castrados destacados ingresan al Stamboek de adultos tras su inspección.
              </p>
            </div>
            <span className="font-mono text-[11px] text-[#D4AF37] border-t border-[#34312C] pt-3 block">
              Trazabilidad genealógica
            </span>
          </div>

          {/* Calificación por Jueces Holandeses */}
          <div className="p-6 rounded-lg bg-[#1D1C1A] border border-[#34312C] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#141414] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#EFEAE1] mb-2">
                Inspecciones Imparciales
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#C9C2B5] leading-relaxed mb-4">
                Las calificaciones de 1º, 2º o 3º premio son otorgadas por jueces oficiales que viajan desde Holanda para calificar conformación y trote sobre piso duro. No hay sesgo: la calidad la certifica un tercero.
              </p>
            </div>
            <span className="font-mono text-[11px] text-[#D4AF37] border-t border-[#34312C] pt-3 block">
              Certificación imparcial KFPS
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
