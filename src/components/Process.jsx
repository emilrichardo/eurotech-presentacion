import { useScrollAnimation } from '../hooks/useScrollAnimation'

/* ─── Wireframe SVG mockup ─── */
function WireframeMockup() {
  return (
    <div className="bg-dark-850 rounded-lg p-4 border border-dark-700 text-dark-500" style={{ minHeight: '280px' }}>
      {/* Browser top */}
      <div className="flex items-center gap-1 mb-3">
        <div className="w-2 h-2 rounded-full border border-dark-600" />
        <div className="w-2 h-2 rounded-full border border-dark-600" />
        <div className="w-2 h-2 rounded-full border border-dark-600" />
        <div className="flex-1 ml-2 h-3 rounded-full border border-dark-600 border-dashed" />
      </div>
      {/* Nav bar wire */}
      <div className="h-7 border border-dark-600 border-dashed rounded mb-2 flex items-center px-3 gap-3">
        <div className="w-10 h-2 bg-dark-600/40 rounded" />
        <div className="flex-1" />
        {[1,2,3,4].map(i => <div key={i} className="w-8 h-1.5 bg-dark-600/30 rounded" />)}
        <div className="w-6 h-2 bg-brand/20 rounded" />
      </div>
      {/* Hero wire */}
      <div className="flex gap-2 mb-2">
        <div className="flex-1 h-16 border border-dark-600 border-dashed rounded flex flex-col gap-2 p-2">
          <div className="w-2/3 h-2 bg-dark-600/40 rounded" />
          <div className="w-1/2 h-3 bg-dark-500/30 rounded" />
          <div className="w-16 h-2.5 bg-brand/20 rounded" />
        </div>
        <div className="flex-1 h-16 border border-dark-600 border-dashed rounded flex items-center justify-center">
          <div className="w-12 h-8 border border-dark-600/60 border-dashed rounded" />
        </div>
      </div>
      {/* Category pills wire */}
      <div className="flex gap-1.5 mb-2">
        {[20,16,18,14,16,20].map((w,i) => (
          <div key={i} className={`h-4 rounded-full border border-dashed ${i===0?'border-brand/40 bg-brand/10':' border-dark-600'}`} style={{ width: `${w * 3}px` }} />
        ))}
      </div>
      {/* Product grid wire */}
      <div className="grid grid-cols-4 gap-1.5 mb-2">
        {[...Array(8)].map((_,i) => (
          <div key={i} className="border border-dark-600 border-dashed rounded p-1">
            <div className="h-8 bg-dark-700/30 rounded mb-1" />
            <div className="h-1.5 bg-dark-600/30 rounded mb-1 w-3/4" />
            <div className="h-1.5 bg-brand/20 rounded w-1/2" />
          </div>
        ))}
      </div>
      {/* Banner wire */}
      <div className="h-10 border border-dark-600 border-dashed rounded flex items-center px-3 gap-3">
        <div className="w-1/3 h-2 bg-dark-600/30 rounded" />
        <div className="flex-1" />
        <div className="w-16 h-2.5 bg-brand/20 rounded" />
      </div>
      {/* Watermark */}
      <div className="mt-3 text-center">
        <span className="text-dark-700 text-xs font-mono tracking-widest">WIREFRAME · EUROTECH HOME</span>
      </div>
    </div>
  )
}

/* ─── Design proposal mockup ─── */
function DesignMockup() {
  return (
    <div className="rounded-lg overflow-hidden border border-brand/30 shadow-xl" style={{ minHeight: '280px' }}>
      <img
        src="/imagenes/desktop/Inicio%20-%20Eurotech%20Industrial.png"
        alt="Propuesta de diseño"
        className="w-full object-top"
        style={{ maxHeight: '280px', objectFit: 'cover' }}
      />
    </div>
  )
}

