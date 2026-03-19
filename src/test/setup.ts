import '@testing-library/jest-dom/vitest'
import { toHaveNoViolations } from 'jest-axe'
import { beforeAll, expect, vi } from 'vitest'

expect.extend(toHaveNoViolations)

beforeAll(() => {
  Object.defineProperty(window, 'scrollTo', {
    value: vi.fn(),
    writable: true,
  })

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
})
