import { notFound } from "next/navigation";
import { HORSES } from "@/data/horses";
import HorseDetailClient from "@/components/horses/HorseDetailClient";

export function generateStaticParams() {
  return HORSES.map((h) => ({
    slug: h.slug,
  }));
}

export default async function CaballoPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolved = await params;
  const horse = HORSES.find(
    (h) => h.slug.toLowerCase() === resolved.slug.toLowerCase() || h.id.toLowerCase() === resolved.slug.toLowerCase()
  );

  if (!horse) {
    notFound();
  }

  return <HorseDetailClient horse={horse} />;
}
