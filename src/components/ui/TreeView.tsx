/**
 * TreeView - Pure UI Component
 *
 * A tree structure view with expand/collapse functionality.
 * Extracted from OutlinePanel and DefinitionPanel for reusability.
 *
 * @example
 * ```tsx
 * <TreeView
 *   items={treeData}
 *   defaultExpandedKeys={['node-1', 'node-2']}
 *   onToggle={(key) => console.log('Toggled:', key)}
 *   renderItem={(item, isExpanded) => <div>{item.name}</div>}
 * />
 * ```
 */

import * as React from 'react'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { cn } from '@/components/lib/utils'

export interface TreeNode {
  /** Unique identifier for the node */
  key: string
  /** Node label/content */
  label: React.ReactNode
  /** Child nodes */
  children?: TreeNode[]
  /** Additional data */
  [key: string]: any
}

export interface TreeViewProps<T extends TreeNode = TreeNode> {
  /** Tree data */
  items: T[]
  /** Default expanded node keys */
  defaultExpandedKeys?: string[]
  /** Controlled expanded keys */
  expandedKeys?: string[]
  /** Callback when a node is toggled */
  onToggle?: (key: string, isExpanded: boolean) => void
  /** Callback when a node is clicked */
  onNodeClick?: (node: T) => void
  /** Custom render function for each node */
  renderItem?: (node: T, isExpanded: boolean, depth: number) => React.ReactNode
  /** Indent size in pixels */
  indentSize?: number
  /** Root className */
  className?: string
}

export function TreeView<T extends TreeNode = TreeNode>({
  items,
  defaultExpandedKeys = [],
  expandedKeys: controlledExpandedKeys,
  onToggle,
  onNodeClick,
  renderItem,
  indentSize = 16,
  className,
}: TreeViewProps<T>) {
  const [internalExpandedKeys, setInternalExpandedKeys] = React.useState<Set<string>>(
    new Set(defaultExpandedKeys)
  )

  // Use controlled state if provided, otherwise use internal state
  const expandedKeys = controlledExpandedKeys
    ? new Set(controlledExpandedKeys)
    : internalExpandedKeys

  const handleToggle = (key: string) => {
    const newExpandedKeys = new Set(expandedKeys)
    const isExpanded = !expandedKeys.has(key)

    if (isExpanded) {
      newExpandedKeys.add(key)
    } else {
      newExpandedKeys.delete(key)
    }

    if (!controlledExpandedKeys) {
      setInternalExpandedKeys(newExpandedKeys)
    }

    onToggle?.(key, isExpanded)
  }

  const renderNode = (node: T, depth: number = 0): React.ReactNode => {
    const hasChildren = node.children && node.children.length > 0
    const isExpanded = expandedKeys.has(node.key)

    return (
      <div key={node.key}>
        <div
          className="flex items-center gap-1 rounded px-2 py-1 hover:bg-white/5 transition-colors cursor-pointer"
          style={{ paddingLeft: `${depth * indentSize}px` }}
          onClick={() => onNodeClick?.(node)}
        >
          {/* Chevron */}
          {hasChildren ? (
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleToggle(node.key)
              }}
              className="shrink-0"
            >
              {isExpanded ? (
                <ChevronDown size={14} className="text-text-muted" />
              ) : (
                <ChevronRight size={14} className="text-text-muted" />
              )}
            </button>
          ) : (
            <div className="w-[14px] shrink-0" />
          )}

          {/* Content */}
          {renderItem ? (
            renderItem(node, isExpanded, depth)
          ) : (
            <span className="text-xs text-text-primary">{node.label}</span>
          )}
        </div>

        {/* Children */}
        {hasChildren && isExpanded && (
          <div>
            {node.children!.map((child) => renderNode(child as T, depth + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={cn('flex flex-col', className)}>
      {items.map((item) => renderNode(item, 0))}
    </div>
  )
}

TreeView.displayName = 'TreeView'
