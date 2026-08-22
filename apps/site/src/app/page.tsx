import { Hero } from "@/components/Hero";
import { ProofSection } from "@/components/ProofSection";
import { GridPreview } from "@/components/GridPreview";
import { Features } from "@/components/Features";
import { ShipIt } from "@/components/ShipIt";
import { Footer } from "@/components/Footer";
import { PlaygroundPreview } from "@/components/PlaygroundPreview";
import { IconMarquee } from "@/components/IconMarquee";
import { SupportSection } from "@/components/SupportSection";

export default function Home() {
  return (
    <>
      <Hero />
      <IconMarquee />
      <PlaygroundPreview />
      <ProofSection />
      <GridPreview />
      <Features />
      <ShipIt />
      <SupportSection />
      <Footer />
    </>
  );
}
