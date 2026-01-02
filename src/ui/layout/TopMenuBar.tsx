import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Home as HomeIcon, Layout, Code, MessageSquare, Package, Palette } from 'lucide-react'

interface TopMenuBarProps {
  autoHide?: boolean
}

// Pure light point logo component
const LimnLogo = ({ size = 28 }: { size?: number }) => (
  <div className="relative flex items-center gap-2">
    {/* Glow */}
    <div
      className="absolute"
      style={{
        width: size * 0.9,
        height: size * 0.9,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,180,120,0.25) 0%, transparent 70%)',
        top: '50%',
        left: 0,
        transform: 'translateY(-50%)',
        filter: `blur(${size * 0.15}px)`,
      }}
    />
    {/* Core light point */}
    <div
      className="relative"
      style={{
        width: size * 0.3,
        height: size * 0.3,
        borderRadius: '50%',
        background: 'radial-gradient(circle, #fff 0%, #ffeedd 50%, #ffcc99 100%)',
        boxShadow: `0 0 ${size * 0.4}px rgba(255,200,150,0.6)`,
      }}
    />
    <span
      className="text-xs font-light tracking-[0.3em]"
      style={{
        color: 'rgba(255,250,245,0.5)',
        userSelect: 'none',
      }}
    >
      LIMN
    </span>
  </div>
)

export const TopMenuBar: React.FC<TopMenuBarProps> = ({ autoHide = false }) => {
  const [isVisible, setIsVisible] = useState(!autoHide)
  const location = useLocation()

  useEffect(() => {
    if (!autoHide) {
      setIsVisible(true)
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Show menu when mouse is near top (within 50px)
      if (e.clientY < 50) {
        setIsVisible(true)
      } else if (e.clientY > 100) {
        setIsVisible(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [autoHide])

  const menuItems = [
    { path: '/', label: 'Home', icon: HomeIcon },
    { path: '/samples/style-guide', label: 'Tokens', icon: Palette },
    { path: '/components', label: 'Components', icon: Package },
    { path: '/ide', label: 'IDE', icon: Layout },
    { path: '/chat', label: 'Chat', icon: MessageSquare },
  ]

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div
        className="h-[var(--limn-titlebar-height)] border-b flex items-center justify-center px-4"
        style={{
          background: 'rgba(10,10,16,0.95)',
          backdropFilter: 'blur(20px)',
          borderColor: 'rgba(255,255,255,0.03)',
          userSelect: 'none',
        }}
      >
        {/* Logo - Left */}
        <div className="absolute left-4">
          <LimnLogo size={24} />
        </div>

        {/* Menu Items - Centered */}
        <div className="flex items-center gap-1">
          {menuItems.map(({ path, label, icon: Icon }) => {
            const isActive = location.pathname === path ||
                            (path === '/samples/style-guide' && location.pathname.startsWith('/samples'))

            return (
              <Link
                key={path}
                to={path}
                className="flex items-center gap-2 px-3 h-7 rounded transition-all duration-500"
                style={{
                  background: isActive ? 'rgba(255,200,150,0.12)' : 'transparent',
                  color: isActive ? 'rgba(255,220,180,0.9)' : 'rgba(255,250,245,0.4)',
                  border: isActive ? '1px solid rgba(255,200,150,0.2)' : '1px solid transparent',
                  fontSize: '13px',
                  fontWeight: isActive ? 500 : 400,
                }}
              >
                <Icon size={14} strokeWidth={1.5} />
                <span>{label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
