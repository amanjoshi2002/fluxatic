"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import InteractiveHoverButton from "../ui/interactive-hover-button";

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      className="group/product relative flex-shrink-0"
    >
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[30rem] h-96 rounded-xl p-6 border">
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
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
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

  const router = useRouter(); // Initialize useRouter

  const handleViewMore = () => {
    router.push("/projects"); // Navigate to /projects
  };

  return (
    <div
      ref={ref}
      className="h-[400vh] py-40 overflow-visible antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="container mx-auto px-4"
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
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-black">OUR PROJECTS</h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-black">
        We're constantly creating, innovating & creating impact. Experience a glimpse into our capabilities
      </p>
    </div>
  );
};