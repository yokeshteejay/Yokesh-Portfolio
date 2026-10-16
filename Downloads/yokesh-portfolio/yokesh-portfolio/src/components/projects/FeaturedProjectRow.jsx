import { FaExternalLinkAlt } from 'react-icons/fa'
import RevealOnScroll from '../common/RevealOnScroll.jsx'
import TiltCard from '../common/TiltCard.jsx'
import BrowserFrame from './BrowserFrame.jsx'

/* Large showcase row: screenshot on one side, details on the other.
   `isReversed` flips the sides on desktop for a zig-zag rhythm. */
export default function FeaturedProjectRow({ project, indexLabel, isReversed }) {
  return (
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <RevealOnScroll direction={isReversed ? 'left' : 'right'} className={isReversed ? 'lg:order-2' : ''}>
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group relative block" aria-label={`Open ${project.title}`}>
          <div className={`absolute -inset-3 rounded-3xl bg-gradient-to-br ${project.accent} opacity-25 blur-2xl transition-opacity duration-500 group-hover:opacity-50`} />
          <TiltCard maxTilt={5}>
            <BrowserFrame image={project.image} title={project.title} displayUrl={project.displayUrl} accent={project.accent} className="relative" />
          </TiltCard>
        </a>
      </RevealOnScroll>

      <RevealOnScroll direction={isReversed ? 'right' : 'left'} delay={0.1} className={isReversed ? 'lg:order-1' : ''}>
        <p className={`bg-gradient-to-r ${project.accent} bg-clip-text font-display text-6xl font-bold text-transparent opacity-80 sm:text-7xl`}>
          {indexLabel}
        </p>
        <p className="mt-2 font-code text-xs uppercase tracking-[0.2em] text-brand-cyan">{project.category}</p>
        <h3 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">{project.title}</h3>
        <p className="mt-1 text-base font-medium text-slate-300">{project.subtitle}</p>
        <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech} className="tech-chip">{tech}</li>
          ))}
        </ul>

        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="button-primary mt-7">
          Visit Live Site <FaExternalLinkAlt className="text-xs" />
        </a>
      </RevealOnScroll>
    </div>
  )
}
