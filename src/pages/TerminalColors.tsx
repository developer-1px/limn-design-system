import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

interface ColorSwatch {
  name: string
  variable: string
  hex: string
  brightVariable?: string
  brightHex?: string
  usage: string
}

const terminalColorSpectrum: Record<string, {
  title: string
  description: string
  colors: ColorSwatch[]
}> = {
  neutrals: {
    title: 'Neutrals (Black & White)',
    description: 'Warm-toned grayscale for backgrounds and text',
    colors: [
      {
        name: 'Black',
        variable: '--color-terminal-black',
        hex: '#1a1a20',
        brightVariable: '--color-terminal-bright-black',
        brightHex: '#3a3a45',
        usage: 'Terminal background, dark UI elements, shadows'
      },
      {
        name: 'White',
        variable: '--color-terminal-white',
        hex: '#d4cfc4',
        brightVariable: '--color-terminal-bright-white',
        brightHex: '#f5f0e8',
        usage: 'Default text, borders, bright highlights'
      },
    ]
  },
  warm: {
    title: 'Warm Spectrum (Red → Yellow)',
    description: 'Coral, peach, and golden tones - errors, warnings, highlights',
    colors: [
      {
        name: 'Red',
        variable: '--color-terminal-red',
        hex: '#e88b7a',
        brightVariable: '--color-terminal-bright-red',
        brightHex: '#ffa595',
        usage: 'Errors, deletions, critical alerts, stop signals'
      },
      {
        name: 'Orange',
        variable: '--color-terminal-orange',
        hex: '#ffb380',
        brightVariable: '--color-terminal-bright-orange',
        brightHex: '#ffcc99',
        usage: 'LIMN signature color, important highlights, active states'
      },
      {
        name: 'Yellow',
        variable: '--color-terminal-yellow',
        hex: '#e8c07a',
        brightVariable: '--color-terminal-bright-yellow',
        brightHex: '#ffd699',
        usage: 'Warnings, pending states, modified files, attention'
      },
    ]
  },
  cool: {
    title: 'Cool Spectrum (Green → Cyan)',
    description: 'Olive, sage, and teal tones - success, info, paths',
    colors: [
      {
        name: 'Green',
        variable: '--color-terminal-green',
        hex: '#a8c088',
        brightVariable: '--color-terminal-bright-green',
        brightHex: '#c4d8a4',
        usage: 'Success, additions, ready states, test pass, confirmations'
      },
      {
        name: 'Cyan',
        variable: '--color-terminal-cyan',
        hex: '#7dc4c4',
        brightVariable: '--color-terminal-bright-cyan',
        brightHex: '#9ee0d8',
        usage: 'Links, file paths, URLs, info messages, variables'
      },
    ]
  },
  violet: {
    title: 'Violet Spectrum (Blue → Purple)',
    description: 'Periwinkle, lavender, and rose tones - metadata, special states',
    colors: [
      {
        name: 'Blue',
        variable: '--color-terminal-blue',
        hex: '#8ba8d8',
        brightVariable: '--color-terminal-bright-blue',
        brightHex: '#a8c4f0',
        usage: 'Info, metadata, timestamps, directory names, parameters'
      },
      {
        name: 'Magenta',
        variable: '--color-terminal-magenta',
        hex: '#d8a8c4',
        brightVariable: '--color-terminal-bright-magenta',
        brightHex: '#f0c4d8',
        usage: 'Special symbols, operators, string delimiters, constants'
      },
      {
        name: 'Purple',
        variable: '--color-terminal-purple',
        hex: '#b8a8d8',
        brightVariable: '--color-terminal-bright-purple',
        brightHex: '#d4c4f0',
        usage: 'Keywords, reserved words, built-ins, decorators'
      },
    ]
  }
}

