import { Link } from 'react-router-dom'
import { siteContent } from '../content/siteContent'
import { BrandMark } from './BrandMark'

export function Footer() {
  return (
    <footer className="section-shell pb-8">
      <div className="panel px-6 py-8">
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
              {siteContent.contacts.address.value}
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

        <div className="mt-8 border-t border-bronze/10 pt-6 text-sm text-slate-500">
          {siteContent.footer.legal}
        </div>
      </div>
    </footer>
  )
}
