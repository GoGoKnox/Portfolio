import { motion } from "framer-motion";
import PlumpyIcon from "./PlumpyIcon.jsx";
import { ScribbleUnderline, DoodleSparkle } from "./Scribble.jsx";
import PlaneRobotScene from "./PlaneRobotScene.jsx";

export default function About() {
  return (
    <section id="about" className="bg-cream section relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-8 sm:gap-10 lg:gap-12 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 font-marker text-base sm:text-lg text-ink/60"
          >
            <DoodleSparkle className="w-4 h-4 sm:w-5 sm:h-5" /> about me
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl mt-1.5 sm:mt-2 leading-tight"
          >
            curious soul,
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">always tinkering</span>
              <ScribbleUnderline className="absolute left-0 right-0 -bottom-2 h-3 w-full" />
            </span>
            .
          </motion.h2>

          <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-ink/85 max-w-2xl leading-relaxed">
            <p>
              I&apos;ve been a curious kid all the way through. Spent four years deep in{" "}
              <span className="inline-flex items-center gap-1 font-semibold">
                <PlumpyIcon name="robot" size={22} tone="lime" /> robotics
              </span>{" "}
              and{" "}
              <span className="inline-flex items-center gap-1 font-semibold">
                <PlumpyIcon name="plane" size={22} tone="blush" /> aeromodeling
              </span>{" "}
              - building little machines, breaking them, and rebuilding them better.
            </p>
            <p>
              Off-screen I&apos;m a{" "}
              <span className="inline-flex items-center gap-1 font-semibold">
                <PlumpyIcon name="book" size={22} tone="cream" /> voracious reader
              </span>{" "}
              and a{" "}
              <span className="inline-flex items-center gap-1 font-semibold">
                <PlumpyIcon name="cupcake" size={22} tone="blush" /> baker
              </span>
              . I keep a soft spot for animals, slow mornings, and projects with a purpose.
            </p>
            <p>
              I&apos;m a{" "}
              <span className="font-semibold marker-underline">4-time hackathon first-place winner</span>
              , debate-club regular, and serial collector of trophies in treasure hunts, math
              quizzes, and puzzle competitions.
            </p>
          </div>

          <div className="mt-5 sm:mt-8 flex flex-wrap gap-1.5 sm:gap-2">
            {["curious", "fast learner", "problem solver", "team player"].map((t) => (
              <span key={t} className="chip bg-paper">
                {t}
              </span>
            ))}
          </div>
        </div>

        <PlaneRobotScene />
      </div>
    </section>
  );
}