const ColorPairCard = ({ color }: { color: ColorSwatch }) => (
  <div className="p-4 rounded-lg bg-bg-base border border-border-DEFAULT hover:border-border-light transition-colors">
    <div className="flex gap-3 mb-3">
      {/* Normal color */}
      <div className="flex-1">
        <div
          className="w-full h-20 rounded-lg border-2 border-white/10 mb-2"
          style={{ backgroundColor: `var(${color.variable})` }}
        />
        <code className="text-xs text-text-muted font-mono block">{color.hex}</code>
      </div>

      {/* Bright color */}
      {color.brightVariable && (
        <div className="flex-1">
          <div
            className="w-full h-20 rounded-lg border-2 border-white/10 mb-2"
            style={{ backgroundColor: `var(${color.brightVariable})` }}
          />
          <code className="text-xs text-text-muted font-mono block">{color.brightHex}</code>
        </div>
      )}
    </div>

    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-medium text-text-primary">{color.name}</span>
        {color.brightVariable && (
          <span className="text-xs text-text-tertiary">+ Bright</span>
        )}
      </div>
      <code className="text-xs text-warm-300 font-mono block mb-2">{color.variable}</code>
      <p className="text-xs text-text-muted leading-relaxed">{color.usage}</p>
    </div>
  </div>
)

const FullSpectrumBar = () => {
  const colors = [
    '--color-terminal-black',
    '--color-terminal-red',
    '--color-terminal-orange',
    '--color-terminal-yellow',
    '--color-terminal-green',
    '--color-terminal-cyan',
    '--color-terminal-blue',
    '--color-terminal-magenta',
    '--color-terminal-purple',
    '--color-terminal-white'
  ]

  return (
    <div className="flex h-16 rounded-lg overflow-hidden border-2 border-border-light">
      {colors.map((color, i) => (
        <div
          key={i}
          className="flex-1 transition-all hover:flex-[1.5]"
          style={{ backgroundColor: `var(${color})` }}
          title={color}
        />
      ))}
    </div>
  )
}

const BrightSpectrumBar = () => {
  const colors = [
    '--color-terminal-bright-black',
    '--color-terminal-bright-red',
    '--color-terminal-bright-orange',
    '--color-terminal-bright-yellow',
    '--color-terminal-bright-green',
    '--color-terminal-bright-cyan',
    '--color-terminal-bright-blue',
    '--color-terminal-bright-magenta',
    '--color-terminal-bright-purple',
    '--color-terminal-bright-white'
  ]

  return (
    <div className="flex h-16 rounded-lg overflow-hidden border-2 border-border-light">
      {colors.map((color, i) => (
        <div
          key={i}
          className="flex-1 transition-all hover:flex-[1.5]"
          style={{ backgroundColor: `var(${color})` }}
          title={color}
        />
      ))}
    </div>
  )
}

