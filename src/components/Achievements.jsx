import { motion } from "framer-motion";
import achievements from "../data/achievements.js";
import PlumpyIcon from "./PlumpyIcon.jsx";
import { DoodleSparkle } from "./Scribble.jsx";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-paper section relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(14,15,12,0.08) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <span className="inline-flex items-center gap-2 font-marker text-base sm:text-lg text-ink/60">
          <DoodleSparkle className="w-4 h-4 sm:w-5 sm:h-5" /> the trophy shelf
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-1.5 sm:mt-2 leading-tight mb-2">
          wins.
        </h2>
        <p className="text-ink/70 max-w-xl mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
          A handful of competitions and hackathons. Most of these are{" "}
          <span className="font-semibold marker-underline">24-hour onsite</span> -
          midnight pizza, sleepy demos, the works.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {achievements.map((a, idx) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 16, rotate: idx % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              whileHover={{ rotate: 0, y: -4 }}
              className="relative bg-cream sticker rounded-xl sm:rounded-2xl p-4 sm:p-5"
              style={{ transform: `rotate(${idx % 2 === 0 ? -1 : 1}deg)` }}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-12 h-12 rounded-xl border-2 border-ink flex items-center justify-center shrink-0 ${
                    a.rank === 1 ? "bg-lime" : "bg-blush"
                  }`}
                >
                  <PlumpyIcon name="trophy" size={32} tone="cream" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-marker text-sm text-ink/60">{a.date}</p>
                  <h3 className="font-display text-lg leading-tight">{a.title}</h3>
                  <p className="text-sm font-semibold text-ink/85">{a.place}</p>
                </div>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/80">
                {a.blurb}
              </p>
              {a.onsite24 && (
                <span className="absolute -top-3 -right-3 bg-ink text-lime border-2 border-lime rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase rotate-3 inline-flex items-center gap-1">
                  <PlumpyIcon name="clock" size={14} tone="lime" /> 24h onsite
                </span>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
