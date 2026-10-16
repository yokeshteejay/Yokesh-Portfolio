import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/* Soft spotlight that trails the mouse. Only mounts on devices with a real
   pointer, so phones and tablets never pay for it. */
export default function CursorGlow() {
  const [isFinePointer, setIsFinePointer] = useState(false)
  const x = useMotionValue(-400)
  const y = useMotionValue(-400)
  const smoothX = useSpring(x, { stiffness: 120, damping: 20 })
  const smoothY = useSpring(y, { stiffness: 120, damping: 20 })

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)')
    setIsFinePointer(query.matches)
    if (!query.matches) return undefined

    const move = (event) => {
      x.set(event.clientX - 200)
      y.set(event.clientY - 200)
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [x, y])

  if (!isFinePointer) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[5] h-[25rem] w-[25rem] rounded-full"
      style={{
        x: smoothX,
        y: smoothY,
        background: 'radial-gradient(circle, rgba(124,58,237,0.16) 0%, rgba(34,211,238,0.07) 40%, transparent 70%)',
      }}
      aria-hidden="true"
    />
  )
}
