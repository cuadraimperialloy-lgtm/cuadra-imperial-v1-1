import { redirect } from "next/navigation";
import { HORSES } from "@/data/horses";

export function generateStaticParams() {
  return HORSES.map((h) => ({ id: h.id }));
}

export default async function EjemplarIdRedirect({ params }: { params: Promise<{ id: string }> }) {
  const resolved = await params;
  redirect(`/caballos/${resolved.id}`);
}
