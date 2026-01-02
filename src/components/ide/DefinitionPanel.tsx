/**
 * DefinitionPanel - Wrapper Component (uses deprecated version)
 *
 * This is a compatibility wrapper that uses the deprecated DefinitionPanel.
 * For new projects, consider using the pure UI components directly:
 * - ResizablePanel
 * - TreeView
 * - PanelHeader
 *
 * @deprecated Use pure UI components from @/components/ui/ instead
 */

import { DefinitionPanel as DeprecatedDefinitionPanel } from '@/deprecated/ide/DefinitionPanel'
import type { DefinitionSymbol } from '../../shared/definitionExtractor'

export interface DefinitionPanelProps {
  /** Callback when a symbol is clicked */
  onSymbolClick?: (line: number) => void
  /** Definition symbols to display */
  symbols?: DefinitionSymbol[]
}

/**
 * DefinitionPanel - File definitions view
 *
 * @deprecated This component uses deprecated business logic.
 * Consider refactoring to use pure UI components.
 */
export function DefinitionPanel({ onSymbolClick, symbols = [] }: DefinitionPanelProps) {
  // Use deprecated version for backward compatibility
  return (
    <DeprecatedDefinitionPanel
      onSymbolClick={onSymbolClick}
      symbols={symbols}
    />
  )
}

// Re-export for convenience
export { DefinitionPanelItem } from './DefinitionPanelItem'
