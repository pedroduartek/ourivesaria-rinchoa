import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AppErrorBoundary } from '../components/AppErrorBoundary'
import { Carousel } from '../components/Carousel'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { RouteLoading } from '../components/RouteLoading'
import { ScrollToTop } from '../components/ScrollToTop'
import { siteContent } from '../content/siteContent'

export function MainLayout() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollToTop />
      <div className="pointer-events-none fixed inset-x-0 top-[-12rem] h-[28rem] bg-[radial-gradient(circle_at_top,rgba(216,180,93,0.28),transparent_58%)]" />
      <div className="pointer-events-none fixed right-[-6rem] top-1/3 h-72 w-72 rounded-2xl bg-[radial-gradient(circle,rgba(56,85,65,0.12),transparent_68%)] blur-3xl" />
      <div className="pointer-events-none fixed left-[-4rem] bottom-[-4rem] h-72 w-72 rounded-2xl bg-[radial-gradient(circle,rgba(217,222,230,0.55),transparent_70%)] blur-3xl" />

      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-forest focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Saltar para o conteúdo
      </a>

      <Header />
      {isHomePage ? <Carousel slides={siteContent.home.carouselSlides} fullBleed /> : null}

      <main id="conteudo-principal" className="pb-16 pt-8 sm:pt-10">
        <AppErrorBoundary>
          <Suspense fallback={<RouteLoading />}>
            <Outlet />
          </Suspense>
        </AppErrorBoundary>
      </main>

      <Footer />
    </div>
  )
}
