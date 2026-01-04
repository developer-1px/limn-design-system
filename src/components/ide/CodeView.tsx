import React, { useEffect, useRef } from 'react'
import Prism from 'prismjs'
// Import order is important: base languages first, then extensions
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-json'

export interface CodeViewProps {
  /** Programming language for syntax highlighting */
  language?: 'typescript' | 'tsx' | 'jsx' | 'javascript' | 'json'
  /** Source code to display */
  code?: string
  /** Active line number (1-indexed, optional) */
  activeLine?: number
  /** Show AI suggestion on active line */
  showAISuggestion?: boolean
  /** AI suggestion text */
  suggestionText?: string
  /** Color theme: 'warm' (default LIMN) or 'terminal' (ANSI colors) */
  theme?: 'warm' | 'terminal'
  /** Custom className for the container */
  className?: string
}

// Complex TypeScript + React sample code
const DEFAULT_SAMPLE_CODE = `import React, { useState, useEffect, useMemo, forwardRef, useCallback } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Sparkles, Loader2 } from 'lucide-react'

// Type definitions with generics and utility types
interface BaseProps<T = unknown> {
  value: T
  onChange: (newValue: T) => void
  disabled?: boolean
}

type Status = 'idle' | 'loading' | 'success' | 'error'

interface AIAssistantProps<T extends Record<string, unknown>>
  extends BaseProps<T>,
    VariantProps<typeof buttonVariants> {
  endpoint: string
  model?: 'gpt-4' | 'claude-3' | 'gemini-pro'
  onStreamUpdate?: (chunk: string) => void
  fallback?: React.ReactNode
}

// Component variants using CVA
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-all',
  {
    variants: {
      variant: {
        default: 'bg-warm-400 text-bg-deep hover:bg-warm-300',
        ghost: 'hover:bg-white/5 text-text-secondary',
        outline: 'border border-border-DEFAULT hover:border-border-warm',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

// Generic hook with complex type inference
function useAsyncState<T>(
  initialValue: T,
  validator?: (value: T) => boolean
): [T, (value: T | ((prev: T) => T)) => void, Status] {
  const [state, setState] = useState<T>(initialValue)
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = useCallback((value: T | ((prev: T) => T)) => {
    const newValue = typeof value === 'function'
      ? (value as (prev: T) => T)(state)
      : value

    if (validator && !validator(newValue)) {
      setStatus('error')
      return
    }

    setState(newValue)
    setStatus('success')
  }, [state, validator])

  return [state, handleChange, status]
}

// ForwardRef component with generics
export const AIAssistant = forwardRef<
  HTMLDivElement,
  AIAssistantProps<Record<string, unknown>>
>(function AIAssistant(
  {
    value,
    onChange,
    disabled = false,
    endpoint,
    model = 'gpt-4',
    onStreamUpdate,
    fallback,
    variant,
    size,
    ...props
  },
  ref
) {
  const [response, setResponse, status] = useAsyncState<string>('',
    (val) => val.length < 10000
  )
  const abortControllerRef = useRef<AbortController | null>(null)

  // Memoized computation
  const tokenCount = useMemo(() => {
    return response.split(/\\s+/).filter(Boolean).length
  }, [response])

  // Effect with cleanup
  useEffect(() => {
    if (!endpoint || disabled) return

    const controller = new AbortController()
    abortControllerRef.current = controller

    async function fetchAIResponse() {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            prompt: value,
            model,
            stream: true
          }),
          signal: controller.signal,
        })

        if (!res.ok) throw new Error(\`HTTP \${res.status}\`)

        const reader = res.body?.getReader()
        const decoder = new TextDecoder()

        while (reader) {
          const { done, value: chunk } = await reader.read()
          if (done) break

          const text = decoder.decode(chunk)
          setResponse(prev => prev + text)
          onStreamUpdate?.(text)
        }
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('AI request failed:', error)
        }
      }
    }

    fetchAIResponse()

    return () => controller.abort()
  }, [endpoint, value, model, disabled, onStreamUpdate, setResponse])

  // Conditional rendering with type guards
  if (disabled && fallback) {
    return <>{fallback}</>
  }

  return (
    <div
      ref={ref}
      className={buttonVariants({ variant, size })}
      {...props}
    >
      {status === 'loading' && (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      )}
      {status === 'success' && (
        <Sparkles className="mr-2 h-4 w-4" />
      )}
      <span className="font-mono text-xs text-text-muted">
        {tokenCount} tokens
      </span>
      <button
        onClick={() => onChange(response as Record<string, unknown>)}
        disabled={disabled || status === 'loading'}
        className="ml-2 rounded px-2 py-1 hover:bg-warm-glow"
      >
        Apply
      </button>
    </div>
  )
})

AIAssistant.displayName = 'AIAssistant'
`

/**
 * CodeView - Syntax-highlighted code viewer with Prism.js
 *
 * Features:
 * - Real syntax highlighting with Prism.js
 * - Multiple language support (TypeScript, TSX, JSX, JavaScript, JSON)
 * - Active line highlighting with warm glow
 * - Line numbers with proper formatting
 * - Hover effects on each line
 * - AI suggestion ghost text on active line
 * - LIMN design tokens for consistent theming
 */
export function CodeView({
  language = 'tsx',
  code = DEFAULT_SAMPLE_CODE,
  activeLine,
  showAISuggestion = true,
  suggestionText = '// AI: Consider adding error boundary here',
  theme = 'warm',
  className
}: CodeViewProps) {
  const codeRef = useRef<HTMLElement>(null)

  // Highlight code when it changes
  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [code, language])

  const lines = code.split('\n')

  // Apply theme class to container
  const themeClass = theme === 'terminal' ? 'code-theme-terminal' : 'code-theme-warm'

  return (
    <div className={`h-full overflow-y-auto ${themeClass} ${className || ''}`}>
      <div className="font-mono text-xs leading-relaxed">
        {lines.map((line, index) => {
          const lineNumber = index + 1
          const isActive = activeLine === lineNumber

          return (
            <div
              key={lineNumber}
              className={`flex gap-3 px-4 py-0.5 ${
                isActive
                  ? 'bg-warm-glow/10 border-l-2 border-warm-300'
                  : 'hover:bg-white/5'
              }`}
            >
              {/* Line number */}
              <span className="w-10 text-right text-text-faint select-none">
                {lineNumber}
              </span>

              {/* Code content */}
              <pre className="flex-1 flex items-center m-0">
                <code
                  ref={lineNumber === 1 ? codeRef : undefined}
                  className={`language-${language}`}
                  style={{ display: 'none' }}
                >
                  {code}
                </code>
                <code
                  className="text-text-secondary whitespace-pre"
                  dangerouslySetInnerHTML={{
                    __html: Prism.highlight(
                      line,
                      Prism.languages[language] || Prism.languages.typescript,
                      language
                    ),
                  }}
                />

                {/* AI suggestion ghost text */}
                {isActive && showAISuggestion && line.trim() && (
                  <span className="text-warm-300/40 italic ml-2 whitespace-nowrap">
                    {suggestionText}
                  </span>
                )}
              </pre>
            </div>
          )
        })}
      </div>
    </div>
  )
}
