"use client";

import Image from "next/image";
import { Shield, CheckCircle2, Award } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export default function EntregaSection() {
  const { t } = useLocale();

  return (
    <section id="entrega" className="py-20 sm:py-28 bg-[#141414] text-[#EFEAE1] border-b border-[#34312C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8894F] mb-3 block">
            {t("delivery.eyebrow")}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[44px] text-[#EFEAE1] font-semibold mb-6">
            {t("delivery.title")}{" "}
            <i className="italic font-serif font-normal text-[#A8894F]">
              {t("delivery.titleItalic")}
            </i>
          </h2>
          <p className="font-serif text-xl sm:text-2xl text-[#EFEAE1] max-w-3xl leading-relaxed mb-4">
            Trenzado y presentado. En una carpeta de piel, su pasaporte y sus papeles originales. Una placa de latón con el nombre del caballo. Y, si ya se monta, la primera monta ahí mismo; si todavía no, el caballerango de la cuadra lo trabaja ahí frente a usted.
          </p>
          <p className="font-sans text-xs sm:text-sm text-[#9A958B] max-w-2xl leading-relaxed">
            A la semana y al mes, le escribimos para saber cómo se adaptó. Nada más.
          </p>
        </div>

        {/* Presentación Visual de la Ceremonia y Placa de Latón */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          
          {/* Visual Placa de Latón Grabada (como en el PDF) */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-12 rounded-lg bg-[#1D1C1A] border-2 border-[#A8894F]/40 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#A8894F]/10 via-transparent to-[#A8894F]/5 pointer-events-none" />
              
              {/* Placa Dorada */}
              <div className="w-full max-w-xs py-8 px-6 rounded border-2 border-[#A8894F] bg-[#141414] shadow-inner text-[#EFEAE1] relative">
                <span className="font-mono text-[9px] tracking-[0.25em] text-[#A8894F] uppercase block mb-1">
                  CUADRA IMPERIAL LOY
                </span>
                <span className="font-serif text-3xl sm:text-4xl font-bold tracking-[0.15em] text-[#EFEAE1] uppercase block my-2">
                  T J E R K
                </span>
                <span className="font-mono text-[10px] text-[#C9C2B5] tracking-widest uppercase block">
                  KFPS STAMBOEK · JALISCO
                </span>
              </div>

              <span className="font-mono text-[11px] text-[#A8894F] mt-4 block uppercase tracking-wider">
                Placa de latón grabada · Carpeta de piel artesanal
              </span>
            </div>
          </div>

          {/* 4 Pasos Ceremoniales de la Entrega de Lujo */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-5 rounded-lg bg-[#1D1C1A] border border-[#34312C] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#A8894F] block mb-2 font-semibold">01 · El Arribo</span>
                <h3 className="font-serif text-lg font-semibold text-[#EFEAE1] mb-2">
                  Trenzado y presentado
                </h3>
                <p className="font-sans text-xs text-[#C9C2B5] leading-relaxed">
                  Llegada con su cabezada de gala, crines impecablemente trenzadas y listo para recibir a su gente en su rancho.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#1D1C1A] border border-[#34312C] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#A8894F] block mb-2 font-semibold">02 · Documentación</span>
                <h3 className="font-serif text-lg font-semibold text-[#EFEAE1] mb-2">
                  Carpeta de piel con papeles
                </h3>
                <p className="font-sans text-xs text-[#C9C2B5] leading-relaxed">
                  Entrega formal de pasaporte europeo, certificado KFPS a su nombre y placa de latón distintiva.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#1D1C1A] border border-[#34312C] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#A8894F] block mb-2 font-semibold">03 · La Primera Monta</span>
                <h3 className="font-serif text-lg font-semibold text-[#EFEAE1] mb-2">
                  Estreno en su lienzo o pista
                </h3>
                <p className="font-sans text-xs text-[#C9C2B5] leading-relaxed">
                  Si el nivel lo permite, primera monta en su rancho por usted o su caballerango; si es potro, trabajo frente a su familia.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-lg bg-[#1D1C1A] border border-[#34312C] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#A8894F] block mb-2 font-semibold">04 · Postventa</span>
                <h3 className="font-serif text-lg font-semibold text-[#EFEAE1] mb-2">
                  Seguimiento con discreción
                </h3>
                <p className="font-sans text-xs text-[#C9C2B5] leading-relaxed">
                  Contacto personal a la semana y al mes para verificar adaptación. Jamás pedimos recomendaciones ni molestamos.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
