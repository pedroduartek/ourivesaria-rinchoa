import { useEffect, useState } from 'react'
import { getResponsiveImage } from '../content/imageManifest'
import type { CarouselSlide } from '../content/siteContent'

interface CarouselProps {
  slides: CarouselSlide[]
  fullBleed?: boolean
}

export function Carousel({ slides, fullBleed = false }: CarouselProps) {
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
  const isStoreFrontSlide = activeSlide.imageSrc === '/images/store_front.webp'
  const activeSlideImage = getResponsiveImage(activeSlide.imageSrc)

  return (
    <section
      className={
        fullBleed
          ? 'relative overflow-hidden bg-slate-950'
          : 'panel overflow-hidden p-4 sm:p-6'
      }
      aria-roledescription="carousel"
      aria-label="Destaques da ourivesaria"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div
        className={
          fullBleed
            ? 'relative overflow-hidden bg-slate-900'
            : 'relative overflow-hidden rounded-xl bg-slate-900'
        }
      >
        <img
          className={
            fullBleed
              ? `h-[44vh] min-h-[360px] w-full object-cover ${
                  isStoreFrontSlide ? 'object-[center_61%]' : 'object-center'
                } sm:h-[52vh] lg:h-[64vh]`
              : 'w-full object-cover object-center aspect-[16/9] sm:aspect-[4/3]'
          }
          src={activeSlideImage.src}
          srcSet={activeSlideImage.srcSet}
          sizes={fullBleed ? '100vw' : '(max-width: 640px) 100vw, 50vw'}
          alt={activeSlide.alt}
          width={activeSlideImage.width}
          height={activeSlideImage.height}
          fetchPriority={activeIndex === 0 ? 'high' : 'auto'}
          loading={activeIndex === 0 ? 'eager' : 'lazy'}
          decoding={activeIndex === 0 ? 'sync' : 'async'}
        />
        <div
          className={
            fullBleed
              ? 'absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/55 to-slate-950/12'
              : 'absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent'
          }
        />
        <div
          className={
            fullBleed
              ? 'section-shell absolute inset-x-0 bottom-0 flex min-h-full items-end px-4 pb-10 pt-24 sm:px-6 sm:pb-14 lg:px-8 lg:pb-18'
              : 'absolute inset-x-0 bottom-0 p-6 sm:p-8'
          }
        >
          <div className={fullBleed ? 'max-w-3xl' : ''}>
          <p className="hidden sm:block text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
            {activeSlide.kicker}
          </p>
          <h2
            className={
              fullBleed
                ? 'mt-4 max-w-[12ch] text-balance text-4xl leading-[0.95] text-white sm:text-5xl lg:text-7xl'
                : 'mt-3 text-2xl text-white sm:text-4xl'
            }
          >
            {activeSlide.title}
          </h2>
          <p
            className={
              fullBleed
                ? 'mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base lg:text-lg'
                : 'hidden sm:block mt-3 max-w-xl text-sm leading-7 text-slate-200 sm:text-base'
            }
          >
            {activeSlide.description}
          </p>
          </div>
        </div>
      </div>

      <div
        className={
          fullBleed
            ? 'section-shell absolute inset-x-0 bottom-0 z-10 px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8'
            : 'mt-5'
        }
      >
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
      </div>
    </section>
  )
}
