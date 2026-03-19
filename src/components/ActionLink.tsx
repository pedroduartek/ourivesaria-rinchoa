import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { LinkAction } from '../content/siteContent'

interface ActionLinkProps {
  action: LinkAction
  className?: string
  children?: ReactNode
  onClick?: () => void
}

export function ActionLink({
  action,
  className,
  children,
  onClick,
}: ActionLinkProps) {
  const content = children ?? action.label

  if (action.type === 'route') {
    return (
      <Link to={action.to} className={className} onClick={onClick}>
        {content}
      </Link>
    )
  }

  const rel =
    action.type === 'external' && action.href.startsWith('http')
      ? 'noreferrer'
      : undefined

  return (
    <a href={action.href} className={className} onClick={onClick} rel={rel}>
      {content}
    </a>
  )
}
