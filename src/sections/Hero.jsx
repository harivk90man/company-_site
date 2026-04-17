import { motion } from "framer-motion";
import { ArrowRight, Zap, Brain, Sparkles, Bot } from "lucide-react";

/* ── animation variants ─────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ── dot-grid keyframes (pure CSS, no canvas) ───────────── */
const dotGridStyle = {
  backgroundImage:
    "radial-gradient(circle, rgba(99,102,241,0.15) 1px, transparent 1px)",
  backgroundSize: "32px 32px",
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Animated background layers ─────────────────── */}

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 animate-[drift_60s_linear_infinite]"
        style={dotGridStyle}
        aria-hidden="true"
      />

      {/* Floating gradient orbs */}
      <div
        className="glow-layer pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary-500/20 blur-[128px] animate-[float_8s_ease-in-out_infinite]"
        aria-hidden="true"
      />
      <div
        className="glow-layer pointer-events-none absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-accent-500/20 blur-[128px] animate-[float_10s_ease-in-out_infinite_reverse]"
        aria-hidden="true"
      />
      <div
        className="glow-layer pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[320px] w-[320px] rounded-full bg-primary-600/10 blur-[100px] animate-[float_12s_ease-in-out_infinite]"
        aria-hidden="true"
      />

      {/* Vignette overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--color-bg)_100%)]"
        aria-hidden="true"
      />

      {/* ── Content ────────────────────────────────────── */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center sm:py-40"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-8 flex justify-center">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-primary-300">
            <Zap className="h-3.5 w-3.5 text-accent-400" />
            From Idea to Launch
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Build smarter{" "}
          <span className="text-gradient">digital products</span>
          <br className="hidden sm:block" /> for real business growth
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-body sm:text-xl"
        >
          We design and build websites, mobile apps, SaaS platforms, and
          AI-powered solutions that help businesses scale, automate, and stand
          out.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30 hover:brightness-110"
          >
            Book a Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-card-border px-7 py-3.5 text-sm font-semibold text-fg transition-all duration-300 hover:border-primary-500/40 hover:bg-card-hover"
          >
            View Our Work
          </a>
        </motion.div>

        {/* AI Capabilities Strip */}
        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            { icon: Brain, label: "AI Integration" },
            { icon: Sparkles, label: "Smart Automation" },
            { icon: Bot, label: "Custom AI Agents" },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-body"
            >
              <Icon className="h-3.5 w-3.5 text-accent-400" />
              {label}
            </span>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={fadeUp}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted"
        >
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            6+ Projects Delivered
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            100% Client Satisfaction
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            AI-Powered Solutions
          </span>
        </motion.div>
      </motion.div>

      {/* ── Keyframe definitions (injected once) ──────── */}
      <style>{`
        @keyframes drift {
          from { transform: translate(0, 0); }
          to   { transform: translate(-32px, -32px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-24px) scale(1.04); }
        }
      `}</style>
    </section>
  );
}
