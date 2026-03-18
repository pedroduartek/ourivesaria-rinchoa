import { useEffect, useState } from 'react'
import type { CarouselSlide } from '../content/siteContent'

interface CarouselProps {
  slides: CarouselSlide[]
}

export function Carousel({ slides }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (slides.length <= 1 || isPaused) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length)
    }, 6000)

    return () => window.clearInterval(intervalId)
  }, [isPaused, slides.length])

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
      className="panel overflow-hidden p-5 sm:p-6"
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
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
            {activeSlide.kicker}
          </p>
          <h2 className="mt-3 text-3xl text-white sm:text-4xl">{activeSlide.title}</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
            {activeSlide.description}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex gap-2" role="tablist" aria-label="Selecionar destaque">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex

            return (
              <button
                key={slide.title}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Mostrar destaque ${index + 1}: ${slide.title}`}
                className={`h-3 rounded-full transition ${
                  isActive ? 'w-10 bg-forest' : 'w-3 bg-stone'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            )
          })}
        </div>

        <div className="flex gap-2">
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

