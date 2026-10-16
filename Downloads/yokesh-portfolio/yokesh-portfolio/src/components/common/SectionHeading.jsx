import RevealOnScroll from './RevealOnScroll.jsx'

export default function SectionHeading({ eyebrow, title, highlight, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <RevealOnScroll className={`mb-12 flex flex-col sm:mb-16 ${alignment}`}>
      <span className="section-eyebrow">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-cyan" />
        {eyebrow}
      </span>
      <h2 className="section-title text-balance">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </RevealOnScroll>
  )
}
