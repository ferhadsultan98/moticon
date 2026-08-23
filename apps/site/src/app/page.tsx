import { Hero } from "@/components/Hero";
import { ProofSection } from "@/components/ProofSection";
import { GridPreview } from "@/components/GridPreview";
import { Features } from "@/components/Features";
import { ShipIt } from "@/components/ShipIt";
import { Footer } from "@/components/Footer";
import { PlaygroundPreview } from "@/components/PlaygroundPreview";
import { IconMarquee } from "@/components/IconMarquee";
import { SupportSection } from "@/components/SupportSection";
import { fetchStars } from "@/lib/github/stars";

export default async function Home() {
  const stars = await fetchStars();
  return (
    <>
      <Hero />
      <IconMarquee />
      <PlaygroundPreview />
      <ProofSection />
      <GridPreview />
      <Features />
      <ShipIt />
      <SupportSection stars={stars} />
      <Footer />
    </>
  );
}
