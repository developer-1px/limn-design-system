import React from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { cn } from '@/components/lib/utils.ts'

interface ComponentItem {
  id: string
  name: string
}

interface ComponentSection {
  id: string
  title: string
  items: ComponentItem[]
}

interface ComponentNavProps {
  sections: ComponentSection[]
  activeSection?: string
  onNavigate?: (sectionId: string) => void
}

export const ComponentNav: React.FC<ComponentNavProps> = ({
  sections,
  activeSection,
  onNavigate,
}) => {
  const [collapsedSections, setCollapsedSections] = React.useState<Set<string>>(new Set())

  const toggleSection = (sectionId: string) => {
    setCollapsedSections((prev) => {
      const next = new Set(prev)
      if (next.has(sectionId)) {
        next.delete(sectionId)
      } else {
        next.add(sectionId)
      }
      return next
    })
  }

  const handleItemClick = (itemId: string) => {
    onNavigate?.(itemId)

    // Scroll to component section
    const element = document.getElementById(itemId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="w-60 h-full bg-bg-elevated border-r border-border-DEFAULT flex flex-col overflow-hidden" style={{ userSelect: 'none' }}>
      {/* Header */}
      <div className="px-4 py-2 border-b border-border-DEFAULT">
        <h2 className="text-xs font-medium text-text-secondary uppercase tracking-wide">Components</h2>
        <p className="text-2xs text-text-muted mt-0.5">Browse by category</p>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto py-2">
        {sections.map((section) => {
          const isCollapsed = collapsedSections.has(section.id)

          return (
            <div key={section.id} className="mb-1">
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center gap-1.5 px-4 py-1.5 text-2xs uppercase tracking-widest text-text-muted hover:text-text-secondary transition-colors"
              >
                {isCollapsed ? (
                  <ChevronRight className="w-3 h-3" strokeWidth={2} />
                ) : (
                  <ChevronDown className="w-3 h-3" strokeWidth={2} />
                )}
                <span>{section.title}</span>
                <span className="ml-auto text-text-faint">{section.items.length}</span>
              </button>

              {/* Section Items */}
              {!isCollapsed && (
                <div className="mt-0.5">
                  {section.items.map((item) => {
                    const isActive = activeSection === item.id

                    return (
                      <button
                        key={item.id}
                        onClick={() => handleItemClick(item.id)}
                        className={cn(
                          'w-full text-left px-4 py-1.5 text-sm transition-colors',
                          'flex items-center gap-2',
                          'hover:bg-warm-active-bg hover:text-text-primary',
                          isActive && 'bg-warm-active-bg text-text-primary border-l-2 border-warm-300',
                          !isActive && 'text-text-secondary pl-[18px]'
                        )}
                      >
                        {item.name}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="px-4 py-2 border-t border-border-DEFAULT">
        <p className="text-2xs text-text-muted">
          {sections.reduce((total, section) => total + section.items.length, 0)} components
        </p>
      </div>
    </nav>
  )
}
