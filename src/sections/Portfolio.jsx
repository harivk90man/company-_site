import { motion } from "framer-motion";

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
  visible: { transition: { staggerChildren: 0.12 } },
};

/* -- projects data ------------------------------------------------------- */
const projects = [
  {
    name: "Association Maintenance Tracker",
    client: "Ashirvadh Castle Rock Villas Owner Association",
    industry: "Real Estate",
    problem:
      "Manual maintenance tracking was chaotic and delayed.",
    solution:
      "Digital platform for tracking, assigning, and monitoring maintenance requests.",
    outcome:
      "Streamlined operations, improved resident satisfaction.",
  },
  {
    name: "EV Station Planner",
    client: null,
    industry: "Electric Vehicles / CleanTech",
    problem:
      "EV entrepreneurs lacked tools to evaluate charging station viability.",
    solution:
      "Investment calculator with subsidy analysis, ROI projections, and regional data.",
    outcome:
      "Data-driven decision making for EV infrastructure investments.",
  },
  {
    name: "Factory Floor Maintenance Tracker",
    client: "Alarabi Plastic Factory, Kuwait",
    industry: "Manufacturing",
    problem:
      "Equipment downtime was costing production hours and revenue.",
    solution:
      "Maintenance scheduling and tracking system with real-time status updates.",
    outcome:
      "Reduced downtime, improved production efficiency.",
  },
  {
    name: "Madurai Murugan Tours & Travels",
    client: null,
    industry: "Travel & Tourism",
    problem:
      "Zero online presence, losing business to competitors.",
    solution:
      "SEO-optimized business website with local search strategy.",
    outcome:
      "Ranked #1 on Google for key travel queries in Madurai.",
  },
  {
    name: "Madurai Daksha Tours & Travels",
    client: null,
    industry: "Travel & Tourism",
    problem: "No digital lead generation pipeline.",
    solution:
      "Lead-focused website with booking CTAs and local SEO.",
    outcome:
      "Consistent inbound leads from organic search.",
  },
  {
    name: "Family Expense Tracker",
    client: null,
    industry: "Personal Finance",
    tag: "In Progress",
    problem:
      "Families struggle to track shared expenses and budgets.",
    solution:
      "Mobile-first app for collaborative expense tracking and budgeting.",
    outcome:
      "Currently in development \u2014 launching soon.",
  },
];

/* -- component ----------------------------------------------------------- */
export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[480px] w-[640px] rounded-full bg-accent-500/5 blur-[120px]"
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
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-surface-200/70 sm:text-lg">
            Real projects, real impact. Here's what we've built for our clients.
          </p>
        </motion.div>

        {/* Project cards grid */}
        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.name}
              className="glass group relative rounded-2xl p-6 transition-colors hover:border-primary-500/30"
              variants={fadeUp}
            >
              {/* Left gradient accent border */}
              <div
                className="pointer-events-none absolute inset-y-4 left-0 w-[3px] rounded-full bg-gradient-to-b from-primary-500 to-accent-500 opacity-40 transition-opacity group-hover:opacity-80"
                aria-hidden
              />

              <div className="pl-4">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {project.name}
                    </h3>
                    {project.client && (
                      <p className="mt-0.5 text-sm text-surface-200/60">
                        {project.client}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-surface-200">
                      {project.industry}
                    </span>
                    {project.tag && (
                      <span className="inline-flex items-center rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 text-xs font-medium text-accent-400">
                        {project.tag}
                      </span>
                    )}
                  </div>
                </div>

                {/* Problem / Solution / Outcome */}
                <div className="mt-5 space-y-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary-400">
                      Problem
                    </span>
                    <p className="mt-0.5 text-sm leading-relaxed text-surface-200/70">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary-400">
                      Solution
                    </span>
                    <p className="mt-0.5 text-sm leading-relaxed text-surface-200/70">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary-400">
                      Outcome
                    </span>
                    <p className="mt-0.5 text-sm leading-relaxed text-surface-200/70">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
