interface SectionHeadingProps {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-bronze/80">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-balance text-3xl leading-tight text-slate-900 sm:text-4xl lg:text-[3rem]">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  )
}
