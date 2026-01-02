interface PageHeaderProps {
  subtitle: string
}

export function PageHeader({ subtitle }: PageHeaderProps) {
  return (
    <div style={{ padding: '32px 0', textAlign: 'center' }}>
      {/* Logo */}
      <div
        style={{
          position: 'relative',
          width: 64,
          height: 64,
          margin: '0 auto 24px auto',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,180,120,0.25) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(12px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #fff 0%, #ffeedd 50%, #ffcc99 100%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 24px rgba(255,200,150,0.6)',
          }}
        />
      </div>

      <h1
        style={{
          color: 'rgba(255,240,220,0.98)',
          fontSize: 32,
          fontWeight: 300,
          margin: 0,
          letterSpacing: '0.3em',
          textShadow: '0 0 40px rgba(255,200,150,0.2)',
        }}
      >
        LIMN
      </h1>
      <p
        style={{
          color: 'rgba(255,250,245,0.4)',
          fontSize: 12,
          margin: '8px 0 0 0',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}
      >
        {subtitle}
      </p>
    </div>
  )
}
