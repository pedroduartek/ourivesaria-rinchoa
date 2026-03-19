import { ActionLink } from '../components/ActionLink'
import PageSEO from '../components/seo/PageSEO'
import { siteContent } from '../content/siteContent'

export function ContactosPage() {
  const { contactPage, contacts } = siteContent

  return (
    <>
      <PageSEO meta={contactPage.meta} />
      <div className="space-y-8">
        <section className="section-shell">
          <div className="panel px-6 py-8 sm:px-8 sm:py-10">
            <h1 className="text-3xl font-semibold text-slate-900">
              {contactPage.hero.title}
            </h1>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {contactPage.hero.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <ActionLink
                action={contactPage.hero.primaryAction}
                className="cta-button"
              />
              <ActionLink
                action={contactPage.hero.secondaryAction}
                className="secondary-button"
              />
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-bronze/10 bg-gradient-to-br from-white via-white to-champagne px-5 py-5">
                <h2 className="text-lg font-semibold text-slate-900">
                  {contactPage.visitCard.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {contactPage.visitCard.description}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {contactPage.visitCard.note}
                </p>
              </div>

              <div className="rounded-xl border border-bronze/10 bg-white/85 px-5 py-5">
                <h2 className="text-lg font-semibold text-slate-900">
                  {contactPage.methodsTitle}
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
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

              <div className="rounded-xl border border-bronze/10 bg-white/85 px-5 py-5">
                <h2 className="text-lg font-semibold text-slate-900">
                  {contactPage.hoursTitle}
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
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

              <div className="overflow-hidden rounded-xl border border-bronze/10">
                <iframe
                  title={contactPage.map.title}
                  src={contactPage.map.embedSrc}
                  className="h-56 w-full sm:h-64 md:h-72"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="mt-6">
                  <h2 className="text-lg font-semibold text-slate-900">
                    {contactPage.gallery.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">
                    {contactPage.gallery.description}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {contactPage.gallery.items.map((item) => (
                      <img
                        key={item.src}
                        loading="lazy"
                        src={item.src}
                        alt={item.alt}
                        className="h-36 w-full rounded-xl object-cover"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
