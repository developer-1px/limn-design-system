export default function MainFooter() {
  return (
    <footer className="text-center pt-16 pb-8 space-y-4">
      <div className="flex items-center justify-center gap-2 mb-2">
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #fff 0%, #ffeedd 40%, #ffcc99 100%)',
            boxShadow: '0 0 20px rgba(255,200,150,0.4)',
          }}
        />
        <span
          className="text-xs font-medium tracking-[0.3em]"
          style={{
            color: 'rgba(255,250,245,0.4)',
            textShadow: '0 0 20px rgba(255,200,150,0.1)',
          }}
        >
          LIMN
        </span>
      </div>
      <p className="text-xs text-text-faint tracking-wider">
        v2.0.0 — Design System for AI-Powered IDEs
      </p>
      <p className="text-2xs text-text-faint">
        Where blurry intentions become clear forms
      </p>
    </footer>
  )
}
