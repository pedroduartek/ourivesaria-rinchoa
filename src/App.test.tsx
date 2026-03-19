import { screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { renderApp } from './test/renderApp'
import { siteContent } from './content/siteContent'

describe('Ourivesaria Rinchoa SPA', () => {
  it('mostra a proposta principal na página inicial', async () => {
    renderApp()

    expect(
      await screen.findByRole('heading', { level: 1, name: siteContent.home.hero.title }),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /ver serviços de casamento/i })).toHaveAttribute(
      'href',
      '/casamentos',
    )
  })

  it('permite navegar para a página de restauro a partir do menu móvel', async () => {
    const user = userEvent.setup()
    renderApp()

    await user.click(screen.getByRole('button', { name: /menu/i }))

    const mobileNavigation = screen.getByRole('navigation', {
      name: /navegação móvel/i,
    })

    await user.click(
      within(mobileNavigation).getByRole('link', {
        name: /reparação e manutenção de relógios/i,
      }),
    )

    expect(
      await screen.findByRole('heading', {
        name: /relógios com nova presença, sem perder a história da peça/i,
      }),
    ).toBeInTheDocument()
  })

  it('permite navegar para contactos a partir da home', async () => {
    const user = userEvent.setup()
    renderApp()

    await user.click(screen.getByRole('link', { name: /marcar visita/i }))

    expect(
      await screen.findByRole('heading', { name: /contactos e loja/i }),
    ).toBeInTheDocument()
  })

  it('troca o slide ativo do carousel manualmente', async () => {
    const user = userEvent.setup()
    renderApp()

    expect(screen.getByRole('heading', { name: /receção cuidada e apresentação refinada/i })).toBeVisible()

    await user.click(screen.getByRole('button', { name: /slide seguinte/i }))

    expect(
      screen.getByRole('heading', {
        name: /limpeza profunda e reparação e manutenção de relógios/i,
      }),
    ).toBeVisible()
  })

  it('expõe ações de contacto diretas na página de contactos', async () => {
    renderApp(['/contactos'])

    expect(
      await screen.findByRole('heading', { name: /contactos e loja/i }),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /falar por whatsapp/i })).toHaveAttribute(
      'href',
      siteContent.contacts.whatsapp.href,
    )
    expect(screen.getByRole('link', { name: /ligar agora/i })).toHaveAttribute(
      'href',
      siteContent.contacts.phone.href,
    )
    expect(
      screen
        .getAllByRole('link', {
          name: new RegExp(
            `${siteContent.contacts.email.label}: ${siteContent.contacts.email.value}`,
            'i',
          ),
        })
        .some((link) => link.getAttribute('href') === siteContent.contacts.email.href),
    ).toBe(true)
  })

  it('aplica metadados SEO por rota', async () => {
    renderApp(['/contactos'])

    await screen.findByRole('heading', { name: /contactos e loja/i })

    await waitFor(() => {
      expect(document.title).toBe(siteContent.contactPage.meta.title)
      expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
        'href',
        'https://ourivesariarinchoa.pt/contactos',
      )
      expect(
        document.querySelector('meta[property="og:title"]'),
      ).toHaveAttribute('content', siteContent.contactPage.meta.title)
      expect(
        document.querySelector('meta[name="twitter:image"]'),
      ).toHaveAttribute(
        'content',
        'https://ourivesariarinchoa.pt/images/store_front.webp',
      )
      expect(document.querySelector('script[data-seo="local-business"]')).toHaveTextContent(
        'Ourivesaria Rinchoa',
      )
    })
  })

  it('mostra a página 404 e marca-a como noindex', async () => {
    renderApp(['/rota-inexistente'])

    expect(
      await screen.findByRole('heading', { name: /página não encontrada/i }),
    ).toBeInTheDocument()

    await waitFor(() => {
      expect(document.querySelector('meta[name="robots"]')).toHaveAttribute(
        'content',
        'noindex, nofollow',
      )
      expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
        'href',
        'https://ourivesariarinchoa.pt/404',
      )
    })
  })

  it('não apresenta violações de acessibilidade na página inicial', async () => {
    const { container } = renderApp()

    await screen.findByRole('heading', { name: siteContent.home.hero.title })

    // Remove cross-origin iframes (e.g. Google Maps) before axe runs
    container.querySelectorAll('iframe').forEach((f) => f.remove())

    expect(await axe(container)).toHaveNoViolations()
  })

  it('não apresenta violações de acessibilidade na página de casamentos', async () => {
    const { container } = renderApp(['/casamentos'])

    await screen.findByRole('heading', { name: siteContent.weddings.hero.title })

    // Remove cross-origin iframes (e.g. Google Maps) before axe runs
    container.querySelectorAll('iframe').forEach((f) => f.remove())

    expect(await axe(container)).toHaveNoViolations()
  })

  it('não apresenta violações de acessibilidade na página de contactos', async () => {
    const { container } = renderApp(['/contactos'])

    await screen.findByRole('heading', { name: siteContent.contactPage.hero.title })

    container.querySelectorAll('iframe').forEach((f) => f.remove())

    expect(await axe(container)).toHaveNoViolations()
  })
})
