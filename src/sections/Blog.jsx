import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

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

const posts = [
  {
    title: "Why Every Business Needs an AI Strategy in 2025",
    description:
      "Practical steps to evaluate, adopt, and scale AI across your organization.",
  },
  {
    title: "SaaS Architecture: Building for Scale from Day One",
    description:
      "Key architectural decisions that separate scalable platforms from fragile MVPs.",
  },
  {
    title: "SEO for Startups: Quick Wins That Drive Real Traffic",
    description:
      "Low-effort, high-impact SEO tactics to grow organic traffic fast.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative py-24 sm:py-32">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="glow-layer absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-primary-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Insights &{" "}
            <span className="text-gradient">Resources</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Thoughts on building better software, AI trends, and startup growth.
            Coming soon.
          </p>
        </motion.div>

        {/* Blog cards */}
        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {posts.map(({ title, description }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group glass rounded-2xl p-6 sm:p-8 transition-colors duration-300"
            >
              {/* Coming Soon tag */}
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 text-xs font-medium text-accent-400">
                <Clock className="h-3 w-3" />
                Coming Soon
              </span>

              {/* Title */}
              <h3 className="mt-4 text-lg font-semibold leading-snug text-fg">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>

              {/* Disabled link */}
              <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-subtle cursor-not-allowed">
                <span>Read More</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
