import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import PlumpyIcon from "./PlumpyIcon.jsx";
import { DoodleSparkle } from "./Scribble.jsx";
import { Send } from "lucide-react";

export default function Contact() {
  const formId = import.meta.env.VITE_FORMSPREE_ID;
  const [state, handleSubmit] = useForm(formId || "demo-form-id");
  const [touched, setTouched] = useState({});

  const fieldClass =
    "w-full bg-transparent border-0 border-b-2 border-cream/30 focus:border-lime focus:ring-0 outline-none px-1 py-3 text-cream placeholder:text-cream/40 font-medium focus-ring";

  return (
    <section id="contact" className="bg-ink text-cream section grain relative">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.3fr] gap-6 sm:gap-8 items-start">
        <div>
          <span className="inline-flex items-center gap-2 font-marker text-base sm:text-lg text-cream/60">
            <DoodleSparkle className="w-4 h-4 sm:w-5 sm:h-5" color="#C6F432" /> say hi
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mt-1.5 sm:mt-2 leading-tight">
            let&apos;s talk.
          </h2>
          <p className="mt-3 sm:mt-4 text-cream/75 max-w-md text-sm sm:text-base leading-relaxed">
            Got a project, an idea, or just want to share a baking recipe? My inbox is open. I
            usually reply within a day or two.
          </p>
          <div className="mt-6 sm:mt-8 scale-90 sm:scale-100 origin-top-left">
            <PlumpyIcon name="mailbox" size={96} />
          </div>
        </div>

        <div className="relative bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7">
          {!formId && (
            <p className="mb-4 text-sm bg-blush/20 border border-blush/40 text-blush rounded-lg px-3 py-2">
              Heads up: set <code className="font-mono">VITE_FORMSPREE_ID</code> in
              <code className="font-mono"> .env</code> to actually send messages.
            </p>
          )}

          <AnimatePresence mode="wait">
            {state.succeeded ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <PlumpyIcon name="thumbs_up" size={96} tone="lime" />
                <p className="font-display text-3xl mt-4">got it!</p>
                <p className="text-cream/75 mt-2">talk soon :)</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-cream/70 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Francis Abernathy"
                    onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-cream/70 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@somewhere.com"
                    onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                    className={fieldClass}
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="mt-1 text-sm text-blush"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-cream/70 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="hi samhitha! i wanted to..."
                    onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                    className={`${fieldClass} resize-y`}
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="mt-1 text-sm text-blush"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="group inline-flex items-center gap-2 bg-lime text-ink font-semibold px-5 py-3 rounded-full sticker hover:-translate-y-0.5 transition-transform focus-ring disabled:opacity-50"
                >
                  {state.submitting ? "sending..." : "send it"}
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
