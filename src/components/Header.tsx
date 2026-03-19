import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { siteContent } from '../content/siteContent'
import { ActionLink } from './ActionLink'
import { BrandMark } from './BrandMark'

const linkBaseClass = 'header-button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="section-shell">
      <div className="panel sticky top-4 z-40 mt-4 px-6 py-4 sm:px-8 sm:py-5">
        <div className="flex items-center justify-between gap-6">
          <Link aria-label="Abrir página inicial" to="/" className="min-w-0 flex-1" onClick={closeMenu}>
            <BrandMark />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
            {siteContent.navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? 'cta-button' : linkBaseClass)}
              >
                {item.label}
              </NavLink>
            ))}
            <ActionLink
              action={siteContent.navigationAction}
              className="cta-button contactos-cta"
              onClick={closeMenu}
            />
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium text-forest lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="menu-principal"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            Menu
          </button>
        </div>

        {isMenuOpen ? (
          <nav
            id="menu-principal"
            aria-label="Navegação móvel"
            className="mt-4 grid gap-2 rounded-lg border border-white/70 bg-white/75 p-3 lg:hidden"
          >
            {siteContent.navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? 'cta-button' : linkBaseClass)}
              >
                {item.label}
              </NavLink>
            ))}
            <ActionLink
              action={siteContent.navigationAction}
              className="cta-button contactos-cta justify-center"
              onClick={closeMenu}
            />
          </nav>
        ) : null}
      </div>
    </header>
  )
}
