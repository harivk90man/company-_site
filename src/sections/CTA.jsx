import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const dotGridStyle = {
  backgroundImage:
    "radial-gradient(circle, rgba(99,102,241,0.08) 1px, transparent 1px)",
  backgroundSize: "24px 24px",
};

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Gradient background */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-950 via-surface-950 to-accent-500/10"
        aria-hidden="true"
      />

      {/* Dot pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={dotGridStyle}
        aria-hidden="true"
      />

      {/* Glow orbs */}
      <div
        className="pointer-events-none absolute -top-24 left-1/4 h-[400px] w-[400px] rounded-full bg-primary-500/15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 right-1/4 h-[350px] w-[350px] rounded-full bg-accent-500/15 blur-[120px]"
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
        >
          Have an idea, process, or business{" "}
          <span className="text-gradient">problem to solve?</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-surface-200/80 sm:text-xl"
        >
          Let&rsquo;s build something that works &mdash; for your users and your
          bottom line.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30 hover:brightness-110"
          >
            Talk to Us
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white/90 transition-all duration-300 hover:border-white/30 hover:bg-white/5"
          >
            <FileText className="h-4 w-4" />
            Get a Proposal
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
