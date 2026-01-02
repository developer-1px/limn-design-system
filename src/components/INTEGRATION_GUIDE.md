# LIMN Design System - Integration Guide

> **Target Audience:** Development Team
> **Purpose:** Guide for integrating LIMN UI components into your application

## Overview

LIMN Design System provides **pure UI components** that are framework-agnostic and business-logic-free. All components are designed to receive data via props and emit events via callbacks.

## Core Principles

### ✅ What LIMN Provides
- **Pure UI Components** - Visual presentation only
- **TypeScript Interfaces** - Type definitions for props
- **LIMN Design Tokens** - Colors, spacing, typography
- **Accessibility** - ARIA labels, keyboard navigation
- **Documentation** - JSDoc comments and usage examples

### ❌ What LIMN Does NOT Provide
- Business logic
- Data fetching
- State management
- Backend integration
- File system utilities
- Path manipulation

## Component Categories

### 1. UI Components (`src/components/ui/`)
Base components that follow shadcn/ui patterns:

**Form & Input:**
- Button, Input, Textarea
- Checkbox, Switch, RadioGroup
- Select, Autocomplete
- Label

**Layout & Structure:**
- Card, Separator, ScrollArea
- **ResizablePanel** - Drag-to-resize panel with handle
- **CollapsibleSection** - Expandable/collapsible section with header
- **TreeView** - Generic tree structure for hierarchical data
- **PanelHeader** - Reusable panel header with actions

**Overlay & Navigation:**
- Dialog, Popover, DropdownMenu
- Tabs, ContextMenu
- Command, **CommandPalette**

**Feedback & Status:**
- Badge, Indicator, Toast

### 2. IDE Components (`src/components/ide/`)
Specialized components for IDE interfaces:

**App Shell:**
- TitleBar - Window title bar with traffic lights
- ActivityBar, ActivityBarItem - Vertical navigation
- StatusBar - Bottom status bar with git info
- TabBar, Tab - File tabs with dirty state

**Sidebar & Navigation:**
- Sidebar - File tree sidebar (deprecated wrapper)
- FileTreeItem - Individual file/folder item

**Code Structure:**
- OutlinePanel - Code outline view (deprecated wrapper)
- OutlinePanelItem - Outline tree item
- DefinitionPanel - Code definitions (deprecated wrapper)
- DefinitionPanelItem - Definition tree item

**Tool Panels:**
- SearchPanel, GitPanel, TerminalPanel
- ExtensionsPanel, SettingsPanel
- NotificationCenter, QuickActionsDialog
- CodeView

### 3. Shared Types (`src/shared/`)
Type definitions for structured data:
- `outlineExtractor.ts` - OutlineNode, OutlineNodeKind
- `definitionExtractor.ts` - DefinitionSymbol, SymbolKind

## Integration Instructions

### Step 1: Install Dependencies

```bash
npm install lucide-react class-variance-authority clsx tailwind-merge
```

### Step 2: Copy LIMN Components

Copy the following directories to your project:
```
src/components/ui/         → your-project/src/components/ui/
src/components/ide/        → your-project/src/components/ide/
src/components/lib/        → your-project/src/components/lib/
src/shared/                → your-project/src/shared/
src/components/globals.css → your-project/src/components/globals.css
```

### Step 3: Configure Tailwind CSS 4

LIMN uses **Tailwind CSS 4** with the new `@theme` directive. Copy the design tokens from `src/components/globals.css`:

