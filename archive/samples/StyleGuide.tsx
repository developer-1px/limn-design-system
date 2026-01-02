import { useState } from 'react';

// ============================================
// LIMN DESIGN SYSTEM - VISUAL STYLE GUIDE
// ============================================

const Section = ({ title, children }) => (
  <div style={{ marginBottom: 48 }}>
    <h2 style={{ 
      color: 'rgba(255,240,220,0.95)', 
      fontSize: 18, 
      fontWeight: 500,
      marginBottom: 24,
      paddingBottom: 12,
      borderBottom: '1px solid rgba(255,255,255,0.08)',
    }}>
      {title}
    </h2>
    {children}
  </div>
);

const ColorSwatch = ({ name, value, textColor = 'rgba(255,250,245,0.7)' }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
    <div style={{
      width: 48,
      height: 48,
      borderRadius: 8,
      background: value,
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: value.includes('255,180,120') || value.includes('255,200,150') 
        ? '0 0 20px rgba(255,180,120,0.2)' 
        : 'none',
    }} />
    <div>
      <p style={{ color: 'rgba(255,250,245,0.8)', fontSize: 13, margin: 0 }}>{name}</p>
      <p style={{ color: 'rgba(255,250,245,0.4)', fontSize: 11, margin: '4px 0 0 0', fontFamily: 'monospace' }}>{value}</p>
    </div>
  </div>
);

