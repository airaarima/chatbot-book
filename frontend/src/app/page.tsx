"use client";

import { DynamicCTA } from "@/components/custom/Dynamic-cta";
import { FeaturesSection } from "@/components/custom/FeaturesSection";
import { Footer } from "@/components/custom/Footer";
import { HeroSection } from "@/components/custom/HeroSection";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection scrollYProgress={scrollYProgress} ref={heroRef} />

      <FeaturesSection ref={featuresRef} />

      <DynamicCTA />

      <Footer />
    </div>
  );
};

export default Home;
