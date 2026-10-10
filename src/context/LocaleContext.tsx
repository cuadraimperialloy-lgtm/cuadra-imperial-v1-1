"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "es" | "en";
type Currency = "MXN" | "USD";

interface LocaleContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    "nav.horses": "Caballos en venta",
    "nav.visit": "Visita",
    "nav.warranty": "Garantía",
    "nav.stud": "La cuadra",
    "nav.whatsapp": "WhatsApp",
    "hero.eyebrow": "Zapotlanejo · Jalisco · Importados de Holanda",
    "hero.title": "Caballos frisones de Holanda.",
    "hero.titleItalic": "En Jalisco.",
    "hero.subtitle": "Caballos frisones en venta, importados de Holanda. Con pasaporte y papeles que pasan a su nombre.",
    "hero.cta": "Conozca los caballos",
    "hero.sound": "Escúchelo",
    "hero.mute": "Silenciar",
    "catalog.eyebrow": "Caballos frisones en venta",
    "catalog.title": "Los caballos de",
    "catalog.titleItalic": "la cuadra.",
    "catalog.subtitle": "Catálogo de Sementales y Yeguas KFPS: Desliza para explorar cada ejemplar. Pulsa en \"Ver más\" para conocer su ficha y precio.",
    "catalog.askPrice": "Pedir precio por WhatsApp",
    "catalog.viewMore": "Ver más detalles",
    "visit.eyebrow": "La visita",
    "visit.title": "Agende su",
    "visit.titleItalic": "visita.",
    "visit.desc1": "La visita es en Zapotlanejo, Jalisco, a 38 minutos de Guadalajara. Llene el formulario y su mensaje nos llega directo por WhatsApp. Le contestamos el mismo día.",
    "visit.desc2": "Cuando usted llega, el caballo ya está listo. Si ya se monta, lo monta usted o su caballerango. Si todavía no, el caballerango de la cuadra lo trabaja frente a usted. Nadie le pide que decida ese día.",
    "visit.send": "Enviar por WhatsApp",
    "warranty.eyebrow": "Garantía",
    "warranty.title": "Su nombre, en los papeles de",
    "warranty.titleItalic": "su caballo.",
    "warranty.line": "Se lo entregamos sano, con su pasaporte y sus papeles a su nombre. Antes de cualquier apartado, usted ve el pasaporte original.",
    "stud.eyebrow": "La cuadra",
    "stud.title": "Trato directo con",
    "stud.titleItalic": "la cuadra.",
    "stud.where": "Zapotlanejo, Jalisco",
    "stud.time": "A 38 minutos de Guadalajara",
    "stud.visits": "Con cita",
    "stud.rider": "Víctor Hernández, caballerango",
    "delivery.eyebrow": "La entrega",
    "delivery.title": "El día que llega a",
    "delivery.titleItalic": "su rancho.",
    "breed.eyebrow": "La raza KFPS",
    "breed.title": "Un registro desde",
    "breed.titleItalic": "1879.",
    "faq.eyebrow": "Preguntas",
    "faq.title": "Antes de",
    "faq.titleItalic": "comprar."
  },
  en: {
    "nav.horses": "Horses for Sale",
    "nav.visit": "Visit",
    "nav.warranty": "Warranty",
    "nav.stud": "The Stud",
    "nav.whatsapp": "WhatsApp",
    "hero.eyebrow": "Zapotlanejo · Jalisco · Imported from the Netherlands",
    "hero.title": "Friesian horses from Holland.",
    "hero.titleItalic": "In Jalisco.",
    "hero.subtitle": "Friesian horses for sale, imported from the Netherlands. With passport and official papers transferred to your name.",
    "hero.cta": "Explore the horses",
    "hero.sound": "Listen to his gait",
    "hero.mute": "Mute",
    "catalog.eyebrow": "Friesian horses for sale",
    "catalog.title": "The horses of",
    "catalog.titleItalic": "the stud.",
    "catalog.subtitle": "Official KFPS Stallions & Mares Catalogue: Swipe to explore each horse. Click \"View details\" to review registration papers and price.",
    "catalog.askPrice": "Request price on WhatsApp",
    "catalog.viewMore": "View details",
    "visit.eyebrow": "The visit",
    "visit.title": "Schedule your",
    "visit.titleItalic": "visit.",
    "visit.desc1": "The visit takes place in Zapotlanejo, Jalisco, 38 minutes from Guadalajara. Submit the form and your inquiry opens directly on WhatsApp. We reply the same day.",
    "visit.desc2": "When you arrive, the horse is ready. If already ridden, you or your groom may mount him. If not yet ridden, our resident groom works him before you. No pressure to decide that day.",
    "visit.send": "Send via WhatsApp",
    "warranty.eyebrow": "Warranty",
    "warranty.title": "Your name, on the papers of",
    "warranty.titleItalic": "your horse.",
    "warranty.line": "Delivered in full health, with his passport and official papers in your name. You inspect the original passport before any deposit.",
    "stud.eyebrow": "The Stud",
    "stud.title": "Direct relationship with",
    "stud.titleItalic": "the stud.",
    "stud.where": "Zapotlanejo, Jalisco",
    "stud.time": "38 minutes from Guadalajara",
    "stud.visits": "By appointment only",
    "stud.rider": "Víctor Hernández, resident groom",
    "delivery.eyebrow": "Delivery",
    "delivery.title": "The day he arrives at",
    "delivery.titleItalic": "your ranch.",
    "breed.eyebrow": "The KFPS Breed",
    "breed.title": "A registry since",
    "breed.titleItalic": "1879.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Before",
    "faq.titleItalic": "buying."
  }
};

const LocaleContext = createContext<LocaleContextType>({
  language: "es",
  setLanguage: () => {},
  currency: "MXN",
  setCurrency: () => {},
  t: (k) => k
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");
  const [currency, setCurrency] = useState<Currency>("MXN");

  useEffect(() => {
    // Detect browser language or time zone hint
    const browserLang = navigator.language?.toLowerCase();
    if (browserLang.startsWith("en")) {
      setLanguage("en");
      setCurrency("USD");
    }
  }, []);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LocaleContext.Provider value={{ language, setLanguage, currency, setCurrency, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
