# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Type

This is the **LIMN Design System** - a fully functional React + TypeScript design system implementation using shadcn/ui patterns. It includes both documentation and a working component library with a demo application.

**Design Concept**: Desktop App Code Editor IDE (not a web application)
- Native desktop application feel and behavior
- **Typography Strategy**:
  - Default: System fonts (SF Pro, Inter, Segoe UI) for UI labels, buttons, descriptions
  - Monospace: `'Geist Mono', 'Fira Code', 'SF Mono'` only for code-related elements (file names, paths, status bar, keyboard shortcuts)
- Base font size: 13px for UI, 12px for code elements
- Non-selectable UI chrome (toolbars, menus, navigation) with `user-select: none`
- Compact, information-dense layouts matching JetBrains/VSCode patterns

## Development Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server (http://localhost:5173)
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint on TypeScript/TSX files

## Important Architecture Notes

### Tailwind CSS 4 Configuration
This project uses **Tailwind CSS 4** with the new `@theme` directive (NOT `tailwind.config.js`). All design tokens are defined in `src/components/globals.css` using the `@theme` block. When adding new colors or tokens, edit the `@theme` section in `globals.css`, not a config file.

### Component File Naming
- **Capitalized components** (e.g., `Button.tsx`, `Card.tsx`) - Custom LIMN components
- **Lowercase components** (e.g., `accordion.tsx`, `alert.tsx`) - shadcn/ui base components
- **IDE components** - All PascalCase in `components/ide/`

### Path Aliases
All imports use `@/*` alias mapping to `./src/*`. The `cn()` utility is located at `@/components/lib/utils`, not `@/lib/utils`.

## Repository Structure

The project follows FSD-inspired architecture with clear separation of concerns.

