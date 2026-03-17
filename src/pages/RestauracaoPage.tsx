import { ContactPanel } from '../components/ContactPanel'
import { SectionHeading } from '../components/SectionHeading'
import { siteContent } from '../content/siteContent'
import { usePageMeta } from '../hooks/usePageMeta'

export function RestauracaoPage() {
  const { restoration } = siteContent

  usePageMeta(restoration.meta.title, restoration.meta.description)

  return (
    <div className="space-y-24">
      <section className="section-shell">
        <div className="panel grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.1fr_0.9fr]">
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
              <a className="cta-button" href={restoration.hero.primaryAction.href}>
                {restoration.hero.primaryAction.label}
              </a>
              <a className="secondary-button" href={restoration.hero.secondaryAction.href}>
                {restoration.hero.secondaryAction.label}
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-bronze/10 bg-gradient-to-br from-white via-champagne to-silver px-6 py-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-bronze/80">
              Resultado visível
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Mostramos com clareza como uma intervenção estética bem calibrada devolve leitura, brilho e
              presença ao relógio sem desrespeitar a identidade da peça.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Antes e depois"
          title="Comparação direta para explicar o valor do serviço."
          description="A página de transformação existe para ajudar o cliente a perceber, visualmente, o ganho de clareza e elegância após a limpeza e o restauro."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {restoration.beforeAfter.map((item) => (
            <article key={item.stage} className="panel overflow-hidden p-5">
              <div className="overflow-hidden rounded-[1.75rem] bg-slate-950">
                <img className="h-[320px] w-full object-cover object-center" src={item.imageSrc} alt={item.alt} />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
                {item.stage}
              </p>
              <h2 className="mt-3 text-3xl text-slate-900">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow={restoration.highlights.eyebrow}
          title={restoration.highlights.title}
          description={restoration.highlights.description}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {restoration.highlights.items.map((item) => (
            <article key={item.title} className="panel px-5 py-6">
              <h2 className="text-3xl text-slate-900">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Processo de atendimento"
          title="Explicação clara antes de qualquer avanço."
          description="Cada relógio chega com uma história diferente, por isso mantemos um processo curto, legível e sempre validado com o cliente."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {restoration.process.map((item) => (
            <article key={item.title} className="panel px-5 py-6">
              <h2 className="text-3xl text-slate-900">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactPanel
        id="contactos"
        eyebrow="Agendar avaliação"
        title="Traga o relógio à loja e avaliamos a melhor intervenção."
        description="O serviço foi pensado para começar presencialmente: analisamos o estado da peça, explicamos limites e definimos o caminho com total transparência."
      />
    </div>
  )
}

