"use client";

import { ChatBookTitle } from "./ChatBookTitle";
import { FeatureGrid } from "./FeatureGrid";
import { motion } from "framer-motion";
import { forwardRef } from "react";

export const FeaturesSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <motion.div
      ref={ref}
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Por que escolher o <ChatBookTitle />?
        </motion.h2>

        <FeatureGrid />
      </div>
    </motion.div>
  );
});

FeaturesSection.displayName = "FeaturesSection";
