import { useState, useEffect } from 'react'

const links = [
  { href: '#overview',     label: 'Proyecto' },
  { href: '#sistema',      label: 'UI System' },
  { href: '#comparativa',  label: 'Antes / Después' },
  { href: '#mejoras',      label: 'Mejoras' },
  { href: '#proceso',      label: 'Proceso' },
  { href: '#desktop',      label: 'Desktop' },
  { href: '#mobile',       label: 'Mobile' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/90 backdrop-blur-md border-b border-dark-700/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/imagenes/eurotech-logo-alone.svg"
            alt="Eurotech"
            className="h-7 w-auto"
          />
          <span className="text-dark-300 text-xs font-medium tracking-widest uppercase hidden sm:block">
            Rediseño UI
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-1.5 text-sm text-dark-200 hover:text-white hover:bg-dark-800 rounded-md transition-all duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Figma CTA */}
        <a
          href="https://www.figma.com/proto/eWjURMmjifY2WrpEoxTNCW/Eurotech?node-id=58-1372&t=8phbac9P1AwN1fAU-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=58%3A1372&page-id=51%3A669"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-brand text-white text-sm font-semibold rounded-md hover:bg-brand-hover transition-colors duration-200 glow-red-hover"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>
          Ver en Figma
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-dark-200 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12"/> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dark-850/95 backdrop-blur-md border-t border-dark-700 px-6 py-4 flex flex-col gap-2">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-dark-200 hover:text-white text-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#figma"
            onClick={() => setOpen(false)}
            className="mt-2 py-2.5 bg-brand text-white text-sm font-semibold rounded-md text-center"
          >
            Ver en Figma
          </a>
        </div>
      )}
    </header>
  )
}
