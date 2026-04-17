import { motion } from 'framer-motion'

export default function SectionHeading({ title, gradientWord, subtitle }) {
  const parts = gradientWord ? title.split(gradientWord) : [title]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
        {gradientWord ? (
          <>
            {parts[0]}
            <span className="text-gradient">{gradientWord}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
