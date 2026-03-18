import { siteContent } from '../content/siteContent'

export function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="overflow-hidden flex items-center">
        <img
          src="/images/rinchoa_logo.png"
          alt={siteContent.brand.name}
          loading="lazy"
          onError={(e) => {
            ;(e.target as HTMLImageElement).style.display = 'none'
          }}
          className="h-[64px] sm:h-[96px] md:h-[120px] lg:h-[140px] w-auto object-contain max-w-full"
        />
      </div>

      <div className="min-w-0">
        <p className="font-display text-xl leading-none text-forest sm:text-2xl">{siteContent.brand.name}</p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.32em] text-bronze/80">
          {siteContent.brand.tagline}
        </p>
      </div>
    </div>
  )
}

