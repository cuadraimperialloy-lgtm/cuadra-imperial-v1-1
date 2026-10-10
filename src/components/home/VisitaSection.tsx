"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { HORSES } from "@/data/horses";
import { useLocale } from "@/context/LocaleContext";

const WHATSAPP_NUMBER = "523317026066";

interface VisitaSectionProps {
  preselectedHorse?: string;
}

export default function VisitaSection({ preselectedHorse }: VisitaSectionProps) {
  const { t, language } = useLocale();
  const [nombre, setNombre] = useState("");
  const [caballo, setCaballo] = useState(preselectedHorse || HORSES[0].name);
  const [dia, setDia] = useState("");
  const [conCaballerango, setConCaballerango] = useState("Sí, con mi caballerango");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = encodeURIComponent(
      `Buen día Cuadra Imperial Loy. Quisiera agendar una visita en Zapotlanejo, Jalisco.\n\n` +
      `• Nombre del cliente: ${nombre || "Por definir"}\n` +
      `• Caballo que desea ver: ${caballo}\n` +
      `• Día sugerido: ${dia || "A coordinar"}\n` +
      `• Acompañamiento: ${conCaballerango}` +
      (mensaje ? `\n• Mensaje: ${mensaje}` : "")
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, "_blank");
  };

  const handleDirectChat = () => {
    const texto = encodeURIComponent(
      language === "en"
        ? "Hello. I would like to schedule an in-person visit at Cuadra Imperial Loy in Zapotlanejo, Jalisco."
        : "Buen día. Quisiera agendar una visita para conocer los caballos de Cuadra Imperial Loy en Zapotlanejo, Jalisco."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, "_blank");
  };

  const pasos = [
    { num: "1", texto: "Primero, el caballo por el que vino." },
    { num: "2", texto: "De pie, al paso y al trote, suelto o a la cuerda. Bailando, si ya baila. Con el sonido de la cuadra, sin música." },
    { num: "3", texto: "Si ya se monta (Bailador o Montado), lo monta usted o su caballerango. Si todavía no (Con rienda o Potro), el caballerango de la cuadra lo trabaja frente a usted." },
    { num: "4", texto: "Después, el pasaporte y los papeles originales. O antes, si usted lo pide." },
    { num: "5", texto: "Se le dice lo que le falta al caballo." },
    { num: "6", texto: "Su caballerango es bienvenido. Su veterinario, cuando usted lo pida." }
  ];

  return (
    <section id="visita" className="py-20 sm:py-28 bg-[#141414] text-[#EFEAE1] border-b border-[#34312C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado (PDF) */}
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-3 block">
            {t("visit.eyebrow")}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[44px] text-[#EFEAE1] font-semibold mb-4">
            {t("visit.title")}{" "}
            <i className="italic font-serif font-normal text-[#D4AF37]">
              {t("visit.titleItalic")}
            </i>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#C9C2B5] max-w-2xl leading-relaxed mb-3">
            {t("visit.desc1")}
          </p>
          <p className="font-sans text-sm sm:text-base text-[#9A958B] max-w-2xl leading-relaxed">
            {t("visit.desc2")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Formulario que abre WhatsApp como mensaje del cliente con los campos llenados */}
          <div className="lg:col-span-6 bg-[#1D1C1A] p-6 sm:p-8 rounded-lg border border-[#34312C] shadow-sm">
            <h3 className="font-serif text-2xl font-semibold text-[#EFEAE1] mb-2">
              Formulario de visita
            </h3>
            

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs text-[#D4AF37] uppercase tracking-wider mb-1.5">
                  Su nombre *
                </label>
                <input
                  type="text"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ej. Don Carlos Mendoza"
                  className="w-full bg-[#141414] border border-[#34312C] focus:border-[#D4AF37] rounded px-3.5 py-2.5 text-xs text-[#EFEAE1] focus:outline-none transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-[#D4AF37] uppercase tracking-wider mb-1.5">
                  Caballo que quiere ver
                </label>
                <select
                  value={caballo}
                  onChange={(e) => setCaballo(e.target.value)}
                  className="w-full bg-[#141414] border border-[#34312C] focus:border-[#D4AF37] rounded px-3.5 py-2.5 text-xs text-[#EFEAE1] focus:outline-none transition-colors font-sans"
                >
                  {HORSES.map((h) => (
                    <option key={h.id} value={h.name}>
                      {h.name} ({h.tag} · {h.level})
                    </option>
                  ))}
                  <option value="Conocer todos los disponibles en la cuadra">Conocer todos los disponibles</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-[#D4AF37] uppercase tracking-wider mb-1.5">
                    Día que le acomoda
                  </label>
                  <input
                    type="text"
                    value={dia}
                    onChange={(e) => setDia(e.target.value)}
                    placeholder="Ej. Este sábado por la tarde"
                    className="w-full bg-[#141414] border border-[#34312C] focus:border-[#D4AF37] rounded px-3.5 py-2.5 text-xs text-[#EFEAE1] focus:outline-none transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#D4AF37] uppercase tracking-wider mb-1.5">
                    ¿Viene con su caballerango?
                  </label>
                  <select
                    value={conCaballerango}
                    onChange={(e) => setConCaballerango(e.target.value)}
                    className="w-full bg-[#141414] border border-[#34312C] focus:border-[#D4AF37] rounded px-3.5 py-2.5 text-xs text-[#EFEAE1] focus:outline-none transition-colors font-sans"
                  >
                    <option value="Sí, con mi caballerango">Sí, con mi caballerango</option>
                    <option value="Voy solo">Voy solo</option>
                    <option value="Con mi familia">Con mi familia</option>
                    <option value="Con mi médico veterinario">Con mi médico veterinario</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-[#D4AF37] uppercase tracking-wider mb-1.5">
                  Mensaje (opcional)
                </label>
                <textarea
                  rows={2}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Comentario sobre hora, uso o interés en particular..."
                  className="w-full bg-[#141414] border border-[#34312C] focus:border-[#D4AF37] rounded px-3.5 py-2.5 text-xs text-[#EFEAE1] focus:outline-none transition-colors font-sans"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-4 rounded bg-[#D4AF37] hover:bg-[#F5D061] text-[#141414] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar por WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleDirectChat}
                  className="py-3.5 px-4 rounded border border-[#34312C] hover:border-[#D4AF37] text-[#C9C2B5] hover:text-[#EFEAE1] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center bg-[#141414]"
                >
                  <span>Escribir directo</span>
                </button>
              </div>

              
            </form>
          </div>

          {/* Los seis pasos del protocolo de visita */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] block mb-2 font-semibold">
                Protocolo de la visita
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[#EFEAE1] mb-6">
                Qué pasa cuando viene a la cuadra
              </h3>

              <div className="space-y-4">
                {pasos.map((paso) => (
                  <div key={paso.num} className="flex items-start gap-4 p-3.5 rounded bg-[#1D1C1A]/50 border border-[#34312C]/60">
                    <span className="w-6 h-6 rounded-full bg-[#141414] border border-[#D4AF37]/40 text-[#D4AF37] font-mono text-xs flex items-center justify-center shrink-0">
                      {paso.num}
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-[#C9C2B5] leading-relaxed">
                      {paso.texto}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 rounded bg-[#1D1C1A] border border-[#D4AF37]/30 text-xs text-[#C9C2B5] font-sans">
              <strong className="text-[#EFEAE1] block mb-1 font-serif text-sm">
                Zapotlanejo, Jalisco · A 38 minutos de Guadalajara
              </strong>
              Visitas privadas previa cita. Coordine su llegada de forma directa.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
