import { siteContent } from '../content/siteContent'
import { usePageMeta } from '../hooks/usePageMeta'

export function ContactosPage() {
  usePageMeta('Contactos | Ourivesaria Rinchoa', 'Contactos e informações sobre visita à loja, horários e formas de contacto.')

  return (
    <div className="space-y-8">
      <section className="section-shell">
        <div className="panel px-6 py-8 sm:px-8 sm:py-10">
          <h1 className="text-3xl font-semibold text-slate-900">Contactos e loja</h1>
          <p className="mt-3 text-sm leading-7 text-slate-600">Encontre as formas de contacto e informações de visita à nossa loja.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="cta-button" href={siteContent.contacts.whatsapp.href}>
              {siteContent.contacts.whatsapp.shortLabel}
            </a>
            <a className="secondary-button" href={siteContent.contacts.phone.href}>
              {siteContent.contacts.phone.shortLabel}
            </a>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-bronze/10 bg-gradient-to-br from-white via-white to-champagne px-5 py-5">
              <h2 className="text-lg font-semibold text-slate-900">Visita à loja</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{siteContent.contacts.address.value}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{siteContent.contacts.appointmentNote}</p>
            </div>

            <div className="rounded-xl border border-bronze/10 bg-white/85 px-5 py-5">
              <h2 className="text-lg font-semibold text-slate-900">Contactos diretos</h2>
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
              <h2 className="text-lg font-semibold text-slate-900">Horário</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {siteContent.contacts.hours.map((item) => (
                  <li key={item.label}>
                    <span className="font-semibold text-slate-900">{item.label}</span>: {item.value}
                  </li>
                ))}
              </ul>
            </div>

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
              <div className="mt-6">
                <h2 className="text-lg font-semibold text-slate-900">Galeria de trabalhos</h2>
                <p className="mt-2 text-sm text-slate-600">Alguns exemplos de relógios antes e depois das intervenções.</p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <img loading="lazy" src="/images/repaired_watch.jpg" alt="Relógio reparado" className="w-full rounded-xl object-cover h-36" />
                  <img loading="lazy" src="/images/repaired_watch_2.jpg" alt="Relógio reparado 2" className="w-full rounded-xl object-cover h-36" />
                  <img loading="lazy" src="/images/repaired_watch_3.jpg" alt="Relógio reparado 3" className="w-full rounded-xl object-cover h-36" />
                  <img loading="lazy" src="/images/medium_watch_repaired.jpg" alt="Relógio médio reparado" className="w-full rounded-xl object-cover h-36" />
                  <img loading="lazy" src="/images/watch_to_sell.jpg" alt="Relógio para venda" className="w-full rounded-xl object-cover h-36" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
