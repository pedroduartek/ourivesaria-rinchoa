import { siteContent } from '../content/siteContent'

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
              <a className="cta-button" href={siteContent.contacts.whatsapp.href}>
                {siteContent.contacts.whatsapp.shortLabel}
              </a>
              <a className="secondary-button" href={siteContent.contacts.phone.href}>
                {siteContent.contacts.phone.shortLabel}
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-xl border border-bronze/10 bg-gradient-to-br from-white via-white to-champagne px-5 py-5">
              <h3 className="text-lg font-semibold text-slate-900">Visita à loja</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {siteContent.contacts.address.value}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {siteContent.contacts.appointmentNote}
              </p>

              <div className="rounded-xl border border-bronze/10 overflow-hidden">
              <iframe
                title="Ourivesaria Rinchoa - Street View"
                src="https://www.google.com/maps/embed?pb=!4v1773858868343!6m8!1m7!1scfpncxQ9hEjq-biBDVo7Kw!2m2!1d38.7869887864636!2d-9.322224050056239!3f100.79303157452686!4f-9.101469032479969!5f2.1088444537067614"
                className="w-full h-56 sm:h-64 md:h-72"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            </div>

            <div className="rounded-xl border border-bronze/10 bg-white/85 px-5 py-5">
              <h3 className="text-lg font-semibold text-slate-900">Contactos diretos</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {siteContent.contacts.methods.map((item) => (
                  <li key={item.href}>
                    <a className="transition hover:text-forest" href={item.href}>
                      <span className="font-semibold text-slate-900">{item.label}</span>: {item.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-bronze/10 bg-white/85 px-5 py-5">
              <h3 className="text-lg font-semibold text-slate-900">Horário</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {siteContent.contacts.hours.map((item) => (
                  <li key={item.label}>
                    <span className="font-semibold text-slate-900">{item.label}</span>: {item.value}
                  </li>
                ))}
              </ul>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}

