import React, { useState, useEffect } from 'react';

// LIMN Logo Component
const LimnLogo = ({ size = 40 }) => (
  <div 
    className="relative"
    style={{ width: size, height: size }}
  >
    <div 
      className="absolute"
      style={{
        width: size * 0.8,
        height: size * 0.8,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,180,120,0.2) 0%, transparent 70%)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        filter: `blur(${size * 0.15}px)`,
      }}
    />
    <div 
      className="absolute"
      style={{
        width: size * 0.25,
        height: size * 0.25,
        borderRadius: '50%',
        background: 'radial-gradient(circle, #fff 0%, #ffeedd 50%, #ffcc99 100%)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: `0 0 ${size * 0.3}px rgba(255,200,150,0.6)`,
      }}
    />
  </div>
);

// Welcome Screen
const WelcomeScreen = ({ onEnter }) => {
  const [fadeIn, setFadeIn] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a12 0%, #0f0f1a 50%, #12101a 100%)' }}
    >
      {/* Background ambient glows */}
      <div 
        className="absolute"
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(255,150,100,0.08) 0%, transparent 60%)',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(80px)',
        }}
      />
      <div 
        className="absolute"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(255,200,150,0.05) 0%, transparent 60%)',
          top: '60%',
          left: '30%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Main content */}
      <div 
        className={`flex flex-col items-center gap-8 transition-all duration-1000 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        {/* Logo */}
        <div className="relative">
          <div 
            className="absolute"
            style={{
              width: 200,
              height: 200,
              background: 'radial-gradient(circle, rgba(255,180,120,0.15) 0%, transparent 70%)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              filter: 'blur(40px)',
            }}
          />
          <div 
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'radial-gradient(circle, #fff 0%, #ffeedd 40%, #ffcc99 100%)',
              boxShadow: '0 0 60px rgba(255,200,150,0.5), 0 0 120px rgba(255,180,120,0.3)',
            }}
          />
        </div>

        {/* Wordmark */}
        <h1 
          style={{
            fontSize: 48,
            fontWeight: 200,
            color: 'rgba(255,250,245,0.95)',
            letterSpacing: '0.4em',
            marginLeft: '0.4em',
          }}
        >
          LIMN
        </h1>

        {/* Tagline */}
        <p 
          className="text-center max-w-md"
          style={{
            color: 'rgba(255,250,245,0.4)',
            fontSize: 14,
            letterSpacing: '0.1em',
            lineHeight: 1.8,
          }}
        >
          흐릿한 의도가 선명한 형태가 되는 곳
        </p>

        {/* Recent Projects */}
        <div className="mt-12 flex flex-col gap-3 w-80">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'rgba(255,250,245,0.3)' }}>
            Recent
          </p>
          {['design-system-v2', 'checkout-flow', 'dashboard-refactor'].map((project, i) => (
            <button
              key={project}
              className="flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-white/5 text-left"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: i === 0 ? '#ffcc99' : 'rgba(255,255,255,0.2)',
                  boxShadow: i === 0 ? '0 0 8px rgba(255,200,150,0.5)' : 'none',
                }}
              />
              <span style={{ color: 'rgba(255,250,245,0.7)', fontSize: 14 }}>{project}</span>
              <span className="ml-auto text-xs" style={{ color: 'rgba(255,250,245,0.3)' }}>
                {i === 0 ? '2m ago' : i === 1 ? '1h ago' : '3d ago'}
              </span>
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={onEnter}
            className="px-6 py-3 rounded-lg transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, rgba(255,200,150,0.9) 0%, rgba(255,180,120,0.9) 100%)',
              color: '#1a1a2e',
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            New Project
          </button>
          <button
            onClick={onEnter}
            className="px-6 py-3 rounded-lg transition-all hover:bg-white/10"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,250,245,0.7)',
              fontSize: 14,
            }}
          >
            Open Folder
          </button>
        </div>
      </div>

      {/* Version */}
      <p 
        className="absolute bottom-6"
        style={{ color: 'rgba(255,250,245,0.2)', fontSize: 11 }}
      >
        LIMN v0.1.0 — Early Preview
      </p>
    </div>
  );
};

// Code Bubble Component
const CodeBubble = ({ title, lines, x, y, blur = 0, opacity = 1, scale = 1, glow = false }) => (
  <div 
    className="absolute transition-all duration-500 cursor-pointer hover:scale-105"
    style={{
      left: x,
      top: y,
      filter: `blur(${blur}px)`,
      opacity,
      transform: `scale(${scale})`,
    }}
  >
    <div 
      className="rounded-xl p-4 min-w-48"
      style={{
        background: 'rgba(20,20,30,0.9)',
        border: `1px solid ${glow ? 'rgba(255,200,150,0.3)' : 'rgba(255,255,255,0.08)'}`,
        boxShadow: glow 
          ? '0 0 40px rgba(255,180,120,0.15), 0 8px 32px rgba(0,0,0,0.4)' 
          : '0 8px 32px rgba(0,0,0,0.3)',
      }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full" style={{ background: glow ? '#ffcc99' : 'rgba(255,255,255,0.3)' }} />
        <span style={{ color: 'rgba(255,250,245,0.6)', fontSize: 12 }}>{title}</span>
      </div>
      <div className="flex flex-col gap-1">
        {lines.map((line, i) => (
          <div key={i} className="flex items-center gap-2">
            <span style={{ color: 'rgba(255,250,245,0.2)', fontSize: 10, width: 16 }}>{i + 1}</span>
            <span style={{ color: 'rgba(255,250,245,0.5)', fontSize: 12, fontFamily: 'monospace' }}>{line}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Agent Node Component
const AgentNode = ({ label, status, x, y }) => (
  <div 
    className="absolute flex flex-col items-center gap-2"
    style={{ left: x, top: y }}
  >
    <div 
      className="w-10 h-10 rounded-full flex items-center justify-center"
      style={{
        background: status === 'active' 
          ? 'linear-gradient(135deg, rgba(255,200,150,0.3) 0%, rgba(255,180,120,0.2) 100%)'
          : 'rgba(255,255,255,0.05)',
        border: `1px solid ${status === 'active' ? 'rgba(255,200,150,0.4)' : 'rgba(255,255,255,0.1)'}`,
        boxShadow: status === 'active' ? '0 0 20px rgba(255,180,120,0.2)' : 'none',
      }}
    >
      <div 
        className="w-2 h-2 rounded-full"
        style={{
          background: status === 'active' ? '#ffcc99' : 'rgba(255,255,255,0.3)',
          boxShadow: status === 'active' ? '0 0 8px rgba(255,200,150,0.8)' : 'none',
        }}
      />
    </div>
    <span style={{ color: 'rgba(255,250,245,0.5)', fontSize: 10 }}>{label}</span>
  </div>
);

// Main IDE Screen
const IDEScreen = () => {
  const [zoomLevel, setZoomLevel] = useState(2); // 1: Vibe, 2: Logic, 3: Syntax
  const [promptText, setPromptText] = useState('');

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{ background: '#0a0a12' }}
    >
      {/* Top Bar */}
      <div 
        className="h-12 flex items-center justify-between px-4 border-b"
        style={{ 
          background: 'rgba(15,15,25,0.95)',
          borderColor: 'rgba(255,255,255,0.06)',
        }}
      >
        <div className="flex items-center gap-4">
          <LimnLogo size={28} />
          <span style={{ color: 'rgba(255,250,245,0.5)', fontSize: 13 }}>design-system-v2</span>
        </div>
        
        {/* Zoom Level Indicator */}
        <div className="flex items-center gap-2">
          {['Vibe', 'Logic', 'Syntax'].map((level, i) => (
            <button
              key={level}
              onClick={() => setZoomLevel(i + 1)}
              className="px-3 py-1 rounded-md text-xs transition-all"
              style={{
                background: zoomLevel === i + 1 ? 'rgba(255,200,150,0.15)' : 'transparent',
                color: zoomLevel === i + 1 ? 'rgba(255,220,180,0.9)' : 'rgba(255,250,245,0.4)',
                border: zoomLevel === i + 1 ? '1px solid rgba(255,200,150,0.3)' : '1px solid transparent',
              }}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: '#ffcc99', boxShadow: '0 0 8px rgba(255,200,150,0.6)' }}
            />
            <span style={{ color: 'rgba(255,250,245,0.4)', fontSize: 11 }}>Agent working...</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Sidebar - Agent Orchestra */}
        <div 
          className="w-16 flex flex-col items-center py-4 gap-4 border-r"
          style={{ 
            background: 'rgba(12,12,20,0.95)',
            borderColor: 'rgba(255,255,255,0.06)',
          }}
        >
          {[
            { icon: '◉', label: 'Canvas', active: true },
            { icon: '⬡', label: 'Agents', active: false },
            { icon: '◫', label: 'Files', active: false },
            { icon: '◈', label: 'Search', active: false },
          ].map((item) => (
            <button
              key={item.label}
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all"
              style={{
                background: item.active ? 'rgba(255,200,150,0.1)' : 'transparent',
                color: item.active ? 'rgba(255,220,180,0.9)' : 'rgba(255,250,245,0.3)',
                fontSize: 18,
              }}
              title={item.label}
            >
              {item.icon}
            </button>
          ))}
        </div>

        {/* Canvas Area */}
        <div className="flex-1 relative overflow-hidden">
          {/* Background Grid */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 50% 50%, rgba(255,180,120,0.03) 0%, transparent 50%),
                linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
              `,
              backgroundSize: '100% 100%, 40px 40px, 40px 40px',
            }}
          />

          {/* Code Bubbles - Semantic Zoom visualization */}
          {zoomLevel >= 2 && (
            <>
              <CodeBubble 
                title="AuthService.ts"
                lines={['class AuthService {', '  async login()', '  async logout()', '}']}
                x={100}
                y={120}
                blur={zoomLevel === 2 ? 0 : 0}
                opacity={1}
                glow={true}
              />
              <CodeBubble 
                title="UserContext.tsx"
                lines={['const UserContext', '  = createContext()', '...']}
                x={380}
                y={80}
                blur={zoomLevel === 2 ? 1 : 0}
                opacity={0.8}
              />
              <CodeBubble 
                title="api/auth.ts"
                lines={['export async fn', '  fetchUser()', '...']}
                x={320}
                y={280}
                blur={zoomLevel === 2 ? 2 : 0}
                opacity={0.6}
              />
            </>
          )}

          {/* Connection Lines */}
          <svg className="absolute inset-0 pointer-events-none" style={{ opacity: 0.3 }}>
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,200,150,0.5)" />
                <stop offset="100%" stopColor="rgba(255,200,150,0.1)" />
              </linearGradient>
            </defs>
            <path 
              d="M 200 180 Q 300 200 380 140" 
              stroke="url(#lineGrad)" 
              strokeWidth="1" 
              fill="none"
              strokeDasharray="4 4"
            />
            <path 
              d="M 200 200 Q 280 260 320 300" 
              stroke="url(#lineGrad)" 
              strokeWidth="1" 
              fill="none"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Agent Flow Visualization */}
          <div 
            className="absolute bottom-32 right-8 p-4 rounded-xl"
            style={{
              background: 'rgba(15,15,25,0.9)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <p className="text-xs mb-3" style={{ color: 'rgba(255,250,245,0.4)' }}>Agent Pipeline</p>
            <div className="flex items-center gap-3">
              {['Parse', 'Plan', 'Generate', 'Test'].map((step, i) => (
                <React.Fragment key={step}>
                  <div className="flex flex-col items-center gap-1">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs"
                      style={{
                        background: i <= 1 
                          ? 'linear-gradient(135deg, rgba(255,200,150,0.3) 0%, rgba(255,180,120,0.2) 100%)'
                          : 'rgba(255,255,255,0.05)',
                        border: `1px solid ${i <= 1 ? 'rgba(255,200,150,0.4)' : 'rgba(255,255,255,0.1)'}`,
                        color: i <= 1 ? 'rgba(255,220,180,0.9)' : 'rgba(255,250,245,0.3)',
                      }}
                    >
                      {i <= 1 ? '✓' : i + 1}
                    </div>
                    <span style={{ color: 'rgba(255,250,245,0.4)', fontSize: 10 }}>{step}</span>
                  </div>
                  {i < 3 && (
                    <div 
                      className="w-8 h-px"
                      style={{ 
                        background: i < 1 
                          ? 'rgba(255,200,150,0.4)' 
                          : 'rgba(255,255,255,0.1)' 
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Vibe View - High level summary (when zoomed out) */}
          {zoomLevel === 1 && (
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
            >
              <div 
                className="w-32 h-32 rounded-full mx-auto mb-6"
                style={{
                  background: 'radial-gradient(circle, rgba(255,200,150,0.2) 0%, transparent 70%)',
                  boxShadow: '0 0 80px rgba(255,180,120,0.2)',
                }}
              />
              <h2 style={{ color: 'rgba(255,250,245,0.8)', fontSize: 20, marginBottom: 8 }}>
                Authentication Module
              </h2>
              <p style={{ color: 'rgba(255,250,245,0.4)', fontSize: 13 }}>
                OAuth 2.0 · 4 files · 12 functions
              </p>
            </div>
          )}
        </div>

        {/* Right Panel - Context */}
        <div 
          className="w-72 border-l flex flex-col"
          style={{ 
            background: 'rgba(12,12,20,0.95)',
            borderColor: 'rgba(255,255,255,0.06)',
          }}
        >
          {/* Preview */}
          <div className="p-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <p className="text-xs uppercase tracking-wider mb-3" style={{ color: 'rgba(255,250,245,0.3)' }}>
              Live Preview
            </p>
            <div 
              className="rounded-lg h-32 flex items-center justify-center"
              style={{ 
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="text-center">
                <div 
                  className="w-16 h-8 rounded mx-auto mb-2"
                  style={{ background: 'rgba(255,200,150,0.3)' }}
                />
                <div className="flex gap-2 justify-center">
                  <div className="w-12 h-6 rounded" style={{ background: 'rgba(255,255,255,0.1)' }} />
                  <div className="w-12 h-6 rounded" style={{ background: 'rgba(255,255,255,0.1)' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Changes */}
          <div className="p-4 flex-1">
            <p className="text-xs uppercase tracking-wider mb-3" style={{ color: 'rgba(255,250,245,0.3)' }}>
              Changes
            </p>
            <div className="flex flex-col gap-2">
              {[
                { file: 'AuthService.ts', type: 'modified' },
                { file: 'UserContext.tsx', type: 'created' },
                { file: 'types.ts', type: 'modified' },
              ].map((change) => (
                <div 
                  key={change.file}
                  className="flex items-center gap-2 p-2 rounded"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  <div 
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ 
                      background: change.type === 'created' ? '#4ade80' : '#fbbf24'
                    }}
                  />
                  <span style={{ color: 'rgba(255,250,245,0.6)', fontSize: 12 }}>{change.file}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Prompt Bar */}
      <div 
        className="h-16 flex items-center px-4 border-t"
        style={{ 
          background: 'rgba(15,15,25,0.98)',
          borderColor: 'rgba(255,255,255,0.06)',
        }}
      >
        <div 
          className="flex-1 flex items-center gap-3 px-4 py-2 rounded-xl"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div 
            className="w-2 h-2 rounded-full"
            style={{ 
              background: '#ffcc99',
              boxShadow: '0 0 8px rgba(255,200,150,0.6)',
            }}
          />
          <input
            type="text"
            placeholder="Describe what you want to build..."
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            className="flex-1 bg-transparent outline-none"
            style={{ 
              color: 'rgba(255,250,245,0.8)',
              fontSize: 14,
            }}
          />
          <div className="flex items-center gap-2">
            <span style={{ color: 'rgba(255,250,245,0.3)', fontSize: 11 }}>⌘ Enter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App with routing
export default function LimnApp() {
  const [screen, setScreen] = useState('welcome'); // 'welcome' | 'ide'

  if (screen === 'welcome') {
    return <WelcomeScreen onEnter={() => setScreen('ide')} />;
  }

  return <IDEScreen />;
}
