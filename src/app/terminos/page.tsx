import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TerminosPage() {
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
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-widest block">Cuadra Imperial Loy</span>
              <h1 className="font-serif text-3xl md:text-4xl font-semibold text-[#EFEAE1]">Términos y Condiciones Comerciales</h1>
            </div>
          </div>

          <p className="font-mono text-xs text-[#9A958B] mb-8">
            Condiciones vigentes de operación comercial · Cuadra Imperial Loy, Jalisco, México.
          </p>

          <div className="space-y-6 font-sans text-[#C9C2B5] text-sm leading-relaxed">
            <section>
              <h2 className="font-serif text-xl font-semibold text-[#EFEAE1] mb-2">1. Objeto y Alcance</h2>
              <p>
                Cuadra Imperial Loy es una cuadra ubicada en el estado de Jalisco que comercializa caballos frisones holandeses importados, con pasaporte y registro oficial emitido en los Países Bajos. Los presentes términos rigen el proceso informativo, la solicitud de visitas y las bases del contrato de compraventa.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#EFEAE1] mb-2">2. Garantía Contractual</h2>
              <div className="p-4 rounded bg-[#141414] border-l-2 border-[#D4AF37] text-[#EFEAE1] font-serif text-base mb-2">
                &ldquo;El contrato garantiza: pasaporte y papeles de Holanda, que pasan a su nombre, y salud al entregar.&rdquo;
              </div>
              <p>
                Toda venta se formaliza mediante contrato por escrito donde se estipulan claramente los compromisos, fechas y condiciones de entrega del ejemplar.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#EFEAE1] mb-2">3. Precios y Transparencia</h2>
              <p>
                Los precios de cada ejemplar se proporcionan en privado el mismo día a quien lo solicite, expresados en moneda nacional (pesos mexicanos). El precio es exactamente el mismo para todos los clientes, ya sea que acudan de forma directa o acompañados por un aliado o asesor. No existen descuentos discrecionales ni variaciones de precio en función del comprador.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#EFEAE1] mb-2">4. Revisión Previa y Visitas</h2>
              <p>
                Antes de formalizar cualquier apartado, el cliente tiene derecho a revisar el pasaporte y los papeles originales del ejemplar en mano. El caballerango del cliente es bienvenido siempre. Asimismo, el cliente puede solicitar la revisión de su médico veterinario de confianza en la fecha que proponga.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-[#EFEAE1] mb-2">5. Entrega y Traslado</h2>
              <p>
                Realizamos entregas en territorio mexicano y hacia los Estados Unidos. Los costos y tiempos de flete y protocolos zoosanitarios correspondientes se cotizan por escrito antes de la firma del contrato.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
