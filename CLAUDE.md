# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Type

This is the **LIMN Design System** - a fully functional React + TypeScript design system implementation using shadcn/ui patterns. It includes both documentation and a working component library with a demo application.

## Development Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server (http://localhost:5173)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Repository Structure

### Documentation (`docs/`)
- **LIMN-Design-System.md** - Base specification (v1.0): color palette, typography, spacing
- **LIMN-Design-System-v2.md** - Complete specification (v2.0): 17 IDE components
- **LIMN-Icon-System.md** - Icon system using Lucide React
- **\*.jsx** - Original component showcases (reference only)

### Source Code (`src/`)
- **components/ui/** - Base UI components (shadcn/ui style)
  - `button.tsx` - Primary, ghost, outline button variants
  - `card.tsx` - Card with active state support
  - `input.tsx` - Input field with warm focus glow
  - `badge.tsx` - Status badges
  - `indicator.tsx` - Status indicator dots
- **components/ide/** - IDE-specific components
  - `title-bar.tsx` - Window title bar with traffic lights
  - `activity-bar.tsx` - Vertical navigation bar
  - `status-bar.tsx` - Bottom status bar with git info
  - `tab-bar.tsx` - File tabs with dirty indicators
  - `sidebar.tsx` - File tree sidebar
- **lib/** - Utility functions (cn helper)
- **styles/** - Global CSS with Tailwind directives
- **App.tsx** - Demo application showcasing all components
- **main.tsx** - Application entry point

## Design Philosophy

**"흐릿한 의도가 선명한 형태가 되는 곳"** (Where blurry intentions become clear forms)

### Core Principles
- **Blur → Clarity** - Visual metaphor of warm light revealing forms in darkness
- **Warmth over Cold** - Orange/cream accents instead of traditional blue
- **Glow = Active** - Only active elements emit glow effects
- **Native App Feel** - Desktop application quality, not web-app style
- **Depth through Opacity** - Use transparency for visual hierarchy

### Target Use Case
AI-powered code editor and IDE interfaces. The design system emphasizes:
- Calm, focused coding environment
- Clear active/inactive state distinction
- Warm, approachable AI interaction
- Comfortable for extended coding sessions

## Icon System

LIMN uses **Lucide React** for all icons with these specifications:

- **Stroke Width**: 1.5px (standard), 2px (active/emphasized), 1px (subtle)
- **Sizes**: 10px (xs), 12px (sm), 14px (md), 16px (lg), 18px (xl), 20px (2xl)
- **Colors**: Follow the same opacity/warmth patterns as text
  - Inactive: `rgba(255,250,245,0.35)`
  - Default: `rgba(255,250,245,0.5)`
  - Hover: `rgba(255,250,245,0.7)`
  - Active: `#ffcc99`
  - Success: `#4ade80`, Error: `#f87171`, Warning: `#fbbf24`

### Key Icon Mappings
- **Navigation**: Files, Search, GitBranch, Sparkles (AI), Terminal, Settings
- **Files**: Folder, FileText, FileCode, Image, FileJson
- **Status**: Check, AlertCircle, AlertTriangle, Info, Loader2 (spinning)
- **Semantic Zoom**: Layers (Vibe), GitBranch (Logic), Code (Syntax)
- **AI Features**: Sparkles, MessageSquare, Wand2, BookOpen

See `docs/LIMN-Icon-System.md` for complete icon mapping and usage examples.

## Design Tokens

### Colors
- **Background**: `#08080d` (deep), `#0a0a10` (base), `rgba(18,18,28,0.9)` (surface)
- **Warm Accent**: `#ffcc99` (primary), `rgba(255,200,150,0.9)` (buttons)
- **Text**: `rgba(255,240,220,0.95)` (primary) → `rgba(255,250,245,0.2)` (faint)
- **Status**: `#4ade80` (success), `#fbbf24` (warning), `#f87171` (error)

### Typography
- **Font Stack**: System fonts (`-apple-system, BlinkMacSystemFont, 'Segoe UI'`)
- **Mono Stack**: `'SF Mono', 'Fira Code', 'Consolas'`
- **Scale**: 10px (label) → 20px (title)
- **Weight**: 400 (normal), 500 (medium)

### Spacing
- **Scale**: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px

### Border Radius
- **sm**: 4px (tags), **md**: 8px (buttons), **lg**: 14px (cards), **xl**: 16px (large cards), **full**: 9999px (circular)

### Animation
- **Fast**: 100-150ms (quick interactions)
- **Normal**: 200-300ms (state changes)
- **Slow**: 400-500ms (major transitions)
- **Ease**: Use `ease` or `ease-out` for natural feel

## Unique Concepts

### Semantic Zoom
LIMN introduces a three-level code viewing paradigm:
- **Vibe** (Icon: Layers) - Bird's eye view of entire project structure and mood
- **Logic** (Icon: GitBranch) - Flow and connections between components
- **Syntax** (Icon: Code) - Traditional line-by-line code view

This allows users to understand code at different levels of abstraction.

## Component Categories

### App Shell (17 components in v2.0)
1. **Window Controls** - Traffic lights and window management
2. **Title Bar** - App title, mode switcher, user profile
3. **Activity Bar** - Primary navigation with icon buttons
4. **Sidebar** - File explorer, search, extensions
5. **Tab Bar** - File tabs with close buttons
6. **Breadcrumb** - File path navigation
7. **Editor** - Code editing area
8. **Panel** - Terminal, output, problems
9. **Status Bar** - Git, errors, warnings, position info

### AI-Specific Components
10. **Command Palette** - Quick actions and search
11. **AI Chat Panel** - Conversation interface
12. **Inline Suggestions** - Ghost text completions
13. **Agent Status Card** - AI agent activity indicator
14. **Context Menu** - Right-click actions
15. **Toast** - Temporary notifications
16. **Progress Bar** - Loading states
17. **Tooltip** - Contextual help

## State Patterns

### Inactive State
- Background: Very subtle `rgba(255,255,255,0.02-0.03)`
- Border: Faint `rgba(255,255,255,0.06-0.08)`
- Text: Low contrast `rgba(255,250,245,0.35-0.5)`
- No glow effects
- Indicator dot: Gray `rgba(255,255,255,0.2)`

### Active State
- Background: Warm gradient `linear-gradient(145deg, rgba(255,200,150,0.12) 0%, rgba(255,180,120,0.06) 100%)`
- Border: Orange tint `rgba(255,200,150,0.3)`
- Text: High contrast `rgba(255,240,220,0.95)`
- Glow: `0 0 40px rgba(255,180,120,0.1)`
- Indicator dot: Orange with glow `#ffcc99` + `0 0 8px rgba(255,200,150,0.6)`

### Hover
- Slight scale: `transform: scale(1.02)`
- Brightened border
- Slightly brighter background

## Tech Stack

- **React 18** with TypeScript
- **Vite 6** for build tooling and HMR
- **TailwindCSS 3** with custom LIMN theme
- **Lucide React** for icons
- **CVA** (class-variance-authority) for component variants
- **clsx + tailwind-merge** for class name utilities

## Component Development

### Creating New Components

Components follow the shadcn/ui pattern:

```tsx
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const componentVariants = cva(
  'base-classes',
  {
    variants: {
      variant: {
        default: 'variant-classes',
      },
    },
  }
)

export interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, ...props }, ref) => {
    return <div className={cn(componentVariants({ variant }), className)} {...props} />
  }
)
```

### Path Alias

The `@/*` alias maps to `./src/*` configured in:
- `vite.config.ts`
- `tsconfig.json`

### Using Design Tokens

TailwindCSS classes use LIMN tokens:

```tsx
// Colors
bg-bg-deep, bg-bg-base, bg-bg-surface
text-text-primary, text-text-secondary, text-text-muted
border-border-DEFAULT, border-border-active

// Warm accent
bg-warm-300, text-warm-300, border-border-warm
shadow-glow-sm, shadow-glow-md, shadow-glow-lg

// Status
bg-status-success, text-status-error, border-status-warning

// Spacing: 1-12 (4px-48px scale)
p-5, mt-3, gap-8

// Radius
rounded-sm, rounded-md, rounded-lg, rounded-2xl, rounded-3xl

// Utilities
.active-glow - Active state gradient + glow
.label - Uppercase label style
```

## Design System Versions

- **v1.0** (LIMN-Design-System.md): Core tokens and basic patterns
- **v2.0** (LIMN-Design-System-v2.md): Complete IDE component library with app shell architecture

Always prefer v2.0 for complete implementation guidance.