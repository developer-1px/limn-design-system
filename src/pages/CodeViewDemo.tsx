import { useState } from 'react'
import { CodeView } from '@/components/ide/CodeView'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const SAMPLE_CODES = {
  tsx: `import React, { useState, useEffect, useMemo, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

interface ButtonProps<T = unknown> extends VariantProps<typeof buttonVariants> {
  onClick?: (event: React.MouseEvent) => void
  disabled?: boolean
  children: React.ReactNode
  data?: T
}

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg',
  {
    variants: {
      variant: {
        default: 'bg-warm-400 text-bg-deep',
        ghost: 'hover:bg-white/5 text-text-secondary',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 text-sm',
      },
    },
    defaultVariants: { variant: 'default', size: 'md' },
  }
)

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    )
  }
)`,

  typescript: `// Advanced TypeScript features
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
}

interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user' | 'guest'
}

type PartialUser = Partial<User>
type ReadonlyUser = DeepReadonly<User>

class UserService<T extends User = User> {
  private users: Map<string, T> = new Map()

  async findById(id: string): Promise<T | null> {
    return this.users.get(id) ?? null
  }

  async create(data: Omit<T, 'id'>): Promise<T> {
    const id = crypto.randomUUID()
    const user = { ...data, id } as T
    this.users.set(id, user)
    return user
  }

  filter<K extends keyof T>(
    key: K,
    value: T[K]
  ): T[] {
    return Array.from(this.users.values())
      .filter(user => user[key] === value)
  }
}`,

  json: `{
  "name": "limn-design",
  "version": "2.0.0",
  "description": "LIMN Design System - AI-powered IDE interface",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "lucide-react": "^0.562.0",
    "class-variance-authority": "^0.7.1",
    "tailwind-merge": "^2.5.5"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "typescript": "^5.6.3",
    "vite": "^6.0.1"
  }
}`,

  javascript: `// Modern JavaScript with async/await
const fetchUserData = async (userId) => {
  try {
    const response = await fetch(\`/api/users/\${userId}\`)

    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}\`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Failed to fetch user:', error)
    throw error
  }
}

// Array methods and destructuring
const users = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'user' },
  { id: 3, name: 'Charlie', role: 'guest' }
]

const admins = users
  .filter(({ role }) => role === 'admin')
  .map(({ name, ...rest }) => ({
    ...rest,
    displayName: name.toUpperCase()
  }))

// Class syntax
class EventEmitter {
  #listeners = new Map()

  on(event, callback) {
    if (!this.#listeners.has(event)) {
      this.#listeners.set(event, [])
    }
    this.#listeners.get(event).push(callback)
  }

  emit(event, ...args) {
    this.#listeners.get(event)?.forEach(cb => cb(...args))
  }
}`
}

export default function CodeViewDemo() {
  const [language, setLanguage] = useState<'tsx' | 'typescript' | 'json' | 'javascript'>('tsx')
  const [activeLine, setActiveLine] = useState(15)
  const [showSuggestion, setShowSuggestion] = useState(true)
  const [theme, setTheme] = useState<'warm' | 'terminal'>('warm')

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-bg-deep">
      {/* Header */}
      <div className="border-b border-border-DEFAULT bg-bg-elevated px-6 py-4">
        <h1 className="text-xl font-medium text-text-primary mb-2">
          LIMN CodeView - Syntax Highlighting Demo
        </h1>
        <p className="text-sm text-text-muted">
          Prism.js + LIMN Warm Dark Theme with CSS Design Tokens
        </p>
      </div>

      {/* Controls */}
      <div className="border-b border-border-DEFAULT bg-bg-surface px-6 py-3 flex items-center gap-4">
        {/* Theme Switcher */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-text-muted uppercase">Theme:</span>
          <div className="flex gap-2">
            <Button
              variant={theme === 'warm' ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setTheme('warm')}
            >
              Warm
            </Button>
            <Button
              variant={theme === 'terminal' ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setTheme('terminal')}
            >
              Terminal
            </Button>
          </div>
        </div>

        <div className="h-4 w-px bg-border-DEFAULT" />

        {/* Language Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-text-muted uppercase">Language:</span>
          <div className="flex gap-2">
            {(['tsx', 'typescript', 'json', 'javascript'] as const).map(lang => (
              <Button
                key={lang}
                variant={language === lang ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setLanguage(lang)}
              >
                {lang === 'tsx' ? 'TSX' : lang === 'typescript' ? 'TS' : lang.toUpperCase()}
              </Button>
            ))}
          </div>
        </div>

        <div className="h-4 w-px bg-border-DEFAULT" />

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showSuggestion}
              onChange={(e) => setShowSuggestion(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-xs text-text-secondary">Show AI Suggestion</span>
          </label>

          <div className="h-4 w-px bg-border-DEFAULT" />

          <div className="flex items-center gap-2">
            <span className="text-xs text-text-muted">Active Line:</span>
            <input
              type="number"
              min={1}
              max={50}
              value={activeLine}
              onChange={(e) => setActiveLine(Number(e.target.value))}
              className="w-16 px-2 py-1 text-xs bg-bg-base border border-border-DEFAULT rounded text-text-primary"
            />
          </div>
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-2">
          <Badge variant="active">{theme === 'warm' ? 'Warm Theme' : 'Terminal Theme'}</Badge>
          <Badge variant="default">Prism.js</Badge>
        </div>
      </div>

      {/* Code View */}
      <div className="flex-1 overflow-hidden">
        <CodeView
          language={language}
          code={SAMPLE_CODES[language]}
          activeLine={activeLine}
          showAISuggestion={showSuggestion}
          suggestionText="// AI: Consider adding error handling here"
          theme={theme}
        />
      </div>

      {/* Footer Info */}
      <div className="border-t border-border-DEFAULT bg-bg-elevated px-6 py-3">
        {theme === 'warm' ? (
          <div className="flex items-center gap-4 text-xs text-text-muted">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-code-keyword" />
              <span>Keywords: #ffcc99</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-code-function" />
              <span>Functions: #ffd699</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-code-class" />
              <span>Classes: #e5c07b</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--code-string)' }} />
              <span>Strings: #d4a574</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--code-variable)' }} />
              <span>Variables: #f5f0e8</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4 text-xs text-text-muted">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-terminal-purple)' }} />
              <span>Keywords: Purple</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-terminal-blue)' }} />
              <span>Functions: Blue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-terminal-yellow)' }} />
              <span>Strings: Yellow</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-terminal-magenta)' }} />
              <span>Numbers: Magenta</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-terminal-cyan)' }} />
              <span>Types: Cyan</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-terminal-red)' }} />
              <span>Tags: Red</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
