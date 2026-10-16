import { portfolioProjects } from '../../data/siteContent.js'
import SectionHeading from '../common/SectionHeading.jsx'
import FeaturedProjectRow from '../projects/FeaturedProjectRow.jsx'
import ProjectGridCard from '../projects/ProjectGridCard.jsx'

/* On large screens the grid uses six columns so five cards fill perfectly:
   the first two span three columns, the last three span two each. */
const gridSpanByPosition = [
  'lg:col-span-3',
  'lg:col-span-3',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
]

export default function ProjectsSection() {
  const featuredProjects = portfolioProjects.filter((project) => project.featured)
  const otherProjects = portfolioProjects.filter((project) => !project.featured)

  return (
    <section id="projects" className="section-wrapper">
      <SectionHeading
        eyebrow="Selected Work"
        title="Live projects I've"
        highlight="built & shipped"
        subtitle="Real products running in production - click any project to open the live website."
      />

      <div className="space-y-20 sm:space-y-28">
        {featuredProjects.map((project, index) => (
          <FeaturedProjectRow
            key={project.id}
            project={project}
            indexLabel={`0${index + 1}`}
            isReversed={index % 2 === 1}
          />
        ))}
      </div>

      <div className="mb-8 mt-24 flex items-center gap-4 sm:mt-32">
        <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">More platforms</h3>
        <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
        {otherProjects.map((project, index) => (
          <ProjectGridCard
            key={project.id}
            project={project}
            delay={0.07 * index}
            className={`${gridSpanByPosition[index] ?? 'lg:col-span-2'} ${
              index === otherProjects.length - 1 && otherProjects.length % 2 === 1 ? 'sm:col-span-2 lg:col-span-2' : ''
            }`}
          />
        ))}
      </div>
    </section>
  )
}
