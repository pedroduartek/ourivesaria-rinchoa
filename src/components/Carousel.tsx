import { useEffect, useState } from 'react'
import type { CarouselSlide } from '../content/siteContent'

interface CarouselProps {
  slides: CarouselSlide[]
}

export function Carousel({ slides }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)

    return () => {
      mediaQuery.removeEventListener('change', updatePreference)
    }
  }, [])

  useEffect(() => {
    if (slides.length <= 1 || isPaused || prefersReducedMotion) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length)
    }, 6000)

    return () => window.clearInterval(intervalId)
  }, [isPaused, prefersReducedMotion, slides.length])

  if (slides.length === 0) {
    return null
  }

  const activeSlide = slides[activeIndex]

  const move = (direction: 'next' | 'previous') => {
    setActiveIndex((currentIndex) => {
      if (direction === 'next') {
        return (currentIndex + 1) % slides.length
      }

      return (currentIndex - 1 + slides.length) % slides.length
    })
  }

  return (
    <section
      className="panel overflow-hidden p-4 sm:p-6"
      aria-roledescription="carousel"
      aria-label="Destaques da ourivesaria"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden rounded-xl bg-slate-900">
        <img
          className="w-full object-cover object-center aspect-[16/9] sm:aspect-[4/3]"
          src={activeSlide.imageSrc}
          alt={activeSlide.alt}
          fetchPriority={activeIndex === 0 ? 'high' : 'auto'}
          loading={activeIndex === 0 ? 'eager' : 'lazy'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <p className="hidden sm:block text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
            {activeSlide.kicker}
          </p>
          <h2 className="mt-3 text-2xl text-white sm:text-4xl">{activeSlide.title}</h2>
          <p className="hidden sm:block mt-3 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
            {activeSlide.description}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2" aria-label="Selecionar destaque">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex

            return (
              <button
                key={slide.title}
                type="button"
                aria-pressed={isActive}
                aria-label={`Mostrar destaque ${index + 1}: ${slide.title}`}
                className={`h-3 rounded-full transition ${
                  isActive ? 'w-10 bg-forest' : 'w-3 bg-stone'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            )
          })}
        </div>

        <div className="flex w-full gap-2 sm:w-auto">
          <button type="button" className="secondary-button" onClick={() => move('previous')}>
            Slide anterior
          </button>
          <button type="button" className="cta-button" onClick={() => move('next')}>
            Slide seguinte
          </button>
        </div>
      </div>
    </section>
  )
}
