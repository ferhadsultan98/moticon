import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { IconDetail } from "@/components/IconDetail";
import { IconContent } from "@/components/IconContent";
import { RelatedIcons } from "@/components/RelatedIcons";
import { IconJsonLd } from "@/components/IconJsonLd";
import { iconMeta } from "@/lib/icons";
import {
  getIconDetail,
  humanizeName,
  metaDescription,
  pageHeading,
  pageTitle,
} from "@/lib/icon-copy";
import { absoluteUrl } from "@/lib/site";

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

  const title = pageTitle(meta);
  const description = metaDescription(meta);
  const url = absoluteUrl(`/icons/${meta.name}`);
  const human = humanizeName(meta.name);

  return {
    title,
    description,
    keywords: [
      `animated ${human.toLowerCase()} icon`,
      `${human.toLowerCase()} icon react`,
      `react ${human.toLowerCase()} icon`,
      `${meta.mechanic} animated icon`,
      "animated react icons",
      ...meta.tags,
      ...meta.aliases,
    ],
    alternates: { canonical: `/icons/${meta.name}` },
    openGraph: {
      title: `${title} — moticon`,
      description,
      url,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — moticon`,
      description,
    },
  };
}

export default async function IconPage({ params }: PageProps<"/icons/[name]">) {
  const { name } = await params;
  const meta = iconMeta.find((item) => item.name === name);
  if (!meta) notFound();

  const detail = getIconDetail(name);

  return (
    <>
      <IconJsonLd meta={meta} detail={detail} heading={pageHeading(meta)} />
      <IconDetail name={name} />
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6">
        <IconContent meta={meta} />
        <RelatedIcons meta={meta} />
      </div>
      <Footer />
    </>
  );
}
