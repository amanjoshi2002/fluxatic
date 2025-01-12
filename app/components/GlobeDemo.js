import { useState } from 'react';
import Globe from "@/components/ui/globe";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function GlobeDemo() {
  return (
    <div className="relative flex size-full max-w-[100rem] items-center justify-center overflow-hidden rounded-lg bg-[linear-gradient(180deg,rgba(0,0,0,1)_57%,rgba(196,207,209,1)_88%,rgba(255,255,255,1)_95%)] px-4 pb-[20rem] pt-12 sm:pb-[25rem] md:pt-24 sm:px-8 md:px-80 md:pb-[70rem]">
      <div className="absolute top-12 sm:top-16 md:top-32 z-10 flex flex-col items-center gap-4 md:gap-6">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-300/80 bg-clip-text text-center text-4xl sm:text-5xl md:text-[8rem] font-bold leading-none text-transparent">
          Currently available globally
        </span>
        <span className="pointer-events-none text-center text-sm sm:text-base md:text-2xl font-light tracking-wide text-gray-300 px-4 md:px-0">
          Serving customers across all continents, 24/7
        </span>
      </div>
      <Globe className="absolute top-[45%] sm:top-[40%] md:top-[32%] w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px] hidden md:block" />

      {/* Video Section - Only for Small Screens */}
      <div className="md:hidden absolute bottom-1 left-1/2 transform -translate-x-1/2 z-10 w-64 border-4 border-gradient-to-r from-black to-white rounded-lg p-2 mt-12">
        <div className="text-center mb-2 text-white font-bold">Watch Brand Film</div>
        <HeroVideoDialog
          className="block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/r65Phx2OQK4"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
          thumbnailAlt="Hero Video"
        />
      </div>

      {/* Video Section - Only for Large Screens */}
      <div className="hidden md:block absolute bottom-8 right-8 z-10 w-64 md:w-80 border-4 border-gradient-to-r from-black to-white rounded-lg p-2">
        <div className="text-center mb-2 text-white font-bold">Watch Brand Film</div>
        <HeroVideoDialog
          className="block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/r65Phx2OQK4"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
          thumbnailAlt="Hero Video"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(255,255,255,0.2),rgba(0,0,0,0))]" />
    </div>
  );
}