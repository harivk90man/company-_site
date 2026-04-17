import { motion } from 'framer-motion';
import { Globe, Smartphone, Layers, Brain, TrendingUp, Wrench, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Custom Web Development',
    description:
      'High-performance websites that convert visitors into customers. Built with modern frameworks, optimized for speed and search engines.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile apps that users love. From concept to App Store — designed for engagement and retention.',
  },
  {
    icon: Layers,
    title: 'SaaS Product Development',
    description:
      'Scalable SaaS platforms built to generate recurring revenue. We handle architecture, billing, multi-tenancy, and growth features.',
  },
  {
    icon: Brain,
    title: 'AI Integration & Automation',
    description:
      'Integrate AI into your workflows to reduce costs and unlock insights. From chatbots to predictive analytics — practical AI that delivers ROI.',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Performance Optimization',
    description:
      'Dominate search rankings and deliver blazing-fast experiences. Data-driven SEO strategies paired with technical optimization.',
  },
  {
    icon: Wrench,
    title: 'Product Support & Enhancements',
    description:
      'Keep your product competitive with ongoing support, feature enhancements, and modernization. We\'re your long-term tech partner.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            What We <span className="text-gradient">Build</span>
          </h2>
          <p className="mt-4 text-base text-surface-200 sm:text-lg leading-relaxed">
            End-to-end digital solutions designed for business growth, not just
            code.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl glass p-6 sm:p-8 transition-colors duration-300 hover:bg-white/[0.08]"
            >
              {/* Gradient border on hover */}
              <span
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(99,102,241,0.35), rgba(139,92,246,0.35))',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  WebkitMaskComposite: 'xor',
                  padding: '1px',
                  borderRadius: 'inherit',
                }}
                aria-hidden
              />

              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 ring-1 ring-white/10 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-primary-500/15">
                <Icon className="h-6 w-6 text-primary-400 transition-colors duration-300 group-hover:text-primary-300" strokeWidth={1.75} />
              </div>

              {/* Content */}
              <h3 className="mt-5 text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-surface-200">
                {description}
              </p>

              {/* Subtle arrow link */}
              <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-primary-400 transition-colors duration-300 group-hover:text-primary-300">
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
