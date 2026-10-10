export interface RegistrationInfo {
  book: string;
  number?: string;
  meaning: string;
}

export interface AwardInfo {
  title: string;
  meaning: string;
}

export interface Horse {
  id: string;
  slug: string;
  name: string;
  tag: 'Frisón bailador' | 'Frisón montado' | 'Potro frisón' | 'Yegua frisona';
  age: string;
  birthYear: number;
  height: string;
  gender: 'Entero' | 'Yegua' | 'Castrado';
  level: 'Bailador' | 'Montado' | 'Con rienda' | 'Potro';
  idealUse: string;
  coat: 'Negra';
  status: 'Disponible' | 'Apartado' | 'Vendido';
  canBeMounted: boolean;
  tagline: string;
  description: string;
  stableNotes: string;
  flaw: string; // Lo que le falta (transparencia obligatoria)
  documents: string;
  registration: RegistrationInfo;
  kfpsAward?: AwardInfo;
  pedigree: {
    sire: string;
    dam: string;
    damSire: string;
  };
  breeder: {
    name: string;
    location: string;
  };
  chip: string;
  images: string[];
  videoUrl?: string;
  // Propiedades opcionales para compatibilidad interna
  subname?: string;
  kfpsNumber?: string;
  price?: number | null;
  priceVisibility?: string;
  priceUsd?: number | null;
  viewsCount?: number;
  location?: string;
  lineage?: string;
  recommendedProductIds?: string[];
}

export const STATUS_CONFIG: Record<Horse['status'], { bg: string; text: string; border: string; label: string }> = {
  'Disponible': { bg: '#105232', text: '#34D399', border: 'border-emerald-500/30', label: 'Disponible' },
  'Apartado': { bg: '#5B370B', text: '#FBBF24', border: 'border-amber-500/30', label: 'Apartado' },
  'Vendido': { bg: '#34312C', text: '#9A958B', border: 'border-stone-600/30', label: 'Vendido' }
};

export const STATUS_COLORS = STATUS_CONFIG;

