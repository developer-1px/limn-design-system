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
- Button, Input, Card, Badge, Indicator
- Dialog, Dropdown, Popover, Select
- Checkbox, Switch, RadioGroup, Textarea
- Command, **CommandPalette**, Toast
- Label, Separator, Tabs, ScrollArea

### 2. IDE Components (`src/components/ide/`)
Specialized components for IDE interfaces:
- TitleBar, ActivityBar, StatusBar, TabBar
- Sidebar, FileTreeItem
- OutlinePanel, OutlinePanelItem
- DefinitionPanel, DefinitionPanelItem
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
src/components/ui/       → your-project/src/components/ui/
src/components/ide/      → your-project/src/components/ide/
src/components/lib/      → your-project/src/components/lib/
src/shared/              → your-project/src/shared/
src/styles/globals.css   → your-project/src/styles/globals.css
tailwind.config.js       → merge with your tailwind.config.js
```

### Step 3: Configure Tailwind CSS

Merge LIMN's tailwind config with yours:

```js
// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Copy from LIMN's tailwind.config.js
        'bg-deep': '#08080d',
        'bg-base': '#0a0a10',
        // ... (see full config in LIMN repo)
      },
      // ... other LIMN tokens
    },
  },
}
```

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

## Design Tokens Reference

### Colors
```css
/* Background */
--bg-deep: #08080d;
--bg-base: #0a0a10;
--bg-elevated: rgba(18, 18, 28, 0.9);
--bg-surface: rgba(255, 255, 255, 0.03);

/* Warm Accent */
--warm-300: #ffcc99;
--warm-400: rgba(255, 200, 150, 0.9);
--warm-500: rgba(255, 180, 120, 0.9);

/* Text */
--text-primary: rgba(255, 240, 220, 0.95);
--text-secondary: rgba(255, 250, 245, 0.65);
--text-muted: rgba(255, 250, 245, 0.4);
--text-faint: rgba(255, 250, 245, 0.2);

/* Status */
--status-success: #4ade80;
--status-warning: #fbbf24;
--status-error: #f87171;
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

- **LIMN Design System**: v2.0
- **Last Updated**: 2026-01-02
- **Components**: 40+ UI & IDE components
- **TypeScript**: Full type coverage
