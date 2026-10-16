import { useEffect, useRef } from 'react'

/* Interactive "neural network" of floating nodes. Lines connect nearby nodes
   and the pointer pulls them together - a nod to AI + full-stack systems.
   Node count scales with screen size to stay smooth on phones. */
export default function ParticleNetworkCanvas({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let nodes = []
    let animationFrame
    const pointer = { x: -9999, y: -9999 }
    const colors = ['124,58,237', '34,211,238', '244,114,182']

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * ratio
      canvas.height = height * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)

      const count = Math.max(24, Math.min(80, Math.floor((width * height) / 16000)))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
      }))
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)
      const linkDistance = width < 640 ? 95 : 140

      nodes.forEach((node, index) => {
        if (!reduceMotion) {
          node.x += node.vx
          node.y += node.vy
        }
        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1

        const dx = pointer.x - node.x
        const dy = pointer.y - node.y
        const pointerDistance = Math.hypot(dx, dy)
        if (pointerDistance < 160 && !reduceMotion) {
          node.x += dx * 0.012
          node.y += dy * 0.012
        }

        context.beginPath()
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        context.fillStyle = `rgba(${node.color},0.85)`
        context.fill()

        for (let other = index + 1; other < nodes.length; other += 1) {
          const distance = Math.hypot(node.x - nodes[other].x, node.y - nodes[other].y)
          if (distance < linkDistance) {
            context.beginPath()
            context.moveTo(node.x, node.y)
            context.lineTo(nodes[other].x, nodes[other].y)
            context.strokeStyle = `rgba(${node.color},${(1 - distance / linkDistance) * 0.35})`
            context.lineWidth = 0.7
            context.stroke()
          }
        }
      })

      animationFrame = requestAnimationFrame(draw)
    }

    const handlePointerMove = (event) => {
      const bounds = canvas.getBoundingClientRect()
      pointer.x = event.clientX - bounds.left
      pointer.y = event.clientY - bounds.top
    }
    const handlePointerLeave = () => {
      pointer.x = -9999
      pointer.y = -9999
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className={`h-full w-full ${className}`} aria-hidden="true" />
}
