import React, { useState, useEffect } from 'react';

const LimnLogo = ({ size = 40 }) => (
  <div style={{ position: 'relative', width: size, height: size }}>
    <div style={{
      position: 'absolute',
      width: size * 0.9,
      height: size * 0.9,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255,180,120,0.25) 0%, transparent 70%)',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      filter: 'blur(' + (size * 0.15) + 'px)',
    }} />
    <div style={{
      position: 'absolute',
      width: size * 0.3,
      height: size * 0.3,
      borderRadius: '50%',
      background: 'radial-gradient(circle, #fff 0%, #ffeedd 50%, #ffcc99 100%)',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      boxShadow: '0 0 ' + (size * 0.4) + 'px rgba(255,200,150,0.6)',
    }} />
  </div>
);

// VIBE VIEW
const VibeView = () => {
  const modules = [
    { id: 'auth', name: 'Authentication', desc: 'OAuth 2.0 로그인', x: 50, y: 28, active: true },
    { id: 'user', name: 'User Profile', desc: '사용자 정보', x: 78, y: 50, active: false },
    { id: 'api', name: 'API Layer', desc: 'REST 엔드포인트', x: 22, y: 55, active: false },
    { id: 'db', name: 'Data Store', desc: '영속성 계층', x: 50, y: 78, active: false },
  ];

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        width: 500,
        height: 500,
        background: 'radial-gradient(circle, rgba(255,180,120,0.08) 0%, transparent 60%)',
        top: '15%',
        left: '35%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      <svg style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}>
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,200,150,0.3)" />
            <stop offset="100%" stopColor="rgba(255,200,150,0.05)" />
          </linearGradient>
        </defs>
        <line x1="50%" y1="28%" x2="78%" y2="50%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="50%" y1="28%" x2="22%" y2="55%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="22%" y1="55%" x2="50%" y2="78%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="78%" y1="50%" x2="50%" y2="78%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4" />
      </svg>

      {modules.map((mod) => (
        <div
          key={mod.id}
          style={{
            position: 'absolute',
            left: mod.x + '%',
            top: mod.y + '%',
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
          }}
        >
          {mod.active && (
            <div style={{
              position: 'absolute',
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,180,120,0.15) 0%, transparent 60%)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              filter: 'blur(30px)',
              pointerEvents: 'none',
            }} />
          )}
          <div style={{
            position: 'relative',
            width: mod.active ? 150 : 120,
            height: mod.active ? 150 : 120,
            borderRadius: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 20,
            background: mod.active
              ? 'linear-gradient(145deg, rgba(255,200,150,0.15) 0%, rgba(255,180,120,0.08) 100%)'
              : 'rgba(255,255,255,0.03)',
            border: mod.active
              ? '1px solid rgba(255,200,150,0.35)'
              : '1px solid rgba(255,255,255,0.08)',
            boxShadow: mod.active
              ? '0 0 50px rgba(255,180,120,0.15)'
              : '0 8px 32px rgba(0,0,0,0.2)',
          }}>
            <span style={{
              color: mod.active ? 'rgba(255,240,220,0.95)' : 'rgba(255,250,245,0.7)',
              fontSize: mod.active ? 15 : 13,
              fontWeight: 500,
              marginBottom: 4,
            }}>
              {mod.name}
            </span>
            <span style={{ color: 'rgba(255,250,245,0.4)', fontSize: 11 }}>
              {mod.desc}
            </span>
          </div>
        </div>
      ))}

      <div style={{
        position: 'absolute',
        bottom: 24,
        left: 24,
        padding: 20,
        borderRadius: 16,
        background: 'rgba(18,18,28,0.9)',
        border: '1px solid rgba(255,200,150,0.2)',
        maxWidth: 340,
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <div style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: 'rgba(255,200,150,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            fontSize: 16,
          }}>✦</div>
          <div>
            <p style={{ color: 'rgba(255,240,220,0.9)', fontSize: 14, marginBottom: 6, fontWeight: 500, margin: 0 }}>
              인증 시스템 개요
            </p>
            <p style={{ color: 'rgba(255,250,245,0.5)', fontSize: 13, lineHeight: 1.6, margin: 0, marginTop: 6 }}>
              OAuth 2.0 기반 소셜 로그인을 처리합니다. Google, GitHub 연동이 구현되어 있습니다.
            </p>
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        top: 24,
        right: 24,
        width: 260,
        borderRadius: 16,
        background: 'rgba(18,18,28,0.9)',
        border: '1px solid rgba(255,255,255,0.08)',
        overflow: 'hidden',
      }}>
        <div style={{
          padding: '10px 14px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80' }} />
          <span style={{ color: 'rgba(255,250,245,0.5)', fontSize: 11 }}>Live Preview</span>
        </div>
        <div style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,200,150,0.2)' }} />
          <div style={{ width: 100, height: 10, borderRadius: 4, background: 'rgba(255,255,255,0.1)' }} />
          <div style={{ width: '100%', height: 32, borderRadius: 8, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }} />
          <div style={{ width: '100%', height: 32, borderRadius: 8, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }} />
          <div style={{
            width: '100%',
            height: 36,
            borderRadius: 8,
            background: 'linear-gradient(135deg, rgba(255,200,150,0.9) 0%, rgba(255,180,120,0.9) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 4,
          }}>
            <span style={{ color: '#1a1a2e', fontSize: 13, fontWeight: 500 }}>Sign In</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// LOGIC VIEW
