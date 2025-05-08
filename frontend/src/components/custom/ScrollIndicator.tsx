import { motion } from "framer-motion";

export const ScrollIndicator = () => (
  <motion.div
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
  >
    <div className="w-8 h-8 border-b-2 border-r-2 border-purple-600 transform rotate-45" />
  </motion.div>
);
