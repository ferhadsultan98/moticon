import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { IconDetail } from "@/components/IconDetail";
import { iconMeta } from "@/lib/icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return iconMeta.map((item) => ({ name: item.name }));
}

export async function generateMetadata({
  params,
}: PageProps<"/icons/[name]">): Promise<Metadata> {
  const { name } = await params;
  const meta = iconMeta.find((item) => item.name === name);
  if (!meta) return {};

  const description = `${meta.name} is a ${meta.mechanic} animated React icon triggered on ${meta.trigger}.`;
  return {
    title: meta.name,
    description,
    openGraph: { title: `${meta.name} — moticon`, description, images: [] },
    twitter: { card: "summary", title: `${meta.name} — moticon`, description, images: [] },
  };
}

export default async function IconPage({ params }: PageProps<"/icons/[name]">) {
  const { name } = await params;
  if (!iconMeta.some((item) => item.name === name)) notFound();

  return (
    <>
      <IconDetail name={name} />
      <Footer />
    </>
  );
}
