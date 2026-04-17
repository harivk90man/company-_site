import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

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
  visible: { transition: { staggerChildren: 0.1 } },
};

/* -- data ---------------------------------------------------------------- */
const stats = [
  { value: 6, suffix: "+", label: "Projects Delivered" },
  { value: 4, suffix: "+", label: "Industries Served" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 2, suffix: "+", label: "Years Building" },
];

/* -- count-up hook ------------------------------------------------------- */
function useCountUp(target, inView, duration = 1.6) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return count;
}

/* -- single stat component ----------------------------------------------- */
function StatItem({ value, suffix, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(value, inView);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="flex flex-col items-center px-4 py-6"
    >
      <span className="text-4xl font-extrabold tracking-tight text-gradient sm:text-5xl">
        {count}
        {suffix}
      </span>
      <span className="mt-2 text-sm font-medium text-muted">
        {label}
      </span>
    </motion.div>
  );
}

/* -- component ----------------------------------------------------------- */
export default function Stats() {
  return (
    <section className="relative py-16 sm:py-20">
      {/* Dark gradient background strip */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg-alt to-bg" />
      <div className="absolute inset-0 glass" />

      <motion.div
        className="relative mx-auto max-w-5xl px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map(({ value, suffix, label }) => (
            <StatItem
              key={label}
              value={value}
              suffix={suffix}
              label={label}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
