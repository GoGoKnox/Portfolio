import { motion } from "framer-motion";
import skills from "../data/skills.js";
import { DoodleSparkle } from "./Scribble.jsx";

const ACCENTS = ["bg-lime", "bg-blush", "bg-sage", "bg-lime", "bg-blush"];

const ICON_FOR = {
  cup: "J",
  snake: "Py",
  db: "SQL",
  html: "</>",
  css: "{ }",
  js: "JS",
  chart: "BI",
  pen: "Fi",
  spark: "+",
  chip: "A",
  cloud: "Az",
  server: "DB",
  ai: "AI",
  rag: "R",
  auto: "~",
  da: "DA",
  dash: "UI",
};

export default function Skills() {
  return (
    <section id="skills" className="bg-cream section relative">
      <div className="max-w-6xl mx-auto">
        <span className="inline-flex items-center gap-2 font-marker text-base sm:text-lg text-ink/60">
          <DoodleSparkle className="w-4 h-4 sm:w-5 sm:h-5" /> skills!
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-1.5 sm:mt-2 leading-tight mb-6 sm:mb-8">
          tools of the trade.
        </h2>

        <ul className="flex flex-wrap gap-2 sm:gap-3">
          {skills.map((s, idx) => {
            const accent = ACCENTS[idx % ACCENTS.length];
            return (
              <motion.li
                key={s.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: Math.min(idx * 0.02, 0.4) }}
                whileHover={{ rotate: [0, -2, 2, 0], transition: { duration: 0.35 } }}
                className="chip bg-cream"
              >
                <span
                  className={`w-6 h-6 sm:w-7 sm:h-7 shrink-0 rounded-md border-2 border-ink ${accent} flex items-center justify-center text-[10px] sm:text-xs font-display leading-none px-0.5`}
                >
                  {ICON_FOR[s.icon] ?? "•"}
                </span>
                {s.name}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
