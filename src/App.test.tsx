import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { renderApp } from './test/renderApp'

describe('Ourivesaria Rinchoa SPA', () => {
  it('mostra a proposta principal na página inicial', () => {
    renderApp()

    expect(
      screen.getByRole('heading', {
        name: /joalharia sofisticada, restauro rigoroso e acompanhamento humano/i,
      }),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /ver serviços de casamento/i })).toHaveAttribute(
      'href',
      '/casamentos',
    )
  })

  it('permite navegar para a página de restauro a partir do menu', async () => {
    const user = userEvent.setup()
    renderApp()

    const primaryNavigation = screen.getByRole('navigation', { name: /navegação principal/i })

    await user.click(within(primaryNavigation).getByRole('link', { name: /restauro de relógios/i }))

    expect(
      await screen.findByRole('heading', {
        name: /relógios com nova presença, sem perder a história da peça/i,
      }),
    ).toBeInTheDocument()
  })

  it('troca o slide ativo do carousel manualmente', async () => {
    const user = userEvent.setup()
    renderApp()

    expect(screen.getByRole('heading', { name: /receção cuidada e apresentação refinada/i })).toBeVisible()

    await user.click(screen.getByRole('button', { name: /slide seguinte/i }))

    expect(screen.getByRole('heading', { name: /limpeza profunda e restauro de relógios/i })).toBeVisible()
  })

  it('não apresenta violações de acessibilidade na página inicial', async () => {
    const { container } = renderApp()

    expect(await axe(container)).toHaveNoViolations()
  })

  it('não apresenta violações de acessibilidade na página de casamentos', async () => {
    const { container } = renderApp(['/casamentos'])

    expect(await axe(container)).toHaveNoViolations()
  })
})
