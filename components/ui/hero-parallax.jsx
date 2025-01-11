"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import InteractiveHoverButton from "../ui/interactive-hover-button";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import arrow icons

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      className="group/product relative flex-shrink-0 w-full sm:w-[30rem]"
    >
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-96 rounded-xl p-6 border">
          <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            {product.title}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={product.thumbnail}
              height="600"
              width="600"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={product.title}
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
};

export const HeroParallax = ({ products }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const router = useRouter(); // Initialize useRouter

  // Check if the screen is mobile-sized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle slide navigation
  const handleNext = () => {
    if (currentSlide < products.length / 2 - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleViewMore = () => {
    router.push("/projects"); // Navigate to /projects
  };

  // Initialize hooks for both mobile and desktop
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  if (isMobile) {
    // Mobile layout: Slider with two rows and arrow buttons
    return (
      <div className="py-10 overflow-visible antialiased relative flex flex-col self-auto">
        <Header />
        <div className="container mx-auto px-4 w-full relative">
          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {products.map((product, index) => (
              <div key={product.title} className="w-full flex-shrink-0 px-2">
                <CardContainer className="inter-var">
                  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-96 rounded-xl p-6 border">
                    <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                      {product.title}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                      <Image
                        src={product.thumbnail}
                        height="600"
                        width="600"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt={product.title}
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            ))}
          </div>

          {/* Arrow Buttons */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className="p-2 bg-gray-200 rounded-full disabled:opacity-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentSlide >= products.length / 2 - 1}
              className="p-2 bg-gray-200 rounded-full disabled:opacity-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* View More Button */}
          <div className="flex justify-center mt-6">
            <InteractiveHoverButton onClick={handleViewMore}>
              View More
            </InteractiveHoverButton>
          </div>
        </div>
      </div>
    );
  }

  // Desktop layout: Hero Parallax (unchanged)
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  return (
    <div
      ref={ref}
      className="h-[400vh] py-40 overflow-visible antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] overflow-x-hidden"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="container mx-auto px-4 w-full"
      >
        {/* First Row */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-5 mb-5">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>

        {/* Second Row */}
        <motion.div className="flex flex-row space-x-5 mb-5">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>

        {/* Third Row */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-5">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>

        {/* View More Button */}
        <div className="flex justify-center mt-1">
          <InteractiveHoverButton onClick={handleViewMore}>
            View More
          </InteractiveHoverButton>
        </div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-10 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-black">OUR PROJECTS</h1>
      <p className="max-w-2xl text-base md:text-xl mt-4 text-black">
        We're constantly creating, innovating & creating impact. Experience a glimpse into our capabilities
      </p>
    </div>
  );
};