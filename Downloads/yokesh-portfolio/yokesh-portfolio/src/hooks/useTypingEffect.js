import { useEffect, useState } from 'react'

/* Types and deletes each phrase in a loop. Returns the visible text. */
export default function useTypingEffect(phrases, { typeSpeed = 70, deleteSpeed = 35, pause = 1600 } = {}) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [visibleText, setVisibleText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    let delay = isDeleting ? deleteSpeed : typeSpeed

    if (!isDeleting && visibleText === currentPhrase) delay = pause
    if (isDeleting && visibleText === '') delay = 350

    const timer = setTimeout(() => {
      if (!isDeleting && visibleText === currentPhrase) {
        setIsDeleting(true)
      } else if (isDeleting && visibleText === '') {
        setIsDeleting(false)
        setPhraseIndex((index) => (index + 1) % phrases.length)
      } else {
        const nextLength = visibleText.length + (isDeleting ? -1 : 1)
        setVisibleText(currentPhrase.slice(0, nextLength))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [visibleText, isDeleting, phraseIndex, phrases, typeSpeed, deleteSpeed, pause])

  return visibleText
}
