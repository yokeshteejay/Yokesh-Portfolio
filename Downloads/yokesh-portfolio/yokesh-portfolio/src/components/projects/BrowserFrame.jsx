/* Realistic browser window used to present project screenshots.
   When `image` is null a stylised placeholder is rendered instead. */
export default function BrowserFrame({ image, title, displayUrl, accent = 'from-brand-violet to-brand-cyan', className = '' }) {
  return (
    <div className={`browser-frame ${className}`}>
      <div className="browser-frame__bar">
        <span className="browser-frame__dot bg-red-400/80" />
        <span className="browser-frame__dot bg-yellow-400/80" />
        <span className="browser-frame__dot bg-green-400/80" />
        <span className="browser-frame__url">https://{displayUrl}</span>
      </div>

      <div className="relative aspect-[16/8.4] overflow-hidden bg-ink-900">
        {image ? (
          <img
            src={image}
            alt={`${title} website screenshot`}
            className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className={`flex h-full w-full flex-col items-center justify-center bg-gradient-to-br ${accent} p-6 text-center`}>
            <div className="absolute inset-0 grid-backdrop opacity-40" />
            <p className="relative font-display text-3xl font-bold text-white drop-shadow sm:text-4xl">{title}</p>
            <p className="relative mt-2 font-code text-xs text-white/80">{displayUrl}</p>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
      </div>
    </div>
  )
}