const LogicView = () => {
  const [activeStep, setActiveStep] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(s => s >= 5 ? 1 : s + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const flowSteps = [
    { id: 1, label: 'User clicks login' },
    { id: 2, label: 'Redirect to OAuth' },
    { id: 3, label: 'Receive auth code' },
    { id: 4, label: 'Exchange for token' },
    { id: 5, label: 'Store session' },
  ];

  const codeBlocks = [
    { title: 'handleLogin()', lines: ['provider = getProvider()', 'url = buildAuthURL()', 'redirect(url)'], x: 8, y: 18 },
    { title: 'handleCallback()', lines: ['code = getAuthCode()', 'token = exchange(code)', 'user = getProfile()'], x: 35, y: 40, active: true },
    { title: 'createSession()', lines: ['jwt = sign(user)', 'store(jwt)', 'return session'], x: 12, y: 65 },
  ];

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        top: 24,
        right: 24,
        padding: 20,
        borderRadius: 16,
        background: 'rgba(18,18,28,0.95)',
        border: '1px solid rgba(255,255,255,0.08)',
        width: 240,
      }}>
        <p style={{ color: 'rgba(255,250,245,0.4)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16, margin: 0 }}>
          Login Flow
        </p>
        <div style={{ marginTop: 16 }}>
          {flowSteps.map((step, i) => (
            <div key={step.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 11,
                  background: step.id <= activeStep
                    ? 'linear-gradient(135deg, rgba(255,200,150,0.4) 0%, rgba(255,180,120,0.3) 100%)'
                    : 'rgba(255,255,255,0.05)',
                  border: step.id === activeStep
                    ? '2px solid rgba(255,200,150,0.6)'
                    : '1px solid rgba(255,255,255,0.1)',
                  color: step.id <= activeStep ? 'rgba(255,240,220,0.95)' : 'rgba(255,250,245,0.3)',
                  boxShadow: step.id === activeStep ? '0 0 20px rgba(255,180,120,0.3)' : 'none',
                }}>
                  {step.id <= activeStep ? '✓' : step.id}
                </div>
                {i < flowSteps.length - 1 && (
                  <div style={{
                    width: 2,
                    height: 20,
                    background: step.id < activeStep ? 'rgba(255,200,150,0.4)' : 'rgba(255,255,255,0.1)',
                  }} />
                )}
              </div>
              <span style={{
                color: step.id === activeStep ? 'rgba(255,240,220,0.95)' : step.id < activeStep ? 'rgba(255,250,245,0.6)' : 'rgba(255,250,245,0.35)',
                fontSize: 12,
                paddingTop: 4,
              }}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {codeBlocks.map((block) => (
        <div
          key={block.title}
          style={{
            position: 'absolute',
            left: block.x + '%',
            top: block.y + '%',
          }}
        >
          <div style={{
            borderRadius: 14,
            padding: 16,
            background: 'rgba(18,18,28,0.95)',
            border: block.active ? '1px solid rgba(255,200,150,0.3)' : '1px solid rgba(255,255,255,0.08)',
            boxShadow: block.active ? '0 0 40px rgba(255,180,120,0.1)' : '0 8px 32px rgba(0,0,0,0.2)',
            minWidth: 200,
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 12,
              paddingBottom: 10,
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              <div style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: block.active ? '#ffcc99' : 'rgba(255,255,255,0.3)',
                boxShadow: block.active ? '0 0 8px rgba(255,200,150,0.6)' : 'none',
              }} />
              <span style={{ color: 'rgba(255,200,150,0.9)', fontSize: 13, fontFamily: 'monospace' }}>
                {block.title}
              </span>
            </div>
            {block.lines.map((line, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <span style={{ color: 'rgba(255,250,245,0.25)', fontSize: 10, width: 14, textAlign: 'right' }}>{i + 1}</span>
                <span style={{ color: 'rgba(255,250,245,0.6)', fontSize: 12, fontFamily: 'monospace' }}>{line}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div style={{
        position: 'absolute',
        bottom: 24,
        right: 24,
        padding: 16,
        borderRadius: 14,
        background: 'rgba(18,18,28,0.8)',
        border: '1px solid rgba(255,255,255,0.06)',
        width: 180,
      }}>
        <p style={{ color: 'rgba(255,250,245,0.3)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12, margin: 0 }}>
          Data Shape
        </p>
        <pre style={{ fontFamily: 'monospace', fontSize: 12, color: 'rgba(255,250,245,0.5)', margin: 0, marginTop: 12 }}>
{`{
  user: User
  token: JWT
  expires: Date
}`}
        </pre>
      </div>
    </div>
  );
};

// SYNTAX VIEW
const SyntaxView = () => {
  const [activeLine, setActiveLine] = useState(8);

  const codeLines = [
    "import { OAuth2Client } from 'google-auth-library';",
    "import { SignJWT } from 'jose';",
    "",
    "const client = new OAuth2Client(",
    "  process.env.GOOGLE_CLIENT_ID,",
    "  process.env.GOOGLE_CLIENT_SECRET",
    ");",
    "",
    "export async function handleCallback(code) {",
    "  // Exchange authorization code for tokens",
    "  const { tokens } = await client.getToken(code);",
    "  ",
    "  // Fetch user profile from Google",
    "  const ticket = await client.verifyIdToken({",
    "    idToken: tokens.id_token,",
    "    audience: process.env.GOOGLE_CLIENT_ID,",
    "  });",
    "  ",
    "  const payload = ticket.getPayload();",
    "  ",
    "  // Create session JWT",
    "  const jwt = await new SignJWT({ ",
    "    sub: payload.sub,",
    "    email: payload.email,",
    "  }).setExpirationTime('7d').sign(secret);",
    "    ",
    "  return { jwt, user: payload };",
    "}",
  ];

  return (
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
      <div style={{ flex: 1, padding: 24, overflow: 'auto' }}>
        <div style={{
          borderRadius: 14,
          background: 'rgba(12,12,18,0.95)',
          border: '1px solid rgba(255,255,255,0.08)',
          overflow: 'hidden',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 16px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 12px',
              borderRadius: 6,
              background: 'rgba(255,200,150,0.1)',
            }}>
              <span style={{ color: 'rgba(255,200,150,0.8)', fontSize: 12 }}>AuthService.ts</span>
            </div>
            <div style={{ padding: '6px 12px', opacity: 0.4 }}>
              <span style={{ color: 'rgba(255,250,245,0.5)', fontSize: 12 }}>types.ts</span>
            </div>
          </div>

          <div style={{ padding: 16, fontFamily: 'monospace', fontSize: 13 }}>
            {codeLines.map((line, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveLine(i)}
                style={{
                  display: 'flex',
                  padding: '2px 0',
                  marginLeft: -8,
                  paddingLeft: 8,
                  background: i === activeLine ? 'rgba(255,200,150,0.08)' : 'transparent',
                  borderLeft: i === activeLine ? '2px solid rgba(255,200,150,0.6)' : '2px solid transparent',
                  cursor: 'pointer',
                }}
              >
                <span style={{
                  width: 36,
                  textAlign: 'right',
                  paddingRight: 16,
                  color: 'rgba(255,250,245,0.2)',
                  userSelect: 'none',
                  flexShrink: 0,
                }}>
                  {i + 1}
                </span>
                <span style={{
                  color: line.startsWith('//') ? 'rgba(255,250,245,0.35)' : 'rgba(255,250,245,0.85)',
                }}>
                  {line}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        width: 280,
        borderLeft: '1px solid rgba(255,255,255,0.06)',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}>
        <div style={{
          padding: 16,
          borderRadius: 14,
          background: 'rgba(18,18,28,0.8)',
          border: '1px solid rgba(255,200,150,0.2)',
        }}>
          <p style={{ color: 'rgba(255,250,245,0.3)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, margin: 0 }}>Symbol</p>
          <p style={{ color: 'rgba(255,200,150,0.9)', fontSize: 14, fontFamily: 'monospace', margin: '8px 0 6px 0' }}>handleCallback()</p>
          <p style={{ color: 'rgba(255,250,245,0.5)', fontSize: 12, lineHeight: 1.5, margin: 0 }}>
            OAuth 콜백을 처리하고 세션 토큰을 생성합니다.
          </p>
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <span style={{ padding: '3px 8px', borderRadius: 4, background: 'rgba(255,255,255,0.05)', color: 'rgba(255,250,245,0.5)', fontSize: 11 }}>async</span>
            <span style={{ padding: '3px 8px', borderRadius: 4, background: 'rgba(255,255,255,0.05)', color: 'rgba(255,250,245,0.5)', fontSize: 11 }}>export</span>
          </div>
        </div>

        <div style={{
          padding: 16,
          borderRadius: 14,
          background: 'rgba(18,18,28,0.6)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          <p style={{ color: 'rgba(255,250,245,0.3)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, margin: 0 }}>Type</p>
          <pre style={{ fontFamily: 'monospace', fontSize: 12, color: 'rgba(255,250,245,0.6)', margin: '8px 0 0 0' }}>
{`(code: string)
  => Promise<{
    jwt: string
    user: Payload
  }>`}
          </pre>
        </div>

        <div style={{
          padding: 16,
          borderRadius: 14,
          background: 'rgba(18,18,28,0.6)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          <p style={{ color: 'rgba(255,250,245,0.3)', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, margin: 0 }}>References (3)</p>
          <div style={{ marginTop: 12 }}>
            {['LoginPage.tsx:24', 'middleware.ts:15', 'api/auth.ts:8'].map((ref) => (
              <div key={ref} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: 8,
                borderRadius: 6,
                cursor: 'pointer',
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
                <span style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,250,245,0.5)' }}>{ref}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// MAIN
export default function LimnSemanticZoom() {
  const [zoomLevel, setZoomLevel] = useState(1);
  const labels = ['Vibe', 'Logic', 'Syntax'];
  const descriptions = ['높은 곳에서 전체를 조망', '로직의 흐름을 따라', '코드의 세부로 진입'];

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#08080d',
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    }}>
      <div style={{
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        background: 'rgba(12,12,18,0.98)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <LimnLogo size={32} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ color: 'rgba(255,250,245,0.8)', fontSize: 14 }}>auth-system</span>
            <span style={{ color: 'rgba(255,250,245,0.3)' }}>/</span>
            <span style={{ color: 'rgba(255,250,245,0.5)', fontSize: 14 }}>AuthService.ts</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {[1, 2, 3].map((l) => (
              <button
                key={l}
                onClick={() => setZoomLevel(l)}
                style={{
                  padding: '8px 20px',
                  borderRadius: 8,
                  border: zoomLevel === l ? '1px solid rgba(255,200,150,0.3)' : '1px solid rgba(255,255,255,0.06)',
                  background: zoomLevel === l
                    ? 'linear-gradient(135deg, rgba(255,200,150,0.2) 0%, rgba(255,180,120,0.1) 100%)'
                    : 'transparent',
                  color: zoomLevel === l ? 'rgba(255,220,180,0.95)' : 'rgba(255,250,245,0.35)',
                  fontSize: 13,
                  fontWeight: zoomLevel === l ? 500 : 400,
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >
                {labels[l - 1]}
                {zoomLevel === l && (
                  <div style={{
                    position: 'absolute',
                    bottom: -4,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    background: '#ffcc99',
                    boxShadow: '0 0 8px rgba(255,200,150,0.8)',
                  }} />
                )}
              </button>
            ))}
          </div>
          <span style={{ color: 'rgba(255,250,245,0.3)', fontSize: 11 }}>{descriptions[zoomLevel - 1]}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#4ade80',
            boxShadow: '0 0 8px rgba(74,222,128,0.5)',
          }} />
          <span style={{ color: 'rgba(255,250,245,0.4)', fontSize: 12 }}>Synced</span>
        </div>
      </div>

      <div style={{
        flex: 1,
        background: 'linear-gradient(180deg, #0a0a10 0%, #08080d 100%)',
        position: 'relative',
      }}>
        {zoomLevel === 1 && <VibeView />}
        {zoomLevel === 2 && <LogicView />}
        {zoomLevel === 3 && <SyntaxView />}
      </div>

      <div style={{
        height: 64,
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        background: 'rgba(12,12,18,0.98)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{
          flex: 1,
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
            placeholder={
              zoomLevel === 1 ? "이 시스템에 대해 설명해줘..." :
                zoomLevel === 2 ? "이 흐름을 수정하고 싶어..." :
                  "이 함수를 리팩토링해줘..."
            }
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
      </div>
    </div>
  );
}