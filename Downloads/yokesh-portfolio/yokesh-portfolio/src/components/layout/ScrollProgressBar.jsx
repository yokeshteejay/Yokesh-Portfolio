import { motion, useScroll, useSpring } from 'framer-motion'

/* Thin gradient bar at the very top that fills as the page is scrolled. */
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-brand-violet via-brand-cyan to-brand-pink"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}
