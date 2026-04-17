import { motion } from "framer-motion";
import { Server, Plug, Zap, Shield } from "lucide-react";

/* -- animation variants -------------------------------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const chipFade = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

/* -- data ---------------------------------------------------------------- */
const categories = [
  {
    label: "Frontend",
    techs: ["React", "Next.js", "Tailwind CSS", "JavaScript / TypeScript"],
  },
  {
    label: "Backend",
    techs: ["Node.js", "Express", "Python"],
  },
  {
    label: "Database",
    techs: ["PostgreSQL", "Supabase", "MongoDB"],
  },
  {
    label: "Cloud & DevOps",
    techs: ["Vercel", "Netlify", "Firebase", "AWS"],
  },
  {
    label: "AI & Automation",
    techs: ["OpenAI APIs", "LangChain", "AI Workflow Automation"],
  },
];

const capabilities = [
  {
    icon: Server,
    title: "Scalable Architecture",
    description:
      "Systems designed to grow with your business, from MVP to millions of users.",
  },
  {
    icon: Plug,
    title: "API Integrations",
    description:
      "Seamless connections to third-party services, payment gateways, and data sources.",
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description:
      "Lightning-fast load times and smooth interactions that keep users engaged.",
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description:
      "Security baked in from day one with encryption, auth, and best practices.",
  },
];

/* -- component ----------------------------------------------------------- */
export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Subtle background glow */}
      <div
        className="glow-layer pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[480px] w-[640px] rounded-full bg-primary-500/5 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Our <span className="text-gradient">Technology Stack</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Modern tools and frameworks we use to build scalable, future-proof
            solutions.
          </p>
        </motion.div>

        {/* Tech categories grid */}
        <motion.div
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {categories.map(({ label, techs }) => (
            <motion.div
              key={label}
              className="glass rounded-2xl p-6"
              variants={fadeUp}
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-300">
                {label}
              </h3>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={staggerContainer}
              >
                {techs.map((tech) => (
                  <motion.span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-card-border bg-card-bg px-3.5 py-1.5 text-sm font-medium text-body transition-colors hover:border-primary-500/40 hover:bg-primary-500/10 hover:text-fg"
                    variants={chipFade}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Capability highlights */}
        <motion.div
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {capabilities.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              className="glass group rounded-2xl p-6 text-center transition-colors hover:border-primary-500/30"
              variants={fadeUp}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 text-primary-400 transition-colors group-hover:from-primary-500/30 group-hover:to-accent-500/30">
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-semibold text-fg">{title}</h4>
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
