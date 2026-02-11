import './App.css'

function App() {
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center px-6">
      {/* Logo GIF */}
      <div className="logo-glow fade-in">
        <img 
          src="/assets/logo.gif" 
          alt="AI Blocks Logo" 
          className="w-40 h-40 md:w-56 md:h-56"
        />
      </div>

      {/* Text */}
      <div className="mt-12 text-center max-w-2xl">
        <p className="text-sm md:text-base text-white/50 font-light mb-6 fade-in-delay-1">
          After the acquisition of AI Blocks we are back again
        </p>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-wider text-white fade-in-delay-2">
          AI BLOCKS
        </h1>
        
        <p className="mt-8 text-xs md:text-sm tracking-[0.4em] text-white/30 uppercase fade-in-delay-3">
          March 2026
        </p>
      </div>
    </div>
  )
}

export default App
