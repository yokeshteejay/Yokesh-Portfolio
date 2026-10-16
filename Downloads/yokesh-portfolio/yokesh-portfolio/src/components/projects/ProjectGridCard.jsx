import { FaExternalLinkAlt } from 'react-icons/fa'
import RevealOnScroll from '../common/RevealOnScroll.jsx'
import TiltCard from '../common/TiltCard.jsx'
import BrowserFrame from './BrowserFrame.jsx'

/* Compact card used for the "more work" grid. */
export default function ProjectGridCard({ project, delay = 0, className = '' }) {
  return (
    <RevealOnScroll delay={delay} className={className}>
      <TiltCard className="h-full" maxTilt={5}>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group glass-card glow-border flex h-full flex-col overflow-hidden p-3 transition-shadow duration-500 hover:shadow-brand-cyan/20"
        >
          <BrowserFrame image={project.image} title={project.title} displayUrl={project.displayUrl} accent={project.accent} />

          <div className="flex flex-1 flex-col p-3 pt-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-code text-[11px] uppercase tracking-[0.18em] text-brand-cyan">{project.category}</p>
                <h3 className="mt-1 font-display text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-slate-400">{project.subtitle}</p>
              </div>
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm text-white transition-all duration-300 group-hover:rotate-45 group-hover:border-brand-cyan group-hover:bg-brand-cyan/20 group-hover:text-brand-cyan">
                <FaExternalLinkAlt />
              </span>
            </div>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li key={tech} className="tech-chip !px-3 !py-1 text-[11px]">{tech}</li>
              ))}
            </ul>
          </div>
        </a>
      </TiltCard>
    </RevealOnScroll>
  )
}
