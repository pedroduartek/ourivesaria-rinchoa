import { ActionLink } from '../components/ActionLink'
import PageSEO from '../components/seo/PageSEO'
import { siteContent } from '../content/siteContent'

export function NotFoundPage() {
  const { notFound } = siteContent

  return (
    <>
      <PageSEO meta={notFound.meta} />
      <section className="section-shell">
        <div className="panel px-6 py-16 text-center sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-bronze/80">
            {notFound.eyebrow}
          </p>
          <h1 className="mt-5 text-5xl text-slate-900 sm:text-6xl">
            {notFound.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            {notFound.description}
          </p>
          <ActionLink action={notFound.action} className="cta-button mt-8" />
        </div>
      </section>
    </>
  )
}
