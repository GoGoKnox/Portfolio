//import { useRef } from "react";
import { motion } from "framer-motion";
//import { ChevronLeft, ChevronRight } from "lucide-react";
import projects from "../data/projects.js";
import PlumpyIcon from "./PlumpyIcon.jsx";
import { DoodleSparkle, PixelCursor } from "./Scribble.jsx";

const FEATURED_SLUG = "walky-talky";

export default function Projects() {
  const featured = projects.find((p) => p.slug === FEATURED_SLUG);
  const rest = projects.filter((p) => p.slug !== FEATURED_SLUG);
  //const rowRef = useRef(null);

  //const scrollBy = (delta) => {
   // rowRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  //};

  return (
    <section
      id="projects"
      className="bg-ink text-cream grain relative px-4 sm:px-6 md:px-10 lg:px-16 pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-14 md:pb-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
          <div>
            <span className="inline-flex items-center gap-2 font-marker text-sm sm:text-base text-cream/60">
              <DoodleSparkle className="w-4 h-4 sm:w-5 sm:h-5" color="#C6F432" /> things i&apos;ve built
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-1.5 leading-tight">
              projects.
            </h2>
          </div>
        </div>

        {featured && <FeaturedTile project={featured} />}

        <div className="mt-8 sm:mt-10 flex items-end justify-between flex-wrap gap-3 mb-3">
          <h3 className="font-display text-lg sm:text-xl md:text-2xl">more from the workshop</h3>
          {/* <div className="flex items-center gap-2">
            <span className="hidden md:inline-flex items-center gap-1 text-cream/60 font-marker text-sm mr-2">
              <PixelCursor className="w-4 h-4" color="#C6F432" /> swipe me
            </span>
            <button
              type="button"
              onClick={() => scrollBy(-360)}
              className="w-10 h-10 rounded-full border-2 border-cream/30 text-cream hover:border-lime hover:text-lime transition focus-ring"
              aria-label="scroll projects left"
            >
              <ChevronLeft className="mx-auto" size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(360)}
              className="w-10 h-10 rounded-full border-2 border-cream/30 text-cream hover:border-lime hover:text-lime transition focus-ring"
              aria-label="scroll projects right"
            >
              <ChevronRight className="mx-auto" size={18} />
            </button>
          </div> */}
          <span className="hidden md:inline-flex items-center gap-1 text-cream/60 font-marker text-sm">
          <PixelCursor className="w-4 h-4" color="#C6F432" /> swipe me
          </span>
        </div>

        <div
          //ref={rowRef}
          className="scroll-snap-row -mx-4 sm:-mx-6 md:-mx-10 lg:-mx-16 px-4 sm:px-6 md:px-10 lg:px-16 flex md:flex-row flex-col gap-4 sm:gap-5 md:overflow-x-auto md:pb-3"
        >
          {rest.map((p) => (
            <ProjectTile key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedTile({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto rounded-2xl overflow-hidden border-2 border-lime/40 bg-white/5"
    >
      <div className="bg-lime text-ink px-3 sm:px-4 py-1.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 font-display text-[11px] sm:text-xs md:text-sm tracking-wider">
        <span>FEATURED PROJECT</span>
        <span className="font-marker normal-case tracking-normal text-xs sm:text-sm truncate">
          {project.hackathon}
        </span>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        <div className="relative aspect-[16/10] lg:aspect-auto bg-cream/95 flex items-center justify-center overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} hero`}
              className={`w-full h-full ${
                project.imageFit === "contain" ? "object-contain p-3" : "object-cover"
              }`}
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center gap-3 text-ink/70">
              <div className="w-24 h-24 bg-cream rounded-2xl border-2 border-ink flex items-center justify-center sticker">
                <PlumpyIcon name={project.iconName} size={72} tone="lime" />
              </div>
            </div>
          )}
        </div>

        <div className="p-4 sm:p-5 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl leading-tight">
              {project.title}
            </h3>
            <p className="text-cream/65 text-xs sm:text-sm mt-1">{project.tag}</p>
            <div className="mt-2.5 space-y-1.5 text-cream/85 text-xs sm:text-[13px] leading-relaxed">
              {project.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="mt-3.5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold border border-cream/25 rounded-full px-2 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectTile({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="snap-tile flex-shrink-0 w-full md:w-[440px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-lime/40 transition-colors"
    >
      <div
        className="relative aspect-[5/3] flex items-stretch justify-center overflow-hidden"
        style={{ background: project.accent + "30" }}
      >
        {project.images?.length >= 2 ? (
          <div className="grid grid-cols-2 gap-0.5 w-full h-full">
            {project.images.slice(0, 2).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            ))}
          </div>
        ) : project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className={`w-full h-full ${
              project.imageFit === "contain" ? "object-contain p-3" : "object-cover"
            }`}
            loading="lazy"
          />
        ) : (
          <div className="w-20 h-20 bg-cream rounded-2xl border-2 border-ink flex items-center justify-center sticker">
            <PlumpyIcon name={project.iconName} size={56} tone="lime" />
          </div>
        )}
        {project.award && (
          <span className="absolute top-3 left-3 bg-ink text-lime border border-lime/40 rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase">
            {project.award.includes("1st") ? "1st place" : project.award}
          </span>
        )}
      </div>
      <div className="p-5">
        <h4 className="font-display text-2xl">{project.title}</h4>
        <p className="text-cream/70 mt-1">{project.tag}</p>
        <p className="mt-3 text-cream/80 text-[15px] leading-relaxed">
          {project.description[0]}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 6).map((t) => (
            <span
              key={t}
              className="text-[10px] uppercase tracking-wider font-semibold border border-cream/25 rounded-full px-2 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
