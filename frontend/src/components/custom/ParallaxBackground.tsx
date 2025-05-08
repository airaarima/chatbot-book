import { motion, MotionValue } from "framer-motion";

interface ParallaxBackgroundProps {
  y: MotionValue<number>;
}

export const ParallaxBackground = ({ y }: ParallaxBackgroundProps) => {
  return (
    <motion.div className="absolute inset-0 z-0" style={{ y }}>
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-purple-200 opacity-30" />
      <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-purple-300 opacity-20" />
      <div className="absolute bottom-40 left-1/4 w-40 h-40 rounded-full bg-purple-100 opacity-40" />
      <div className="absolute bottom-20 right-1/3 w-24 h-24 rounded-full bg-purple-200 opacity-30" />
    </motion.div>
  );
};
