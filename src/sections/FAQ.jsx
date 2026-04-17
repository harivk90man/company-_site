import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
  visible: { transition: { staggerChildren: 0.08 } },
};

/* -- data ---------------------------------------------------------------- */
const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with startups, small businesses, and growing companies across industries including real estate, manufacturing, travel, cleantech, and fintech. If you have a business problem that technology can solve, we can help.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on complexity. A business website typically takes 2\u20134 weeks. A SaaS platform or mobile app can take 6\u201312 weeks. We\u2019ll give you a clear timeline during our discovery phase.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Absolutely. We offer ongoing maintenance, feature enhancements, and technical support. We believe in long-term partnerships, not one-off projects.",
  },
  {
    question: "Can you integrate AI into our existing systems?",
    answer:
      "Yes. We specialize in practical AI integration \u2014 from chatbots and automation to data analysis and predictive tools. We\u2019ll evaluate your workflows and identify where AI adds real value.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer project-based pricing with clear milestones. No hidden costs, no surprises. We\u2019ll provide a detailed proposal after understanding your requirements.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simple \u2014 book a free consultation. We\u2019ll discuss your needs, suggest an approach, and provide a no-obligation proposal. No pressure, just a conversation about how we can help.",
  },
];

/* -- accordion item component -------------------------------------------- */
function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <motion.div
      variants={fadeUp}
      className="glass rounded-2xl transition-colors duration-300 hover:bg-card-hover"
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-fg sm:text-lg">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-card-bg"
        >
          <ChevronDown className="h-4 w-4 text-primary-400" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 sm:px-8">
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* -- component ----------------------------------------------------------- */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="glow-layer absolute left-1/2 bottom-0 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-accent-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Got questions? We&apos;ve got answers.
          </p>
        </motion.div>

        {/* FAQ items */}
        <motion.div
          className="mt-12 flex flex-col gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {faqs.map(({ question, answer }, index) => (
            <FAQItem
              key={question}
              question={question}
              answer={answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
