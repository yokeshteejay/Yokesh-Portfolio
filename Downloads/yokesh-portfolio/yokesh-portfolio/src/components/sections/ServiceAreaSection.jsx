import { motion } from 'framer-motion'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { tamilNaduCities } from '../../data/siteContent.js'
import RevealOnScroll from '../common/RevealOnScroll.jsx'

/* "Serving all over Tamil Nadu" band: glowing pulse + city chips. */
export default function ServiceAreaSection() {
  return (
    <section id="service-area" className="section-wrapper !py-12 sm:!py-16">
      <RevealOnScroll>
        <div className="glass-card glow-border relative overflow-hidden px-5 py-10 text-center sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-[28rem] max-w-full -translate-x-1/2 rounded-full bg-brand-violet/30 blur-3xl" />

          <div className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center">
            <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-pink/50" />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-pink to-brand-violet text-2xl text-white">
              <FaMapMarkerAlt />
            </span>
          </div>

          <h2 className="relative font-display text-2xl font-bold text-white sm:text-4xl">
            Building web products <span className="gradient-text">all over Tamil Nadu</span>
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-sm text-slate-400 sm:text-base">
            Based in Coimbatore and working with businesses, schools and institutions in every district - on-site or fully remote.
          </p>

          <ul className="relative mt-8 flex flex-wrap justify-center gap-2.5">
            {tamilNaduCities.map((city, index) => (
              <motion.li
                key={city}
                className="tech-chip"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, type: 'spring', stiffness: 260, damping: 18 }}
                whileHover={{ y: -4, scale: 1.06 }}
              >
                <FaMapMarkerAlt className="text-brand-pink" />
                {city}
              </motion.li>
            ))}
          </ul>
        </div>
      </RevealOnScroll>
    </section>
  )
}