```css
/* your-project/src/components/globals.css */
@import "../../node_modules/tailwindcss/dist/lib.d.mts";

@theme {
  /* Copy all LIMN theme tokens from src/components/globals.css */
  /* Background Colors */
  --color-bg-deep: #0d0d12;
  --color-bg-base: #0f0f16;
  --color-bg-surface: rgb(20 20 28 / 0.95);
  --color-bg-elevated: #14141c;

  /* Warm Accent */
  --color-warm-300: #ffcc99;
  --color-warm-400: rgb(255 200 150 / 0.9);
  --color-warm-glow: rgb(255 180 120 / 0.15);

  /* Text */
  --color-text-primary: rgb(255 240 220 / 0.95);
  --color-text-secondary: rgb(255 250 245 / 0.7);
  --color-text-muted: rgb(255 250 245 / 0.35);

  /* ... (see full @theme in LIMN's globals.css) */
}

@layer base {
  :root {
    /* LIMN layout dimensions */
    --limn-titlebar-height: 32px;
    --limn-statusbar-height: 22px;
    --limn-indent: 12px;
    --limn-file-item-height: 24px;
    /* ... (see full CSS variables in LIMN's globals.css) */
  }
}

/* Custom utility classes */
.label { /* ... */
}

.active-glow { /* ... */
}
```

**Important:** Tailwind CSS 4 does NOT use `tailwind.config.js`. All configuration is done via CSS `@theme` directive.

### Step 4: Set Up Path Aliases

Configure TypeScript and Vite:

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

```ts
// vite.config.ts
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

## Component-Specific Integration

### ResizablePanel

A reusable panel component with drag-to-resize functionality.

**Props:**
```tsx
interface ResizablePanelProps {
  children: React.ReactNode;
  defaultWidth?: number;         // Default: 240px
  minWidth?: number;             // Default: 180px
  maxWidth?: number;             // Default: 600px
  resizeDirection?: 'left' | 'right'; // Default: 'right'
  onWidthChange?: (width: number) => void;
  showHandle?: boolean;          // Default: true
}
```

**Usage Example:**
```tsx
import { ResizablePanel } from '@/components/ui/ResizablePanel';
import { PanelHeader } from '@/components/ui/PanelHeader';

function MySidebar() {
  const [width, setWidth] = useState(240);

  return (
    <ResizablePanel
      defaultWidth={240}
      minWidth={180}
      maxWidth={400}
      resizeDirection="right"
      onWidthChange={setWidth}
    >
      <PanelHeader title="MY PANEL" />
      <div className="p-4">
        Panel content here
      </div>
    </ResizablePanel>
  );
}
```

### CollapsibleSection

Expandable/collapsible section with header - supports both controlled and uncontrolled state.

**Props:**
```tsx
interface CollapsibleSectionProps {
  children: React.ReactNode;
  header: React.ReactNode;
  defaultOpen?: boolean;         // Uncontrolled: default state
  open?: boolean;                // Controlled: current state
  onOpenChange?: (open: boolean) => void;
  headerActions?: React.ReactNode; // Optional actions in header
}
```

**Usage Example:**
```tsx
import { CollapsibleSection } from '@/components/ui/CollapsibleSection';
import { ChevronDown } from 'lucide-react';

// Uncontrolled (component manages state internally)
function MyPanel() {
  return (
    <CollapsibleSection
      header={<span className="label">SECTION TITLE</span>}
      defaultOpen={true}
    >
      <div className="p-4">
        Section content
      </div>
    </CollapsibleSection>
  );
}

// Controlled (you manage state)
function MyControlledPanel() {
  const [open, setOpen] = useState(true);

  return (
    <CollapsibleSection
      header={<span className="label">SECTION TITLE</span>}
      open={open}
      onOpenChange={setOpen}
      headerActions={
        <button onClick={() => console.log('action')}>
          Action
        </button>
      }
    >
      <div className="p-4">
        Section content
      </div>
    </CollapsibleSection>
  );
}
```

### TreeView

Generic tree structure view for hierarchical data display.

**Props:**
```tsx
interface TreeNode {
  key: string;
  label: React.ReactNode;
  children?: TreeNode[];
  [key: string]: any;  // Custom properties
}

interface TreeViewProps<T extends TreeNode> {
  items: T[];
  defaultExpandedKeys?: string[];
  expandedKeys?: string[];       // Controlled expansion
  onToggle?: (key: string, isExpanded: boolean) => void;
  onNodeClick?: (node: T) => void;
  renderItem?: (node: T, isExpanded: boolean, depth: number) => React.ReactNode;
}
```

**Usage Example:**
```tsx
import { TreeView, TreeNode } from '@/components/ui/TreeView';
import { Folder, File } from 'lucide-react';

