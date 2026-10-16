import { motion } from 'framer-motion'

/* Animated SVG neural network: layered nodes with light pulses travelling
   along the connections. Purely decorative, scales to any width. */
const layerSizes = [3, 5, 5, 3]
const viewWidth = 440
const viewHeight = 340
const paddingX = 50
const paddingY = 40

const layers = layerSizes.map((count, layerIndex) => {
  const x = paddingX + (layerIndex * (viewWidth - paddingX * 2)) / (layerSizes.length - 1)
  return Array.from({ length: count }, (_, nodeIndex) => ({
    x,
    y: paddingY + ((nodeIndex + 0.5) * (viewHeight - paddingY * 2)) / count,
    id: `${layerIndex}-${nodeIndex}`,
  }))
})

const connections = layers.slice(0, -1).flatMap((layer, layerIndex) =>
  layer.flatMap((from) => layers[layerIndex + 1].map((to) => ({ from, to, id: `${from.id}>${to.id}` }))),
)

const nodeColors = ['#22d3ee', '#7c3aed', '#f472b6', '#34d399']

export default function NeuralNetworkVisual() {
  return (
    <svg viewBox={`0 0 ${viewWidth} ${viewHeight}`} className="h-auto w-full" role="img" aria-label="Animated neural network illustration">
      <defs>
        <linearGradient id="neural-line-gradient" x1="0" x2="1">
          <stop offset="0" stopColor="#7c3aed" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>

      {connections.map((connection, index) => (
        <g key={connection.id}>
          <line
            x1={connection.from.x}
            y1={connection.from.y}
            x2={connection.to.x}
            y2={connection.to.y}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
          {index % 4 === 0 && (
            <motion.line
              x1={connection.from.x}
              y1={connection.from.y}
              x2={connection.to.x}
              y2={connection.to.y}
              stroke="url(#neural-line-gradient)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeDasharray="10 120"
              animate={{ strokeDashoffset: [130, 0] }}
              transition={{ repeat: Infinity, duration: 2.4 + (index % 5) * 0.35, ease: 'linear', delay: (index % 7) * 0.2 }}
            />
          )}
        </g>
      ))}

      {layers.map((layer, layerIndex) =>
        layer.map((node, nodeIndex) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r="8"
            fill="#0a0c1c"
            stroke={nodeColors[layerIndex % nodeColors.length]}
            strokeWidth="2"
            animate={{ r: [8, 11, 8], opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 2.8, delay: (layerIndex + nodeIndex) * 0.25 }}
          />
        )),
      )}
    </svg>
  )
}
