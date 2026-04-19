import { useScrollAnimation } from '../hooks/useScrollAnimation'

/* ─────── SECTION LABEL ─────── */
function SectionLabel({ children }) {
  return (
    <span className="inline-block text-brand text-xs font-bold tracking-widest uppercase mb-3">
      {children}
    </span>
  )
}

/* ─────── COLORS ─────── */
const colorPalettes = [
  {
    name: 'Rojo de Marca',
    desc: 'Color principal de la identidad',
    swatches: [
      { name: '950', hex: '#3B080A', text: 'light' },
      { name: '900', hex: '#4A0B0E', text: 'light' },
      { name: '800', hex: '#6B1014', text: 'light' },
      { name: '700', hex: '#8B1519', text: 'light' },
      { name: '600 Brand', hex: '#B31D23', text: 'light', primary: true },
      { name: '500 Hover', hex: '#CC2020', text: 'light' },
      { name: '400',       hex: '#E53535', text: 'light' },
      { name: '300',       hex: '#FF6B6B', text: 'dark'  },
    ],
  },
  {
    name: 'Fondos Oscuros',
    desc: 'Jerarquía de superficies del dark mode',
    swatches: [
      { name: 'BG 950',   hex: '#090909', text: 'light' },
      { name: 'BG 900',   hex: '#111111', text: 'light', primary: true },
      { name: 'BG 850',   hex: '#161616', text: 'light' },
      { name: 'BG 800',   hex: '#1A1A1A', text: 'light' },
      { name: 'BG 750',   hex: '#1E1E1E', text: 'light' },
      { name: 'BG 700',   hex: '#222222', text: 'light' },
      { name: 'Border',   hex: '#2D2D2D', text: 'light' },
      { name: 'Surface',  hex: '#3D3D3D', text: 'light' },
    ],
  },
  {
    name: 'Tipografía',
    desc: 'Escala de valores para texto',
    swatches: [
      { name: 'Text 50',  hex: '#FFFFFF', text: 'dark'  },
      { name: 'Text 100', hex: '#FCFCFC', text: 'dark', primary: true },
      { name: 'Text 200', hex: '#EBEBEB', text: 'dark'  },
      { name: 'Text 300', hex: '#BBBBBB', text: 'dark'  },
      { name: 'Text 400', hex: '#999999', text: 'dark'  },
      { name: 'Text 500', hex: '#888888', text: 'dark'  },
      { name: 'Text 700', hex: '#555555', text: 'light' },
      { name: 'Disabled', hex: '#444444', text: 'light' },
    ],
  },
  {
    name: 'Semánticos',
    desc: 'Estados y notificaciones',
    swatches: [
      { name: 'Success', hex: '#16A34A', text: 'light' },
      { name: 'Success L', hex: '#22C55E', text: 'dark' },
      { name: 'Warning', hex: '#D97706', text: 'light' },
      { name: 'Warning L', hex: '#F59E0B', text: 'dark' },
      { name: 'Error',   hex: '#B31D23', text: 'light' },
      { name: 'Error L', hex: '#E53535', text: 'dark' },
      { name: 'Info',    hex: '#1D4ED8', text: 'light' },
      { name: 'Info L',  hex: '#3B82F6', text: 'dark' },
    ],
  },
]

