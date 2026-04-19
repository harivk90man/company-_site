import { motion } from "framer-motion";
import { ArrowRight, Zap, Brain, Sparkles, Bot } from "lucide-react";

/* -- animation variants -------------------------------------------------- */
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* -- dot-grid keyframes (pure CSS, no canvas) ----------------------------- */
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
      {/* -- Animated background layers ------------------------------------ */}

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

      {/* Animated ring decoration */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full border border-primary-500/10 animate-[pulse-ring_4s_ease-in-out_infinite]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full border border-accent-500/5 animate-[pulse-ring_6s_ease-in-out_infinite_reverse]"
        aria-hidden="true"
      />

      {/* Vignette overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--color-bg)_100%)]"
        aria-hidden="true"
      />

      {/* -- Content -------------------------------------------------------- */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center sm:py-40"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Badge */}
        <motion.div variants={scaleIn} className="mb-8 flex justify-center">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-primary-300 animate-[shimmer_3s_ease-in-out_infinite]">
            <Zap className="h-3.5 w-3.5 text-accent-400 animate-[spin-slow_3s_linear_infinite]" />
            From Idea to Launch
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Build smarter{" "}
          <span className="text-gradient animate-[gradient-shift_6s_ease_infinite]">digital products</span>
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
          <motion.a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30 hover:brightness-110"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Book a Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>

          <motion.a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-card-border px-7 py-3.5 text-sm font-semibold text-fg transition-all duration-300 hover:border-primary-500/40 hover:bg-card-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View Our Work
          </motion.a>
        </motion.div>

        {/* AI Capabilities Strip */}
        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            { icon: Brain, label: "AI Integration", variant: slideInLeft },
            { icon: Sparkles, label: "Smart Automation", variant: scaleIn },
            { icon: Bot, label: "Custom AI Agents", variant: slideInRight },
          ].map(({ icon: Icon, label, variant }) => (
            <motion.span
              key={label}
              variants={variant}
              whileHover={{ scale: 1.08, y: -2 }}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-body cursor-default"
            >
              <Icon className="h-3.5 w-3.5 text-accent-400" />
              {label}
            </motion.span>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={fadeUp}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted"
        >
          {[
            "6+ Projects Delivered",
            "100% Client Satisfaction",
            "AI-Powered Solutions",
          ].map((text, i) => (
            <motion.span
              key={text}
              className="flex items-center gap-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 + i * 0.2 }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-[pulse_2s_ease-in-out_infinite]" />
              {text}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* -- Keyframe definitions ------------------------------------------- */}
      <style>{`
        @keyframes drift {
          from { transform: translate(0, 0); }
          to   { transform: translate(-32px, -32px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-24px) scale(1.04); }
        }
        @keyframes pulse-ring {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          50%      { transform: translate(-50%, -50%) scale(1.06); opacity: 0.6; }
        }
        @keyframes shimmer {
          0%, 100% { box-shadow: 0 0 0 0 rgba(99,102,241,0); }
          50%      { box-shadow: 0 0 20px 2px rgba(99,102,241,0.15); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50%      { background-size: 200% 200%; background-position: right center; }
        }
      `}</style>
    </section>
  );
}
