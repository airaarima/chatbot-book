import { motion, MotionValue, useTransform } from "framer-motion";
import { forwardRef } from "react";
import { ChatBookTitle } from "./ChatBookTitle";
import { ParallaxBackground } from "./ParallaxBackground";
import { VelvetButtonSolid } from "./VelvetButtonSolid";
import { HeroImage } from "./HeroImage";
import { ScrollIndicator } from "./ScrollIndicator";

interface Props {
  scrollYProgress: MotionValue<number>;
}

export const HeroSection = forwardRef<HTMLDivElement, Props>(
  ({ scrollYProgress }, ref) => {
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
      <motion.div
        ref={ref}
        className="relative flex flex-col items-center justify-center min-h-screen px-4 py-20 overflow-hidden bg-gradient-to-b from-purple-50 to-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ParallaxBackground y={y} />

        <div className="container relative z-10 mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Descubra o Prazer da Leitura Inteligente com <ChatBookTitle />
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Seu assistente literário inteligente, pronto para responder suas
              perguntas sobre livros, recomendar leituras e transformar sua
              experiência com a literatura.
            </p>
          </motion.div>

          <VelvetButtonSolid />

          <HeroImage />
        </div>

        <ScrollIndicator />
      </motion.div>
    );
  },
);

HeroSection.displayName = "HeroSection";
