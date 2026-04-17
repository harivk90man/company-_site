import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  Plane,
  Leaf,
  Wallet,
  Heart,
} from "lucide-react";

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

const industries = [
  {
    icon: Building2,
    name: "Real Estate & Property Management",
    description:
      "Digital platforms for listings, tenant portals, and property analytics.",
  },
  {
    icon: Factory,
    name: "Manufacturing & Operations",
    description:
      "Streamlined workflows, inventory systems, and production dashboards.",
  },
  {
    icon: Plane,
    name: "Travel & Tourism",
    description:
      "Booking engines, itinerary builders, and destination marketing solutions.",
  },
  {
    icon: Leaf,
    name: "CleanTech & EV",
    description:
      "Smart energy tools, EV infrastructure planners, and sustainability platforms.",
  },
  {
    icon: Wallet,
    name: "Finance & Fintech",
    description:
      "Secure payment systems, lending platforms, and financial dashboards.",
  },
  {
    icon: Heart,
    name: "Healthcare & Wellness",
    description:
      "Patient portals, appointment systems, and telehealth integrations.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-24 sm:py-32">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="glow-layer absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-accent-500/5 blur-[120px]" />
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
            Industries We{" "}
            <span className="text-gradient">Serve</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Delivering impact across diverse sectors.
          </p>
        </motion.div>

        {/* Industry cards grid */}
        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {industries.map(({ icon: Icon, name, description }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group glass rounded-2xl p-6 sm:p-8 transition-colors duration-300 hover:bg-card-hover"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 ring-1 ring-card-border transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-primary-500/15">
                <Icon
                  className="h-6 w-6 text-primary-400 transition-colors duration-300 group-hover:text-primary-300"
                  strokeWidth={1.75}
                />
              </div>

              {/* Content */}
              <h3 className="mt-5 text-lg font-semibold text-fg">
                {name}
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
