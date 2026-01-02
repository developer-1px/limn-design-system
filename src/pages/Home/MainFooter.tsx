export default function MainFooter() {
  return (
    <footer className="text-center pt-20 pb-8 space-y-6">
      <div className="flex items-center justify-center gap-3 mb-4">
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
        Illuminating code with warm clarity
      </p>
      <p className="text-2xs text-text-faint/60">
        v2.0.0 — Design System for AI-Powered IDEs
      </p>
    </footer>
  )
}
