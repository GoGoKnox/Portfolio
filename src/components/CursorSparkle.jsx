import { useEffect, useRef, useState } from "react";
import useReducedMotion from "../hooks/useReducedMotion.js";

const COLORS = ["#C6F432", "#F5C7CC", "#FFFFFF", "#B7CFA0"];

export default function CursorSparkle() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [particles, setParticles] = useState([]);
  const idRef = useRef(0);
  const lastRef = useRef(0);

  useEffect(() => {
    if (reduced) return;
    if (typeof window === "undefined") return;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;
    setEnabled(true);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e) => {
      const now = performance.now();
      if (now - lastRef.current < 28) return;
      lastRef.current = now;
      const id = ++idRef.current;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const driftX = (Math.random() - 0.5) * 18;
      const driftY = (Math.random() - 0.2) * 18;
      const size = 2.5 + Math.random() * 2.5;
      const rotate = Math.random() * 60 - 30;
      setParticles((p) => [
        ...p.slice(-22),
        { id, x: e.clientX, y: e.clientY, color, driftX, driftY, size, rotate },
      ]);
      window.setTimeout(() => {
        setParticles((p) => p.filter((q) => q.id !== id));
      }, 900);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[55]" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute block animate-twinkle"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            background: p.color,
            border: "1px solid #0E0F0C",
            transform: `translate(-50%,-50%) translate(${p.driftX}px, ${p.driftY}px) rotate(${p.rotate}deg)`,
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  );
}
