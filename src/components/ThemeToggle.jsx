import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const { dark, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-card-border text-muted transition-colors hover:bg-card-hover hover:text-fg"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        key={dark ? 'moon' : 'sun'}
        initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
        transition={{ duration: 0.2 }}
      >
        {dark ? <Sun size={16} /> : <Moon size={16} />}
      </motion.div>
    </button>
  )
}
