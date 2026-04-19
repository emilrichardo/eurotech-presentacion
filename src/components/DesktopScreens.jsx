import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { BrowserFrame } from './Mockups'

const FIGMA_DESKTOP = 'https://www.figma.com/proto/eWjURMmjifY2WrpEoxTNCW/Eurotech?node-id=58-1372&t=8phbac9P1AwN1fAU-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=58%3A1372&page-id=51%3A669'

const desktopScreens = [
  { file: 'Inicio - Eurotech Industrial.png',          label: 'Home' },
  { file: 'Categoria - Eurotech.png',                  label: 'Categoría' },
  { file: 'Categoria nivel 2 - Eurotech.png',          label: 'Subcategoría' },
  { file: 'Categoria nivel 3 - Eurotech.png',          label: 'Categoría Nivel 3' },
  { file: 'Pistola de Impacto Pro-Series - Eurotech.png', label: 'Detalle de Producto' },
  { file: 'Paso 1_ Carrito y Envío.png',               label: 'Carrito y Envío' },
  { file: 'Paso 2_ Método de Pago.png',                label: 'Método de Pago' },
  { file: 'Paso 3_ Datos del Cliente.png',             label: 'Datos del Cliente' },
  { file: '¡Gracias por tu compra!.png',               label: 'Confirmación' },
  { file: 'Iniciar sesión/Registro - Eurotech.png',    label: 'Login / Registro' },
  { file: 'Mi cuenta Escritorio - Eurotech.png',       label: 'Mi Cuenta' },
  { file: 'Mi cuenta Escritorio mayorista - Eurotech.png', label: 'Cuenta Mayorista' },
  { file: 'Mi cuenta Pedidos - Eurotech.png',          label: 'Mis Pedidos' },
  { file: 'Mi cuenta Direcciones - Eurotech.png',      label: 'Mis Direcciones' },
  { file: 'Mi cuenta Detalles de cuenta - Eurotech.png',  label: 'Detalles de Cuenta' },
  { file: 'Registro mayoristas - Eurotech.png',        label: 'Registro Mayoristas' },
]

function encode(str) {
  return str.split('/').map(encodeURIComponent).join('/')
}

export default function DesktopScreens() {
  const [hRef, hVis] = useScrollAnimation()

  return (
    <section id="desktop" className="relative py-28 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={hRef} className={`reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 ${hVis ? 'visible' : ''}`}>
          <div>
            <span className="text-brand text-xs font-bold tracking-widest uppercase">Pantallas</span>
            <h2 className="font-bold text-4xl md:text-5xl text-white mt-2">
              Vistas Desktop
            </h2>
            <p className="text-dark-300 text-sm mt-2">
              {desktopScreens.length} pantallas diseñadas · Scroll en el mockup principal
            </p>
          </div>
          <a
            href={FIGMA_DESKTOP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brand-hover text-white font-semibold rounded-md transition-colors text-sm shrink-0 glow-red-hover"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>
            Abrir Figma Desktop
          </a>
        </div>

        {/* Hero browser - scrollable home */}
        <div className="mb-16">
          <div className="text-dark-400 text-xs font-mono mb-3 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-brand animate-glow" />
            Vista principal — scroll para ver la pantalla completa
          </div>
          <BrowserFrame url="eurotech.uy — Inicio" title="Homepage">
            <div className="browser-scroll" style={{ height: '520px' }}>
              <img
                src={`/imagenes/desktop/${encode('Inicio - Eurotech Industrial.png')}`}
                alt="Inicio Desktop"
                className="w-full"
              />
            </div>
          </BrowserFrame>
        </div>

        {/* Grid of all screens */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {desktopScreens.map(({ file, label }, i) => {
            const [ref, vis] = useScrollAnimation()
            return (
              <div
                key={file}
                ref={ref}
                className={`reveal group ${vis ? 'visible' : ''}`}
                style={{ transitionDelay: `${(i % 4) * 80}ms` }}
              >
                <BrowserFrame url={`eurotech.uy — ${label}`} className="hover:border-brand/40 transition-all duration-300">
                  <div className="overflow-hidden" style={{ height: '200px' }}>
                    <img
                      src={`/imagenes/desktop/${encode(file)}`}
                      alt={label}
                      className="w-full object-top object-cover h-full group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </BrowserFrame>
                <div className="mt-2 flex items-center justify-between px-1">
                  <span className="text-dark-300 text-xs font-medium">{label}</span>
                  <span className="text-dark-600 text-xs font-mono">{String(i + 1).padStart(2, '0')}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
