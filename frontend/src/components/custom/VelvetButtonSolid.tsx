"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { REGISTER_PAGE } from "@/shared/constants/routes";
import Link from "next/link";
import { Button } from "../ui/button";

export function VelvetButtonSolid() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="mb-12"
    >
      <Link href={REGISTER_PAGE}>
        <motion.div
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            size="lg"
            className="relative bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6 rounded-full cursor-pointer shadow-lg overflow-hidden group"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background:
                  "linear-gradient(135deg, transparent 25%, rgba(255,255,255,0.2) 50%, transparent 75%)",
                backgroundSize: "200% 200%",
                animation: "shimmer 2s infinite linear",
              }}
            />

            <span className="relative z-10 text-white font-medium">
              Comece Agora Gratuitamente
            </span>
          </Button>
        </motion.div>
      </Link>

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
