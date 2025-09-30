import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  delay?: number
  id?: string
}

export function Section({ children, className = '', delay = 0, id }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </section>
  )
}
