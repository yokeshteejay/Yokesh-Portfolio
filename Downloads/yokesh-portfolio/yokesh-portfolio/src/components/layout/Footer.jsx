import { FaHeart } from 'react-icons/fa'
import { navigationLinks, personalInfo } from '../../data/siteContent.js'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-ink-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-10 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-xl font-bold text-white">
            {personalInfo.fullName}
            <span className="text-brand-cyan">.</span>
          </p>
          <p className="mt-1 text-sm text-slate-400">{personalInfo.role} - {personalInfo.location}</p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-slate-400">
          {navigationLinks.map((link) => (
            <li key={link.targetId}>
              <a href={`#${link.targetId}`} className="transition-colors hover:text-brand-cyan">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="flex items-center gap-1.5 text-xs text-slate-500">
          &copy; {currentYear} {personalInfo.fullName}. Built with
          <FaHeart className="text-brand-pink" aria-label="love" />
          using React, Vite &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
