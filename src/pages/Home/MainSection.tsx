import { ReactNode } from 'react'

interface MainSectionProps {
  label: string
  title: string
  description?: string
  variant?: 'normal' | 'wide'
  children: ReactNode
}

export default function MainSection({ label, title, description, variant = 'normal', children }: MainSectionProps) {
  if (variant === 'wide') {
    return (
      <section className="w-full -mx-12 px-12 py-20 bg-bg-deep/50">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <p
              className="text-xs tracking-[0.2em] mb-2"
              style={{
                color: 'rgba(255,250,245,0.35)',
                textTransform: 'uppercase',
              }}
            >
              {label}
            </p>
            <h2
              className="text-3xl font-light tracking-wide"
              style={{
                color: 'rgba(255,250,245,0.95)',
                textShadow: '0 0 30px rgba(255,200,150,0.2)',
              }}
            >
              {title}
            </h2>
            {description && (
              <p className="text-sm text-text-tertiary mt-2 max-w-2xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
          </div>
          {children}
        </div>
      </section>
    )
  }

  return (
    <section className="space-y-8">
      <div className="text-center space-y-2">
        <p
          className="text-xs tracking-[0.2em] mb-2"
          style={{
            color: 'rgba(255,250,245,0.35)',
            textTransform: 'uppercase',
          }}
        >
          {label}
        </p>
        <h2
          className="text-2xl font-light tracking-wide"
          style={{
            color: 'rgba(255,250,245,0.95)',
            textShadow: '0 0 30px rgba(255,200,150,0.2)',
          }}
        >
          {title}
        </h2>
        {description && (
          <p className="text-sm text-text-tertiary mt-2 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  )
}
