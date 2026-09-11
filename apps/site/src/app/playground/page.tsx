import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Playground } from "@/components/Playground";

export const metadata: Metadata = {
  title: "Playground — preview & configure every icon",
  description: "Customize size, color and stroke, preview the animation, and copy the generated code for any moticon animated React icon.",
  alternates: { canonical: "/playground" },
};

export default function PlaygroundPage() {
  return (
    <>
      <Playground />
      <Footer />
    </>
  );
}
