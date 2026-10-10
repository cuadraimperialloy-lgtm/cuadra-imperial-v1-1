"use client";

import { MapPin, Clock, Calendar, ShieldCheck } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export default function LaCuadraSection() {
  const { t } = useLocale();

  const datos = [
    { label: "Dónde", valor: "Zapotlanejo, Jalisco" },
    { label: "Desde Guadalajara", valor: "A 38 minutos" },
    { label: "Visitas", valor: "Con cita previa" },
    { label: "Caballerango", valor: "Víctor Hernández" },
  ];

  return (
    <section id="la-cuadra" className="py-20 sm:py-28 bg-[#141414] text-[#EFEAE1] border-b border-[#34312C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8894F] mb-3 block">
            {t("stud.eyebrow")}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[44px] text-[#EFEAE1] font-semibold mb-6">
            {t("stud.title")}{" "}
            <i className="italic font-serif font-normal text-[#A8894F]">
              {t("stud.titleItalic")}
            </i>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#C9C2B5] max-w-2xl leading-relaxed mb-4">
            Los caballos son de Cuadra Imperial Loy. Los escogemos uno por uno, le decimos lo que sabe hacer cada caballo y lo que le falta, y respondemos por ellos con el contrato.
          </p>
          <p className="font-sans text-xs sm:text-sm text-[#9A958B] max-w-2xl leading-relaxed">
            Trato directo sin intermediarios forzados ni brokers ocultos: los caballos se encuentran en Jalisco listos para ser trabajados frente a usted.
          </p>
        </div>

        {/* Fila de Datos Clave (Zapotlanejo, 38 min, sin quién contesta) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {datos.map((d, i) => (
            <div key={i} className="p-5 rounded-lg bg-[#1D1C1A] border border-[#34312C] flex flex-col justify-between">
              <span className="font-mono text-[10px] text-[#A8894F] uppercase tracking-wider block mb-2">
                {d.label}
              </span>
              <span className="font-serif text-lg sm:text-xl font-semibold text-[#EFEAE1]">
                {d.valor}
              </span>
            </div>
          ))}
        </div>

        {/* Transparencia sobre instalaciones y caballerango */}
        <div className="p-6 sm:p-8 rounded-lg bg-[#1D1C1A] border border-[#34312C] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-serif text-xl font-semibold text-[#EFEAE1] mb-2">
              Víctor Hernández · Caballerango de la cuadra
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#C9C2B5] leading-relaxed mb-4">
              Presenta y trabaja los caballos en el picadero y prepara con la cuadra las notas de cada ficha. Su oficio y constancia garantizan que el caballo se presente tal cual es, sin trucos ni maquillaje.
            </p>
            <p className="font-sans text-xs text-[#9A958B]">
              &ldquo;Notas de la cuadra · Víctor Hernández, caballerango.&rdquo;
            </p>
          </div>

          <div className="p-5 rounded bg-[#141414] border border-[#34312C] text-xs text-[#C9C2B5] font-sans leading-relaxed">
            <strong className="text-[#A8894F] block mb-1 font-mono uppercase text-[11px]">
              Zapotlanejo, Jalisco · A 38 minutos de Guadalajara
            </strong>
            Por discreción y seguridad, la ubicación exacta con mapa directo se le envía al coordinar su cita por WhatsApp. Las instalaciones son rentadas; los ejemplares son propiedad de Cuadra Imperial Loy.
          </div>
        </div>

      </div>
    </section>
  );
}