export const HORSES: Horse[] = [
  {
    id: "tjerk",
    slug: "tjerk",
    name: "Tjerk",
    tag: "Frisón bailador",
    age: "5 años",
    birthYear: 2021,
    height: "1.68 m",
    gender: "Entero",
    level: "Bailador",
    idealUse: "Baile y cabalgata",
    coat: "Negra",
    status: "Disponible",
    canBeMounted: true,
    tagline: "Así levanta las manos. Escúchelo.",
    description: "Caballo frisón importado de Holanda. Con pasaporte y papeles que pasan a su nombre. Trabajo enfocado en elevación de manos, paso cadenciado y baile.",
    stableNotes: "Trabaja con franqueza bajo la montura y levanta con fuerza las manos al bailar. Acostumbrado al ruido, a la gente cerca y a la música. Notas de la cuadra · Víctor Hernández, caballerango.",
    flaw: "Le falta templarse más cuando hay yeguas en celo trabajando a la par en la pista.",
    documents: "Pasaporte y papeles de Holanda, que pasan a su nombre.",
    registration: {
      book: "Veulenboek de la KFPS",
      number: "528004 2021 00894",
      meaning: "Es parte del libro principal de la KFPS: ahí se inscribe a los potros cuyos padres cumplen sus requisitos. Los machos enteros se quedan en él toda su vida."
    },
    kfpsAward: {
      title: "1er premio KFPS, inspección de adulto, 2024",
      meaning: "El día de su inspección, un juez del registro holandés le dio primer premio por conformación y movimiento."
    },
    pedigree: {
      sire: "Alwin 469",
      dam: "Wypkje fan 'e Zwarte",
      damSire: "Tsjalke 397"
    },
    breeder: {
      name: "S. van der Meer",
      location: "Frisia, Países Bajos"
    },
    chip: "En la visita se lee y se compara con el pasaporte.",
    images: ["/images/tjerk.jpg", "/images/hero.jpg", "/images/portrait.jpg"],
    videoUrl: "https://cdn.coverr.co/videos/coverr-a-black-horse-running-in-the-snow-3733/1080p.mp4"
  },
  {
    id: "willem",
    slug: "willem",
    name: "Willem",
    tag: "Frisón bailador",
    age: "4 años",
    birthYear: 2022,
    height: "1.69 m",
    gender: "Entero",
    level: "Bailador",
    idealUse: "Baile y paseo",
    coat: "Negra",
    status: "Disponible",
    canBeMounted: true,
    tagline: "Paso largo y buen braceo.",
    description: "Caballo frisón importado de Holanda. Registro original holandés y papeles que pasan a nombre del comprador. Gran elasticidad en pista.",
    stableNotes: "Paso largo y buen braceo. Responde suave a la pierna y a la rienda. Acostumbrado a sesiones de trabajo diario. Notas de la cuadra · Víctor Hernández, caballerango.",
    flaw: "Le falta calma al momento de subir al remolque; requiere paciencia y entrar a su propio paso.",
    documents: "Pasaporte y papeles de Holanda, que pasan a su nombre.",
    registration: {
      book: "Veulenboek de la KFPS",
      number: "528004 2022 01244",
      meaning: "Es parte del libro principal de la KFPS: ahí se inscribe a los potros cuyos padres cumplen sus requisitos. Los machos enteros se quedan en él toda su vida."
    },
    kfpsAward: {
      title: "2º premio KFPS, inspección de adulto, 2025",
      meaning: "Calificado por un juez oficial de la KFPS en los Países Bajos por su corrección morfológica y andares."
    },
    pedigree: {
      sire: "Maurits 437",
      dam: "Grietje fan 'e Simmer",
      damSire: "Norbert 444"
    },
    breeder: {
      name: "H. de Boer",
      location: "Países Bajos"
    },
    chip: "En la visita se lee y se compara con el pasaporte.",
    images: ["/images/willem.jpg", "/images/portrait.jpg", "/images/hero.jpg"],
    videoUrl: "https://cdn.coverr.co/videos/coverr-a-black-horse-running-in-the-snow-3733/1080p.mp4"
  },
  {
    id: "kasper",
    slug: "kasper",
    name: "Kasper",
    tag: "Frisón montado",
    age: "7 años",
    birthYear: 2019,
    height: "1.72 m",
    gender: "Castrado",
    level: "Montado",
    idealUse: "Cabalgata y familia",
    coat: "Negra",
    status: "Disponible",
    canBeMounted: true,
    tagline: "Tranco firme, ideal para el rancho y la familia.",
    description: "Caballo frisón castrado importado de Holanda. Registrado en el Stamboek de adultos de la KFPS tras su inspección oficial.",
    stableNotes: "Caballo noble y firme de tranco. Muy seguro para jinetes de cualquier nivel y para convivir en familia en el rancho. Notas de la cuadra · Víctor Hernández, caballerango.",
    flaw: "Le falta mayor chispa para baile rápido; es un caballo de paseo, disfrute y cabalgata tranquila.",
    documents: "Pasaporte y papeles de Holanda, que pasan a su nombre.",
    registration: {
      book: "Stamboek de la KFPS",
      number: "528004 2019 00198",
      meaning: "Es el libro de adultos del registro holandés. Entró después de pasar su inspección."
    },
    pedigree: {
      sire: "Thorben 466",
      dam: "Femke fan 'e Bosksicht",
      damSire: "Jasper 366"
    },
    breeder: {
      name: "J. Veenstra",
      location: "Países Bajos"
    },
    chip: "En la visita se lee y se compara con el pasaporte.",
    images: ["/images/kasper.jpg", "/images/hero.jpg", "/images/portrait.jpg"],
    videoUrl: "https://cdn.coverr.co/videos/coverr-a-black-horse-running-in-the-snow-3733/1080p.mp4"
  },
  {
    id: "fedde",
    slug: "fedde",
    name: "Fedde",
    tag: "Potro frisón",
    age: "3 años",
    birthYear: 2023,
    height: "1.66 m",
    gender: "Entero",
    level: "Potro",
    idealUse: "Para formarlo a su gusto",
    coat: "Negra",
    status: "Disponible",
    canBeMounted: false,
    tagline: "Tres años. Para formarlo a su gusto.",
    description: "Potro frisón joven importado de Holanda. Con pasaporte y registro KFPS. En formación pie a tierra.",
    stableNotes: "Trabajado a la cuerda y cabestreo pie a tierra. Muy despierto y receptivo al manejo diario. Todavía no se monta. Notas de la cuadra · Víctor Hernández, caballerango.",
    flaw: "Le falta todo el proceso de rienda y montura; es un potro joven para quien desea formarlo a su mano.",
    documents: "Pasaporte y papeles de Holanda, que pasan a su nombre.",
    registration: {
      book: "Veulenboek de la KFPS",
      number: "528004 2023 03110",
      meaning: "Es parte del libro principal de la KFPS: ahí se inscribe a los potros cuyos padres cumplen sus requisitos."
    },
    kfpsAward: {
      title: "Premio KFPS en inspección de potro, 2023",
      meaning: "Calificación otorgada en Holanda en su inspección de potro."
    },
    pedigree: {
      sire: "Tymen 503",
      dam: "Lobke fan 'e Hoogeweg",
      damSire: "Pier 448"
    },
    breeder: {
      name: "K. Dijkstra",
      location: "Países Bajos"
    },
    chip: "En la visita se lee y se compara con el pasaporte.",
    images: ["/images/fedde.jpg", "/images/hero.jpg", "/images/portrait.jpg"],
    videoUrl: "https://cdn.coverr.co/videos/coverr-a-black-horse-running-in-the-snow-3733/1080p.mp4"
  }
];

export const INITIAL_HORSES = HORSES;