interface FileNode extends TreeNode {
  type: 'file' | 'folder';
  path: string;
}

function FileExplorer() {
  const files: FileNode[] = [
    {
      key: 'src',
      label: 'src',
      type: 'folder',
      path: '/src',
      children: [
        { key: 'index.ts', label: 'index.ts', type: 'file', path: '/src/index.ts' }
      ]
    }
  ];

  return (
    <TreeView
      items={files}
      defaultExpandedKeys={['src']}
      onNodeClick={(node) => console.log('Clicked:', node.path)}
      renderItem={(node, isExpanded, depth) => (
        <div className="flex items-center gap-2">
          {node.type === 'folder' ? <Folder size={14} /> : <File size={14} />}
          <span>{node.label}</span>
        </div>
      )}
    />
  );
}
```

### PanelHeader

Reusable panel header component with optional actions and close button.

**Props:**
```tsx
interface PanelHeaderProps {
  title?: React.ReactNode;
  actions?: React.ReactNode;
  showClose?: boolean;
  onClose?: () => void;
  closeLabel?: string;
}
```

**Usage Example:**
```tsx
import { PanelHeader } from '@/components/ui/PanelHeader';
import { Settings } from 'lucide-react';

function MyPanel() {
  return (
    <div>
      <PanelHeader
        title={<span className="label">MY PANEL</span>}
        actions={
          <button>
            <Settings size={14} />
          </button>
        }
        showClose
        onClose={() => console.log('Panel closed')}
      />
      <div className="p-4">
        Panel content
      </div>
    </div>
  );
}
```

### CommandPalette

**Type Definition:**

```tsx
export interface SearchResult {
  id: string;
  type: 'file' | 'folder' | 'symbol';
  name: string;
  filePath: string;
  nodeType?: 'usage' | 'pure-function' | 'function' | 'state-ref' | 'ref' | 'computed';
  isExported?: boolean;
  matches?: Array<{
    key: string;
    indices: [number, number][];
  }>;
  codeSnippet?: string;
  lineNumber?: number;
}
```

**Your Implementation:**

```tsx
import { CommandPalette, SearchResult } from '@/components/ui/CommandPalette';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  // YOUR BUSINESS LOGIC: Implement search functionality
  const results: SearchResult[] = useFuzzySearch(query); // ← You implement this

  // YOUR BUSINESS LOGIC: Handle selection
  const handleSelect = (result: SearchResult) => {
    if (result.type === 'file') {
      openFile(result.filePath); // ← You implement this
    } else if (result.type === 'symbol') {
      jumpToSymbol(result.filePath, result.lineNumber); // ← You implement this
    }
    setOpen(false);
  };

  return (
    <CommandPalette
      open={open}
      onOpenChange={setOpen}
      query={query}
      onQueryChange={setQuery}
      results={results}
      selectedIndex={selectedIndex}
      onSelectedIndexChange={setSelectedIndex}
      onSelectResult={handleSelect}
    />
  );
}
```

**You Need to Implement:**
1. **Fuzzy Search** - Search logic that returns `SearchResult[]`
2. **File Opening** - Logic to open files when selected
3. **Symbol Navigation** - Jump to line number in file
4. **Match Highlighting** - Calculate `matches` indices for fuzzy matching

### OutlinePanel & DefinitionPanel

**Type Definitions (already provided in `src/shared/`):**

```tsx
// src/shared/outlineExtractor.ts
export interface OutlineNode {
  kind: OutlineNodeKind;
  name: string;
  line: number;
  endLine?: number;
  text?: string;
  children?: OutlineNode[];
}

// src/shared/definitionExtractor.ts
export interface DefinitionSymbol {
  kind: SymbolKind;
  name: string;
  line: number;
  modifiers?: SymbolModifier;
  type?: string;
  children?: DefinitionSymbol[];
}
```

**Your Implementation:**

```tsx
import { OutlinePanel } from '@/components/ide/OutlinePanel';
import { DefinitionPanel } from '@/components/ide/DefinitionPanel';
import type { OutlineNode } from '@/shared/outlineExtractor';
import type { DefinitionSymbol } from '@/shared/definitionExtractor';

