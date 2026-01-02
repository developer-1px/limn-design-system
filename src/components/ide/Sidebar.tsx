/**
 * Sidebar - Wrapper Component (uses deprecated version)
 *
 * This is a compatibility wrapper that uses the deprecated Sidebar.
 * For new projects, consider using the pure UI components directly:
 * - ResizablePanel
 * - PanelHeader
 *
 * @deprecated Use pure UI components from @/components/ui/ instead
 */

import { Sidebar as DeprecatedSidebar } from '@/deprecated/ide/Sidebar'

/**
 * Sidebar - Resizable sidebar with header
 *
 * @deprecated This component uses deprecated implementation.
 * Consider refactoring to use ResizablePanel + PanelHeader.
 */
export const Sidebar = DeprecatedSidebar

// Re-export for convenience
export { FileTreeItem } from './FileTreeItem'
