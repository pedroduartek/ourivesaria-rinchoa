const vercelObservabilityConfig = {
  analytics: {
    scriptSrc: '/relay/insights/script.js',
    viewEndpoint: '/relay/insights/view',
    eventEndpoint: '/relay/insights/event',
  },
} as const

export function getVercelObservabilityConfigString(
  isProduction: boolean,
): string | undefined {
  if (!isProduction) {
    return undefined
  }

  return JSON.stringify(vercelObservabilityConfig)
}

const configString = getVercelObservabilityConfigString(import.meta.env.PROD)

export const vercelAnalyticsProps = configString ? { configString } : {}
