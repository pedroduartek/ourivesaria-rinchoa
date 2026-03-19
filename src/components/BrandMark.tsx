import { siteContent } from '../content/siteContent'

export function BrandMark() {
  return (
    <div className="flex items-center gap-4">
      <div className="overflow-hidden flex items-center">
        <img
          src={siteContent.brand.logoSrc}
          alt={siteContent.brand.name}
          fetchPriority="high"
          loading="eager"
          onError={(e) => {
            ;(e.target as HTMLImageElement).style.display = 'none'
          }}
          className="h-[72px] sm:h-[104px] md:h-[124px] lg:h-[140px] w-auto object-contain max-w-full"
        />
      </div>

      <div className="min-w-0">
        <p className="font-display text-2xl leading-none text-forest sm:text-3xl">{siteContent.brand.name}</p>
        <p className="mt-1 text-xs font-light uppercase tracking-[0.28em] text-bronze/70">
          {siteContent.brand.tagline}
        </p>
      </div>
    </div>
  )
}

