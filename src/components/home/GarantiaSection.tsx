"use client";

import { Shield, FileCheck, Eye, HeartPulse } from "lucide-react";

export default function GarantiaSection() {
  return (
    <section id="garantia" className="py-20 sm:py-28 bg-[#141414] text-[#EFEAE1] border-b border-[#34312C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado (10.2) */}
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-3 block">
            Garantía
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[44px] text-[#EFEAE1] font-semibold mb-6">
            Su nombre, en los papeles de <i className="italic font-serif font-normal text-[#D4AF37]">su caballo.</i>
          </h2>
          
          {/* Línea de la garantía (4.2 - se usa tal cual) */}
          <div className="p-6 sm:p-8 rounded-lg bg-[#1D1C1A] border-l-4 border-l-[#D4AF37] border border-[#34312C] max-w-3xl mb-8 shadow-sm">
            <p className="font-serif text-xl sm:text-2xl text-[#EFEAE1] leading-snug">
              &ldquo;El contrato garantiza: pasaporte y papeles de Holanda, que pasan a su nombre, y salud al entregar.&rdquo;
            </p>
            <span className="font-mono text-xs text-[#D4AF37] mt-3 block uppercase tracking-wider">
              Línea contractual de Cuadra Imperial Loy
            </span>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#C9C2B5] max-w-2xl leading-relaxed">
            Antes de cualquier apartado, usted ve el pasaporte original. No pedimos confianza a ciegas: mostramos los documentos en mano y le damos el tiempo que necesite para consultar con su gente.
          </p>
        </div>

        {/* Los 3 pilares verificables */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          <div className="p-6 rounded-lg bg-[#1D1C1A] border border-[#34312C] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#141414] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-4">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#EFEAE1] mb-2">
                Papeles de Holanda a su nombre
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#C9C2B5] leading-relaxed">
                Pasaporte y certificado de registro oficial de la KFPS emitidos en Holanda. El trámite se realiza formalmente para que los documentos queden a nombre del comprador.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#34312C] font-mono text-[11px] text-[#D4AF37]">
              Originales en mano
            </div>
          </div>

          <div className="p-6 rounded-lg bg-[#1D1C1A] border border-[#34312C] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#141414] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-4">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#EFEAE1] mb-2">
                Salud al entregar
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#C9C2B5] leading-relaxed">
                El caballo se entrega sano. Su médico veterinario es bienvenido a revisarlo en la fecha que usted proponga antes de cerrar la compra.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#34312C] font-mono text-[11px] text-[#D4AF37]">
              Revisión previa abierta
            </div>
          </div>

          <div className="p-6 rounded-lg bg-[#1D1C1A] border border-[#34312C] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#141414] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#EFEAE1] mb-2">
                Contrato por escrito
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#C9C2B5] leading-relaxed">
                Lo acordado se cumple y queda por escrito con lo que incluye y lo que no. Nada queda en palabras ni suposiciones.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#34312C] font-mono text-[11px] text-[#D4AF37]">
              Certeza legal
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
