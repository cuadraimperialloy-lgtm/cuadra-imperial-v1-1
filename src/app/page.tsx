import Hero from "@/components/home/Hero";
import InventoryShowcase from "@/components/home/InventoryShowcase";
import VisitaSection from "@/components/home/VisitaSection";
import GarantiaSection from "@/components/home/GarantiaSection";
import LaCuadraSection from "@/components/home/LaCuadraSection";
import EntregaSection from "@/components/home/EntregaSection";
import LaRazaSection from "@/components/home/LaRazaSection";
import PreguntasSection from "@/components/home/PreguntasSection";

export default function Home() {
  return (
    <>
      {/* 1. Portada */}
      <Hero />
      {/* 2. Caballos de la cuadra */}
      <InventoryShowcase />
      {/* 3. La visita */}
      <VisitaSection />
      {/* 4. Garantía */}
      <GarantiaSection />
      {/* 5. La cuadra */}
      <LaCuadraSection />
      {/* 6. La entrega */}
      <EntregaSection />
      {/* 7. La raza KFPS */}
      <LaRazaSection />
      {/* 8. Preguntas antes de comprar */}
      <PreguntasSection />
    </>
  );
}