function CodeEditor() {
  // YOUR BUSINESS LOGIC: Parse code to extract structure
  const outlineNodes: OutlineNode[] = parseCodeOutline(currentFile); // ← You implement
  const definitions: DefinitionSymbol[] = extractDefinitions(currentFile); // ← You implement

  // YOUR BUSINESS LOGIC: Handle navigation
  const handleSymbolClick = (line: number) => {
    scrollToLine(line); // ← You implement
  };

  return (
    <>
      <OutlinePanel
        nodes={outlineNodes}
        definitions={definitions}
        onNodeClick={handleSymbolClick}
      />

      <DefinitionPanel
        symbols={definitions}
        onSymbolClick={handleSymbolClick}
      />
    </>
  );
}
```

**You Need to Implement:**
1. **Code Parser** - Extract OutlineNode[] from source code
2. **Definition Extractor** - Extract DefinitionSymbol[] (exports, types, functions)
3. **Navigation Handler** - Scroll/jump to specific line numbers

### Sidebar & FileTreeItem

**Your Implementation:**

```tsx
import { Sidebar } from '@/components/ide/Sidebar';
import { FileTreeItem } from '@/components/ide/FileTreeItem';
import { File, Folder } from 'lucide-react';

function FileSidebar() {
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set());
  const [activeFile, setActiveFile] = useState<string | null>(null);

  // YOUR BUSINESS LOGIC: Get file tree structure
  const fileTree = getFileTree(); // ← You implement

  return (
    <Sidebar resizable defaultWidth={240} minWidth={180} maxWidth={400}>
      <Sidebar.Header>
        <span className="label">FILES</span>
      </Sidebar.Header>

      {fileTree.map(item => (
        <FileTreeItem
          key={item.path}
          icon={item.isFolder ? Folder : File}
          label={item.name}
          active={activeFile === item.path}
          isFolder={item.isFolder}
          isOpen={openFolders.has(item.path)}
          fileExtension={item.extension}
          onClick={() => setActiveFile(item.path)}
          onDoubleClick={() => openFile(item.path)} // ← You implement
        />
      ))}
    </Sidebar>
  );
}
```

**You Need to Implement:**
1. **File Tree Provider** - Get directory structure
2. **File Opening** - Handle double-click to open files
3. **Folder Toggle** - Expand/collapse folder logic

### ActivityBar & StatusBar

**ActivityBar** - Vertical navigation bar for primary sections:

```tsx
import { ActivityBar, ActivityBarItem } from '@/components/ide/ActivityBar';
import { Files, Search, GitBranch, Settings } from 'lucide-react';

function MyIDE() {
  const [activeView, setActiveView] = useState('files');

  return (
    <ActivityBar>
      <ActivityBarItem
        icon={Files}
        label="Files"
        active={activeView === 'files'}
        onClick={() => setActiveView('files')}
      />
      <ActivityBarItem
        icon={Search}
        label="Search"
        active={activeView === 'search'}
        hasBadge  // Show notification badge
        onClick={() => setActiveView('search')}
      />
      <ActivityBarItem
        icon={GitBranch}
        label="Source Control"
        active={activeView === 'git'}
        onClick={() => setActiveView('git')}
      />
      <ActivityBarItem
        icon={Settings}
        label="Settings"
        active={activeView === 'settings'}
        onClick={() => setActiveView('settings')}
      />
    </ActivityBar>
  );
}
```

**StatusBar** - Bottom status bar with git and editor info:

```tsx
import { StatusBar } from '@/components/ide/StatusBar';

