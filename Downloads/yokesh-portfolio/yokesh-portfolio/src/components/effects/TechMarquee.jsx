import { techMarqueeItems } from '../../data/siteContent.js'

/* Endless scrolling strip of technologies (two rows, opposite directions). */
function MarqueeRow({ items, reverse = false }) {
  const doubledItems = [...items, ...items]

  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div className={`flex shrink-0 gap-4 pr-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {doubledItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-5 py-2 font-display text-sm font-medium text-slate-200 backdrop-blur sm:text-base"
          >
            <span className="mr-2 text-brand-cyan">#</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function TechMarquee() {
  const firstHalf = techMarqueeItems.slice(0, Math.ceil(techMarqueeItems.length / 2))
  const secondHalf = techMarqueeItems.slice(Math.ceil(techMarqueeItems.length / 2))

  return (
    <div className="relative space-y-4 py-10" aria-label="Technologies I work with">
      <MarqueeRow items={firstHalf} />
      <MarqueeRow items={secondHalf} reverse />
    </div>
  )
}
