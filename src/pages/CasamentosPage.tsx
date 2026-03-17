import { ContactPanel } from '../components/ContactPanel'
import { SectionHeading } from '../components/SectionHeading'
import { siteContent } from '../content/siteContent'
import { usePageMeta } from '../hooks/usePageMeta'

export function CasamentosPage() {
  const { weddings } = siteContent

  usePageMeta(weddings.meta.title, weddings.meta.description)

  return (
    <div className="space-y-24">
      <section className="section-shell">
        <div className="panel grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.06fr_0.94fr]">
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
              <a className="cta-button" href={weddings.hero.primaryAction.href}>
                {weddings.hero.primaryAction.label}
              </a>
              <a className="secondary-button" href={weddings.hero.secondaryAction.href}>
                {weddings.hero.secondaryAction.label}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-bronze/10 bg-slate-900">
            <img
              className="h-full min-h-[320px] w-full object-cover object-center"
              src="/images/carousel-wedding.svg"
              alt="Alianças e joias de cerimónia em composição elegante."
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
            <article key={item.title} className="panel px-5 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
                {item.accent}
              </p>
              <h2 className="mt-4 text-3xl text-slate-900">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
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
            <article key={item.title} className="panel px-5 py-6">
              <h2 className="text-3xl text-slate-900">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Orientação em loja"
          title="Acompanhamento pensado para reduzir indecisão e aumentar conforto."
          description="Cada visita é organizada para dar espaço à conversa, à prova e à decisão com tempo."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {weddings.guidance.map((item) => (
            <article key={item.title} className="panel px-5 py-6">
              <h2 className="text-3xl text-slate-900">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactPanel
        id="contactos"
        eyebrow="Marcação para noivos"
        title="Reserve um atendimento dedicado e escolham com calma."
        description="As decisões de casamento beneficiam de contexto, luz certa e acompanhamento atento. A loja está preparada para receber o casal com tempo, conforto e discrição."
      />
    </div>
  )
}

