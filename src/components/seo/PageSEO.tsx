import { useEffect } from 'react'
import { siteConfig } from '../../content/siteConfig'
import type { SeoMeta } from '../../content/siteContent'

interface PageSEOProps {
  meta: SeoMeta
}

function ensureMeta(
  selector: string,
  attrs: Record<string, string>,
): HTMLMetaElement {
  const existing = document.head.querySelector(selector)
  const meta =
    existing instanceof HTMLMetaElement
      ? existing
      : document.createElement('meta')

  for (const [key, value] of Object.entries(attrs)) {
    meta.setAttribute(key, value)
  }

  if (!existing) {
    document.head.appendChild(meta)
  }

  return meta
}

function ensureLink(
  selector: string,
  attrs: Record<string, string>,
): HTMLLinkElement {
  const existing = document.head.querySelector(selector)
  const link =
    existing instanceof HTMLLinkElement
      ? existing
      : document.createElement('link')

  for (const [key, value] of Object.entries(attrs)) {
    link.setAttribute(key, value)
  }

  if (!existing) {
    document.head.appendChild(link)
  }

  return link
}

export default function PageSEO({ meta }: PageSEOProps) {
  useEffect(() => {
    const canonicalUrl = new URL(meta.path, siteConfig.canonicalOrigin).href
    const imageUrl = new URL(
      meta.image ?? siteConfig.defaultSocialImage,
      siteConfig.canonicalOrigin,
    ).href

    document.title = meta.title

    ensureMeta('meta[name="description"]', {
      name: 'description',
      content: meta.description,
    })
    ensureMeta('meta[name="keywords"]', {
      name: 'keywords',
      content:
        'Ourivesaria Rinchoa, ourivesaria rinchoa, joalharia Rinchoa, alianças Rinchoa, relojoaria Rinchoa, Rio de Mouro',
    })
    ensureMeta('meta[name="robots"]', {
      name: 'robots',
      content: meta.noindex ? 'noindex, nofollow' : 'index, follow',
    })
    ensureMeta('meta[name="theme-color"]', {
      name: 'theme-color',
      content: siteConfig.themeColor,
    })
    ensureLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    })

    ensureMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: siteConfig.locale,
    })
    ensureMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: siteConfig.siteName,
    })
    ensureMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    })
    ensureMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: meta.title,
    })
    ensureMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: meta.description,
    })
    ensureMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    })
    ensureMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: imageUrl,
    })

    ensureMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })
    ensureMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: meta.title,
    })
    ensureMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: meta.description,
    })
    ensureMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: imageUrl,
    })

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': siteConfig.business.type,
      name: siteConfig.business.name,
      alternateName: siteConfig.shortName,
      url: siteConfig.canonicalOrigin,
      image: new URL(
        siteConfig.defaultSocialImage,
        siteConfig.canonicalOrigin,
      ).href,
      description: meta.description,
      telephone: siteConfig.business.telephone,
      email: siteConfig.business.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.business.address.streetAddress,
        addressLocality: siteConfig.business.address.locality,
        addressRegion: siteConfig.business.address.region,
        addressCountry: siteConfig.business.address.country,
      },
      openingHoursSpecification: siteConfig.business.openingHours.flatMap(
        (item) =>
          ('specifications' in item ? item.specifications : [])?.map(
            (specification) => ({
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: specification.dayOfWeek.map(
              (day: string) => `https://schema.org/${day}`,
            ),
            opens: specification.opens,
            closes: specification.closes,
            }),
          ),
      ),
      mainEntityOfPage: canonicalUrl,
    }

    let script = document.head.querySelector(
      'script[data-seo="local-business"]',
    )

    if (!(script instanceof HTMLScriptElement)) {
      script = document.createElement('script')
      script.setAttribute('data-seo', 'local-business')
      script.setAttribute('type', 'application/ld+json')
      document.head.appendChild(script)
    }

    script.textContent = JSON.stringify(jsonLd)
  }, [meta])

  return null
}
