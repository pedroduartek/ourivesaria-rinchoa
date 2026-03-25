import { ActionLink } from '../components/ActionLink'
import PageSEO from '../components/seo/PageSEO'
import { getResponsiveImage } from '../content/imageManifest'
import { siteConfig } from '../content/siteConfig'
import { siteContent } from '../content/siteContent'

export function ContactosPage() {
  const { contactPage, contacts } = siteContent

  return (
    <>
      <PageSEO meta={contactPage.meta} />
      <div className="page-enter space-y-24">
        <section className="section-shell">
          <div className="panel px-6 py-8 sm:px-8 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-bronze/80">
              Contactos
            </p>
            <h1 className="mt-4 text-4xl text-slate-900 sm:text-5xl">
              {contactPage.hero.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {contactPage.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink
                action={contactPage.hero.primaryAction}
                className="cta-button"
              />
              <ActionLink
                action={contactPage.hero.secondaryAction}
                className="secondary-button"
              />
            </div>

            <div className="mt-10 grid gap-6 xl:grid-cols-2">
              <div className="rounded-[1.5rem] border border-bronze/10 bg-white/88 px-5 py-5 shadow-[0_18px_40px_rgba(39,51,45,0.04)]">
                <h2 className="text-xl text-slate-900">
                  {contactPage.hoursTitle}
                </h2>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                  {contacts.hours.map((item) => (
                    <li key={item.label}>
                      <span className="font-semibold text-slate-900">
                        {item.label}
                      </span>
                      : {item.value}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-bronze/10 bg-white/88 px-5 py-5 shadow-[0_18px_40px_rgba(39,51,45,0.04)]">
                <h2 className="text-xl text-slate-900">
                  {contactPage.methodsTitle}
                </h2>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  {contacts.methods.map((item) => (
                    <li key={item.href}>
                      <a className="transition hover:text-forest" href={item.href}>
                        <span className="font-semibold text-slate-900">
                          {item.label}
                        </span>
                        : {item.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-bronze/10 overflow-hidden shadow-[0_18px_40px_rgba(39,51,45,0.05)] h-[16.8rem] sm:h-[21.6rem] lg:h-[28.8rem] xl:col-span-2">
                {(() => {
                  const image = getResponsiveImage('/images/store_front.webp')

                  return (
                    <div className="relative h-full bg-slate-950">
                      <img
                        className="absolute inset-0 w-full h-full object-cover object-[center_60%]"
                        src={image.src}
                        srcSet={image.srcSet}
                        sizes="(max-width: 639px) calc(100vw - 6rem), (max-width: 1279px) calc(100vw - 8rem), calc(100vw - 12rem)"
                        alt={contactPage.visitCard.title}
                        width={image.width}
                        height={image.height}
                        loading="lazy"
                        decoding="async"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                        <h2 className="text-xl text-gold">{contactPage.visitCard.title}</h2>
                        <p className="mt-3 text-sm text-slate-200 max-w-xl">
                          <a
                            className="transition hover:underline"
                            href={siteConfig.business.address.mapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Abrir ${contactPage.visitCard.description} no Google Maps`}
                          >
                            {contactPage.visitCard.description}
                          </a>
                        </p>
                        <p className="mt-2 text-sm text-slate-200 max-w-xl">{contactPage.visitCard.note}</p>
                      </div>
                    </div>
                  )
                })()}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="panel px-6 py-8 sm:px-8 sm:py-10">
            <h2 className="text-3xl text-slate-900 sm:text-4xl">
              {contactPage.gallery.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              {contactPage.gallery.description}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {contactPage.gallery.items.map((item) => (
                (() => {
                  const image = getResponsiveImage(item.src)

                  return (
                    <img
                      key={item.src}
                      loading="lazy"
                      decoding="async"
                      src={image.src}
                      srcSet={image.srcSet}
                      sizes="(max-width: 639px) calc(100vw - 6rem), (max-width: 1279px) calc((100vw - 9rem) / 2), calc((100vw - 16rem) / 5)"
                      alt={item.alt}
                      width={image.width}
                      height={image.height}
                      className="aspect-[4/3] w-full rounded-xl object-cover"
                    />
                  )
                })()
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
