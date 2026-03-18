import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { siteContent } from '../content/siteContent'
import { BrandMark } from './BrandMark'

const linkBaseClass =
  'rounded-md px-4 py-2 text-sm font-semibold transition hover:bg-white/70 hover:text-forest ring-1 ring-forest-300/40'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="section-shell">
          <div className="panel sticky top-4 z-40 mt-4 px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link aria-label="Abrir página inicial" to="/" className="min-w-0" onClick={closeMenu}>
            <BrandMark />
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-bronze/10 bg-white/70 px-4 py-2 text-sm font-semibold text-forest shadow-sm lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="menu-principal"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            Menu
          </button>

          <nav className="hidden items-center gap-2 lg:flex" aria-label="Navegação principal">
            {siteContent.navigation
              .filter((item) => item.path !== '/')
              .map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `${linkBaseClass} ${isActive ? 'bg-forest text-white' : 'text-slate-700'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            <Link to="/contactos" className="cta-button ml-2" onClick={closeMenu}>
              Contactos
            </Link>
          </nav>
        </div>

        {isMenuOpen ? (
          <nav
            id="menu-principal"
            aria-label="Navegação móvel"
            className="mt-4 grid gap-2 rounded-lg border border-white/70 bg-white/75 p-3 lg:hidden"
          >
            {siteContent.navigation
              .filter((item) => item.path !== '/')
              .map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `${linkBaseClass} ${isActive ? 'bg-forest text-white' : 'bg-transparent text-slate-700'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            <Link className="cta-button mt-2 justify-center" to="/contactos" onClick={closeMenu}>
              Contactos
            </Link>
          </nav>
        ) : null}
      </div>
    </header>
  )
}
