/**
 * CollapsibleSection - Pure UI Component
 *
 * A section that can be collapsed/expanded with a toggle button.
 * Extracted from OutlinePanel for reusability.
 *
 * @example
 * ```tsx
 * <CollapsibleSection
 *   defaultOpen={true}
 *   header="Section Title"
 *   onOpenChange={(open) => console.log(open)}
 * >
 *   Section content
 * </CollapsibleSection>
 * ```
 */

import * as React from 'react'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { cn } from '@/components/lib/utils'

export interface CollapsibleSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Section content */
  children: React.ReactNode
  /** Header content (can be string or ReactNode) */
  header: React.ReactNode
  /** Whether the section is initially open */
  defaultOpen?: boolean
  /** Controlled open state */
  open?: boolean
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void
  /** Additional header actions (buttons, etc) */
  headerActions?: React.ReactNode
  /** Header className */
  headerClassName?: string
  /** Content className */
  contentClassName?: string
}

export const CollapsibleSection = React.forwardRef<HTMLDivElement, CollapsibleSectionProps>(
  (
    {
      className,
      children,
      header,
      defaultOpen = true,
      open: controlledOpen,
      onOpenChange,
      headerActions,
      headerClassName,
      contentClassName,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen)

    // Use controlled state if provided, otherwise use internal state
    const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen

    const handleToggle = () => {
      const newOpen = !isOpen
      if (controlledOpen === undefined) {
        setInternalOpen(newOpen)
      }
      onOpenChange?.(newOpen)
    }

    return (
      <div ref={ref} className={cn('flex flex-col', className)} {...props}>
        {/* Header */}
        <div
          className={cn(
            'flex items-center justify-between px-3 py-2 hover:bg-white/5 rounded transition-colors cursor-pointer',
            headerClassName
          )}
          onClick={handleToggle}
        >
          <div className="flex items-center gap-2 flex-1">
            {isOpen ? (
              <ChevronDown size={14} className="text-text-muted shrink-0" />
            ) : (
              <ChevronRight size={14} className="text-text-muted shrink-0" />
            )}
            {typeof header === 'string' ? (
              <span className="text-xs font-medium text-text-primary">{header}</span>
            ) : (
              header
            )}
          </div>

          {headerActions && (
            <div onClick={(e) => e.stopPropagation()}>{headerActions}</div>
          )}
        </div>

        {/* Content */}
        {isOpen && (
          <div className={cn('flex flex-col', contentClassName)}>
            {children}
          </div>
        )}
      </div>
    )
  }
)

CollapsibleSection.displayName = 'CollapsibleSection'
