import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle2 } from "lucide-react";

export default function NosotrosPage() {
  const valores = [
    {
      titulo: "Respeto a la decisión del cliente",
      desc: "El cliente ve, consulta con su gente y decide a su tiempo. Hacemos un solo seguimiento; nunca presionamos."
    },
    {
      titulo: "Transparencia",
      desc: "Solo afirmamos lo que se puede comprobar con documentos o en la pista. Decimos lo que le falta a cada caballo y el precio es el mismo para todos."
    },
    {
      titulo: "Cumplimiento",
      desc: "Lo acordado se cumple y queda por escrito en el contrato."
    },
    {
      titulo: "Calidad antes que cantidad",
      desc: "Solo ofrecemos un caballo que la cuadra respalde con su nombre. Pocos caballos, escogidos uno por uno."
    },
    {
      titulo: "Discreción",
      desc: "No hablamos de clientes, de lo que compraron ni de precios sin su permiso. Nada de presumir."
    }
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-[#EFEAE1] pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#9A958B] hover:text-[#D4AF37] transition-colors mb-8 font-mono text-xs uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" /> Volver al Inicio
        </Link>

        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-3 block">
            Cuadra Imperial Loy · Jalisco
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-[#EFEAE1] mb-6">
            Misión y principios de <i className="italic font-serif font-normal text-[#D4AF37]">la cuadra.</i>
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#C9C2B5] leading-relaxed max-w-3xl">
            Una cuadra en Jalisco que vende frisones holandeses importados, con pasaporte y papeles de Holanda. Pocos caballos, escogidos uno por uno. No somos criadero ni broker.
          </p>
        </div>

        {/* Misión Vigente */}
        <div className="p-8 rounded-lg bg-[#1D1C1A] border-l-4 border-l-[#D4AF37] border border-[#34312C] mb-12 shadow-sm">
          <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-wider block mb-2 font-semibold">
            Nuestra Misión
          </span>
          <p className="font-serif text-2xl sm:text-3xl text-[#EFEAE1] leading-snug">
            &ldquo;Entregar a empresarios exigentes frisones holandeses de calidad, con papeles de Holanda y garantía de salud al entregar, a través de un trato directo y transparente en el que el cliente ve, revisa y decide.&rdquo;
          </p>
        </div>

        {/* Valores */}
        <div className="space-y-6 mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#EFEAE1]">
            Nuestros valores en la práctica
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {valores.map((v, i) => (
              <div key={i} className="p-5 rounded-lg bg-[#1D1C1A] border border-[#34312C]">
                <h3 className="font-serif text-lg font-semibold text-[#EFEAE1] mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  {v.titulo}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#C9C2B5] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Principio: Ni de más ni de menos */}
        <div className="p-6 rounded-lg bg-[#1D1C1A] border border-[#34312C]">
          <h3 className="font-serif text-xl font-semibold text-[#EFEAE1] mb-2">
            El cliente es el protagonista
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#C9C2B5] leading-relaxed">
            La marca es el respaldo y la garantía detrás de su caballo. Decimos menos de la cuadra y más de lo que usted necesita para verificar y decidir: qué recibe, qué garantiza el contrato y lo que le falta a cada caballo antes de que venga.
          </p>
        </div>

      </div>
    </div>
  );
}
