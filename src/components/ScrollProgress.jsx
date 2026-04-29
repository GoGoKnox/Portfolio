import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-lime z-[60] origin-left"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
