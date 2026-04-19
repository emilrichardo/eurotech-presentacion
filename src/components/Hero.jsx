import { useEffect, useState } from 'react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden scanlines">
      {/* Background layers */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-red-glow opacity-80 animate-glow" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-dark-900 to-transparent" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(#B31D23 1px, transparent 1px), linear-gradient(90deg, #B31D23 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-brand/20 animate-glow"
          style={{
            width: `${[4,6,3,5,4,7][i]}px`,
            height: `${[4,6,3,5,4,7][i]}px`,
            left: `${[15,75,30,85,50,60][i]}%`,
            top: `${[25,40,65,55,80,30][i]}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + i * 0.4}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        {/* Neuraz badge */}
        <div
          className={`mb-10 flex items-center gap-2 px-4 py-2 rounded-full border border-dark-600 bg-dark-800/60 backdrop-blur-sm transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <span className="text-dark-300 text-xs font-medium tracking-widest uppercase">Presentado por</span>
          <img src="/imagenes/logo-neuraz.svg" alt="Neuraz" className="h-5 w-auto opacity-80" />
        </div>

        {/* Main logo */}
        <div
          className={`mb-6 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <img
            src="/imagenes/eurotech-logo-alone.svg"
            alt="Eurotech Industrial"
            className="h-16 md:h-24 w-auto mx-auto"
          />
        </div>

        {/* Title */}
        <h1
          className={`font-bold text-5xl sm:text-7xl md:text-8xl leading-none tracking-tight mb-4 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '350ms' }}
        >
          <span className="block text-white">Rediseño</span>
          <span className="block text-gradient-red">UX / UI</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-dark-200 text-lg md:text-xl font-medium max-w-xl mb-3 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '450ms' }}
        >
          Sistema de diseño · E-commerce Industrial · Uruguay & Argentina
        </p>

        {/* Tags */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '550ms' }}
        >
          {['Dark Mode', 'Mobile First', 'E-commerce B2C + B2B', 'Design System', 'WordPress · WooCommerce', '.uy · .ar'].map(tag => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-dark-800/80 border border-dark-600 text-dark-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '650ms' }}
        >
          <a
            href="#overview"
            className="group flex items-center gap-2 px-7 py-3.5 bg-brand hover:bg-brand-hover text-white font-semibold rounded-md transition-all duration-200 glow-red text-sm"
          >
            Ver Presentación
            <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a
            href="#figma"
            className="flex items-center gap-2 px-7 py-3.5 border border-dark-500 hover:border-brand text-dark-100 hover:text-white font-semibold rounded-md transition-all duration-200 text-sm"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>
            Abrir en Figma
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '900ms' }}
      >
        <span className="text-dark-400 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand/60 to-transparent animate-glow" />
      </div>

      {/* Year tag */}
      <div className="absolute bottom-8 right-6 text-dark-500 text-xs font-mono tracking-wider hidden md:block">
        2024 — 2025
      </div>
    </section>
  )
}
