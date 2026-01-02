import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import { Indicator } from '@/components/ui/Indicator'
import { TitleBar } from '@/components/ide/TitleBar'
import { ActivityBar, ActivityBarItem } from '@/components/ide/ActivityBar'
import { StatusBar } from '@/components/ide/StatusBar'
import { TabBar, Tab } from '@/components/ide/TabBar'
import { Sidebar, FileTreeItem } from '@/components/ide/Sidebar'
import { SearchPanel } from '@/components/ide/SearchPanel'
import { GitPanel } from '@/components/ide/GitPanel'
import { TerminalPanel } from '@/components/ide/TerminalPanel'
import MainHero from './Home/MainHero'
import MainSection from './Home/MainSection'
import MainFooter from './Home/MainFooter'
import { Layout, Code, MessageSquare, Package, Files, GitBranch, Folder, Search, Sparkles, Settings, FileCode } from 'lucide-react'
import { Link } from 'react-router-dom'

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
          <MainHero />

          {/* Component Showcase - 4 Column Grid */}
          <MainSection
            variant="wide"
            label="Get Started"
            title="Component Combinations"
            description="LIMN design system components in action"
          >
            <div className="space-y-8">
              {/* TitleBar - 가로로 긴 컴포넌트 */}
              <div className="space-y-3">
                <h3 className="label">Title Bar</h3>
                <div className="rounded-[var(--limn-radius-lg)] border border-border-light overflow-hidden">
                  <TitleBar filename="example.ts" projectName="demo-project" />
                </div>
              </div>

              {/* ActivityBar + Sidebar - 세로로 긴 컴포넌트들 */}
              <div className="flex gap-6">
                <div className="space-y-3">
                  <h3 className="label">Activity Bar</h3>
                  <div className="rounded-[var(--limn-radius-lg)] border border-border-light overflow-hidden inline-flex">
                    <ActivityBar>
                      <ActivityBarItem icon={Files} label="Files" active />
                      <ActivityBarItem icon={Search} label="Search" />
                      <ActivityBarItem icon={GitBranch} label="Git" hasBadge />
                      <ActivityBarItem icon={Sparkles} label="AI" />
                      <div className="flex-1" />
                      <ActivityBarItem icon={Settings} label="Settings" />
                    </ActivityBar>
                  </div>
                </div>

                <div className="space-y-3 flex-1">
                  <h3 className="label">File Explorer Sidebar</h3>
                  <div className="rounded-[var(--limn-radius-lg)] border border-border-light overflow-hidden inline-flex">
                    <Sidebar title="EXPLORER">
                      <FileTreeItem icon={Folder} label="src" isFolder isOpen />
                      <FileTreeItem icon={FileCode} label="index.ts" active indent={1} />
                      <FileTreeItem icon={FileCode} label="utils.ts" dirty indent={1} />
                    </Sidebar>
                  </div>
                </div>

                <div className="space-y-3 flex-1">
                  <h3 className="label">Cards</h3>
                  <div className="space-y-3">
                    <Card>
                      <CardHeader className="p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Indicator variant="inactive" />
                          <span className="label text-2xs">Inactive</span>
                        </div>
                        <CardTitle className="text-xs">Normal Card</CardTitle>
                        <CardDescription className="text-2xs">Standard card</CardDescription>
                      </CardHeader>
                    </Card>
                    <Card active>
                      <CardHeader className="p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Indicator variant="active" />
                          <span className="label text-2xs">Active</span>
                        </div>
                        <CardTitle className="text-xs">Active Card</CardTitle>
                        <CardDescription className="text-2xs">With glow effect</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              </div>

              {/* TabBar - 가로로 긴 컴포넌트 */}
              <div className="space-y-3">
                <h3 className="label">Tab Bar</h3>
                <div className="rounded-[var(--limn-radius-lg)] border border-border-light overflow-hidden">
                  <TabBar>
                    <Tab icon={FileCode} label="index.ts" active dirty />
                    <Tab icon={FileCode} label="utils.ts" />
                    <Tab icon={FileCode} label="types.ts" />
                  </TabBar>
                </div>
              </div>

              {/* SearchPanel + GitPanel - 세로로 긴 패널들 */}
              <div className="flex gap-6">
                <div className="space-y-3 flex-1">
                  <h3 className="label">Search Panel</h3>
                  <div className="rounded-[var(--limn-radius-lg)] border border-border-light overflow-hidden h-[400px]">
                    <SearchPanel className="w-full h-full" />
                  </div>
                </div>

                <div className="space-y-3 flex-1">
                  <h3 className="label">Git Panel</h3>
                  <div className="rounded-[var(--limn-radius-lg)] border border-border-light overflow-hidden h-[400px]">
                    <GitPanel className="w-full h-full" />
                  </div>
                </div>
              </div>

              {/* StatusBar - 가로로 긴 컴포넌트 */}
              <div className="space-y-3">
                <h3 className="label">Status Bar</h3>
                <div className="rounded-[var(--limn-radius-lg)] border border-border-light overflow-hidden">
                  <StatusBar branch="main" ahead={2} line={10} column={5} aiActive />
                </div>
              </div>

              {/* TerminalPanel - 가로로 넓은 패널 */}
              <div className="space-y-3">
                <h3 className="label">Terminal Panel</h3>
                <div className="rounded-[var(--limn-radius-lg)] border border-border-light overflow-hidden">
                  <TerminalPanel />
                </div>
              </div>
            </div>
          </MainSection>

          {/* Quick Navigation */}
          <MainSection
            label="Explore"
            title="Examples & Components"
          >
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
          </MainSection>

          {/* Feature Highlights */}
          <MainSection
            label="Features"
            title="Design Philosophy"
          >
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
          </MainSection>

          {/* Footer - Enhanced */}
          <MainFooter />
        </div>
      </div>
    </div>
  )
}
