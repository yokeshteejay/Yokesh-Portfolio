import { skillGroups } from '../../data/siteContent.js'
import { getIcon } from '../../utils/iconRegistry.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import RevealOnScroll from '../common/RevealOnScroll.jsx'
import TiltCard from '../common/TiltCard.jsx'

export default function SkillsSection() {
  return (
    <section id="skills" className="section-wrapper">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Tools I use to"
        highlight="build everything"
        subtitle="A complete MERN toolkit backed by deployment and AI skills."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const GroupIcon = getIcon(group.iconKey)
          return (
            <RevealOnScroll key={group.title} delay={0.06 * index}>
              <TiltCard className="h-full" maxTilt={6}>
                <article className="group glass-card glow-border relative h-full overflow-hidden p-6">
                  <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${group.color} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-50`} />

                  <div className="relative flex items-center gap-4">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${group.color} text-xl text-white shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}>
                      <GroupIcon />
                    </span>
                    <h3 className="font-display text-xl font-semibold text-white">{group.title}</h3>
                  </div>

                  <ul className="relative mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="tech-chip">{item}</li>
                    ))}
                  </ul>
                </article>
              </TiltCard>
            </RevealOnScroll>
          )
        })}
      </div>
    </section>
  )
}
