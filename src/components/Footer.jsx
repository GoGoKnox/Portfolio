import { Github, Linkedin, Mail } from "lucide-react";
import PlumpyIcon from "./PlumpyIcon.jsx";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/GoGoKnox",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/samhitha-naidu",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:b.samhithanaidu04@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-6 sm:py-8 flex flex-col md:flex-row gap-4 sm:gap-6 items-center justify-between">
        <p className="text-xs sm:text-sm text-cream/70 inline-flex items-center flex-wrap gap-2">
          created by{" "}
          <span className="font-display text-cream">Samhitha Naidu</span>
          <PlumpyIcon name="heart" size={20} tone="blush" className="animate-wiggle" />
          <span className="text-cream/40">&bull;</span>
          <span className="font-serif italic text-xs sm:text-sm text-cream/55 tracking-wide">
            © 2026, all rights reserved
          </span>
        </p>

        <ul className="flex items-center gap-3">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer noopener" : undefined}
                aria-label={s.label}
                className="w-10 h-10 rounded-full border-2 border-cream/30 flex items-center justify-center hover:border-lime hover:text-lime transition-colors focus-ring"
              >
                <s.icon size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
