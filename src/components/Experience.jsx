import { motion } from "framer-motion";
import experience from "../data/experience.js";
import { DoodleSparkle } from "./Scribble.jsx";

export default function Experience() {
  return (
    <section id="experience" className="bg-ink text-cream grain relative px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-14 md:py-16 pb-6 sm:pb-8 md:pb-10">
      <div className="max-w-5xl mx-auto">
        <span className="inline-flex items-center gap-2 font-marker text-sm sm:text-base text-cream/60">
          <DoodleSparkle className="w-4 h-4 sm:w-5 sm:h-5" color="#C6F432" /> on the clock
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-1.5 sm:mt-2 leading-tight mb-5 sm:mb-6">
          experience.
        </h2>

        <ul className="relative space-y-4 sm:space-y-5">
          <span className="absolute left-3 md:left-4 top-3 bottom-3 w-px bg-lime/30" aria-hidden="true" />
          {experience.map((job, idx) => (
            <motion.li
              key={`${job.company}-${job.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="relative pl-10 md:pl-14"
            >
              <span className="absolute left-0 md:left-1 top-4 w-6 h-6 rounded-full border-2 border-lime bg-ink flex items-center justify-center">
                <span className="w-2 h-2 bg-lime rounded-full" />
              </span>

              <article className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:border-lime/40 transition-colors">
                <header className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display text-base sm:text-lg md:text-xl leading-tight">
                    {job.role}{" "}
                    <span className="text-lime">@ {job.company}</span>
                  </h3>
                  <p className="font-marker text-cream/70 text-xs sm:text-sm">{job.dates}</p>
                </header>
                {job.location && (
                  <p className="text-cream/55 text-[11px] sm:text-xs mb-1">{job.location}</p>
                )}
                {job.tagline && (
                  <p className="font-sans text-cream/65 text-xs sm:text-sm mb-2.5 sm:mb-3">
                    {job.tagline}
                  </p>
                )}
                <ul className="space-y-1 list-disc list-outside pl-4 sm:pl-5 text-cream/85 text-xs sm:text-sm leading-relaxed">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                {job.tags?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase tracking-wider font-semibold border border-cream/25 text-cream/85 rounded-full px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
