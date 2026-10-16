import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/* Short branded intro screen. Disappears once the page has loaded. */
export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1700)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="relative flex h-28 w-28 items-center justify-center">
            <span className="absolute inset-0 animate-pulse-ring rounded-3xl bg-brand-violet/50" />
            <motion.div
              className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-violet to-brand-cyan font-display text-4xl font-bold text-white shadow-2xl shadow-brand-violet/50"
              initial={{ rotate: -20, scale: 0.6, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 160, damping: 14 }}
            >
              YK
            </motion.div>
          </div>
          <p className="mt-8 font-code text-xs uppercase tracking-[0.35em] text-slate-400">Loading portfolio</p>
          <div className="mt-4 h-1 w-44 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-brand-violet to-brand-cyan"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
