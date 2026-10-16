import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { navigationLinks, personalInfo } from '../../data/siteContent.js'
import useScrollSpy from '../../hooks/useScrollSpy.js'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const sectionIds = useMemo(() => navigationLinks.map((link) => link.targetId), [])
  const activeSectionId = useScrollSpy(sectionIds)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Lock page scroll while the mobile menu is open. */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const goToSection = (targetId) => {
    setIsMenuOpen(false)
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8 ${
            isScrolled
              ? 'mx-3 rounded-full border border-white/10 bg-ink-900/70 py-2.5 shadow-xl shadow-black/30 backdrop-blur-xl sm:mx-auto sm:max-w-6xl'
              : 'py-2'
          } transition-all duration-500`}
          aria-label="Main navigation"
        >
          <button
            type="button"
            onClick={() => goToSection('home')}
            className="group flex items-center gap-3"
            aria-label="Go to top"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-violet to-brand-cyan font-display text-sm font-bold text-white shadow-lg shadow-brand-violet/40 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
              YK
            </span>
            <span className="hidden font-display text-base font-semibold text-white sm:block">
              {personalInfo.firstName}
              <span className="text-brand-cyan">.</span>
              {personalInfo.lastName}
            </span>
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
            {navigationLinks.map((link) => {
              const isActive = activeSectionId === link.targetId
              return (
                <li key={link.targetId}>
                  <button
                    type="button"
                    onClick={() => goToSection(link.targetId)}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-pill"
                        className="absolute inset-0 rounded-full border border-white/10 bg-white/10"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a href={personalInfo.resumeUrl} download className="button-primary hidden !px-5 !py-2.5 sm:inline-flex">
              Resume
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-white lg:hidden"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <HiXMark /> : <HiBars3 />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[55] flex flex-col bg-ink-950/95 px-6 pb-8 pt-28 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-1 flex-col justify-center gap-2">
              {navigationLinks.map((link, index) => (
                <motion.li
                  key={link.targetId}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * index + 0.1 }}
                >
                  <button
                    type="button"
                    onClick={() => goToSection(link.targetId)}
                    className={`flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left font-display text-2xl font-semibold ${
                      activeSectionId === link.targetId ? 'bg-white/10 text-white' : 'text-slate-400'
                    }`}
                  >
                    <span className="font-code text-sm text-brand-cyan">0{index + 1}</span>
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
            <a href={personalInfo.resumeUrl} download className="button-primary w-full">
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
