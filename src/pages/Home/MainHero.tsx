export default function MainHero() {
  return (
    <div className="flex flex-col items-center text-center space-y-8">
      {/* Logo with enhanced flow effect - Pure light point */}
      <div className="relative group cursor-default">
        {/* Outer glow - large ambient */}
        <div
          className="absolute pointer-events-none transition-opacity duration-700"
          style={{
            width: 500,
            height: 500,
            background: 'radial-gradient(circle, rgba(255,150,100,0.12) 0%, rgba(255,180,120,0.06) 40%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(100px)',
            opacity: 1,
          }}
        />
        {/* Middle glow - focused */}
        <div
          className="absolute pointer-events-none transition-opacity duration-500"
          style={{
            width: 300,
            height: 300,
            background: 'radial-gradient(circle, rgba(255,180,120,0.2) 0%, rgba(255,200,150,0.1) 50%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(80px)',
            opacity: 1,
          }}
        />
        {/* Inner glow - intense */}
        <div
          className="absolute pointer-events-none transition-opacity duration-300 group-hover:opacity-100"
          style={{
            width: 200,
            height: 200,
            background: 'radial-gradient(circle, rgba(255,180,120,0.25) 0%, transparent 60%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(50px)',
            opacity: 0.8,
          }}
        />
        {/* Core light point - 흐릿한 의도가 선명한 형태가 되는 */}
        <div
          className="relative transition-opacity duration-500 group-hover:opacity-100"
          style={{
            width: 100,
            height: 100,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #fff 0%, #ffeedd 30%, #ffcc99 100%)',
            boxShadow: '0 0 60px rgba(255,200,150,0.6), 0 0 120px rgba(255,180,120,0.4), 0 0 180px rgba(255,150,100,0.2)',
            opacity: 0.95,
          }}
        />
      </div>

      {/* Wordmark - Enhanced */}
      <div className="relative">
        <div
          className="absolute -inset-x-16 -inset-y-4 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(255,180,120,0.08) 0%, transparent 60%)',
            filter: 'blur(30px)',
          }}
        />
        <h1
          className="relative text-6xl font-extralight tracking-[0.4em] ml-[0.4em]"
          style={{
            color: 'rgba(255,250,245,0.98)',
            textShadow: '0 0 40px rgba(255,200,150,0.3), 0 0 80px rgba(255,180,120,0.15)',
          }}
        >
          LIMN
        </h1>
      </div>

      {/* Tagline - Enhanced */}
      <div className="space-y-4">
        <p
          className="text-base tracking-[0.15em] leading-relaxed max-w-md"
          style={{
            color: 'rgba(255,250,245,0.5)',
            textShadow: '0 0 20px rgba(255,200,150,0.1)',
          }}
        >
          흐릿한 의도가 선명한 형태가 되는 곳
        </p>

        <p className="text-sm text-text-tertiary max-w-xl leading-relaxed">
          AI-powered IDE interface components with a warm, focused design language
        </p>
      </div>
    </div>
  )
}
