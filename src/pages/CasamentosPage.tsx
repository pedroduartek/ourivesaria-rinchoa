import { ActionLink } from '../components/ActionLink'
import { ContactPanel } from '../components/ContactPanel'
import PageSEO from '../components/seo/PageSEO'
import { SectionHeading } from '../components/SectionHeading'
import { getResponsiveImage } from '../content/imageManifest'
import { siteContent } from '../content/siteContent'

export function CasamentosPage() {
  const { weddings } = siteContent
  const heroImage = getResponsiveImage(weddings.hero.image.src)

  return (
    <>
      <PageSEO meta={weddings.meta} />
      <div className="page-enter space-y-24">
        <section className="section-shell">
          <div className="panel grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-bronze/80">
                {weddings.hero.eyebrow}
              </p>
              <h1 className="mt-5 text-balance text-5xl text-slate-900 sm:text-6xl">
                {weddings.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                {weddings.hero.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ActionLink
                  action={weddings.hero.primaryAction}
                  className="cta-button"
                />
                <ActionLink
                  action={weddings.hero.secondaryAction}
                  className="secondary-button"
                />
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-bronze/10 bg-slate-900">
              <img
                className="aspect-[3/2] min-h-[200px] w-full object-cover object-center"
                src={heroImage.src}
                srcSet={heroImage.srcSet}
                sizes="(max-width: 1024px) calc(100vw - 4rem), 42vw"
                alt={weddings.hero.image.alt}
                width={heroImage.width}
                height={heroImage.height}
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section className="section-shell">
          <SectionHeading
            eyebrow={weddings.offerings.eyebrow}
            title={weddings.offerings.title}
            description={weddings.offerings.description}
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {weddings.offerings.items.map((item) => (
              <article key={item.title} className="panel h-full px-5 py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
                  {item.accent}
                </p>
                <h2 className="mt-4 text-3xl text-slate-900">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <SectionHeading
            eyebrow={weddings.journey.eyebrow}
            title={weddings.journey.title}
            description={weddings.journey.description}
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {weddings.journey.items.map((item) => (
              <article key={item.title} className="panel h-full px-5 py-6">
                <h2 className="text-3xl text-slate-900">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <SectionHeading
            eyebrow={weddings.guidanceSection.eyebrow}
            title={weddings.guidanceSection.title}
            description={weddings.guidanceSection.description}
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {weddings.guidance.map((item) => (
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
          eyebrow={weddings.contactPanel.eyebrow}
          title={weddings.contactPanel.title}
          description={weddings.contactPanel.description}
        />
      </div>
    </>
  )
}
