import { motion } from "framer-motion";
import education from "../data/education.js";
import PlumpyIcon from "./PlumpyIcon.jsx";
import { WashiTape, DoodleSparkle, ScribbleStar } from "./Scribble.jsx";

export default function Education() {
  return (
    <section id="education" className="bg-paper section relative">
      <div className="max-w-5xl mx-auto">
        <span className="inline-flex items-center gap-2 font-marker text-lg text-ink/60">
          <DoodleSparkle className="w-5 h-5" /> the school years
        </span>
        <h2 className="font-display text-5xl md:text-6xl mt-2 leading-tight mb-12">
          where i picked up the basics.
        </h2>

        <div className="relative pl-6 md:pl-10">
          <svg
            className="absolute left-2 md:left-4 top-2 bottom-2 w-2 h-[calc(100%-1rem)]"
            viewBox="0 0 8 400"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M4 0 C 6 100, 2 200, 4 300 C 6 360, 4 400, 4 400"
              fill="none"
              stroke="#0E0F0C"
              strokeWidth="2"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />
          </svg>

          <ul className="space-y-8">
            {education.map((e, idx) => (
              <motion.li
                key={e.school}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-[26px] md:-left-[42px] top-4 w-7 h-7 rounded-full border-2 border-ink flex items-center justify-center bg-lime">
                  <PlumpyIcon name="spark" size={16} tone="ink" />
                </span>

                <article
                  className="relative bg-cream sticker rounded-2xl p-5 pl-6 overflow-hidden"
                  style={{ transform: `rotate(${idx % 2 === 0 ? -0.6 : 0.6}deg)` }}
                >
                  <WashiTape
                    className="absolute -top-2 left-6 w-16 h-4 z-10"
                    color={e.accent}
                    angle={-6}
                  />
                  <ScribbleStar
                    className="absolute -right-3 -bottom-3 w-16 h-16 opacity-25 pointer-events-none"
                    color={e.accent}
                  />
                  <div className="absolute right-3 top-3 hidden sm:flex flex-wrap justify-end gap-1.5 max-w-[40%] pointer-events-none">
                    {e.badges?.map((b) => (
                      <span
                        key={b}
                        className="text-[10px] uppercase tracking-wider font-semibold border border-ink/60 rounded-full px-2 py-0.5 bg-cream/70"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-xl border-2 border-ink flex items-center justify-center shrink-0"
                      style={{ background: e.accent }}
                    >
                      <PlumpyIcon name={e.icon} size={36} tone="cream" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-marker tracking-wider uppercase text-ink/60">
                        {e.period}
                      </p>
                      <h3 className="font-display text-lg md:text-xl leading-tight">
                        {e.school}
                      </h3>
                      {e.note && (
                        <p className="text-sm text-ink/70 mt-0.5">{e.note}</p>
                      )}
                    </div>
                  </div>
                </article>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
