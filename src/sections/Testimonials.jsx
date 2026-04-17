import { motion } from "framer-motion";
import { Star } from "lucide-react";

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
const testimonials = [
  {
    quote:
      "Bytevora transformed our maintenance operations completely. The system they built is intuitive and exactly what we needed.",
    name: "Resident Association Board",
    company: "Ashirvadh Castle Rock Villas",
    stars: 5,
  },
  {
    quote:
      "Our website went from invisible to ranking #1 on Google. The results speak for themselves.",
    name: "Murugan Tours & Travels",
    company: "Madurai",
    stars: 5,
  },
  {
    quote:
      "They understood our factory workflow and built a solution that actually reduced our downtime. Professional and reliable.",
    name: "Operations Manager",
    company: "Alarabi Plastic Factory",
    stars: 5,
  },
  {
    quote:
      "The EV Station Planner gave us the clarity we needed to make confident investment decisions. Exceptional work.",
    name: "EV Infrastructure Investor",
    company: "",
    stars: 5,
  },
];

/* -- component ----------------------------------------------------------- */
export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-accent-500/5 blur-3xl" />
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
            What Our Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-surface-200/70 sm:text-lg">
            Trusted by businesses looking for practical, modern, and
            growth-focused digital solutions.
          </p>
        </motion.div>

        {/* Testimonial cards grid */}
        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {testimonials.map(({ quote, name, company, stars }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl glass p-6 sm:p-8 transition-colors duration-300 hover:bg-white/[0.08]"
            >
              {/* Star rating */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-base leading-relaxed text-surface-200/90 sm:text-lg">
                &ldquo;{quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white">{name}</p>
                {company && (
                  <p className="mt-0.5 text-sm text-surface-200/60">
                    {company}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