### Source Code (`src/`)
- **pages/** - Route-level page components
  - `Home.tsx` - Landing page with design system overview
  - `Tokens.tsx` - Design token showcase
  - `Primitives.tsx` - Radix UI primitive demonstrations
  - `Components.tsx` - Component library catalog
  - `IDELayout.tsx` - Full IDE interface demo
  - `EditorView.tsx` - Code editor view demo
  - `ChatPanel.tsx` - AI chat interface demo
- **components/ui/** - Base UI components (shadcn/ui patterns, 30+ components)
  - Form inputs: `Button`, `Input`, `Checkbox`, `RadioGroup`, `Select`, `Switch`
  - Layout: `Card`, `Separator`, `ScrollArea`, `CollapsibleSection`
  - Navigation: `Tabs`, `DropdownMenu`, `ContextMenu`, `Command`, `CommandPalette`
  - Feedback: `Badge`, `Indicator`, `Toast`, `Dialog`, `Popover`
- **components/ide/** - IDE-specific components (18+ components)
  - App shell: `TitleBar`, `ActivityBar`, `StatusBar`, `TabBar`, `Sidebar`
  - Code structure: `OutlinePanel`, `OutlinePanelItem`, `DefinitionPanel`, `DefinitionPanelItem`, `CodeView`
  - Tool panels: `SearchPanel`, `GitPanel`, `TerminalPanel`, `ExtensionsPanel`, `SettingsPanel`
  - File system: `FileTreeItem`
- **components/lib/** - Utility functions (`cn` helper with clsx + tailwind-merge)
- **components/globals.css** - Global styles with Tailwind directives and LIMN design tokens
- **components/INTEGRATION_GUIDE.md** - Important: Pure UI component philosophy and integration instructions
- **components/deprecated/** - Legacy components (do not use for new code)
- **shared/** - Type definitions and utilities
  - `outlineExtractor.ts` - OutlineNode, OutlineNodeKind types for code structure
  - `definitionExtractor.ts` - DefinitionSymbol, SymbolKind types for code definitions
- **widgets/** - Composite UI widgets
  - `layout/TopMenuBar.tsx` - Navigation menu with auto-hide for fullscreen layouts
  - `ComponentLibrary/` - Component showcase navigation
- **App.tsx** - React Router setup with route definitions
- **main.tsx** - Application entry point

### Configuration
- **vite.config.ts** - Vite config with `@/*` alias and GitHub Pages base path (`/limn-design-system/`)
- **tailwind.config.js** - TailwindCSS configuration
- **components.json** - shadcn/ui CLI config (New York style, cssVariables enabled)

## Application Routes

The demo app uses React Router with these routes:
- `/` - Home page with design system overview
- `/tokens` - Design token showcase
- `/primitives` - Radix UI primitive demonstrations
- `/components` - Component library catalog
- `/ide` - Full IDE layout (auto-hide menu)
- `/editor` - Code editor view (auto-hide menu)
- `/chat` - AI chat panel
- `/code-demo` - CodeView component demo (auto-hide menu)
- `/terminal-colors` - Terminal color palette

**Auto-hide TopMenuBar**: Routes `/ide`, `/editor`, and `/code-demo` trigger auto-hide behavior for fullscreen immersion (see `App.tsx:20`)

## Design Philosophy

**"흐릿한 의도가 선명한 형태가 되는 곳"** (Where blurry intentions become clear forms)

### Core Principles
- **Blur → Clarity** - Visual metaphor of warm light revealing forms in darkness
- **Warmth over Cold** - Orange/cream accents instead of traditional blue
- **Glow = Active** - Only active elements emit glow effects
- **Native App Feel** - Desktop application quality, not web-app style
- **Depth through Opacity** - Use transparency for visual hierarchy
- **Pure UI Components** - Components are business-logic-free, receive data via props, emit events via callbacks (see `components/INTEGRATION_GUIDE.md`)

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

## Design Tokens

### Colors
- **Background**: `#08080d` (deep), `#0a0a10` (base), `rgba(18,18,28,0.9)` (surface)
- **Warm Accent**: `#ffcc99` (primary), `rgba(255,200,150,0.9)` (buttons)
- **Text**: `rgba(255,240,220,0.95)` (primary) → `rgba(255,250,245,0.2)` (faint)
- **Status**: `#4ade80` (success), `#fbbf24` (warning), `#f87171` (error)

### Typography
- **Default Font Stack**: System fonts (`-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Helvetica Neue', sans-serif`)
  - Used for: UI labels, menu items, buttons, card titles, descriptions, navigation
- **Monospace Font Stack**: Code fonts (`'Geist Mono', 'Fira Code', 'SF Mono', 'Consolas', monospace`)
  - Used for: File names, file paths, code snippets, status bar info, keyboard shortcuts, git branches
- **Base Size**: 13px (UI text), 12px (code elements), 10px (status bar)
- **Scale**: 10px (status bar) → 13px (UI base) → 14px (headings) → 20px (hero)
- **Weight**: 400 (normal), 500 (medium/active states)
- **UI Chrome**: All toolbars, menus, navigation use `user-select: none`

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

- **React 19** with TypeScript 5.6
- **Vite 6** for build tooling and HMR
- **TailwindCSS 4** with `@tailwindcss/vite` plugin
- **React Router DOM 7** for routing
- **Radix UI** primitives for accessibility (14+ packages)
- **Lucide React** for icons (v0.562)
- **CVA** (class-variance-authority) for component variants
- **clsx + tailwind-merge** for class name utilities
- **cmdk** for command palette

## Component Development

### Creating New Components

Components follow the shadcn/ui pattern:

```tsx
import { cn } from '@/components/lib/utils' // Note: NOT @/lib/utils
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
Component.displayName = 'Component'

export { Component }
```

**Important**:
- Always use `@/components/lib/utils` for the `cn()` utility
- Add `displayName` for better debugging with React DevTools
- Export component using named export for tree-shaking

### Path Aliases

The `@/*` alias maps to `./src/*` configured in `vite.config.ts` and `tsconfig.json`.

Additional aliases from `components.json`:
- `@/components` → component directory
- `@/components/ui` → UI components
- `@/components/lib/utils` → utility functions
- `@/hooks` → custom hooks

### Using Design Tokens

TailwindCSS 4 classes use LIMN tokens defined in `@theme` directive:

```tsx
// Colors (defined in globals.css @theme block)
bg-bg-deep, bg-bg-base, bg-bg-surface, bg-bg-elevated
text-text-primary, text-text-secondary, text-text-muted, text-text-faint
border-border-DEFAULT, border-border-active

// Warm accent
bg-warm-300, text-warm-300, border-border-warm
shadow-glow-sm, shadow-glow-md, shadow-glow-lg

// Status
bg-status-success, text-status-error, border-status-warning

// Terminal colors (16-color ANSI palette)
text-terminal-red, bg-terminal-blue, etc.

// Spacing: 1-12 (4px-48px scale)
p-5, mt-3, gap-8

// Radius
rounded-sm, rounded-md, rounded-lg, rounded-2xl, rounded-3xl

// CSS Variables (use with var())
var(--limn-titlebar-height)  // 32px
var(--limn-statusbar-height) // 22px
var(--limn-indent)           // 12px
var(--limn-file-item-height) // 24px

// Custom Utility Classes (defined in globals.css)
.active-glow  // Active state gradient + glow effect
.label        // Uppercase label style (10px, 500 weight, letter-spacing)
```

**Adding New Tokens**: Edit the `@theme` block in `src/components/globals.css`, NOT `tailwind.config.js`

## Important Guidelines

### Component Architecture
- All components are **pure UI components** with no business logic
- Components receive data via props and emit events via callbacks
- No data fetching, state management, or backend integration in components
- Refer to `src/components/INTEGRATION_GUIDE.md` for integration patterns

### Deployment
- GitHub Pages deployment configured with base path `/limn-design-system/`
- Build outputs to `dist/` directory
- Uses `BrowserRouter` with `basename={import.meta.env.BASE_URL}`

### Code Style
- Follow FSD (Feature-Sliced Design) architecture principles
- Never use barrel exports (explicit imports only)
- TypeScript strict mode enabled
- All IDE components should use monospace fonts for code-related text
- UI components use system fonts for labels and descriptions

## Common Patterns & Gotchas

### Component State Patterns
Components use visual states defined in `globals.css`:
- **Inactive**: Subtle backgrounds (`bg-bg-surface`), low-contrast text (`text-text-muted`)
- **Active**: Use `.active-glow` class for warm gradient + glow effect
- **Hover**: Slight scale transform (`hover:scale-[1.02]`) + brightened borders

### Typography Usage
```tsx
// ❌ Wrong - Don't use generic font classes
<span className="font-mono">index.ts</span>

// ✅ Correct - Use font-geist-mono for code-related elements
<span className="font-geist-mono text-xs">index.ts</span>

// ✅ Correct - System fonts for UI labels
<span className="label">EXPLORER</span>
```

### Icon Integration
```tsx
import { FileCode } from 'lucide-react'

// Standard icon with LIMN sizing
<FileCode size={14} className="text-text-secondary" strokeWidth={1.5} />

// Active state icon
<FileCode size={14} className="text-warm-300" strokeWidth={2} />
```

### Common Mistakes to Avoid
1. **Don't modify `tailwind.config.js`** - Use `@theme` in `globals.css` instead
2. **Don't import from `@/lib/utils`** - Use `@/components/lib/utils`
3. **Don't add business logic to components** - Keep them pure UI (see INTEGRATION_GUIDE.md)
4. **Don't use deprecated components** - Check `components/deprecated/` folder
5. **Don't hardcode colors** - Always use design tokens from `@theme`