function MyEditor() {
  // YOUR BUSINESS LOGIC: Get current editor state
  const currentFile = useCurrentFile();
  const cursorPosition = useCursorPosition();
  const gitStatus = useGitStatus();

  return (
    <StatusBar
      branch={gitStatus.branch}
      ahead={gitStatus.ahead}
      behind={gitStatus.behind}
      line={cursorPosition.line}
      column={cursorPosition.column}
      encoding="UTF-8"
      language={currentFile.language}
      aiActive={false}
    />
  );
}
```

### TabBar & Tab

File tabs with dirty state and close buttons:

```tsx
import { TabBar, Tab } from '@/components/ide/TabBar';
import { FileCode } from 'lucide-react';

function EditorTabs() {
  const [openFiles, setOpenFiles] = useState([
    { id: '1', name: 'App.tsx', dirty: true },
    { id: '2', name: 'index.ts', dirty: false },
  ]);
  const [activeTab, setActiveTab] = useState('1');

  const handleClose = (id: string) => {
    // YOUR BUSINESS LOGIC: Save dirty files, update state
    setOpenFiles(files => files.filter(f => f.id !== id));
  };

  return (
    <TabBar>
      {openFiles.map(file => (
        <Tab
          key={file.id}
          icon={FileCode}
          label={file.name}
          active={activeTab === file.id}
          dirty={file.dirty}
          onClick={() => setActiveTab(file.id)}
          onClose={() => handleClose(file.id)}
        />
      ))}
    </TabBar>
  );
}
```

## Design Tokens Reference

### Colors (Tailwind CSS 4 `@theme` format)
```css
/* Background - Use with bg-{name} utility */
--color-bg-deep: #0d0d12;
--color-bg-base: #0f0f16;
--color-bg-elevated: #14141c;
--color-bg-surface: rgb(20 20 28 / 0.95);

/* Warm Accent - Use with warm-{number} utility */
--color-warm-300: #ffcc99;
--color-warm-400: rgb(255 200 150 / 0.9);
--color-warm-500: rgb(255 180 120 / 0.8);
--color-warm-glow: rgb(255 180 120 / 0.15);

/* Text - Use with text-{name} utility */
--color-text-primary: rgb(255 240 220 / 0.95);
--color-text-secondary: rgb(255 250 245 / 0.7);
--color-text-muted: rgb(255 250 245 / 0.35);
--color-text-faint: rgb(255 250 245 / 0.2);

/* Status - Use with status-{name} utility */
--color-status-success: #4ade80;
--color-status-warning: #fbbf24;
--color-status-error: #f87171;

/* Border - Use with border-{name} utility */
--color-border-DEFAULT: rgb(255 255 255 / 0.06);
--color-border-warm: rgb(255 200 150 / 0.2);
--color-border-active: rgb(255 200 150 / 0.3);
```

### Spacing
- `var(--limn-indent)`: 12px (file tree indentation)
- `var(--limn-file-item-height)`: 24px (file tree item height)
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px

### Border Radius
- `--limn-radius-sm`: 4px
- `--limn-radius-md`: 8px
- `--limn-radius-lg`: 14px
- `--limn-radius-xl`: 16px

## Best Practices

### ✅ Do
- Use LIMN components as pure UI
- Implement business logic in your application layer
- Pass data via props, handle events via callbacks
- Customize types (SearchResult, OutlineNode) to fit your needs
- Use LIMN design tokens for consistency

### ❌ Don't
- Modify LIMN component source files directly
- Add business logic inside LIMN components
- Create dependencies between LIMN and your app logic
- Hardcode colors/spacing (use design tokens)

## Support & Questions

- **Documentation**: See LIMN-Design-System-v2.md for complete component specs
- **Examples**: Check src/pages/Home.tsx for usage examples
- **Types**: All components have full TypeScript support with JSDoc

## Version

- **LIMN Design System**: v2.1
- **Last Updated**: 2026-01-02
- **Components**: 44+ UI & IDE components (4 new pure UI components added)
- **TypeScript**: Full type coverage
- **New in v2.1**:
  - ResizablePanel - Drag-to-resize panel
  - CollapsibleSection - Expandable sections
  - TreeView - Generic tree structure
  - PanelHeader - Reusable panel header
