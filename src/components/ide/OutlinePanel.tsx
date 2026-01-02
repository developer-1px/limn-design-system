/**
 * OutlinePanel - Wrapper Component (uses deprecated version)
 *
 * This is a compatibility wrapper that uses the deprecated OutlinePanel.
 * For new projects, consider using the pure UI components directly:
 * - CollapsibleSection
 * - TreeView
 * - PanelHeader
 *
 * @deprecated Use pure UI components from @/components/ui/ instead
 */

import { OutlinePanel as DeprecatedOutlinePanel } from '@/components/deprecated/ide/OutlinePanel'
import type { OutlineNode } from '@/components/deprecated/shared/outlineExtractor'
import type { DefinitionSymbol } from '@/components/deprecated/shared/definitionExtractor'

export interface OutlinePanelProps {
  /** Whether the panel is initially open */
  defaultOpen?: boolean
  /** Callback when a node is clicked */
  onNodeClick?: (line: number) => void
  /** Alias for onNodeClick - callback when a method is clicked */
  onMethodClick?: (line: number) => void
  /** Outline nodes to display */
  nodes?: OutlineNode[]
  /** Definition symbols to display */
  definitions?: DefinitionSymbol[]
}

/**
 * OutlinePanel - Code structure outline view
 *
 * @deprecated This component uses deprecated business logic.
 * Consider refactoring to use pure UI components.
 */
export function OutlinePanel({ defaultOpen = true, onNodeClick, nodes = [], definitions = [] }: OutlinePanelProps) {
  // Use deprecated version for backward compatibility
  return (
    <DeprecatedOutlinePanel
      defaultOpen={defaultOpen}
      onNodeClick={onNodeClick}
      nodes={nodes}
      definitions={definitions}
    />
  )
}

// Re-export for convenience
export { OutlinePanelItem } from './OutlinePanelItem'