const TextSample = ({ label, style }) => (
  <div style={{ marginBottom: 16 }}>
    <span style={{ color: 'rgba(255,250,245,0.3)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
      {label}
    </span>
    <p style={{ margin: '6px 0 0 0', ...style }}>
      The quick brown fox jumps over the lazy dog
    </p>
  </div>
);

export default function LimnStyleGuide() {
  const [activeButton, setActiveButton] = useState(2);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #08080d 0%, #0a0a10 50%, #0d0a10 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
      padding: 'calc(var(--limn-titlebar-height) + 48px) 32px 64px 32px',
      color: 'rgba(255,250,245,0.7)',
    }}>
      {/* Container - centered, narrow */}
      <div style={{
        maxWidth: 720,
        margin: '0 auto',
      }}>
        {/* Header */}
        <div style={{ marginBottom: 64, textAlign: 'center' }}>
          {/* Logo */}
          <div style={{
            position: 'relative',
            width: 64,
            height: 64,
            margin: '0 auto 24px auto',
          }}>
            <div style={{
              position: 'absolute',
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,180,120,0.25) 0%, transparent 70%)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              filter: 'blur(12px)',
            }} />
            <div style={{
              position: 'absolute',
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: 'radial-gradient(circle, #fff 0%, #ffeedd 50%, #ffcc99 100%)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 24px rgba(255,200,150,0.6)',
            }} />
          </div>

          <h1 style={{
            color: 'rgba(255,240,220,0.98)',
            fontSize: 32,
            fontWeight: 300,
            margin: 0,
            letterSpacing: '0.3em',
            textShadow: '0 0 40px rgba(255,200,150,0.2)',
          }}>
            LIMN
          </h1>
          <p style={{
            color: 'rgba(255,250,245,0.4)',
            fontSize: 12,
            margin: '8px 0 0 0',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}>
            Design Tokens
          </p>
        </div>
        {/* Colors - Background */}
        <Section title="Background Colors">
          <ColorSwatch name="Deep" value="#08080d" />
          <ColorSwatch name="Base" value="#0a0a10" />
          <ColorSwatch name="Surface" value="rgba(18, 18, 28, 0.9)" />
          <ColorSwatch name="Elevated" value="rgba(12, 12, 18, 0.98)" />
        </Section>

        {/* Colors - Warm Accent */}
        <Section title="Warm Accent">
          <ColorSwatch name="Warm 100" value="#fff8f0" />
          <ColorSwatch name="Warm 200" value="#ffeedd" />
          <ColorSwatch name="Warm 300 (Primary)" value="#ffcc99" />
          <ColorSwatch name="Warm 400" value="rgba(255, 200, 150, 0.9)" />
          <ColorSwatch name="Warm 500" value="rgba(255, 180, 120, 0.8)" />
        </Section>

        {/* Colors - Text */}
        <Section title="Text Colors">
          <ColorSwatch name="Primary" value="rgba(255, 240, 220, 0.95)" />
          <ColorSwatch name="Secondary" value="rgba(255, 250, 245, 0.7)" />
          <ColorSwatch name="Tertiary" value="rgba(255, 250, 245, 0.5)" />
          <ColorSwatch name="Muted" value="rgba(255, 250, 245, 0.35)" />
          <ColorSwatch name="Faint" value="rgba(255, 250, 245, 0.2)" />
        </Section>

        {/* Typography */}
        <Section title="Typography">
          <TextSample
            label="Title (20px, medium)"
            style={{ color: 'rgba(255,240,220,0.95)', fontSize: 20, fontWeight: 500 }}
          />
          <TextSample
            label="Subtitle (15px, medium)"
            style={{ color: 'rgba(255,240,220,0.95)', fontSize: 15, fontWeight: 500 }}
          />
          <TextSample
            label="Body (13px)"
            style={{ color: 'rgba(255,250,245,0.7)', fontSize: 13 }}
          />
          <TextSample
            label="Caption (12px)"
            style={{ color: 'rgba(255,250,245,0.5)', fontSize: 12 }}
          />
          <TextSample
            label="Code (13px, mono)"
            style={{ color: 'rgba(255,250,245,0.85)', fontSize: 13, fontFamily: 'monospace' }}
          />
        </Section>
        {/* Cards */}
        <Section title="Cards">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Inactive Card */}
            <div style={{
              padding: 20,
              borderRadius: 14,
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                <span style={{ color: 'rgba(255,250,245,0.3)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Inactive</span>
              </div>
              <p style={{ color: 'rgba(255,250,245,0.7)', fontSize: 14, margin: 0 }}>Module Name</p>
              <p style={{ color: 'rgba(255,250,245,0.4)', fontSize: 12, margin: '6px 0 0 0' }}>Description text</p>
            </div>

            {/* Active Card */}
            <div style={{
              padding: 20,
              borderRadius: 14,
              background: 'linear-gradient(145deg, rgba(255,200,150,0.12) 0%, rgba(255,180,120,0.06) 100%)',
              border: '1px solid rgba(255,200,150,0.3)',
              boxShadow: '0 0 40px rgba(255,180,120,0.1)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#ffcc99',
                  boxShadow: '0 0 8px rgba(255,200,150,0.6)',
                }} />
                <span style={{ color: 'rgba(255,250,245,0.3)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Active</span>
              </div>
              <p style={{ color: 'rgba(255,240,220,0.95)', fontSize: 14, margin: 0, fontWeight: 500 }}>Module Name</p>
              <p style={{ color: 'rgba(255,250,245,0.5)', fontSize: 12, margin: '6px 0 0 0' }}>Description text</p>
            </div>
          </div>
        </Section>

        {/* Buttons */}
        <Section title="Buttons">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {/* Primary Button */}
            <button style={{
              width: '100%',
              padding: '12px 24px',
              borderRadius: 10,
              border: 'none',
              background: 'linear-gradient(135deg, rgba(255,200,150,0.9) 0%, rgba(255,180,120,0.9) 100%)',
              color: '#1a1a2e',
              fontSize: 14,
              fontWeight: 500,
              cursor: 'pointer',
            }}>
              Primary Button
            </button>

            {/* Ghost Buttons */}
            <div style={{ display: 'flex', gap: 8 }}>
              {['Vibe', 'Logic', 'Syntax'].map((label, i) => (
                <button
                  key={label}
                  onClick={() => setActiveButton(i)}
                  style={{
                    flex: 1,
                    padding: '10px 16px',
                    borderRadius: 8,
                    border: activeButton === i
                      ? '1px solid rgba(255,200,150,0.3)'
                      : '1px solid rgba(255,255,255,0.06)',
                    background: activeButton === i
                      ? 'linear-gradient(135deg, rgba(255,200,150,0.2) 0%, rgba(255,180,120,0.1) 100%)'
                      : 'transparent',
                    color: activeButton === i
                      ? 'rgba(255,220,180,0.95)'
                      : 'rgba(255,250,245,0.35)',
                    fontSize: 13,
                    fontWeight: activeButton === i ? 500 : 400,
                    cursor: 'pointer',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </Section>

        {/* Indicators */}
        <Section title="Indicators">
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#ffcc99',
                boxShadow: '0 0 8px rgba(255,200,150,0.6)',
              }} />
              <span style={{ color: 'rgba(255,250,245,0.5)', fontSize: 12 }}>Active</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#4ade80',
                boxShadow: '0 0 8px rgba(74,222,128,0.5)',
              }} />
              <span style={{ color: 'rgba(255,250,245,0.5)', fontSize: 12 }}>Success</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
              }} />
              <span style={{ color: 'rgba(255,250,245,0.5)', fontSize: 12 }}>Inactive</span>
            </div>
          </div>
        </Section>

        {/* Tags */}
        <Section title="Tags & Badges">
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <span style={{
              padding: '4px 10px',
              borderRadius: 4,
              background: 'rgba(255,255,255,0.05)',
              color: 'rgba(255,250,245,0.5)',
              fontSize: 11
            }}>async</span>
            <span style={{
              padding: '4px 10px',
              borderRadius: 4,
              background: 'rgba(255,255,255,0.05)',
              color: 'rgba(255,250,245,0.5)',
              fontSize: 11
            }}>export</span>
            <span style={{
              padding: '4px 10px',
              borderRadius: 4,
              background: 'rgba(255,200,150,0.1)',
              color: 'rgba(255,200,150,0.8)',
              fontSize: 11
            }}>active</span>
          </div>
        </Section>

        {/* Input */}
        <Section title="Input Field">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '12px 16px',
            borderRadius: 12,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            <div style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#ffcc99',
              boxShadow: '0 0 8px rgba(255,200,150,0.6)',
              flexShrink: 0,
            }} />
            <input
              type="text"
              placeholder="Describe what you want to build..."
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'rgba(255,250,245,0.8)',
                fontSize: 14,
              }}
            />
            <div style={{
              padding: '4px 10px',
              borderRadius: 6,
              background: 'rgba(255,255,255,0.05)',
            }}>
              <span style={{ color: 'rgba(255,250,245,0.3)', fontSize: 11 }}>⌘ Enter</span>
            </div>
          </div>
        </Section>

        {/* Border Radius */}
        <Section title="Border Radius">
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { name: 'sm', value: 4 },
              { name: 'md', value: 8 },
              { name: 'lg', value: 14 },
              { name: 'xl', value: 16 },
              { name: 'full', value: 9999 },
            ].map(r => (
              <div key={r.name} style={{ textAlign: 'center' }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: r.value,
                  background: 'rgba(255,200,150,0.15)',
                  border: '1px solid rgba(255,200,150,0.3)',
                  marginBottom: 8,
                }} />
                <span style={{ color: 'rgba(255,250,245,0.4)', fontSize: 10 }}>{r.name}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Footer */}
        <div style={{
          marginTop: 64,
          paddingTop: 32,
          borderTop: '1px solid rgba(255,255,255,0.03)',
          textAlign: 'center',
        }}>
          <p style={{ color: 'rgba(255,250,245,0.25)', fontSize: 11 }}>
            LIMN Design Tokens v2.0
          </p>
          <p style={{ color: 'rgba(255,250,245,0.15)', fontSize: 10, marginTop: 8 }}>
            Where blurry intentions become clear forms
          </p>
        </div>
      </div>
    </div>
  );
}
