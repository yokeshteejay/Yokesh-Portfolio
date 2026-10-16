import { aiFocusCards, aiLearningTags } from '../../data/siteContent.js'
import { getIcon } from '../../utils/iconRegistry.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import RevealOnScroll from '../common/RevealOnScroll.jsx'
import NeuralNetworkVisual from '../effects/NeuralNetworkVisual.jsx'

export default function AiFocusSection() {
  return (
    <section id="ai-focus" className="section-wrapper">
      <SectionHeading
        eyebrow="Career Direction"
        title="Growing into an"
        highlight="AI Full Stack Developer"
        subtitle="Combining solid MERN fundamentals with LLM applications, AI agents and model integration."
      />

      <div className="glass-card glow-border relative overflow-hidden p-6 sm:p-10">
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-violet/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-brand-cyan/20 blur-3xl" />

        <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <RevealOnScroll direction="right">
            <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-ink-950/60 p-4 sm:p-6">
              <NeuralNetworkVisual />
              <p className="mt-2 text-center font-code text-[11px] uppercase tracking-[0.25em] text-slate-500">
                input - learning - output
              </p>
            </div>
          </RevealOnScroll>

          <div>
            <ul className="space-y-4">
              {aiFocusCards.map((card, index) => {
                const CardIcon = getIcon(card.iconKey)
                return (
                  <RevealOnScroll key={card.title} direction="left" delay={0.1 * index}>
                    <li className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-brand-cyan/40 hover:bg-white/[0.06] sm:p-5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-violet to-brand-cyan text-lg text-white">
                        <CardIcon />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-white">{card.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-400">{card.text}</p>
                      </div>
                    </li>
                  </RevealOnScroll>
                )
              })}
            </ul>

            <RevealOnScroll delay={0.3}>
              <p className="mb-3 mt-7 font-code text-xs uppercase tracking-[0.2em] text-slate-500">Currently exploring</p>
              <ul className="flex flex-wrap gap-2">
                {aiLearningTags.map((tag) => (
                  <li key={tag} className="tech-chip !border-brand-violet/40 !bg-brand-violet/10">{tag}</li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  )
}
