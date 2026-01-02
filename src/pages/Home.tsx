import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Indicator } from '@/components/ui/Indicator'
import { Layout, Code, MessageSquare, Package } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ComponentExampleProps {
  title: string
  description: string
  preview: React.ReactNode
}

function ComponentExample({ title, description, preview }: ComponentExampleProps) {
  return (
    <div className="group">
      <div className="mb-4">
        <h3 className="text-base font-medium text-text-primary mb-1">{title}</h3>
        <p className="text-xs text-text-tertiary">{description}</p>
      </div>

      {/* Preview */}
      <div className="flex items-center justify-center rounded-lg border border-border-DEFAULT bg-bg-surface p-6 min-h-[120px]">
        {preview}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col pt-[var(--limn-titlebar-height)] relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #08080d 0%, #0a0a10 50%, #0d0a10 100%)' }}
    >
      {/* Background ambient glows - Enhanced */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 800,
          height: 800,
          background: 'radial-gradient(circle, rgba(255,150,100,0.1) 0%, rgba(255,180,120,0.05) 40%, transparent 70%)',
          top: '25%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(120px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(255,200,150,0.06) 0%, transparent 60%)',
          top: '70%',
          left: '20%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(255,180,120,0.04) 0%, transparent 60%)',
          top: '60%',
          left: '80%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-6xl px-12 py-16 space-y-16">
          {/* Hero Section */}
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Logo with enhanced flow effect - Pure light point */}
            <div className="relative group cursor-default">
              {/* Outer glow - large ambient */}
              <div
                className="absolute pointer-events-none transition-opacity duration-700"
                style={{
                  width: 500,
                  height: 500,
                  background: 'radial-gradient(circle, rgba(255,150,100,0.12) 0%, rgba(255,180,120,0.06) 40%, transparent 70%)',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  filter: 'blur(100px)',
                  opacity: 1,
                }}
              />
              {/* Middle glow - focused */}
              <div
                className="absolute pointer-events-none transition-opacity duration-500"
                style={{
                  width: 300,
                  height: 300,
                  background: 'radial-gradient(circle, rgba(255,180,120,0.2) 0%, rgba(255,200,150,0.1) 50%, transparent 70%)',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  filter: 'blur(80px)',
                  opacity: 1,
                }}
              />
              {/* Inner glow - intense */}
              <div
                className="absolute pointer-events-none transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  width: 200,
                  height: 200,
                  background: 'radial-gradient(circle, rgba(255,180,120,0.25) 0%, transparent 60%)',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  filter: 'blur(50px)',
                  opacity: 0.8,
                }}
              />
              {/* Core light point - 흐릿한 의도가 선명한 형태가 되는 */}
              <div
                className="relative transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, #fff 0%, #ffeedd 30%, #ffcc99 100%)',
                  boxShadow: '0 0 60px rgba(255,200,150,0.6), 0 0 120px rgba(255,180,120,0.4), 0 0 180px rgba(255,150,100,0.2)',
                  opacity: 0.95,
                }}
              />
            </div>

            {/* Wordmark - Enhanced */}
            <div className="relative">
              <div
                className="absolute -inset-x-16 -inset-y-4 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse, rgba(255,180,120,0.08) 0%, transparent 60%)',
                  filter: 'blur(30px)',
                }}
              />
              <h1
                className="relative text-6xl font-extralight tracking-[0.4em] ml-[0.4em]"
                style={{
                  color: 'rgba(255,250,245,0.98)',
                  textShadow: '0 0 40px rgba(255,200,150,0.3), 0 0 80px rgba(255,180,120,0.15)',
                }}
              >
                LIMN
              </h1>
            </div>

            {/* Tagline - Enhanced */}
            <div className="space-y-4">
              <p
                className="text-base tracking-[0.15em] leading-relaxed max-w-md"
                style={{
                  color: 'rgba(255,250,245,0.5)',
                  textShadow: '0 0 20px rgba(255,200,150,0.1)',
                }}
              >
                흐릿한 의도가 선명한 형태가 되는 곳
              </p>

              <p className="text-sm text-text-tertiary max-w-xl leading-relaxed">
                AI-powered IDE interface components with a warm, focused design language
              </p>
            </div>
          </div>

          {/* Quick Navigation */}
          <section className="space-y-8">
            <div className="text-center space-y-2">
              <p
                className="text-xs tracking-[0.2em] mb-2"
                style={{
                  color: 'rgba(255,250,245,0.35)',
                  textTransform: 'uppercase',
                }}
              >
                Explore
              </p>
              <h2
                className="text-2xl font-light tracking-wide"
                style={{
                  color: 'rgba(255,250,245,0.95)',
                  textShadow: '0 0 30px rgba(255,200,150,0.2)',
                }}
              >
                Examples & Components
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Link to="/ide" className="group">
                <Card className="cursor-pointer transition-all duration-500 hover:border-border-warm h-full">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-warm-active-bg border border-warm-active-border transition-opacity duration-500 group-hover:opacity-100" style={{ opacity: 0.8 }}>
                      <Layout size={24} className="text-warm-300" strokeWidth={1.5} />
                    </div>
                    <div>
                      <CardTitle className="text-base mb-2 transition-colors duration-500 group-hover:text-warm-300">Full IDE</CardTitle>
                      <CardDescription className="text-xs leading-relaxed">
                        Complete interface with activity bar, sidebar, and panels
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </Link>

              <Link to="/editor" className="group">
                <Card className="cursor-pointer transition-all duration-500 hover:border-border-warm h-full">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-warm-active-bg border border-warm-active-border transition-opacity duration-500 group-hover:opacity-100" style={{ opacity: 0.8 }}>
                      <Code size={24} className="text-warm-300" strokeWidth={1.5} />
                    </div>
                    <div>
                      <CardTitle className="text-base mb-2 transition-colors duration-500 group-hover:text-warm-300">Editor</CardTitle>
                      <CardDescription className="text-xs leading-relaxed">
                        Code view with autocomplete and outline navigation
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </Link>

              <Link to="/chat" className="group">
                <Card className="cursor-pointer transition-all duration-500 hover:border-border-warm h-full">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-warm-active-bg border border-warm-active-border transition-opacity duration-500 group-hover:opacity-100" style={{ opacity: 0.8 }}>
                      <MessageSquare size={24} className="text-warm-300" strokeWidth={1.5} />
                    </div>
                    <div>
                      <CardTitle className="text-base mb-2 transition-colors duration-500 group-hover:text-warm-300">AI Chat</CardTitle>
                      <CardDescription className="text-xs leading-relaxed">
                        Conversational interface for code assistance
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </Link>

              <Link to="/components" className="group">
                <Card className="cursor-pointer transition-all duration-500 hover:border-border-warm h-full">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-warm-active-bg border border-warm-active-border transition-opacity duration-500 group-hover:opacity-100" style={{ opacity: 0.8 }}>
                      <Package size={24} className="text-warm-300" strokeWidth={1.5} />
                    </div>
                    <div>
                      <CardTitle className="text-base mb-2 transition-colors duration-500 group-hover:text-warm-300">Library</CardTitle>
                      <CardDescription className="text-xs leading-relaxed">
                        Browse all UI components and design tokens
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </section>

          {/* Feature Highlights */}
          <section className="space-y-8">
            <div className="text-center space-y-2">
              <p
                className="text-xs tracking-[0.2em] mb-2"
                style={{
                  color: 'rgba(255,250,245,0.35)',
                  textTransform: 'uppercase',
                }}
              >
                Features
              </p>
              <h2
                className="text-2xl font-light tracking-wide"
                style={{
                  color: 'rgba(255,250,245,0.95)',
                  textShadow: '0 0 30px rgba(255,200,150,0.2)',
                }}
              >
                Design Philosophy
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="group transition-all duration-500 hover:border-border-warm cursor-default">
                <CardHeader>
                  <div className="mb-4">
                    <div className="w-8 h-8 rounded-full bg-warm-glow flex items-center justify-center transition-opacity duration-500 group-hover:opacity-100" style={{ opacity: 0.8 }}>
                      <span className="text-warm-300 text-lg">◉</span>
                    </div>
                  </div>
                  <CardTitle className="text-base mb-2 transition-colors duration-500 group-hover:text-warm-300">Warm & Focused</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Orange and cream accents create a calm, inviting atmosphere for extended coding sessions
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group transition-all duration-500 hover:border-border-warm cursor-default">
                <CardHeader>
                  <div className="mb-4 transition-opacity duration-500 group-hover:opacity-100" style={{ opacity: 0.8 }}>
                    <Indicator variant="active" />
                  </div>
                  <CardTitle className="text-base mb-2 transition-colors duration-500 group-hover:text-warm-300">Active States</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Only active elements emit glow effects, making it clear what's in focus
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group transition-all duration-500 hover:border-border-warm cursor-default">
                <CardHeader>
                  <div className="mb-4">
                    <div className="w-8 h-8 rounded-lg bg-bg-surface border border-border-light transition-all duration-500 group-hover:border-border-warm group-hover:opacity-100" style={{ opacity: 0.8 }} />
                  </div>
                  <CardTitle className="text-base mb-2 transition-colors duration-500 group-hover:text-warm-300">Native Feel</CardTitle>
                  <CardDescription className="text-xs leading-relaxed">
                    Desktop application quality with attention to micro-interactions and polish
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* Component Combinations */}
          <section className="space-y-8">
            <div className="text-center space-y-3">
              <p
                className="text-xs tracking-[0.2em] mb-2"
                style={{
                  color: 'rgba(255,250,245,0.35)',
                  textTransform: 'uppercase',
                }}
              >
                Get Started
              </p>
              <h2
                className="text-2xl font-light tracking-wide"
                style={{
                  color: 'rgba(255,250,245,0.95)',
                  textShadow: '0 0 30px rgba(255,200,150,0.2)',
                }}
              >
                Component Combinations
              </h2>
              <p className="text-sm text-text-tertiary mt-2 max-w-2xl mx-auto leading-relaxed">
                Minimal examples showing how to combine LIMN components
              </p>
            </div>

            <div className="space-y-12">
              {/* File Explorer */}
              <ComponentExample
                title="File Explorer"
                description="Desktop IDE file tree with multiple items"
                preview={
                  <div className="w-full space-y-0.5" style={{ userSelect: 'none' }}>
                    <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/5 transition-colors duration-500">
                      <Code size={14} className="text-warm-300" strokeWidth={1.5} />
                      <span style={{ fontSize: '13px', color: 'rgba(255,250,245,0.7)', fontFamily: "'Geist Mono', 'Fira Code', monospace" }}>index.tsx</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 rounded bg-warm-active-bg border border-warm-active-border">
                      <Code size={14} className="text-warm-300" strokeWidth={1.5} />
                      <span style={{ fontSize: '13px', color: 'rgba(255,240,220,0.95)', fontFamily: "'Geist Mono', 'Fira Code', monospace" }}>App.tsx</span>
                      <Badge variant="warning" className="ml-auto text-2xs">M</Badge>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/5 transition-colors duration-500">
                      <Code size={14} className="text-warm-300" strokeWidth={1.5} />
                      <span style={{ fontSize: '13px', color: 'rgba(255,250,245,0.7)', fontFamily: "'Geist Mono', 'Fira Code', monospace" }}>Button.tsx</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/5 transition-colors duration-500">
                      <Code size={14} className="text-warm-300" strokeWidth={1.5} />
                      <span style={{ fontSize: '13px', color: 'rgba(255,250,245,0.7)', fontFamily: "'Geist Mono', 'Fira Code', monospace" }}>Card.tsx</span>
                      <Badge variant="success" className="ml-auto text-2xs">+</Badge>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/5 transition-colors duration-500">
                      <Code size={14} className="text-warm-300" strokeWidth={1.5} />
                      <span style={{ fontSize: '13px', color: 'rgba(255,250,245,0.7)', fontFamily: "'Geist Mono', 'Fira Code', monospace" }}>utils.ts</span>
                    </div>
                  </div>
                }
              />

              {/* Command Palette */}
              <ComponentExample
                title="Command Palette"
                description="Quick search with multiple results"
                preview={
                  <div className="w-full space-y-0.5" style={{ userSelect: 'none' }}>
                    <div className="flex items-center justify-between px-3 py-2 rounded bg-warm-active-bg border border-warm-active-border">
                      <div className="flex items-center gap-2.5">
                        <Package size={14} className="text-warm-300" strokeWidth={1.5} />
                        <span style={{ fontSize: '13px', color: 'rgba(255,240,220,0.95)', fontWeight: 500 }}>Components</span>
                      </div>
                      <kbd className="px-2 py-0.5 rounded bg-white/5 text-xs" style={{ color: 'rgba(255,250,245,0.35)', fontFamily: "'Geist Mono', 'Fira Code', monospace" }}>⌘K</kbd>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 rounded hover:bg-white/5 transition-colors duration-500">
                      <div className="flex items-center gap-2.5">
                        <Layout size={14} className="text-text-muted" strokeWidth={1.5} />
                        <span style={{ fontSize: '13px', color: 'rgba(255,250,245,0.7)' }}>IDE Layout</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 rounded hover:bg-white/5 transition-colors duration-500">
                      <div className="flex items-center gap-2.5">
                        <MessageSquare size={14} className="text-text-muted" strokeWidth={1.5} />
                        <span style={{ fontSize: '13px', color: 'rgba(255,250,245,0.7)' }}>Chat Panel</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 rounded hover:bg-white/5 transition-colors duration-500">
                      <div className="flex items-center gap-2.5">
                        <Code size={14} className="text-text-muted" strokeWidth={1.5} />
                        <span style={{ fontSize: '13px', color: 'rgba(255,250,245,0.7)' }}>Editor View</span>
                      </div>
                    </div>
                  </div>
                }
              />

              {/* Status Bar */}
              <ComponentExample
                title="Status Bar"
                description="Desktop app status bar with multiple sections"
                preview={
                  <div className="w-full" style={{ userSelect: 'none' }}>
                    <div className="flex items-center gap-3 px-3 py-1.5 bg-bg-elevated border-t border-border-subtle rounded" style={{ fontFamily: "'Geist Mono', 'Fira Code', monospace" }}>
                      <div className="flex items-center gap-1.5">
                        <Indicator variant="active" size={6} />
                        <span className="text-2xs text-text-secondary">main</span>
                      </div>
                      <div className="w-px h-3 bg-border-subtle" />
                      <Badge variant="error" className="text-2xs">2</Badge>
                      <Badge variant="warning" className="text-2xs">5</Badge>
                      <div className="w-px h-3 bg-border-subtle" />
                      <span className="text-2xs text-text-muted">TypeScript</span>
                      <div className="w-px h-3 bg-border-subtle" />
                      <span className="text-2xs text-text-muted">UTF-8</span>
                      <span className="text-2xs text-text-muted ml-auto">Ln 42, Col 18</span>
                    </div>
                  </div>
                }
              />
            </div>
          </section>

          {/* Footer - Enhanced */}
          <footer className="text-center pt-16 pb-8 space-y-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, #fff 0%, #ffeedd 40%, #ffcc99 100%)',
                  boxShadow: '0 0 20px rgba(255,200,150,0.4)',
                }}
              />
              <span
                className="text-xs font-medium tracking-[0.3em]"
                style={{
                  color: 'rgba(255,250,245,0.4)',
                  textShadow: '0 0 20px rgba(255,200,150,0.1)',
                }}
              >
                LIMN
              </span>
            </div>
            <p className="text-xs text-text-faint tracking-wider">
              v2.0.0 — Design System for AI-Powered IDEs
            </p>
            <p className="text-2xs text-text-faint">
              Where blurry intentions become clear forms
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}
