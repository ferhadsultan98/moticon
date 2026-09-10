import { Hero } from "@/components/Hero";
import { ProofSection } from "@/components/ProofSection";
import { GridPreview } from "@/components/GridPreview";
import { Features } from "@/components/Features";
import { ShipIt } from "@/components/ShipIt";
import { Footer } from "@/components/Footer";
import { PlaygroundPreview } from "@/components/PlaygroundPreview";
import { AgentSection } from "@/components/AgentSection";
import { OpenSourceStrip } from "@/components/OpenSourceStrip";
import { fetchStars } from "@/lib/github/stars";

export default async function Home() {
  const stars = await fetchStars();
  return (
    <>
      {/* understand */}
      <Hero />
      <ProofSection />
      {/* preview + discover */}
      <GridPreview />
      <PlaygroundPreview />
      {/* install + use */}
      <ShipIt />
      <Features />
      {/* agents + return */}
      <AgentSection />
      <OpenSourceStrip stars={stars} />
      <Footer />
    </>
  );
}
