import { Link } from 'react-router-dom'
import { siteContent } from '../content/siteContent'
import { siteConfig } from '../content/siteConfig'
import { BrandMark } from './BrandMark'

export function Footer() {
  return (
    <footer className="border-t border-bronze/10 bg-white/95 shadow-[0_-10px_28px_rgba(39,51,45,0.05)] backdrop-blur-md">
      <div className="section-shell px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <BrandMark />
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
              {siteContent.footer.description}
            </p>
            <p className="mt-6 text-sm font-semibold text-forest">
              {siteContent.contacts.address.label}
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              <a
                className="transition hover:text-forest"
                href={siteConfig.business.address.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir ${siteContent.contacts.address.value} no Google Maps`}
              >
                {siteContent.contacts.address.value}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-bronze/80">
              {siteContent.footer.navigationTitle}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {siteContent.navigation.map((item) => (
                <li key={item.path}>
                  <Link className="transition hover:text-forest" to={item.path}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-bronze/80">
              {siteContent.footer.contactsTitle}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {siteContent.contacts.methods.map((item) => (
                <li key={item.href}>
                  <a className="transition hover:text-forest" href={item.href}>
                    {item.label}: {item.value}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              {siteContent.contacts.hours.map((item) => (
                <li key={item.label}>
                  <span className="font-semibold text-slate-800">{item.label}</span>: {item.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
