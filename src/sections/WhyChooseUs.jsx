import { motion } from "framer-motion";
import {
  Target,
  Brain,
  Rocket,
  MessageSquare,
  Code2,
  Handshake,
} from "lucide-react";

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
  visible: { transition: { staggerChildren: 0.1 } },
};

/* -- data ---------------------------------------------------------------- */
const reasons = [
  {
    icon: Target,
    title: "Business-First Thinking",
    description:
      "Every line of code serves a business goal. We start with your objectives, not just a feature list.",
  },
  {
    icon: Brain,
    title: "Practical AI Usage",
    description:
      "We integrate AI where it matters \u2014 not as a buzzword, but as a tool that delivers measurable results.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description:
      "Lean processes, modern tools, and focused execution. We ship quality work on tight timelines.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "No jargon, no black boxes. You\u2019ll always know what\u2019s happening, what\u2019s next, and why.",
  },
  {
    icon: Code2,
    title: "Modern Tech Stack",
    description:
      "We use the latest proven technologies to build products that are fast, secure, and future-proof.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We don\u2019t disappear after launch. Ongoing support, enhancements, and scaling \u2014 we grow with you.",
  },
];

/* -- component ----------------------------------------------------------- */
export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="glow-layer absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary-500/5 blur-3xl" />
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
            Why <span className="text-gradient">Bytevora</span>?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            We&apos;re not just developers &mdash; we&apos;re your
            growth-focused technology partner.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {reasons.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl glass p-6 sm:p-8 transition-colors duration-300 hover:bg-card-hover"
            >
              {/* Icon in gradient circle */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg shadow-primary-500/20 transition-shadow duration-300 group-hover:shadow-primary-500/35">
                <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
              </div>

              {/* Content */}
              <h3 className="mt-5 text-lg font-semibold text-fg">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
