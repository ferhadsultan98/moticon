import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Playground } from "@/components/Playground";

export const metadata: Metadata = {
  title: "Playground",
  description: "Customize and preview all 328 moticon animated React icons.",
};

export default function PlaygroundPage() {
  return (
    <>
      <Playground />
      <Footer />
    </>
  );
}
