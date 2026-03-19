import { siteContent } from '../content/siteContent'

export function BrandMark() {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="overflow-hidden flex items-center">
        <img
          src={siteContent.brand.logoSrc}
          alt={siteContent.brand.name}
          fetchPriority="high"
          loading="eager"
          onError={(e) => {
            ;(e.target as HTMLImageElement).style.display = 'none'
          }}
          className="h-14 w-auto max-w-full object-contain sm:h-16 md:h-20 lg:h-24"
        />
      </div>

      <div className="hidden min-[460px]:block min-w-0">
        <p className="font-display text-xl leading-none text-forest sm:text-2xl md:text-[2rem]">
          {siteContent.brand.name}
        </p>
        <p className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.26em] text-bronze/75 sm:text-[0.72rem]">
          {siteContent.brand.tagline}
        </p>
      </div>
    </div>
  )
}

