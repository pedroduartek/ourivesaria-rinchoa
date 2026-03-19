import { ActionLink } from '../components/ActionLink'
import { ContactPanel } from '../components/ContactPanel'
import PageSEO from '../components/seo/PageSEO'
import { SectionHeading } from '../components/SectionHeading'
import { getResponsiveImage } from '../content/imageManifest'
import { siteContent } from '../content/siteContent'

export function RestauracaoPage() {
  const { restoration } = siteContent

  return (
    <>
      <PageSEO meta={restoration.meta} />
      <div className="page-enter space-y-24">
        <section className="section-shell">
          <div className="panel grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-bronze/80">
                {restoration.hero.eyebrow}
              </p>
              <h1 className="mt-5 text-balance text-5xl text-slate-900 sm:text-6xl">
                {restoration.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                {restoration.hero.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ActionLink
                  action={restoration.hero.primaryAction}
                  className="cta-button"
                />
                <ActionLink
                  action={restoration.hero.secondaryAction}
                  className="secondary-button"
                />
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-bronze/10 overflow-hidden shadow-[0_18px_40px_rgba(39,51,45,0.06)]">
              {restoration.hero.resultCard.imageSrc ? (
                (() => {
                  const img = getResponsiveImage(restoration.hero.resultCard.imageSrc)

                  return (
                    <div className="relative bg-slate-950">
                      <img
                        className="w-full object-cover object-center h-64 sm:h-80 lg:h-[28rem]"
                        src={img.src}
                        srcSet={img.srcSet}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        alt={restoration.hero.resultCard.alt ?? restoration.hero.resultCard.eyebrow}
                        width={img.width}
                        height={img.height}
                        loading="lazy"
                        decoding="async"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
                          {restoration.hero.resultCard.eyebrow}
                        </p>
                        <p className="mt-3 text-lg text-white max-w-2xl">
                          {restoration.hero.resultCard.description}
                        </p>
                      </div>
                    </div>
                  )
                })()
              ) : (
                <div className="px-6 py-6 bg-gradient-to-br from-white via-champagne to-silver">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-bronze/80">
                    {restoration.hero.resultCard.eyebrow}
                  </p>
                  <p className="mt-4 text-lg leading-8 text-slate-700">
                    {restoration.hero.resultCard.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section-shell">
          <SectionHeading
            eyebrow={restoration.comparison.eyebrow}
            title={restoration.comparison.title}
            description={restoration.comparison.description}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {restoration.beforeAfter.map((item) => {
              const image = getResponsiveImage(item.imageSrc)

              return (
                <article key={item.stage} className="panel overflow-hidden p-5">
                  <div className="overflow-hidden rounded-xl bg-slate-950">
                    <img
                      className="aspect-[3/2] w-full object-cover object-center sm:aspect-[4/3]"
                      src={image.src}
                      srcSet={image.srcSet}
                      sizes="(max-width: 1024px) calc(100vw - 4rem), 45vw"
                      alt={item.alt}
                      width={image.width}
                      height={image.height}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
                    {item.stage}
                  </p>
                  <h2 className="mt-3 text-3xl text-slate-900">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section-shell">
          <SectionHeading
            eyebrow={restoration.highlights.eyebrow}
            title={restoration.highlights.title}
            description={restoration.highlights.description}
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {restoration.highlights.items.map((item) => {
              const image = item.imageSrc ? getResponsiveImage(item.imageSrc) : null

              return (
                <article key={item.title} className="panel h-full px-5 py-6">
                  {image ? (
                    <div className="overflow-hidden rounded-xl bg-slate-950">
                      <img
                        className="aspect-[3/2] w-full object-cover object-center sm:aspect-[4/3]"
                        src={image.src}
                        srcSet={image.srcSet}
                        sizes="(max-width: 1024px) calc(100vw - 4rem), 45vw"
                        alt={item.alt ?? item.title}
                        width={image.width}
                        height={image.height}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  ) : null}

                  <h2 className="mt-4 text-3xl text-slate-900">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section-shell">
          <SectionHeading
            eyebrow={restoration.processSection.eyebrow}
            title={restoration.processSection.title}
            description={restoration.processSection.description}
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {restoration.process.map((item) => (
              <article key={item.title} className="panel h-full px-5 py-6">
                <h2 className="text-3xl text-slate-900">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <ContactPanel
          id="contactos"
          eyebrow={restoration.contactPanel.eyebrow}
          title={restoration.contactPanel.title}
          description={restoration.contactPanel.description}
        />
      </div>
    </>
  )
}
