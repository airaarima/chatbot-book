import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export function DynamicCTA() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      className="py-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #9d4edd 0%, #7b2cbf 25%, #5a189a 50%, #3c096c 75%, #240046 100%)",
        }}
      />

      <div
        className="absolute inset-0 z-10 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: "soft-light",
        }}
      />

      <div
        className="absolute inset-0 z-10 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)",
          mixBlendMode: "overlay",
        }}
      />

      <div className="container relative z-20 mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Pronto para transformar sua experiência literária?
        </motion.h2>

        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Junte-se a milhares de leitores que já estão aproveitando o poder da
          inteligência artificial para enriquecer sua jornada literária.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/register">
            <motion.div
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="relative bg-white text-purple-800 hover:bg-purple-50 text-lg px-8 py-6 rounded-full cursor-pointer border-0 shadow-lg overflow-hidden group"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%)",
                    backgroundSize: "200% 200%",
                    animation: "shimmer 2s infinite linear",
                  }}
                />

                <span className="relative z-10 font-medium">
                  Cadastre-se Gratuitamente
                </span>
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </motion.div>
  );
}
