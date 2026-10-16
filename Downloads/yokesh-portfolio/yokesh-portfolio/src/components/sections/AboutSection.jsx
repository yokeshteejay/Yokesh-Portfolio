import { FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa'
import { aboutHighlights, personalInfo } from '../../data/siteContent.js'
import { getIcon } from '../../utils/iconRegistry.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import RevealOnScroll from '../common/RevealOnScroll.jsx'
import TiltCard from '../common/TiltCard.jsx'

export default function AboutSection() {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeading
        eyebrow="About Me"
        title="Turning ideas into"
        highlight="production-ready products"
        subtitle="A MERN stack developer who owns the whole journey - design, code, deploy and support."
      />

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* portrait */}
        <RevealOnScroll direction="right" className="mx-auto w-full max-w-sm sm:max-w-md">
          <TiltCard maxTilt={6}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-violet via-brand-cyan to-brand-pink opacity-60 blur-xl" />
              <div className="glow-border relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-800">
                <img
                  src={personalInfo.aboutPortrait}
                  alt="Yokesh Katraj in a formal blazer"
                  className="aspect-[4/4.4] w-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2">
                  <span className="glass-card flex items-center gap-2 !rounded-full px-4 py-2 text-xs font-medium text-white">
                    <FaMapMarkerAlt className="text-brand-pink" /> Coimbatore, TN
                  </span>
                  <span className="glass-card flex items-center gap-2 !rounded-full px-4 py-2 text-xs font-medium text-white">
                    <FaBriefcase className="text-brand-cyan" /> 2+ Years
                  </span>
                </div>
              </div>
            </div>
          </TiltCard>
        </RevealOnScroll>

        {/* story + highlights */}
        <div>
          <RevealOnScroll direction="left">
            <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Hi, I&apos;m Yokesh - a <span className="gradient-text">full stack developer</span> from Tamil Nadu.
            </h3>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              <p>
                I&apos;m a MERN Stack Developer with 2 years of professional experience - 3 months of internship and 1.8
                years of full-time development at {personalInfo.company}. I build and maintain production web applications
                using React.js, JavaScript, Node.js, Express.js and MongoDB.
              </p>
              <p>
                I&apos;m strong in REST APIs, JWT authentication, responsive design, debugging and production support, with
                hands-on Linux/VPS deployment using Nginx, PM2 and SSL. My work spans EdTech, CRM and staff management,
                institutional websites and AI chatbot integration.
              </p>
            </div>
          </RevealOnScroll>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((highlight, index) => {
              const HighlightIcon = getIcon(highlight.iconKey)
              return (
                <RevealOnScroll key={highlight.title} delay={0.08 * index}>
                  <div className="glass-card glow-border group h-full p-5 transition-transform duration-300 hover:-translate-y-1">
                    <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-violet/30 to-brand-cyan/30 text-lg text-brand-cyan transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <HighlightIcon />
                    </span>
                    <h4 className="font-display text-base font-semibold text-white">{highlight.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{highlight.text}</p>
                  </div>
                </RevealOnScroll>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
