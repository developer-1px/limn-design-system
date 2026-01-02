/**
 * PanelHeader - Pure UI Component
 *
 * A header for panels with title and optional action buttons.
 * Generalized from SidebarHeader for reusability.
 *
 * @example
 * ```tsx
 * <PanelHeader
 *   title="PANEL TITLE"
 *   onClose={() => console.log('Close')}
 *   actions={<Button size="sm">Action</Button>}
 * />
 * ```
 */

import * as React from 'react'
import { X } from 'lucide-react'
import { cn } from '@/components/lib/utils'

export interface PanelHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Header title (can be string or ReactNode) */
  title?: React.ReactNode
  /** Action buttons or custom content */
  actions?: React.ReactNode
  /** Show close button */
  showClose?: boolean
  /** Close button callback */
  onClose?: () => void
  /** Close button aria-label */
  closeLabel?: string
}

export const PanelHeader = React.forwardRef<HTMLDivElement, PanelHeaderProps>(
  (
    {
      className,
      title,
      actions,
      showClose = false,
      onClose,
      closeLabel = 'Close panel',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex h-8 items-center justify-between border-b border-border-DEFAULT px-3 flex-shrink-0',
          className
        )}
        {...props}
      >
        {/* Title */}
        <div className="flex-1 min-w-0">
          {title ? (
            typeof title === 'string' ? (
              <span className="label">{title}</span>
            ) : (
              title
            )
          ) : (
            children
          )}
        </div>

        {/* Actions */}
        {(actions || showClose) && (
          <div className="flex items-center gap-1 shrink-0">
            {actions}
            {showClose && (
              <button
                onClick={onClose}
                className="rounded p-1 text-text-muted hover:bg-white/5 hover:text-text-secondary transition-colors"
                aria-label={closeLabel}
                title={closeLabel}
              >
                <X size={14} />
              </button>
            )}
          </div>
        )}
      </div>
    )
  }
)

PanelHeader.displayName = 'PanelHeader'
