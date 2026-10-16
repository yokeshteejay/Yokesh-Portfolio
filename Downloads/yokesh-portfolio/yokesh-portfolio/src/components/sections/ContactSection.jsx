import { useState } from 'react'
import { FaWhatsapp, FaEnvelope, FaDownload } from 'react-icons/fa'
import { contactMethods, personalInfo } from '../../data/siteContent.js'
import { getIcon } from '../../utils/iconRegistry.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import RevealOnScroll from '../common/RevealOnScroll.jsx'

const emptyForm = { fullName: '', contactDetail: '', projectMessage: '' }

export default function ContactSection() {
  const [formValues, setFormValues] = useState(emptyForm)

  const handleFieldChange = (event) => {
    const { name, value } = event.target
    setFormValues((current) => ({ ...current, [name]: value }))
  }

  const composedMessage = `Hi Yokesh,\n\nMy name is ${formValues.fullName || '(your name)'}.\nContact: ${
    formValues.contactDetail || '(phone / email)'
  }\n\nProject details:\n${formValues.projectMessage || '(tell me about your project)'}`

  /* Frontend-only: the form opens WhatsApp or the mail app with the text filled in. */
  const sendViaWhatsApp = (event) => {
    event.preventDefault()
    window.open(`https://wa.me/${personalInfo.whatsappNumber}?text=${encodeURIComponent(composedMessage)}`, '_blank', 'noopener')
  }

  const sendViaEmail = () => {
    const subject = encodeURIComponent(`Project enquiry from ${formValues.fullName || 'your portfolio'}`)
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${encodeURIComponent(composedMessage)}`
  }

  const inputClass =
    'w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:border-brand-cyan/70 focus:bg-white/10 focus:ring-2 focus:ring-brand-cyan/20'

  return (
    <section id="contact" className="section-wrapper">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something"
        highlight="amazing together"
        subtitle="Have a website, web app, CRM or AI chatbot in mind? Send a message - I usually reply fast."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        {/* contact methods */}
        <div className="space-y-4">
          {contactMethods.map((method, index) => {
            const MethodIcon = getIcon(method.iconKey)
            const isExternal = method.href.startsWith('http')
            return (
              <RevealOnScroll key={method.id} direction="right" delay={0.07 * index}>
                <a
                  href={method.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="group glass-card glow-border flex items-center gap-4 p-4 transition-transform duration-300 hover:-translate-y-1 sm:p-5"
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                      method.id === 'whatsapp' ? 'bg-[#25D366]' : 'bg-gradient-to-br from-brand-violet to-brand-cyan'
                    }`}
                  >
                    <MethodIcon />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-code text-[11px] uppercase tracking-[0.2em] text-slate-500">{method.label}</span>
                    <span className="block truncate text-sm font-medium text-white sm:text-base">{method.value}</span>
                  </span>
                </a>
              </RevealOnScroll>
            )
          })}

          <RevealOnScroll delay={0.3}>
            <a href={personalInfo.resumeUrl} download className="button-outline w-full">
              <FaDownload /> Download Full Resume (PDF)
            </a>
          </RevealOnScroll>
        </div>

        {/* message form */}
        <RevealOnScroll direction="left">
          <form onSubmit={sendViaWhatsApp} className="glass-card glow-border space-y-4 p-5 sm:p-8">
            <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">Tell me about your project</h3>

            <div>
              <label htmlFor="contact-full-name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">
                Your name
              </label>
              <input id="contact-full-name" name="fullName" value={formValues.fullName} onChange={handleFieldChange} required placeholder="e.g. Karthik" className={inputClass} />
            </div>

            <div>
              <label htmlFor="contact-detail" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">
                Phone or email
              </label>
              <input id="contact-detail" name="contactDetail" value={formValues.contactDetail} onChange={handleFieldChange} required placeholder="How can I reach you?" className={inputClass} />
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">
                Project details
              </label>
              <textarea id="contact-message" name="projectMessage" value={formValues.projectMessage} onChange={handleFieldChange} required rows={5} placeholder="Website, CRM, chatbot... tell me what you need." className={`${inputClass} resize-none`} />
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button type="submit" className="button-primary flex-1 !bg-none !bg-[#25D366] !shadow-[#25D366]/30">
                <FaWhatsapp className="text-lg" /> Send on WhatsApp
              </button>
              <button type="button" onClick={sendViaEmail} className="button-outline flex-1">
                <FaEnvelope /> Send by Email
              </button>
            </div>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  )
}