/* ─── Development mockup ─── */
function DevMockup() {
  return (
    <div className="bg-dark-950 rounded-lg overflow-hidden border border-dark-700 font-mono text-xs" style={{ minHeight: '280px', padding: '1rem' }}>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-brand/60" />
        <span className="text-dark-500">terminal</span>
      </div>
      <div className="space-y-1 text-[11px] leading-relaxed">
        <p><span className="text-brand">$</span> <span className="text-green-400">wp</span> <span className="text-dark-200">core install --url=eurotech.uy</span></p>
        <p className="text-dark-500">→ WordPress 6.4 · PHP 8.2 · MySQL 8.0</p>
        <p><span className="text-brand">$</span> <span className="text-green-400">wp</span> <span className="text-dark-200">plugin install woocommerce --activate</span></p>
        <p className="text-green-400/70">✓ WooCommerce 8.x activado</p>
        <p className="mt-1"><span className="text-brand">$</span> <span className="text-green-400">wp</span> <span className="text-dark-200">theme install eurotech-child</span></p>
        <p className="text-dark-500">→ Tema child · Design system integrado</p>
        <div className="mt-2 p-2 bg-dark-800/80 rounded border border-dark-700">
          <p className="text-dark-400">// functions.php</p>
          <p><span className="text-blue-400">add_filter</span><span className="text-dark-200">(</span><span className="text-yellow-400">'woocommerce_product_query'</span><span className="text-dark-200">,</span></p>
          <p className="pl-3"><span className="text-yellow-400">'eurotech_custom_query'</span><span className="text-dark-200">);</span></p>
          <p className="mt-1 text-dark-400">// Hooks personalizados mayoristas</p>
          <p><span className="text-blue-400">add_action</span><span className="text-dark-200">(</span><span className="text-yellow-400">'init'</span><span className="text-dark-200">, </span><span className="text-yellow-400">'register_mayorista_role'</span><span className="text-dark-200">);</span></p>
        </div>
        <p className="mt-2 text-green-400/70">✓ Build exitoso · eurotech.uy · eurotech.ar</p>
      </div>
    </div>
  )
}

