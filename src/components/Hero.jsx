import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import PlumpyIcon from "./PlumpyIcon.jsx";
import {
  ScribbleArrow,
  ScribbleStar,
  WashiTape,
  DoodleSparkle,
  PixelCursor,
} from "./Scribble.jsx";

const ROLES = [
  "data analyst",
  "software developer",
  "master doodler",
  "baker",
  "explorer",
  "innovator",
];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 1900);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative grain min-h-[100svh] bg-ink text-cream pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      <div className="absolute -top-10 right-10 opacity-30 hidden md:block">
        <ScribbleStar className="w-24 h-24 text-lime" />
      </div>
      <div className="absolute bottom-32 left-6 opacity-30 hidden md:block">
        <ScribbleStar className="w-16 h-16 text-blush" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-8 sm:gap-10 lg:gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-marker text-xl md:text-2xl text-lime flex items-center gap-2 mb-3"
          >
            <span className="inline-block animate-wiggle origin-bottom-right">
              <PlumpyIcon name="hand" size={36} tone="blush" />
            </span>
            hi there!
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display h-display tracking-tight"
          >
            I&apos;m{" "}
            <span className="text-lime">Samhitha</span>
            <br className="hidden sm:block" /> Naidu
            <span className="inline-block ml-2 align-top">
              <DoodleSparkle className="w-7 h-7 inline-block animate-twinkle" />
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex flex-wrap items-center gap-3 text-base md:text-lg"
          >
            <span className="text-cream/70">a</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={ROLES[i]}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center justify-center text-center px-4 py-1.5 md:py-2 rounded-full bg-lime text-ink font-semibold sticker whitespace-nowrap text-sm sm:text-base"
              >
                {ROLES[i]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-8 max-w-xl text-cream/75 text-base md:text-lg leading-relaxed"
          >
            building things at the intersection of code, data, and curiosity. currently turning IT
            ops data into something humans actually want to look at.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-lime text-ink font-semibold text-sm sm:text-base px-5 py-3 rounded-full sticker hover:-translate-y-0.5 transition-transform focus-ring"
            >
              see my projects <ArrowDown size={18} />
            </a>
            <a
              href="/resume.pdf"
              download="Samhitha-Naidu-Resume.pdf"
              className="group inline-flex items-center gap-2 bg-cream text-ink font-semibold text-sm sm:text-base px-5 py-3 rounded-full sticker hover:-translate-y-0.5 transition-transform focus-ring"
            >
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              download resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-cream/30 text-cream text-sm sm:text-base px-5 py-3 rounded-full hover:border-lime hover:text-lime transition-colors focus-ring"
            >
              say hi
            </a>
          </motion.div>

          <div className="hidden md:flex items-end gap-2 mt-12 text-cream/50 font-marker text-base">
            <ScribbleArrow className="w-32 h-12 -rotate-12" color="#C6F432" />
            <PixelCursor className="w-8 h-8" color="#C6F432" />
            <span className="mb-1">scroll for the good stuff</span>
          </div>
        </div>

        <div className="relative mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, rotate: -6, y: 20 }}
            animate={{ opacity: 1, rotate: -4, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ rotate: 0, y: -4 }}
            className="relative w-[260px] sm:w-[300px] md:w-[340px] bg-cream p-3 pb-12 sticker"
          >
            <WashiTape
              className="absolute -top-3 left-8 w-24 h-6 z-10"
              color="#C6F432"
              angle={-10}
            />
            <WashiTape
              className="absolute -top-3 right-6 w-16 h-5 z-10"
              color="#F5C7CC"
              angle={8}
            />
            <div className="aspect-[3/4] w-full bg-gradient-to-br from-blush via-cream to-sage overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Samhitha Naidu smiling on a snowy mountaintop"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="absolute bottom-3 left-0 right-0 text-center font-marker text-ink text-lg">
              samhitha :)
            </p>
          </motion.div>

          <motion.div
            className="absolute -top-6 -right-3 md:-right-8"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <PlumpyIcon name="cupcake" size={56} tone="blush" />
          </motion.div>
          <motion.div
            className="absolute top-1/3 -left-8 md:-left-14"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.4 }}
          >
            <PlumpyIcon name="book" size={56} tone="cream" />
          </motion.div>
          <motion.div
            className="absolute -bottom-6 -left-2 md:left-6"
            animate={{ y: [0, -6, 0], rotate: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.8 }}
          >
            <PlumpyIcon name="plane" size={56} tone="lime" />
          </motion.div>
          <DoodleSparkle className="absolute top-2 -left-4 w-6 h-6 animate-twinkle" />
          <DoodleSparkle className="absolute bottom-12 -right-2 w-5 h-5 animate-twinkle" />
        </div>
      </div>
    </section>
  );
}