function ColorSection() {
  const [ref, vis] = useScrollAnimation()
  return (
    <div ref={ref} className="space-y-10">
      <div className={`reveal ${vis ? 'visible' : ''}`}>
        <SectionLabel>Sistema de Color</SectionLabel>
        <h2 className="font-bold text-3xl md:text-4xl text-white">
          Paleta Completa
        </h2>
      </div>
      {colorPalettes.map((palette, pi) => {
        const [pRef, pVis] = useScrollAnimation()
        return (
          <div
            key={palette.name}
            ref={pRef}
            className={`reveal ${pVis ? 'visible' : ''}`}
            style={{ transitionDelay: `${pi * 80}ms` }}
          >
            <div className="flex items-baseline gap-3 mb-3">
              <h3 className="text-white font-semibold text-base">{palette.name}</h3>
              <span className="text-dark-400 text-xs">{palette.desc}</span>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
              {palette.swatches.map(s => (
                <div key={s.name} className="group">
                  <div
                    className={`h-14 rounded-lg mb-1.5 transition-transform duration-200 group-hover:scale-105 ${s.primary ? 'ring-2 ring-white/20' : ''}`}
                    style={{ backgroundColor: s.hex }}
                  />
                  <div className="text-dark-300 text-xs leading-tight">{s.name}</div>
                  <div className="text-dark-500 text-xs font-mono">{s.hex}</div>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ─────── TYPOGRAPHY ─────── */
const typeScale = [
  { name: 'Display',  size: '72px', weight: '700', cls: 'text-6xl font-bold',    sample: 'Herramientas Pro' },
  { name: 'H1',       size: '48px', weight: '700', cls: 'text-5xl font-bold',    sample: 'Catálogo 2024' },
  { name: 'H2',       size: '36px', weight: '700', cls: 'text-4xl font-bold',    sample: 'Novedades Eurotech' },
  { name: 'H3',       size: '28px', weight: '600', cls: 'text-3xl font-semibold',sample: 'Productos destacados' },
  { name: 'H4',       size: '22px', weight: '600', cls: 'text-2xl font-semibold',sample: 'Descripción del producto' },
  { name: 'Body LG',  size: '18px', weight: '400', cls: 'text-lg',               sample: 'Párrafo principal con información sobre el producto.' },
  { name: 'Body',     size: '16px', weight: '400', cls: 'text-base',             sample: 'Texto de contenido general con información relevante para el usuario.' },
  { name: 'Body SM',  size: '14px', weight: '400', cls: 'text-sm text-dark-200', sample: 'Texto secundario, breadcrumbs y metadata de productos.' },
  { name: 'Caption',  size: '12px', weight: '400', cls: 'text-xs text-dark-400', sample: 'Nota legal · Envíos a todo Uruguay · 2024 Eurotech' },
]

function TypographySection() {
  const [ref, vis] = useScrollAnimation()
  return (
    <div ref={ref} className="space-y-8">
      <div className={`reveal ${vis ? 'visible' : ''}`}>
        <SectionLabel>Tipografía</SectionLabel>
        <h2 className="font-bold text-3xl md:text-4xl text-white mb-1">
          Escala de Texto
        </h2>
        <p className="text-dark-400 text-sm">
          <span className="text-white font-semibold">Space Grotesk</span> · Fuente principal del sistema
        </p>
      </div>

      {/* Weights showcase */}
      <div className={`reveal delay-100 p-6 rounded-xl bg-dark-800 border border-dark-700 ${vis ? 'visible' : ''}`}>
        <div className="text-dark-400 text-xs font-mono mb-4">Space Grotesk — Pesos disponibles</div>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {[
            { w: '300', label: 'Light' },
            { w: '400', label: 'Regular' },
            { w: '500', label: 'Medium' },
            { w: '600', label: 'SemiBold' },
            { w: '700', label: 'Bold' },
          ].map(({ w, label }) => (
            <div key={w}>
              <span style={{ fontWeight: w }} className="text-white text-xl leading-none">Aa</span>
              <div className="text-dark-400 text-xs mt-1">{label} {w}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scale */}
      <div className="divide-y divide-dark-700/60">
        {typeScale.map((t, i) => {
          const [tRef, tVis] = useScrollAnimation()
          return (
            <div
              key={t.name}
              ref={tRef}
              className={`reveal flex items-baseline gap-6 py-4 group ${tVis ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="w-20 shrink-0 text-right">
                <div className="text-dark-400 text-xs font-mono">{t.name}</div>
                <div className="text-dark-600 text-xs">{t.size}/{t.weight}</div>
              </div>
              <div className={`${t.cls} truncate`}>{t.sample}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ─────── SPACING ─────── */
const spacingScale = [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96]

function SpacingSection() {
  const [ref, vis] = useScrollAnimation()
  return (
    <div ref={ref} className={`reveal ${vis ? 'visible' : ''}`}>
      <SectionLabel>Espaciado y Medidas</SectionLabel>
      <h2 className="font-bold text-3xl md:text-4xl text-white mb-8">
        Escala Base 4px
      </h2>
      <div className="flex flex-wrap items-end gap-6">
        {spacingScale.map(px => (
          <div key={px} className="flex flex-col items-center gap-2">
            <div
              className="bg-brand/30 border border-brand/60 rounded-sm"
              style={{ width: `${px}px`, height: `${px}px` }}
            />
            <span className="text-dark-400 text-xs font-mono">{px}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-dark-500 text-sm">Todos los valores de spacing siguen múltiplos de 4px para consistencia visual.</p>
    </div>
  )
}

/* ─────── COMPONENTS ─────── */
function ComponentsSection() {
  const [ref, vis] = useScrollAnimation()

  return (
    <div ref={ref} className={`reveal space-y-12 ${vis ? 'visible' : ''}`}>
      <div>
        <SectionLabel>Componentes UI</SectionLabel>
        <h2 className="font-bold text-3xl md:text-4xl text-white">
          Librería de Componentes
        </h2>
      </div>

      {/* Buttons */}
      <div>
        <h3 className="text-dark-300 text-xs font-bold tracking-widest uppercase mb-5">Botones</h3>
        <div className="space-y-4">
          {/* Variants */}
          <div className="flex flex-wrap gap-3">
            <button className="px-5 py-2.5 bg-brand hover:bg-brand-hover text-white text-sm font-semibold rounded-md transition-all glow-red-hover">
              Primary
            </button>
            <button className="px-5 py-2.5 border border-brand text-brand hover:bg-brand/10 text-sm font-semibold rounded-md transition-all">
              Secondary
            </button>
            <button className="px-5 py-2.5 bg-dark-700 hover:bg-dark-600 text-white text-sm font-semibold rounded-md transition-all">
              Tertiary
            </button>
            <button className="px-5 py-2.5 border border-dark-600 text-dark-200 hover:border-dark-400 text-sm font-semibold rounded-md transition-all">
              Ghost
            </button>
            <button className="px-5 py-2.5 text-sm font-semibold rounded-md bg-dark-700/40 text-dark-500 cursor-not-allowed">
              Disabled
            </button>
          </div>
          {/* Sizes */}
          <div className="flex flex-wrap items-center gap-3">
            <button className="px-3 py-1.5 bg-brand text-white text-xs font-semibold rounded">SM</button>
            <button className="px-5 py-2.5 bg-brand text-white text-sm font-semibold rounded-md">MD</button>
            <button className="px-7 py-3.5 bg-brand text-white text-base font-semibold rounded-md">LG</button>
            <button className="flex-1 min-w-[180px] py-3 bg-brand text-white text-sm font-semibold rounded-md text-center">FULL</button>
          </div>
          {/* Icon buttons */}
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-brand text-white text-sm font-semibold rounded-md">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
              Agregar al Carrito
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 border border-dark-600 text-dark-200 text-sm font-semibold rounded-md">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
              Favoritos
            </button>
          </div>
        </div>
      </div>

      {/* Inputs */}
      <div>
        <h3 className="text-dark-300 text-xs font-bold tracking-widest uppercase mb-5">Inputs</h3>
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
          <div>
            <label className="block text-dark-300 text-xs font-medium mb-2">Default</label>
            <input
              readOnly
              value={'Llave de impacto 1/2"'}
              className="w-full px-4 py-2.5 bg-dark-800 border border-dark-600 text-white text-sm rounded-md outline-none"
            />
          </div>
          <div>
            <label className="block text-dark-300 text-xs font-medium mb-2">Focus</label>
            <input
              readOnly
              value="Extractores..."
              className="w-full px-4 py-2.5 bg-dark-800 border border-brand text-white text-sm rounded-md outline-none ring-2 ring-brand/20"
            />
          </div>
          <div>
            <label className="block text-dark-300 text-xs font-medium mb-2">Error</label>
            <input
              readOnly
              value=""
              placeholder="Campo requerido"
              className="w-full px-4 py-2.5 bg-dark-800 border border-red-500/60 text-white text-sm rounded-md placeholder:text-red-400/70 outline-none"
            />
            <p className="text-red-400 text-xs mt-1">Este campo es requerido</p>
          </div>
          <div>
            <label className="block text-dark-300 text-xs font-medium mb-2">Search</label>
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-400" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <input
                readOnly
                placeholder="Buscar productos..."
                className="w-full pl-9 pr-4 py-2.5 bg-dark-800 border border-dark-600 text-white text-sm rounded-md outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div>
        <h3 className="text-dark-300 text-xs font-bold tracking-widest uppercase mb-5">Tarjetas de Producto</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { brand: 'MAXIM', name: 'Llave de Impacto Industrial 1/2"', price: '$349.00', sale: '$299.00', badge: 'Oferta' },
            { brand: 'STANLEY', name: 'Set de Herramientas Pro 85 pzas', price: '$1,200.00', badge: 'Nuevo' },
            { brand: 'EUROTECH', name: 'Compresor de Refrigeración R410', price: '$899.00', badge: 'Stock' },
            { brand: 'DEWALT', name: 'Extractores Tornillos Rotos 5 pzas', price: '$185.00', sale: '$155.00', badge: 'Oferta' },
          ].map(({ brand, name, price, sale, badge }) => (
            <div key={name} className="group bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-brand/40 transition-all duration-300">
              <div className="relative aspect-square bg-dark-750 flex items-center justify-center p-4">
                <div className="w-16 h-16 rounded-lg bg-dark-600/50 flex items-center justify-center text-dark-400">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
                </div>
                {badge && (
                  <span className={`absolute top-2 left-2 px-2 py-0.5 text-xs font-bold rounded ${badge === 'Oferta' ? 'bg-brand text-white' : badge === 'Nuevo' ? 'bg-green-600 text-white' : 'bg-dark-600 text-dark-200'}`}>
                    {badge}
                  </span>
                )}
              </div>
              <div className="p-3">
                <div className="text-dark-400 text-xs mb-1">{brand}</div>
                <div className="text-white text-xs font-medium leading-snug mb-2 line-clamp-2">{name}</div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`font-bold text-sm ${sale ? 'text-white' : 'text-white'}`}>{sale || price}</span>
                  {sale && <span className="text-dark-400 text-xs line-through">{price}</span>}
                </div>
                <button className="w-full py-1.5 bg-brand hover:bg-brand-hover text-white text-xs font-semibold rounded-md transition-colors">
                  + Agregar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Badges */}
      <div>
        <h3 className="text-dark-300 text-xs font-bold tracking-widest uppercase mb-5">Badges y Tags</h3>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-green-600/20 text-green-400 border border-green-600/30">En Stock</span>
          <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-dark-700 text-dark-300 border border-dark-600">Agotado</span>
          <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-brand/20 text-red-400 border border-brand/30">Oferta -20%</span>
          <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-blue-600/20 text-blue-400 border border-blue-600/30">Nuevo</span>
          <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-yellow-600/20 text-yellow-400 border border-yellow-600/30">Mayorista</span>
          <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-purple-600/20 text-purple-400 border border-purple-600/30">Envío gratis</span>
          <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-dark-700 text-white border border-dark-500">Industrial</span>
        </div>
      </div>

      {/* Category nav */}
      <div>
        <h3 className="text-dark-300 text-xs font-bold tracking-widest uppercase mb-5">Navegación de Categorías</h3>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {['Todos', 'Manuales', 'Eléctricas', 'Neumáticas', 'Sets', 'Medición', 'Extracción', 'Por Rubro'].map((cat, i) => (
            <button
              key={cat}
              className={`shrink-0 px-4 py-2 text-sm rounded-full font-medium transition-all ${
                i === 0
                  ? 'bg-brand text-white'
                  : 'bg-dark-800 border border-dark-600 text-dark-300 hover:text-white hover:border-dark-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Alerts */}
      <div>
        <h3 className="text-dark-300 text-xs font-bold tracking-widest uppercase mb-5">Notificaciones</h3>
        <div className="space-y-3 max-w-lg">
          <div className="flex items-center gap-3 px-4 py-3 bg-green-600/10 border border-green-600/30 rounded-lg">
            <svg className="text-green-400 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <span className="text-green-300 text-sm">Producto agregado al carrito exitosamente</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 bg-yellow-600/10 border border-yellow-600/30 rounded-lg">
            <svg className="text-yellow-400 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <span className="text-yellow-300 text-sm">Solo quedan 3 unidades disponibles</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 bg-brand/10 border border-brand/30 rounded-lg">
            <svg className="text-red-400 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <span className="text-red-300 text-sm">Error al procesar el pago. Verifique sus datos.</span>
          </div>
        </div>
      </div>

      {/* Design assets screenshot */}
      <div>
        <h3 className="text-dark-300 text-xs font-bold tracking-widest uppercase mb-5">Vista General del Sistema</h3>
        <div className="rounded-xl overflow-hidden border border-dark-700 bg-dark-800">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-dark-700 bg-dark-850">
            <div className="w-3 h-3 rounded-full bg-brand/60" />
            <span className="text-dark-400 text-xs font-mono">Figma — Eurotech Design System · Assets</span>
          </div>
          <img
            src="/imagenes/Assets.png"
            alt="Eurotech Design System Assets"
            className="w-full object-cover opacity-90"
          />
        </div>
      </div>
    </div>
  )
}

/* ─────── MAIN EXPORT ─────── */
export default function SystemDesign() {
  return (
    <section id="sistema" className="relative py-28 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-brand/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-24">
        <ColorSection />
        <TypographySection />
        <SpacingSection />
        <ComponentsSection />
      </div>
    </section>
  )
}
