import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { experienceTimeline } from '../../data/siteContent.js'
import SectionHeading from '../common/SectionHeading.jsx'
import RevealOnScroll from '../common/RevealOnScroll.jsx'

export default function ExperienceSection() {
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 75%', 'end 60%'] })
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 22 })

  return (
    <section id="experience" className="section-wrapper">
      <SectionHeading
        eyebrow="Journey"
        title="Experience and"
        highlight="Education"
        subtitle="From intern to a full stack developer shipping live products."
      />

      <div ref={timelineRef} className="relative mx-auto max-w-5xl">
        {/* track + animated fill */}
        <div className="absolute bottom-0 left-4 top-0 w-px bg-white/10 lg:left-1/2 lg:-translate-x-1/2" />
        <motion.div
          className="absolute left-4 top-0 h-full w-px origin-top bg-gradient-to-b from-brand-violet via-brand-cyan to-brand-pink lg:left-1/2 lg:-translate-x-1/2"
          style={{ scaleY: lineScale }}
        />

        <ul className="space-y-10">
          {experienceTimeline.map((entry, index) => {
            const isRightSide = index % 2 === 1
            return (
              <li key={entry.title + entry.period} className="relative pl-12 lg:pl-0">
                <span className="absolute left-4 top-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center lg:left-1/2">
                  <span className="absolute h-4 w-4 animate-pulse-ring rounded-full bg-brand-cyan/60" />
                  <span className="h-3 w-3 rounded-full border-2 border-ink-950 bg-brand-cyan" />
                </span>

                <RevealOnScroll
                  direction={isRightSide ? 'left' : 'right'}
                  className={`lg:w-[calc(50%-2.5rem)] ${isRightSide ? 'lg:ml-auto' : ''}`}
                >
                  <article className="glass-card glow-border p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-brand-violet/20 px-3 py-1 font-code text-[11px] text-violet-300">
                        {entry.period}
                      </span>
                      <span className="rounded-full bg-brand-cyan/15 px-3 py-1 font-code text-[11px] text-brand-cyan">
                        {entry.badge}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">{entry.title}</h3>
                    <p className="mt-1 text-sm font-medium text-brand-pink">{entry.company}</p>
                    <ul className="mt-4 space-y-2.5">
                      {entry.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                </RevealOnScroll>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