const TerminalExample = () => (
  <div className="bg-bg-deep rounded-lg border border-border-DEFAULT overflow-hidden font-mono text-sm">
    <div className="bg-bg-elevated border-b border-border-DEFAULT px-4 py-2 flex items-center gap-2">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-terminal-red)' }} />
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-terminal-yellow)' }} />
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-terminal-green)' }} />
      </div>
      <span className="text-text-muted ml-2">bash</span>
    </div>
    <div className="p-4 space-y-2">
      {/* Git prompt */}
      <div className="flex gap-2 items-center">
        <span style={{ color: 'var(--color-terminal-bright-green)' }}>➜</span>
        <span style={{ color: 'var(--color-terminal-bright-cyan)' }}>~/limn-design</span>
        <span style={{ color: 'var(--color-terminal-cyan)' }}>git:(</span>
        <span style={{ color: 'var(--color-terminal-bright-magenta)' }}>main</span>
        <span style={{ color: 'var(--color-terminal-cyan)' }}>)</span>
        <span style={{ color: 'var(--color-terminal-yellow)' }}>✗</span>
      </div>

      {/* Command */}
      <div className="flex gap-2">
        <span style={{ color: 'var(--color-terminal-white)' }}>$</span>
        <span style={{ color: 'var(--color-terminal-purple)' }}>npm</span>
        <span style={{ color: 'var(--color-terminal-bright-white)' }}>run</span>
        <span style={{ color: 'var(--color-terminal-bright-yellow)' }}>build</span>
      </div>

      {/* Output */}
      <div className="mt-3 space-y-1">
        <div style={{ color: 'var(--color-terminal-bright-blue)' }}>
          vite v6.4.1 building for production...
        </div>
        <div style={{ color: 'var(--color-terminal-cyan)' }}>
          ✓ 1889 modules transformed.
        </div>
        <div className="flex gap-2">
          <span style={{ color: 'var(--color-terminal-green)' }}>✓</span>
          <span style={{ color: 'var(--color-terminal-white)' }}>built in</span>
          <span style={{ color: 'var(--color-terminal-bright-magenta)' }}>1.14s</span>
        </div>
      </div>

      {/* Error example */}
      <div className="mt-3 space-y-1">
        <div className="flex gap-2">
          <span style={{ color: 'var(--color-terminal-red)' }}>✗</span>
          <span style={{ color: 'var(--color-terminal-bright-red)' }}>Error:</span>
          <span style={{ color: 'var(--color-terminal-white)' }}>Module not found</span>
        </div>
        <div style={{ color: 'var(--color-terminal-blue)' }} className="pl-4">
          at line 42 in src/components/Button.tsx
        </div>
      </div>
    </div>
  </div>
)

