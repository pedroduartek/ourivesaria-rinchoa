import { Link } from 'react-router-dom'
import { Carousel } from '../components/Carousel'
import { ContactPanel } from '../components/ContactPanel'
import { SectionHeading } from '../components/SectionHeading'
import { siteContent } from '../content/siteContent'
import { usePageMeta } from '../hooks/usePageMeta'

export function HomePage() {
  const { home } = siteContent

  usePageMeta(home.meta.title, home.meta.description)

  return (
    <div className="space-y-24">
      <section className="section-shell">
        <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="panel px-6 py-8 sm:px-8 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-bronze/80">
              {home.hero.eyebrow}
            </p>
            <h1 className="mt-5 text-balance text-5xl text-slate-900 sm:text-6xl lg:text-[4.4rem] lg:leading-[1.02]">
              {home.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {home.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a className="cta-button" href={home.hero.primaryAction.href}>
                {home.hero.primaryAction.label}
              </a>
              <Link className="secondary-button" to={home.hero.secondaryAction.to ?? '/'}>
                {home.hero.secondaryAction.label}
              </Link>
            </div>

            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {home.hero.stats.map((item) => (
                <div key={item.label} className="rounded-lg border border-bronze/10 bg-white/75 px-4 py-5">
                  <dt className="text-3xl font-semibold text-forest">{item.value}</dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-600">{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <Carousel slides={home.carouselSlides} />
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow={home.sections.services.eyebrow}
          title={home.sections.services.title}
          description={home.sections.services.description}
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {home.sections.services.items.map((item) => (
            <article key={item.title} className="panel px-5 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
                {item.accent}
              </p>
              <h2 className="mt-4 text-3xl text-slate-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="panel px-6 py-8">
            <SectionHeading
              eyebrow={home.sections.reasons.eyebrow}
              title={home.sections.reasons.title}
              description={home.sections.reasons.description}
            />
          </div>

          <div className="grid gap-5">
            {home.sections.reasons.items.map((item) => (
                <article
                key={item.title}
                className="rounded-xl border border-bronze/10 bg-white/80 px-6 py-6 shadow-[0_18px_48px_rgba(56,85,65,0.08)]"
              >
                <h2 className="text-3xl text-slate-900">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow={home.sections.process.eyebrow}
          title={home.sections.process.title}
          description={home.sections.process.description}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {home.sections.process.items.map((item) => (
            <article key={item.title} className="panel px-5 py-6">
              <h2 className="text-3xl text-slate-900">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactPanel
        id="contactos"
        eyebrow="Contactos e loja"
        title="A melhor próxima ação é simples: visitar, telefonar ou enviar mensagem."
        description="Toda a presença digital foi construída para aproximar o cliente da loja física. Se procura aconselhamento, uma avaliação ou um atendimento reservado, estamos preparados para receber."
      />
    </div>
  )
}

