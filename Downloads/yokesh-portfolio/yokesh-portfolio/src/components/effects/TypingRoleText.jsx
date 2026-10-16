import useTypingEffect from '../../hooks/useTypingEffect.js'

export default function TypingRoleText({ roles }) {
  const text = useTypingEffect(roles)

  return (
    <span className="font-code text-base font-medium text-brand-cyan sm:text-xl">
      <span className="text-brand-pink">&lt;</span>
      {text}
      <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-1 animate-blink-cursor bg-brand-cyan" />
      <span className="text-brand-pink"> /&gt;</span>
    </span>
  )
}