export default function TerminalColors() {
  return (
    <div className="min-h-screen bg-bg-deep">
      {/* Header */}
      <div className="border-b border-border-DEFAULT bg-bg-elevated px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-medium text-text-primary">
              LIMN Terminal Color Palette
            </h1>
            <Badge variant="active">16 Colors (ANSI)</Badge>
          </div>
          <p className="text-text-secondary max-w-3xl">
            Complete warm-toned color spectrum from red to purple. All colors maintain LIMN's signature warmth while covering the full rainbow for terminal output and code syntax highlighting.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Full Spectrum Visualization */}
        <Card>
          <CardHeader>
            <CardTitle>Complete Spectrum</CardTitle>
            <CardDescription>
              LIMN's 16-color ANSI palette - normal and bright variants
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-xs text-text-muted mb-2 uppercase tracking-wider">Normal Colors</div>
              <FullSpectrumBar />
            </div>
            <div>
              <div className="text-xs text-text-muted mb-2 uppercase tracking-wider">Bright Colors</div>
              <BrightSpectrumBar />
            </div>
          </CardContent>
        </Card>

        {/* Terminal Example */}
        <Card>
          <CardHeader>
            <CardTitle>Terminal Preview</CardTitle>
            <CardDescription>
              Realistic terminal output with all colors in action
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TerminalExample />
          </CardContent>
        </Card>

        {/* Color Groups */}
        {Object.entries(terminalColorSpectrum).map(([key, group]) => (
          <Card key={key}>
            <CardHeader>
              <CardTitle>{group.title}</CardTitle>
              <CardDescription>{group.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.colors.map((color) => (
                  <ColorPairCard key={color.variable} color={color} />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Design Philosophy */}
        <Card>
          <CardHeader>
            <CardTitle>Design Philosophy</CardTitle>
            <CardDescription>
              How LIMN's terminal colors differ from traditional palettes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium mb-3" style={{ color: 'var(--color-terminal-red)' }}>
                  ❌ Traditional Terminal Colors
                </h3>
                <ul className="space-y-2 text-sm text-text-muted">
                  <li>• Pure RGB primaries (#FF0000, #00FF00, #0000FF)</li>
                  <li>• Harsh, high-saturation neon colors</li>
                  <li>• Cold blue-based greens and cyans</li>
                  <li>• Eye-straining for long sessions</li>
                  <li>• Disconnected from overall theme</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-3" style={{ color: 'var(--color-terminal-green)' }}>
                  ✓ LIMN Terminal Colors
                </h3>
                <ul className="space-y-2 text-sm text-text-muted">
                  <li>• Desaturated, warm-shifted hues</li>
                  <li>• Coral reds, peachy oranges, golden yellows</li>
                  <li>• Olive greens, warm teals, periwinkle blues</li>
                  <li>• Comfortable for extended coding</li>
                  <li>• Cohesive with LIMN's warm aesthetic</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Guide */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Guidelines</CardTitle>
            <CardDescription>Standard ANSI color meanings adapted for LIMN</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div>
                <h3 className="text-sm font-medium text-text-primary mb-3">Semantic Meanings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: 'var(--color-terminal-red)' }} />
                    <span style={{ color: 'var(--color-terminal-bright-red)' }}>Red</span>
                    <span className="text-text-muted">Errors, failures, deletions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: 'var(--color-terminal-orange)' }} />
                    <span style={{ color: 'var(--color-terminal-bright-orange)' }}>Orange</span>
                    <span className="text-text-muted">Active states, highlights</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: 'var(--color-terminal-yellow)' }} />
                    <span style={{ color: 'var(--color-terminal-bright-yellow)' }}>Yellow</span>
                    <span className="text-text-muted">Warnings, modifications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: 'var(--color-terminal-green)' }} />
                    <span style={{ color: 'var(--color-terminal-bright-green)' }}>Green</span>
                    <span className="text-text-muted">Success, additions, ready</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: 'var(--color-terminal-cyan)' }} />
                    <span style={{ color: 'var(--color-terminal-bright-cyan)' }}>Cyan</span>
                    <span className="text-text-muted">Links, paths, info</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: 'var(--color-terminal-blue)' }} />
                    <span style={{ color: 'var(--color-terminal-bright-blue)' }}>Blue</span>
                    <span className="text-text-muted">Metadata, directories</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: 'var(--color-terminal-magenta)' }} />
                    <span style={{ color: 'var(--color-terminal-bright-magenta)' }}>Magenta</span>
                    <span className="text-text-muted">Symbols, operators</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: 'var(--color-terminal-purple)' }} />
                    <span style={{ color: 'var(--color-terminal-bright-purple)' }}>Purple</span>
                    <span className="text-text-muted">Keywords, built-ins</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-text-primary mb-3">In Code Syntax</h3>
                <div className="bg-bg-base rounded-lg p-4 font-mono text-xs space-y-1">
                  <div>
                    <span style={{ color: 'var(--color-terminal-purple)' }}>import</span>
                    {' { '}
                    <span style={{ color: 'var(--color-terminal-cyan)' }}>useState</span>
                    {' } '}
                    <span style={{ color: 'var(--color-terminal-purple)' }}>from</span>
                    {' '}
                    <span style={{ color: 'var(--color-terminal-yellow)' }}>'react'</span>
                  </div>
                  <div className="h-2" />
                  <div>
                    <span style={{ color: 'var(--color-terminal-purple)' }}>const</span>
                    {' '}
                    <span style={{ color: 'var(--color-terminal-bright-white)' }}>greeting</span>
                    {' = '}
                    <span style={{ color: 'var(--color-terminal-yellow)' }}>"Hello"</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--color-terminal-purple)' }}>const</span>
                    {' '}
                    <span style={{ color: 'var(--color-terminal-bright-white)' }}>count</span>
                    {' = '}
                    <span style={{ color: 'var(--color-terminal-magenta)' }}>42</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--color-terminal-purple)' }}>const</span>
                    {' '}
                    <span style={{ color: 'var(--color-terminal-bright-white)' }}>isActive</span>
                    {' = '}
                    <span style={{ color: 'var(--color-terminal-magenta)' }}>true</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
