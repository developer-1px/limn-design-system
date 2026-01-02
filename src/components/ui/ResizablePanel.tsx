/**
 * ResizablePanel - Pure UI Component
 *
 * A panel that can be resized by dragging a handle.
 * Extracted from Sidebar and DefinitionPanel for reusability.
 *
 * @example
 * ```tsx
 * <ResizablePanel
 *   defaultWidth={240}
 *   minWidth={180}
 *   maxWidth={400}
 *   resizeDirection="right"
 * >
 *   Panel content
 * </ResizablePanel>
 * ```
 */

import * as React from 'react'
import { GripVertical } from 'lucide-react'
import { cn } from '@/components/lib/utils'

export interface ResizablePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Panel content */
  children: React.ReactNode
  /** Default width in pixels */
  defaultWidth?: number
  /** Minimum width in pixels */
  minWidth?: number
  /** Maximum width in pixels */
  maxWidth?: number
  /** Direction to resize from */
  resizeDirection?: 'left' | 'right'
  /** Callback when width changes */
  onWidthChange?: (width: number) => void
  /** Show resize handle */
  showHandle?: boolean
}

export const ResizablePanel = React.forwardRef<HTMLDivElement, ResizablePanelProps>(
  (
    {
      className,
      children,
      defaultWidth = 240,
      minWidth = 180,
      maxWidth = 600,
      resizeDirection = 'right',
      onWidthChange,
      showHandle = true,
      ...props
    },
    ref
  ) => {
    const [width, setWidth] = React.useState(defaultWidth)
    const [isResizing, setIsResizing] = React.useState(false)
    const startXRef = React.useRef(0)
    const startWidthRef = React.useRef(defaultWidth)
    const panelRef = React.useRef<HTMLDivElement>(null)

    const handleMouseDown = (e: React.MouseEvent) => {
      setIsResizing(true)
      startXRef.current = e.clientX
      startWidthRef.current = width
      e.preventDefault()
    }

    React.useEffect(() => {
      if (!isResizing) return

      // Prevent text selection during resize
      document.body.style.cursor = 'col-resize'
      document.body.style.userSelect = 'none'

      const handleMouseMove = (e: MouseEvent) => {
        const deltaX = e.clientX - startXRef.current

        // Calculate new width based on resize direction
        const newWidth = resizeDirection === 'right'
          ? Math.min(maxWidth, Math.max(minWidth, startWidthRef.current + deltaX))
          : Math.min(maxWidth, Math.max(minWidth, startWidthRef.current - deltaX))

        setWidth(newWidth)
        onWidthChange?.(newWidth)
      }

      const handleMouseUp = () => {
        setIsResizing(false)
        document.body.style.cursor = ''
        document.body.style.userSelect = ''
      }

      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.body.style.cursor = ''
        document.body.style.userSelect = ''
      }
    }, [isResizing, minWidth, maxWidth, onWidthChange, resizeDirection])

    const handlePosition = resizeDirection === 'right' ? 'right-0' : 'left-0'
    const handleRounded = resizeDirection === 'right' ? 'rounded-l' : 'rounded-r'

    return (
      <div
        ref={ref || panelRef}
        className={cn('relative', className)}
        style={{ width: `${width}px` }}
        {...props}
      >
        {children}

        {showHandle && (
          <div
            className={cn(
              'absolute top-0 bottom-0 w-1 cursor-col-resize group transition-colors',
              handlePosition,
              isResizing ? 'bg-warm-300/60' : 'hover:bg-warm-300/30'
            )}
            onMouseDown={handleMouseDown}
            style={{ zIndex: 10 }}
          >
            <div
              className={cn(
                'absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-4 h-12 bg-bg-elevated/80 opacity-0 group-hover:opacity-100 transition-opacity border border-border-DEFAULT',
                handlePosition,
                handleRounded,
                resizeDirection === 'right' ? 'border-r-0' : 'border-l-0'
              )}
            >
              <GripVertical size={12} className="text-warm-300" />
            </div>
          </div>
        )}
      </div>
    )
  }
)

ResizablePanel.displayName = 'ResizablePanel'
