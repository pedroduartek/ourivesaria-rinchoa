import { siteContent } from '../content/siteContent'
import { getResponsiveImage } from '../content/imageManifest'

interface BrandMarkProps {
  priority?: boolean
}

export function BrandMark({ priority = false }: BrandMarkProps) {
  const logo = getResponsiveImage(siteContent.brand.logoSrc)

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="overflow-hidden flex items-center">
        <img
          src={logo.src}
          srcSet={logo.srcSet}
          sizes="(max-width: 640px) 150px, 240px"
          alt={siteContent.brand.name}
          width={logo.width}
          height={logo.height}
          fetchPriority={priority ? 'high' : 'auto'}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onError={(e) => {
            ;(e.target as HTMLImageElement).style.display = 'none'
          }}
          className="h-20 w-auto max-w-full object-contain sm:h-24 md:h-28 lg:h-32"
        />
      </div>

      <div className="hidden min-[460px]:block min-w-0 text-center">
        <p
          className="text-xl leading-none text-forest sm:text-2xl md:text-[2rem]"
          style={{ fontFamily: 'var(--font-brand)' }}
        >
          {siteContent.brand.name}
        </p>
        <p className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.26em] text-bronze/75 sm:text-[0.72rem]">
          {siteContent.brand.tagline}
        </p>
        {siteContent.brand.since ? (
          <p className="mt-1 text-[0.65rem] text-forest sm:text-[0.72rem]">
            {siteContent.brand.since}
          </p>
        ) : null}
      </div>
    </div>
  )
}

