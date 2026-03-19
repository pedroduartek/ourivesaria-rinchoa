import { screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { renderApp } from './test/renderApp'
import { siteContent } from './content/siteContent'

describe('Ourivesaria Rinchoa SPA', () => {
  it('renders the main offer on the home page', async () => {
    renderApp()

    expect(
      await screen.findByRole('heading', { level: 1, name: siteContent.home.hero.title }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: siteContent.home.hero.secondaryAction.label,
      }),
    ).toHaveAttribute('href', '/casamentos')
  })

  it('navigates to the watch-repair page from the mobile menu', async () => {
    const user = userEvent.setup()
    renderApp()

    await user.click(screen.getByRole('button', { name: /menu/i }))

    const mobileNavigation = screen.getByRole('navigation', {
      name: /navegação móvel/i,
    })

    await user.click(
      within(mobileNavigation).getByRole('link', {
        name: siteContent.navigation[1].label,
      }),
    )

    expect(
      await screen.findByRole('heading', {
        name: siteContent.restoration.hero.title,
      }),
    ).toBeInTheDocument()
  })

  it('navigates to the contact page from the home hero', async () => {
    const user = userEvent.setup()
    renderApp()

    await user.click(
      screen.getByRole('link', { name: siteContent.home.hero.primaryAction.label }),
    )

    expect(
      await screen.findByRole('heading', { name: siteContent.contactPage.hero.title }),
    ).toBeInTheDocument()
  })

  it('changes the active carousel slide manually', async () => {
    const user = userEvent.setup()
    renderApp()

    expect(
      screen.getByRole('heading', {
        name: siteContent.home.carouselSlides[0].title,
      }),
    ).toBeVisible()

    await user.click(screen.getByRole('button', { name: /slide seguinte/i }))

    expect(
      screen.getByRole('heading', {
        name: siteContent.home.carouselSlides[1].title,
      }),
    ).toBeVisible()
  })

  it('exposes direct contact actions on the contact page', async () => {
    renderApp(['/contactos'])

    expect(
      await screen.findByRole('heading', { name: siteContent.contactPage.hero.title }),
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

  it('applies route-level SEO metadata', async () => {
    renderApp(['/contactos'])

    await screen.findByRole('heading', { name: siteContent.contactPage.hero.title })

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

  it('renders the 404 page and marks it as noindex', async () => {
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

  it('has no accessibility violations on the home page', async () => {
    const { container } = renderApp()

    await screen.findByRole('heading', { name: siteContent.home.hero.title })

    // Remove cross-origin iframes before axe runs
    container.querySelectorAll('iframe').forEach((f) => f.remove())

    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations on the weddings page', async () => {
    const { container } = renderApp(['/casamentos'])

    await screen.findByRole('heading', { name: siteContent.weddings.hero.title })

    // Remove cross-origin iframes before axe runs
    container.querySelectorAll('iframe').forEach((f) => f.remove())

    expect(await axe(container)).toHaveNoViolations()
  })

  it('has no accessibility violations on the contact page', async () => {
    const { container } = renderApp(['/contactos'])

    await screen.findByRole('heading', { name: siteContent.contactPage.hero.title })

    container.querySelectorAll('iframe').forEach((f) => f.remove())

    expect(await axe(container)).toHaveNoViolations()
  })
})
