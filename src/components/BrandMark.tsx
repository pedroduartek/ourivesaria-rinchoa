import { siteContent } from '../content/siteContent'

interface BrandMarkProps {
  compact?: boolean
}

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/70 bg-white/80 shadow-[0_12px_32px_rgba(56,85,65,0.14)] backdrop-blur"
        aria-hidden="true"
      >
        <span className="absolute h-7 w-7 rounded-full border-2 border-gold" />
        <span className="absolute h-4 w-4 rounded-full bg-silver" />
        <span className="h-2.5 w-2.5 rounded-full bg-forest" />
      </div>
      <div className="min-w-0">
        <p className="font-display text-xl leading-none text-forest sm:text-2xl">
          {compact ? siteContent.brand.shortName : siteContent.brand.name}
        </p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.32em] text-bronze/80">
          {siteContent.brand.tagline}
        </p>
      </div>
    </div>
  )
}