/* ─── Integrations mockup ─── */
function IntegrationsMockup() {
  const integrations = [
    {
      name: 'MercadoPago',
      icon: '💳',
      color: 'text-blue-400 bg-blue-900/20 border-blue-700/40',
      desc: 'Pagos, cuotas, QR',
    },
    {
      name: 'OCA / UPS',
      icon: '📦',
      color: 'text-orange-400 bg-orange-900/20 border-orange-700/40',
      desc: 'Envíos y tracking',
    },
    {
      name: 'Aleph ERP',
      icon: '📊',
      color: 'text-purple-400 bg-purple-900/20 border-purple-700/40',
      desc: 'Facturación electrónica',
    },
    {
      name: 'MercadoLibre',
      icon: '🛒',
      color: 'text-yellow-400 bg-yellow-900/20 border-yellow-700/40',
      desc: 'Sync catálogo + ventas',
    },
  ]

  return (
    <div className="bg-dark-850 rounded-lg p-4 border border-dark-700" style={{ minHeight: '280px' }}>
      {/* Central hub */}
      <div className="flex items-center justify-center mb-5">
        <div className="relative">
          <div className="w-14 h-14 rounded-xl bg-brand/20 border border-brand/50 flex items-center justify-center">
            <img src="/imagenes/eurotech-logo-alone.svg" alt="Eurotech" className="h-7 w-auto" />
          </div>
          {/* Connecting lines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute -left-10 w-10 h-px bg-gradient-to-l from-brand/40 to-transparent" />
            <div className="absolute -right-10 w-10 h-px bg-gradient-to-r from-brand/40 to-transparent" />
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 h-8 w-px bg-gradient-to-t from-brand/40 to-transparent" />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-8 w-px bg-gradient-to-b from-brand/40 to-transparent" />
          </div>
        </div>
      </div>
      <p className="text-center text-dark-400 text-xs mb-4">Eurotech como hub central</p>
      <div className="grid grid-cols-2 gap-2">
        {integrations.map(({ name, icon, color, desc }) => (
          <div key={name} className={`flex items-center gap-2.5 p-2.5 rounded-lg border ${color} transition-all`}>
            <span className="text-lg">{icon}</span>
            <div>
              <div className="text-white text-xs font-semibold">{name}</div>
              <div className="text-dark-400 text-[10px]">{desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 p-2.5 bg-dark-800/60 rounded-lg border border-dark-700">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-[10px] font-medium">Estado de integraciones</span>
        </div>
        <div className="grid grid-cols-2 gap-1 text-[10px]">
          {['Pasarela de pago activa', 'Envíos configurados', 'Facturación conectada', 'ML sincronizado'].map(s => (
            <div key={s} className="flex items-center gap-1 text-dark-300">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-green-400"><polyline points="20 6 9 17 4 12"/></svg>
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const steps = [
  {
    num: '01',
    tag: 'Estrategia',
    title: 'Wireframes & Arquitectura',
    desc: 'Definición de la nueva arquitectura de información, flujos de usuario y wireframes de baja fidelidad. Se mapearon los 18 flujos principales y se redefinió la jerarquía de categorías para eliminar la elección obligatoria del home.',
    bullets: [
      'Auditoría del sitio anterior',
      'Mapa de sitio revisado',
      'Wireframes de todas las vistas',
      'Flujos de usuario documentados',
    ],
    visual: <WireframeMockup />,
    accentColor: 'from-dark-600 to-dark-700',
  },
  {
    num: '02',
    tag: 'Diseño',
    title: 'Propuesta Visual',
    desc: 'Diseño completo en Figma: sistema de componentes, paleta de colores, tipografía, iconografía y todas las pantallas en alta fidelidad. Dark mode premium con el rojo de marca como acento principal.',
    bullets: [
      'Sistema de diseño en Figma',
      '40+ componentes UI',
      'Prototipo interactivo',
      'Dark mode desde el inicio',
    ],
    visual: <DesignMockup />,
    accentColor: 'from-brand/20 to-dark-700',
  },
  {
    num: '03',
    tag: 'Desarrollo',
    title: 'Implementación Web',
    desc: 'Desarrollo sobre WordPress + WooCommerce + PHP. El design system se implementa como un tema child con bloques y componentes reutilizables. Optimización SEO, velocidad y accesibilidad. Desplegado en eurotech.uy y eurotech.ar.',
    bullets: [
      'WordPress 6 + WooCommerce 8',
      'PHP 8.2 · Tema child a medida',
      'Roles: cliente / mayorista',
      'Optimización SEO + Core Web Vitals',
    ],
    visual: <DevMockup />,
    accentColor: 'from-blue-900/20 to-dark-700',
  },
  {
    num: '04',
    tag: 'Integraciones',
    title: 'Pagos, Envíos & ERP',
    desc: 'Integración de todos los servicios externos: pasarela MercadoPago, métodos de envío (OCA/UPS), conexión con Aleph sistema de facturación electrónica uruguayo, y sincronización bidireccional con MercadoLibre.',
    bullets: [
      'MercadoPago — cuotas y QR',
      'OCA / UPS — envíos y tracking',
      'Aleph ERP — facturación electrónica',
      'MercadoLibre — sync de catálogo',
    ],
    visual: <IntegrationsMockup />,
    accentColor: 'from-purple-900/20 to-dark-700',
  },
]

export default function Process() {
  const [hRef, hVis] = useScrollAnimation()

  return (
    <section id="proceso" className="relative py-28 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div ref={hRef} className={`reveal mb-16 ${hVis ? 'visible' : ''}`}>
          <span className="text-brand text-xs font-bold tracking-widest uppercase">Metodología</span>
          <h2 className="font-bold text-4xl md:text-5xl text-white mt-2 mb-3">
            Proceso de Trabajo
          </h2>
          <p className="text-dark-300 text-base max-w-xl">
            De la estrategia al lanzamiento en 4 fases, con entregables claros en cada etapa.
          </p>
        </div>

        {/* Progress line */}
        <div className="hidden lg:flex items-center mb-12 px-4">
          {steps.map(({ num }, i) => (
            <div key={num} className="flex items-center flex-1">
              <div className="w-10 h-10 rounded-full bg-brand/20 border border-brand/50 flex items-center justify-center shrink-0">
                <span className="text-brand text-xs font-black font-mono">{num}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="flex-1 h-px bg-gradient-to-r from-brand/30 to-brand/10 mx-2" />
              )}
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-4 gap-6">
          {steps.map(({ num, tag, title, desc, bullets, visual }, i) => {
            const [ref, vis] = useScrollAnimation()
            return (
              <div
                key={num}
                ref={ref}
                className={`reveal group ${vis ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="h-full flex flex-col bg-dark-800 rounded-2xl border border-dark-700 hover:border-brand/30 overflow-hidden transition-all duration-300 hover:-translate-y-1">
                  {/* Step header */}
                  <div className={`px-5 pt-6 pb-4 bg-gradient-to-br ${steps[i].accentColor}`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-brand/60 text-3xl font-black leading-none">{num}</span>
                      <span className="text-brand text-xs font-bold tracking-widest uppercase px-2 py-0.5 bg-brand/10 rounded-full border border-brand/20">
                        {tag}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-base leading-snug">{title}</h3>
                  </div>

                  {/* Visual */}
                  <div className="px-3 py-3 border-b border-dark-700/60">
                    {visual}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <p className="text-dark-300 text-xs leading-relaxed mb-4">{desc}</p>
                    <ul className="space-y-2 mt-auto">
                      {bullets.map(b => (
                        <li key={b} className="flex items-start gap-2 text-dark-200 text-xs">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand mt-1 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
