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
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-bronze/80">
              {eyebrow}
            </p>
            <h2 className="mt-4 text-balance text-3xl text-slate-900 sm:text-4xl lg:text-[3rem]">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {description}
            </p>

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
            <div className="w-full rounded-[1.5rem] border border-bronze/10 bg-gradient-to-br from-white via-ivory to-champagne px-5 py-6 text-center shadow-[0_18px_44px_rgba(39,51,45,0.07)]">
              <h3 className="text-xl font-semibold text-slate-900">Contactos e loja</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Morada, horário e indicações para chegar à loja.
              </p>
              <ActionLink
                action={siteContent.navigationAction}
                className="cta-button mt-4 inline-block"
              >
                Ver morada e horários
              </ActionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
