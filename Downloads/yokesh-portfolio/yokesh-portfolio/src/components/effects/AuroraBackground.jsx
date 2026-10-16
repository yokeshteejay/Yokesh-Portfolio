/* Fixed full-page ambient background: drifting colour blobs, grid and grain. */
export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950" aria-hidden="true">
      <div className="aurora-blob -left-24 top-0 h-[28rem] w-[28rem] bg-brand-violet" />
      <div
        className="aurora-blob -right-24 top-1/3 h-[26rem] w-[26rem] bg-brand-cyan"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="aurora-blob bottom-0 left-1/3 h-[24rem] w-[24rem] bg-brand-pink opacity-25"
        style={{ animationDelay: '-12s' }}
      />
      <div className="grid-backdrop absolute inset-0" />
      <div className="noise-overlay absolute inset-0" />
    </div>
  )
}
