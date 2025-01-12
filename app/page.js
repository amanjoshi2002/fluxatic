"use client";
import { HeroSection } from "../app/components/HeroSection"; // Import the HeroSection
import { HeroParallaxDemo } from "../app/components/Projects";
import { GlobeDemo } from "../app/components/GlobeDemo";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GlobeDemo/>
      <HeroParallaxDemo />
      
    </>
  );
}