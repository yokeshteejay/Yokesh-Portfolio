import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaWhatsapp, FaDownload, FaArrowRight } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript } from 'react-icons/si'
import { heroRoles, heroStats, personalInfo } from '../../data/siteContent.js'
import ParticleNetworkCanvas from '../effects/ParticleNetworkCanvas.jsx'
import TypingRoleText from '../effects/TypingRoleText.jsx'
import TechMarquee from '../effects/TechMarquee.jsx'
import AnimatedCounter from '../common/AnimatedCounter.jsx'

/* Icons that circle the portrait. `position` places each one on the ring. */
const orbitingTechnologies = [
  { id: 'react', Icon: FaReact, color: 'text-cyan-300', position: 'left-1/2 top-0 -translate-x-1/2 -translate-y-1/2' },
  { id: 'node', Icon: FaNodeJs, color: 'text-green-400', position: 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2' },
  { id: 'mongo', Icon: SiMongodb, color: 'text-emerald-400', position: 'left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2' },
  { id: 'express', Icon: SiExpress, color: 'text-slate-200', position: 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2' },
  { id: 'tailwind', Icon: SiTailwindcss, color: 'text-sky-400', position: 'right-[14.6%] top-[14.6%] translate-x-1/2 -translate-y-1/2' },
  { id: 'js', Icon: SiJavascript, color: 'text-yellow-300', position: 'left-[14.6%] bottom-[14.6%] -translate-x-1/2 translate-y-1/2' },
]

const whatsappUrl = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 1.6 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function scrollToSection(targetId) {
  document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function HeroSection() {
  return (
    <>
      <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pb-14 pt-28 sm:pt-32">
        <div className="absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,#000_72%,transparent)]">
          <ParticleNetworkCanvas />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          {/* ---------- Left: introduction ---------- */}
          <motion.div
            className="order-2 text-center lg:order-1 lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6 flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-300 sm:text-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                Available for projects across Tamil Nadu
              </span>
            </motion.div>

            <motion.p variants={itemVariants} className="mb-2 font-code text-sm text-slate-400 sm:text-base">
              Hello, World! I&apos;m
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-display text-[2.6rem] font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
            >
              {personalInfo.firstName} <span className="gradient-text">{personalInfo.lastName}</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mt-5 flex min-h-[2rem] justify-center lg:justify-start">
              <TypingRoleText roles={heroRoles} />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base lg:mx-0"
            >
              I build fast, scalable and beautiful web applications with{' '}
              <span className="font-semibold text-white">React, Node.js, Express &amp; MongoDB</span> - from pixel-perfect
              UI to secure APIs, AI chatbots and live server deployment for businesses and institutions across Tamil Nadu.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
              <button type="button" onClick={() => scrollToSection('projects')} className="button-primary">
                View My Work <FaArrowRight />
              </button>
              <a href={personalInfo.resumeUrl} download className="button-outline">
                <FaDownload /> Download Resume
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="button-outline !border-[#25D366]/40 hover:!bg-[#25D366]/15">
                <FaWhatsapp className="text-lg text-[#25D366]" /> WhatsApp
              </a>
            </motion.div>

            <motion.ul variants={itemVariants} className="mx-auto mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4 lg:mx-0">
              {heroStats.map((stat) => (
                <li key={stat.label} className="glass-card !rounded-2xl px-3 py-4 text-center">
                  <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-400">{stat.label}</p>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ---------- Right: portrait with orbiting tech ---------- */}
          <motion.div
            className="order-1 flex justify-center lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-square w-[16.5rem] sm:w-[23rem] lg:w-[27rem]">
              {/* glow */}
              <div className="absolute inset-[8%] animate-blob-morph bg-gradient-to-br from-brand-violet via-brand-cyan to-brand-pink opacity-60 blur-3xl" />

              {/* orbit ring */}
              <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-white/20">
                {orbitingTechnologies.map(({ id, Icon, color, position }) => (
                  <div key={id} className={`absolute ${position}`}>
                    <div className="animate-orbit-counter">
                      <span className={`flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-ink-800/90 text-lg shadow-lg backdrop-blur sm:h-12 sm:w-12 sm:text-2xl ${color}`}>
                        <Icon />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* portrait */}
              <div className="absolute inset-[11%] animate-blob-morph overflow-hidden border-2 border-white/25 bg-gradient-to-br from-brand-violet/40 to-brand-cyan/40 shadow-2xl shadow-brand-violet/40">
                <img
                  src={personalInfo.heroPortrait}
                  alt="Yokesh Katraj, MERN Stack Developer"
                  className="h-full w-full origin-[52%_34%] scale-[1.5] object-cover object-[50%_22%]"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />
              </div>

              {/* floating cards */}
              <div className="absolute -left-2 bottom-2 hidden animate-float-y sm:block sm:-left-10 sm:bottom-6">
                <div className="code-window w-56 p-4">
                  <div className="mb-2 flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>
                  <p><span className="text-brand-pink">const</span> <span className="text-brand-cyan">yokesh</span> = {'{'}</p>
                  <p className="pl-3">role: <span className="text-emerald-300">&apos;MERN Dev&apos;</span>,</p>
                  <p className="pl-3">city: <span className="text-emerald-300">&apos;Coimbatore&apos;</span>,</p>
                  <p className="pl-3">ships: <span className="text-amber-300">true</span></p>
                  <p>{'}'}</p>
                </div>
              </div>

              <div className="absolute -right-1 top-6 hidden animate-float-y-reverse sm:-right-6 sm:top-10 sm:block">
                <div className="glass-card flex items-center gap-2 !rounded-2xl px-3 py-2 sm:px-4 sm:py-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/20 text-emerald-300">
                    <FaNodeJs />
                  </span>
                  <div className="leading-tight">
                    <p className="text-xs font-semibold text-white">Production Ready</p>
                    <p className="text-[10px] text-slate-400">Nginx - PM2 - SSL</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* scroll hint */}
        <button
          type="button"
          onClick={() => scrollToSection('about')}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-slate-500 transition-colors hover:text-brand-cyan lg:flex"
          aria-label="Scroll to about section"
        >
          Scroll
          <span className="relative h-10 w-[22px] rounded-full border border-slate-500 p-1">
            <motion.span
              className="block h-2 w-1.5 rounded-full bg-brand-cyan"
              style={{ margin: '0 auto' }}
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            />
          </span>
        </button>
      </section>

      <TechMarquee />
    </>
  )
}
