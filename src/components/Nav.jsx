import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NavLogo from "./NavLogo.jsx";

const LINKS = [
  { id: "about", label: "about" },
  { id: "extras", label: "community" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "achievements", label: "wins" },
  { id: "skills", label: "skills" },
  { id: "contact", label: "contact" },
];

const SCROLL_DELTA = 8;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("hero");
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const dy = y - lastY.current;
      if (y < 48) {
        setHidden(false);
      } else if (dy > SCROLL_DELTA) {
        setHidden(true);
        setOpen(false);
      } else if (dy < -SCROLL_DELTA) {
        setHidden(false);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", ...LINKS.map((l) => l.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "bg-ink/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-2 text-cream hover:text-lime transition-colors focus-ring rounded-lg"
          aria-label="Samhitha Naidu home"
        >
          <span className="inline-block hover:animate-wiggle origin-center">
            <NavLogo className="w-9 h-9 sm:w-10 sm:h-10" />
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-6 xl:gap-7">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`relative text-sm md:text-[15px] font-medium transition-colors focus-ring ${
                  active === l.id ? "text-lime" : "text-cream/85 hover:text-cream"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-lime rounded-full"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden text-cream p-2 -mr-1 focus-ring"
          aria-label={open ? "close menu" : "open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-ink border-t border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col px-4 py-3 gap-0.5">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`block py-3 px-2 rounded-md text-base font-medium ${
                      active === l.id ? "text-lime bg-white/5" : "text-cream/85"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
