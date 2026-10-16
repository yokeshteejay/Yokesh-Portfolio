import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiXMark } from 'react-icons/hi2'
import { galleryMoments } from '../../data/siteContent.js'
import SectionHeading from '../common/SectionHeading.jsx'
import RevealOnScroll from '../common/RevealOnScroll.jsx'

/* Per-photo focal point so faces and trophies stay in frame when cropped. */
const focalPointByMoment = {
  'moment-speaking': 'object-[60%_40%]',
  'moment-award': 'object-[50%_45%]',
  'moment-deployment': 'object-[50%_50%]',
  'moment-team': 'object-[50%_55%]',
}

export default function MomentsGallerySection() {
  const [selectedMoment, setSelectedMoment] = useState(null)

  /* Close the lightbox with the Escape key. */
  useEffect(() => {
    if (!selectedMoment) return undefined
    const handleKeyDown = (event) => event.key === 'Escape' && setSelectedMoment(null)
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedMoment])

  return (
    <section id="moments" className="section-wrapper">
      <SectionHeading
        eyebrow="Gallery"
        title="Moments beyond"
        highlight="the code"
        subtitle="Teaching, speaking, celebrating wins and growing together with the Profenaa family."
      />

      <div className="grid auto-rows-[15rem] grid-cols-1 gap-4 sm:auto-rows-[17rem] md:grid-cols-3 md:auto-rows-[16rem] lg:auto-rows-[19rem]">
        {galleryMoments.map((moment, index) => (
          <RevealOnScroll key={moment.id} delay={0.07 * index} className={moment.layout}>
            <button
              type="button"
              onClick={() => setSelectedMoment(moment)}
              className="group glow-border relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-ink-800 text-left"
              aria-label={`Open photo: ${moment.title}`}
            >
              <img
                src={moment.image}
                alt={moment.caption}
                className={`h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110 ${focalPointByMoment[moment.id]}`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-1 p-5 transition-transform duration-500 group-hover:translate-y-0">
                <p className="font-code text-[11px] uppercase tracking-[0.2em] text-brand-cyan">{moment.title}</p>
                <p className="mt-1 font-display text-base font-semibold text-white sm:text-lg">{moment.caption}</p>
              </div>
            </button>
          </RevealOnScroll>
        ))}
      </div>

      <AnimatePresence>
        {selectedMoment && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMoment(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedMoment.caption}
          >
            <button
              type="button"
              className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white"
              onClick={() => setSelectedMoment(null)}
              aria-label="Close photo"
            >
              <HiXMark />
            </button>
            <motion.figure
              className="max-h-full max-w-5xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img src={selectedMoment.image} alt={selectedMoment.caption} className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl" />
              <figcaption className="mt-4 text-center text-sm text-slate-300">{selectedMoment.caption}</figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
