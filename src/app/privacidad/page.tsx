import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-[#141414] text-[#EFEAE1] pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#9A958B] hover:text-[#D4AF37] transition-colors mb-8 font-mono text-xs uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" /> Volver al Inicio
        </Link>

        <div className="bg-[#1D1C1A] p-8 md:p-12 rounded-lg border border-[#34312C] shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/40 bg-[#141414] flex items-center justify-center text-[#D4AF37]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest block">Cuadra Imperial Loy</span>
              <h1 className="font-serif text-3xl md:text-4xl font-semibold text-[#EFEAE1]">Aviso de Privacidad</h1>
            </div>
          </div>

          <p className="font-mono text-xs text-[#9A958B] mb-8">
            Última actualización: Octubre 2026 · Cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
          </p>

          <div className="space-y-6 font-sans text-[#C9C2B5] text-sm leading-relaxed">
            <section>
              <h2 className="font-serif text-xl font-semibold text-[#EFEAE1] mb-2">1. Identidad y Domicilio del Responsable</h2>
              <p>
                <strong>Cuadra Imperial Loy</strong>, con operaciones en el estado de Jalisco, México, es responsable del tratamiento legítimo, controlado e informado de los datos personales proporcionados por sus clientes y prospectos.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#EFEAE1] mb-2">2. Datos Personales Recabados</h2>
              <p>
                Para los fines de atención por WhatsApp, coordinación de visitas presenciales a la cuadra y formalización del contrato de compraventa y traspaso de pasaporte y documentos KFPS:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Nombre completo del interesado.</li>
                <li>Teléfono celular o WhatsApp.</li>
                <li>Día propuesto para visita y confirmación de caballerango.</li>
                <li>Datos necesarios para el contrato de compraventa y constancia de entrega.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#EFEAE1] mb-2">3. Discreción Absoluta</h2>
              <p>
                De acuerdo con nuestros principios y valores de marca, Cuadra Imperial Loy mantiene <strong>estricta discreción</strong>: nunca publicamos ni compartimos nombres de compradores, ranchos de destino, ejemplares adquiridos ni precios pactados sin la previa autorización por escrito del cliente.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#EFEAE1] mb-2">4. Contacto</h2>
              <p>
                Para cualquier consulta sobre el tratamiento de sus datos o el ejercicio de derechos ARCO, puede comunicarse directamente vía WhatsApp oficial al +52 33 1702 6066.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
