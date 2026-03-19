import { ActionLink } from '../components/ActionLink'
import PageSEO from '../components/seo/PageSEO'
import { siteContent } from '../content/siteContent'

export function ContactosPage() {
  const { contactPage, contacts } = siteContent

  return (
    <>
      <PageSEO meta={contactPage.meta} />
      <div className="space-y-24">
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
              <div className="rounded-[1.5rem] border border-bronze/10 bg-gradient-to-br from-white via-white to-champagne px-5 py-5 shadow-[0_18px_40px_rgba(39,51,45,0.05)]">
                <h2 className="text-xl text-slate-900">
                  {contactPage.visitCard.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {contactPage.visitCard.description}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {contactPage.visitCard.note}
                </p>
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

              <div className="overflow-hidden rounded-[1.5rem] border border-bronze/10 bg-white/88 shadow-[0_18px_40px_rgba(39,51,45,0.04)]">
                <iframe
                  title={contactPage.map.title}
                  src={contactPage.map.embedSrc}
                  className="h-64 w-full sm:h-72 lg:h-[26rem]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
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
                <img
                  key={item.src}
                  loading="lazy"
                  src={item.src}
                  alt={item.alt}
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
