import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { personalInfo } from '../../data/siteContent.js'

/* Always-visible WhatsApp shortcut with a pulsing ring and hover label. */
export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Yokesh on WhatsApp"
      className="group fixed bottom-5 right-4 z-[65] flex items-center gap-3 sm:bottom-6 sm:right-6"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.2, type: 'spring', stiffness: 220, damping: 14 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
    >
      <span className="pointer-events-none hidden origin-right scale-90 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-900 opacity-0 shadow-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center">
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-xl shadow-[#25D366]/40">
          <FaWhatsapp />
        </span>
      </span>
    </motion.a>
  )
}
