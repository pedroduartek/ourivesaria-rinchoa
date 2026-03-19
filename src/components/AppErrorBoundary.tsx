import type { ErrorInfo, ReactNode } from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'

interface AppErrorBoundaryProps {
  children: ReactNode
}

interface AppErrorBoundaryState {
  hasError: boolean
}

export class AppErrorBoundary extends Component<
  AppErrorBoundaryProps,
  AppErrorBoundaryState
> {
  state: AppErrorBoundaryState = {
    hasError: false,
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    void error
    void errorInfo
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="section-shell">
          <div className="panel px-6 py-16 text-center sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-bronze/80">
              Erro inesperado
            </p>
            <h1 className="mt-5 text-4xl text-slate-900 sm:text-5xl">
              Ocorreu um problema ao carregar esta página.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Tente voltar ao início ou recarregar a página. Se o problema
              persistir, contacte a loja diretamente.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                className="secondary-button"
                onClick={() => window.location.reload()}
              >
                Recarregar página
              </button>
              <Link className="cta-button" to="/">
                Voltar ao início
              </Link>
            </div>
          </div>
        </section>
      )
    }

    return this.props.children
  }
}
