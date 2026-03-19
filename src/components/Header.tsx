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
    <header className="sticky top-0 z-50 border-b border-bronze/10 bg-white/95 shadow-[0_10px_28px_rgba(39,51,45,0.08)] backdrop-blur-md">
      <div className="section-shell px-6 py-3 sm:px-8 sm:py-4 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between gap-6">
          <Link aria-label="Abrir página inicial" to="/" className="min-w-0 flex-1" onClick={closeMenu}>
            <BrandMark />
          </Link>

          <nav className="hidden items-center gap-3 lg:flex" aria-label="Navegação principal">
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
            className="header-button lg:hidden"
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
            className="mt-4 grid gap-2 border-t border-bronze/10 pt-4 lg:hidden"
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
