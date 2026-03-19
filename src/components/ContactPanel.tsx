import { siteContent } from '../content/siteContent'
import { ActionLink } from './ActionLink'

interface ContactPanelProps {
  id?: string
  eyebrow: string
  title: string
  description: string
}

export function ContactPanel({ id, eyebrow, title, description }: ContactPanelProps) {
  return (
    <section id={id} className="section-shell scroll-mt-32">
      <div className="panel px-6 py-8 sm:px-8 sm:py-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-bronze/80">
              {eyebrow}
            </p>
            <h2 className="mt-4 text-balance text-4xl text-slate-900 sm:text-5xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink
                action={{
                  type: 'external',
                  label: siteContent.contacts.whatsapp.shortLabel,
                  href: siteContent.contacts.whatsapp.href,
                }}
                className="cta-button"
              />
              <ActionLink
                action={{
                  type: 'external',
                  label: siteContent.contacts.phone.shortLabel,
                  href: siteContent.contacts.phone.href,
                }}
                className="secondary-button"
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="rounded-xl border border-bronze/10 bg-white/90 px-5 py-6 text-center w-full">
              <h3 className="text-lg font-semibold text-slate-900">Contactos e loja</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Morada, horários e mapa com Street View.</p>
              <ActionLink
                action={siteContent.navigationAction}
                className="cta-button mt-4 inline-block"
              >
                Ver contactos
              </ActionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
