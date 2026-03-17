import { useEffect } from 'react'

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const previousTitle = document.title
    const metaDescription = document.querySelector('meta[name="description"]')
    const previousDescription = metaDescription?.getAttribute('content')

    document.title = title
    metaDescription?.setAttribute('content', description)

    return () => {
      document.title = previousTitle

      if (previousDescription) {
        metaDescription?.setAttribute('content', previousDescription)
      }
    }
  }, [description, title])
}
