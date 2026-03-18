import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export function NotFoundPage() {
  usePageMeta(
    'Página não encontrada | Ourivesaria Rinchoa',
    'A página procurada não foi encontrada. Volte à página inicial da Ourivesaria Rinchoa.',
  )

  return (
    <section className="section-shell">
      <div className="panel px-6 py-16 text-center sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-bronze/80">Erro 404</p>
        <h1 className="mt-5 text-5xl text-slate-900 sm:text-6xl">Página não encontrada</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          O conteúdo pedido não está disponível. Volte à página principal para conhecer a loja, os
          serviços de reparação e manutenção e a área de casamentos.
        </p>
        <Link className="cta-button mt-8" to="/">
          Voltar ao início
        </Link>
      </div>
    </section>
  )
}
