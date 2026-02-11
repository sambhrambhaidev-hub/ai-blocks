import './App.css'
import StarField from './components/StarField'

function App() {
  return (
    <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Star field background */}
      <StarField />

      {/* Nebula blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        <div
          className="nebula-1 absolute rounded-full blur-3xl"
          style={{
            width: '500px', height: '500px',
            top: '10%', left: '-10%',
            background: 'radial-gradient(circle, rgba(100,60,200,0.3) 0%, transparent 70%)',
          }}
        />
        <div
          className="nebula-2 absolute rounded-full blur-3xl"
          style={{
            width: '400px', height: '400px',
            bottom: '5%', right: '-5%',
            background: 'radial-gradient(circle, rgba(40,100,220,0.25) 0%, transparent 70%)',
          }}
        />
        <div
          className="nebula-3 absolute rounded-full blur-3xl"
          style={{
            width: '350px', height: '350px',
            top: '50%', left: '60%',
            background: 'radial-gradient(circle, rgba(160,60,180,0.2) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Orbit ring around logo */}
      <div
        className="absolute orbit-ring pointer-events-none"
        style={{
          width: '320px', height: '320px',
          top: '50%', left: '50%',
          marginTop: '-40px',
          zIndex: 2,
        }}
      >
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
          <ellipse cx="160" cy="160" rx="155" ry="155"
            stroke="url(#orbitGrad)" strokeWidth="0.5" opacity="0.4" />
          {/* Orbiting dot */}
          <circle cx="315" cy="160" r="3" fill="rgba(160,140,255,0.8)">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
          </circle>
          <defs>
            <linearGradient id="orbitGrad" x1="0" y1="0" x2="320" y2="320">
              <stop offset="0%" stopColor="rgba(140,100,255,0.6)" />
              <stop offset="50%" stopColor="rgba(80,160,255,0.3)" />
              <stop offset="100%" stopColor="rgba(140,100,255,0.6)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative flex flex-col items-center justify-center" style={{ zIndex: 10 }}>
        {/* Rotating Logo */}
        <div className="logo-glow fade-in">
          <img
            src="/assets/logo.png"
            alt="AI Blocks Logo"
            className="w-56 h-56 md:w-80 md:h-80 logo-spin"
          />
        </div>

        {/* Text */}
        <div className="mt-8 text-center">
          <h1
            className="fade-in-delay-1 text-white"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 'clamp(3rem, 10vw, 6rem)',
              fontWeight: 900,
              letterSpacing: '0.15em',
              textShadow: '0 0 30px rgba(140,120,255,0.4), 0 0 60px rgba(80,60,200,0.2)',
            }}
          >
            AI-BLOCKS
          </h1>
          <p
            className="mt-5 uppercase tracking-[0.4em] text-white/50 fade-in-delay-2"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(0.9rem, 2.5vw, 1.4rem)',
              fontWeight: 300,
            }}
          >
            Coming Soon
          </p>
          <p
            className="mt-3 uppercase tracking-[0.6em] fade-in-delay-3"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 'clamp(0.7rem, 1.5vw, 1rem)',
              fontWeight: 500,
              color: 'rgba(140, 130, 255, 0.7)',
            }}
          >
            March 2026
          </p>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3 }}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
              background: i % 2 === 0 ? 'rgba(140,120,255,0.6)' : 'rgba(100,180,255,0.5)',
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2.5 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default App
