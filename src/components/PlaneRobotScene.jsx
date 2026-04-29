import { motion } from "framer-motion";
import PlumpyIcon from "./PlumpyIcon.jsx";

export default function PlaneRobotScene() {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <path
          d="M40 320 C 100 240, 180 240, 220 200 C 260 160, 340 160, 360 80"
          fill="none"
          stroke="#0E0F0C"
          strokeWidth="2"
          strokeDasharray="6 8"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>

      <motion.div
        className="absolute"
        style={{ width: 0, height: 0 }}
        animate={{
          x: [40, 220, 360, 220, 40],
          y: [320, 200, 80, 200, 320],
          rotate: [-15, -25, -45, -25, -15],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2">
          <PlumpyIcon name="plane" size={64} tone="lime" />
        </div>
      </motion.div>

      <motion.div
        className="absolute right-2 bottom-4"
        animate={{ x: [0, -10, 0], y: [0, -1, 0, 1, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative">
          <PlumpyIcon name="robot_car" size={140} tone="blush" />
          <motion.div
            className="absolute -top-10 left-1/2 -translate-x-1/2 bg-cream border-2 border-ink rounded-2xl px-3 py-1 sticker font-marker text-ink whitespace-nowrap"
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            beep beep hi!
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-10 left-12 text-blush"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 14, ease: "linear", repeat: Infinity }}
      >
        <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true">
          <g fill="#F5C7CC" stroke="#0E0F0C" strokeWidth="2">
            <circle cx="24" cy="10" r="6" />
            <circle cx="38" cy="24" r="6" />
            <circle cx="24" cy="38" r="6" />
            <circle cx="10" cy="24" r="6" />
            <circle cx="24" cy="24" r="5" fill="#C6F432" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
