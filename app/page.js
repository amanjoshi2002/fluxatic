"use client";
import { useEffect, useState } from "react";
import { WavyBackground } from "../components/ui/wavy-background";
import { cn } from "@/lib/utils"; // Ensure you have this utility for class merging

const words = `UI/UX
Website Design
Branding`;

const Letter = ({ letter, className }) => {
  const [code, setCode] = useState(letter.toUpperCase().charCodeAt(0));

  useEffect(() => {
    let count = Math.floor(Math.random() * 10) + 5;
    const interval = setInterval(() => {
      setCode(() => Math.floor(Math.random() * 26) + 65);
      count--;
      if (count === 0) {
        setCode(letter.toUpperCase().charCodeAt(0));
        clearInterval(interval);
      }
    }, 24);

    return () => clearInterval(interval);
  }, [letter]);

  return (
    <span className={cn("whitespace-pre text-white", className)}>
      {String.fromCharCode(code)}
    </span>
  );
};

const GibberishText = ({ text, className }) => {
  return (
    <>
      {text.split("").map((letter, index) => (
        <Letter className={className} letter={letter} key={`${index}-${letter}`} />
      ))}
    </>
  );
};

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const wordsArray = words.split("\n");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsArray.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [wordsArray.length]);

  return (
    <>
      <div className="absolute top-0 left-0 p-4 z-50">
        <img src="/images/logo.gif" alt="Logo" className="h-16 w-auto" />
      </div>
      <div className="absolute top-0 right-0 p-4 z-50">
        <div className="space-y-1">
          <span className="block w-8 h-0.5 bg-white"></span>
          <span className="block w-8 h-0.5 bg-white"></span>
          <span className="block w-8 h-0.5 bg-white"></span>
        </div>
      </div>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          YOUR STRATEGIC PARTNER FOR 
        </p>
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          <GibberishText className="text-6xl font-black" text={wordsArray[currentWordIndex]} />
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Expert Bespoke Digital Solutions designed to boost revenue, elevate your brand presence & increase operational efficiency
        </p>
      </WavyBackground>
    </>
  );
}