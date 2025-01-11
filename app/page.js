"use client";
import { HeroSection } from "../app/components/HeroSection"; // Import the HeroSection
import { HeroParallaxDemo } from "../app/components/Projects";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroParallaxDemo />
    </>
  );
}