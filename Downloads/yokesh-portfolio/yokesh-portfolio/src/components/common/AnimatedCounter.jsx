import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/* Counts from 0 to `value` the first time it becomes visible. */
export default function AnimatedCounter({ value, suffix = '', duration = 1600 }) {
  const elementRef = useRef(null)
  const isVisible = useInView(elementRef, { once: true })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isVisible) return undefined
    let animationFrame
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.round(eased * value))
      if (progress < 1) animationFrame = requestAnimationFrame(tick)
    }

    animationFrame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, value, duration])

  return (
    <span ref={elementRef}>
      {displayValue}
      {suffix}
    </span>
  )
}
