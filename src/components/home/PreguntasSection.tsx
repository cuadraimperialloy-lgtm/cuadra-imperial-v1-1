"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  pregunta: string;
  respuesta: string;
}

const FAQS: FaqItem[] = [
  {
    pregunta: "¿Cuánto cuesta un caballo frisón?",
    respuesta: "El precio varía según su nivel de formación (bailador, montado o potro por formar), alzada, edad y premios de inspección. En Cuadra Imperial Loy el precio se entrega en privado el mismo día por WhatsApp o mensaje, en pesos mexicanos. Es el mismo precio para todos, llegue solo o con un aliado. No publicamos precios abiertos ni rangos en el sitio."
  },
  {
    pregunta: "¿Cómo sé si un frisón es puro?",
    respuesta: "Por su pasaporte y certificado de registro oficial de la KFPS (registro holandés de la raza) emitidos en los Países Bajos. El documento detalla el libro de registro (Veulenboek o Stamboek), genealogía de varias generaciones y número de chip subcutáneo, el cual se compara físicamente en la visita con nuestro lector."
  },
  {
    pregunta: "¿Un frisón puede ser caballo bailador?",
    respuesta: "Sí. Su elevación natural de rodillas, cuello arqueado y disposición al trabajo lo convierten en un excelente caballo para baile y cabalgatas. En la cuadra tenemos ejemplares con nivel Bailador que ya trabajan montados con música, y potros jóvenes para formarlos a su mano."
  },
  {
    pregunta: "¿Puedo ver su genealogía antes de ir?",
    respuesta: "Sí. En la ficha de cada caballo en esta web encuentra su árbol genealógico (padre, madre y padre de la madre). Además, por mensaje privado podemos compartirle copia del pasaporte antes de que agende su visita o realice cualquier apartado."
  },
  {
    pregunta: "¿Existe el frisón blanco, pinto o café?",
    respuesta: "El estándar oficial del registro holandés KFPS solo admite caballos de capa negra pura (la única marca blanca permitida es una estrella pequeña en la frente). Caballos de otros colores corresponden a cruzas o registros alternativos ajenos al libro holandés."
  },
  {
    pregunta: "¿Importado o nacional?",
    respuesta: "Todos los caballos de Cuadra Imperial Loy son importados directamente de los Países Bajos, nacidos en Holanda y con pasaporte holandés original que pasa a nombre del nuevo propietario."
  },
  {
    pregunta: "¿Todos se pueden montar?",
    respuesta: "Depende del nivel de cada ejemplar. Si el caballo es de nivel Bailador o Montado, lo monta usted o su caballerango en la visita. Si es de nivel Con rienda o Potro, todavía no se monta de forma regular y nuestro caballerango de la cuadra lo trabaja pie a tierra frente a usted."
  },
  {
    pregunta: "¿Qué tan alto es un frisón?",
    respuesta: "La alzada se mide a la cruz en metros. En nuestras fichas técnicas el dato está medido y publicado caballo por caballo (por lo general oscila entre 1.66 m y 1.72 m)."
  },
  {
    pregunta: "¿Entregan en todo México?",
    respuesta: "Entregamos en México y en Estados Unidos. El costo y los tiempos del traslado se cotizan por escrito antes de firmar cualquier contrato. A Estados Unidos el protocolo contempla cuarentena y traslado coordinado."
  },
  {
    pregunta: "¿Puedo ir con mi caballerango?",
    respuesta: "Su caballerango es bienvenido siempre, sin ningún problema. Al agendar le apartamos el tiempo necesario para que lo vea, lo monte y lo revise con calma. Y su médico veterinario, en la fecha que usted solicite."
  }
];

export default function PreguntasSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas" className="py-20 sm:py-28 bg-[#141414] text-[#EFEAE1] border-b border-[#34312C]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="mb-14 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8894F] mb-3 block">
            Preguntas
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[44px] text-[#EFEAE1] font-semibold mb-4">
            Antes de <i className="italic font-serif font-normal text-[#A8894F]">comprar.</i>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#C9C2B5] max-w-xl mx-auto leading-relaxed">
            Respuestas claras y directas a lo que la gente pregunta y consulta antes de decidirse por un frisón.
          </p>
        </div>

        {/* Acordeón de FAQs */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-lg bg-[#1D1C1A] border border-[#34312C] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-base sm:text-lg font-semibold text-[#EFEAE1]">
                    {faq.pregunta}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#A8894F] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-0 font-sans text-xs sm:text-sm text-[#C9C2B5] leading-relaxed border-t border-[#34312C]/50 mt-1">
                    <p className="pt-3">{faq.respuesta}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
