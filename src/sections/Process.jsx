import { motion } from "framer-motion";
import { Search, FileText, Palette, Code, Rocket } from "lucide-react";

/* -- animation variants -------------------------------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* -- data ---------------------------------------------------------------- */
const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "We listen, research, and understand your business, users, and goals.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Plan",
    description:
      "Architecture, tech stack, timelines, and milestones \u2014 all mapped out clearly.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Design",
    description:
      "Clean, intuitive interfaces designed for conversion and user delight.",
  },
  {
    number: "04",
    icon: Code,
    title: "Build",
    description:
      "Agile development with regular demos. Quality code, tested thoroughly.",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "Deployment, monitoring, and continuous improvement. We stay with you.",
  },
];

/* -- component ----------------------------------------------------------- */
export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-primary-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-surface-200/70 sm:text-lg">
            A clear, collaborative process &mdash; from your first idea to a
            launched product.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Horizontal connector line (desktop) */}
          <div
            className="pointer-events-none absolute top-10 left-[10%] right-[10%] hidden h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent lg:block"
            aria-hidden
          />

          {/* Steps grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map(({ number, icon: Icon, title, description }, i) => (
              <motion.div
                key={number}
                variants={fadeUp}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Vertical connector line (mobile) — between steps */}
                {i < steps.length - 1 && (
                  <div
                    className="pointer-events-none absolute top-20 left-1/2 h-[calc(100%+2rem)] w-px -translate-x-1/2 bg-gradient-to-b from-primary-500/30 to-transparent sm:hidden"
                    aria-hidden
                  />
                )}

                {/* Number + icon circle */}
                <div className="relative z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-surface-900 ring-1 ring-white/10 transition-all duration-300 group-hover:ring-primary-500/40 group-hover:shadow-lg group-hover:shadow-primary-500/15">
                  <span className="text-xs font-bold text-primary-400">
                    {number}
                  </span>
                  <Icon
                    className="mt-0.5 h-5 w-5 text-surface-200/80 transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.75}
                  />
                </div>

                {/* Content */}
                <h3 className="mt-4 text-base font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-surface-200/60">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
