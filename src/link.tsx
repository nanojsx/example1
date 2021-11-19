import { FC } from 'nano-jsx'

export const Link: FC<{ to: string; children?: any }> = ({ to, children }) => {
  const handleClick = (e: Event) => {
    e.preventDefault()
    window.history.pushState({}, '', to)
    window.dispatchEvent(new Event('pushstate'))
  }

  return (
    <a href={to} onClick={(e: Event) => handleClick(e)}>
      {children}
    </a>
  )
}
