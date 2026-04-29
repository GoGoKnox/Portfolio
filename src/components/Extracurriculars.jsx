import { motion } from "framer-motion";
import extras from "../data/extracurriculars.js";
import PlumpyIcon from "./PlumpyIcon.jsx";
import { ScribbleStar, DoodleSparkle } from "./Scribble.jsx";

export default function Extracurriculars() {
  return (
    <section id="extras" className="bg-blush/40 section relative overflow-hidden">
      <div className="absolute -top-6 right-12 opacity-40 hidden md:block">
        <ScribbleStar className="w-16 h-16" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div>
            <span className="inline-flex items-center gap-2 font-marker text-base sm:text-lg text-ink/60">
              <DoodleSparkle className="w-4 h-4 sm:w-5 sm:h-5" /> giving back
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-1.5 sm:mt-2 leading-tight">
              community, mostly.
            </h2>
            <p className="mt-3 sm:mt-4 max-w-xl text-ink/75 text-sm sm:text-base leading-relaxed">
              Volunteering keeps me grounded. These are the ones that have inspired me to keep doing more.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {extras.map((e, idx) => (
            <motion.article
              key={e.name}
              initial={{ opacity: 0, y: 20, rotate: idx % 2 === 0 ? -1.5 : 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ rotate: 0, y: -4 }}
              className="relative bg-cream sticker p-4 sm:p-5 rounded-xl sm:rounded-2xl"
              style={{ transform: `rotate(${idx % 2 === 0 ? -1.5 : 1.5}deg)` }}
            >
              {e.sticker && (
                <span className="absolute -top-3 -right-3 bg-lime border-2 border-ink rounded-full px-3 py-1 font-marker text-sm rotate-6">
                  {e.sticker}
                </span>
              )}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-14 h-14 rounded-xl border-2 border-ink flex items-center justify-center"
                  style={{ background: e.accent }}
                >
                  <PlumpyIcon name={e.icon} size={36} tone="cream" />
                </div>
                <div>
                  <h3 className="font-display text-xl">{e.name}</h3>
                  <p className="text-sm text-ink/70 font-medium">{e.role}</p>
                </div>
              </div>
              <p className="text-ink/80 leading-relaxed text-[15px]">{e.blurb}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
