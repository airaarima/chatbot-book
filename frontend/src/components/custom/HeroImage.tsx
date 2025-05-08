import { APP_NAME } from "@/shared/constants/appConstants";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChatDemoOverlay } from "./ChatDemoOverlay";
export const HeroImage = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.8 }}
    className="relative mx-auto w-full max-w-3xl h-[400px] rounded-xl overflow-hidden shadow-2xl"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-700/10 z-10 rounded-xl" />
    <Image
      // TODO alterar essa parte
      src="/placeholder.svg?height=800&width=1200"
      alt={`${APP_NAME} em ação`}
      fill
      className="object-cover"
      priority
    />
    <ChatDemoOverlay />
  </motion.div>
);
