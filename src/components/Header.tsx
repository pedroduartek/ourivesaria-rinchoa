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
      <div className="panel sticky top-4 z-40 mt-4 px-5 py-4 sm:px-7 sm:py-5">
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
            className="mt-4 grid gap-2 rounded-[1.4rem] border border-white/80 bg-white/90 p-3 shadow-[0_20px_44px_rgba(39,51,45,0.08)] lg:hidden"
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
