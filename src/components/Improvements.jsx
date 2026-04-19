import { useScrollAnimation } from '../hooks/useScrollAnimation'

const improvements = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    ),
    tag: 'Home',
    title: 'Home unificado',
    desc: 'Se eliminó la obligatoriedad de elegir entre "Herramientas" o "A/C" al ingresar. Ahora todos los productos son accesibles desde la pantalla principal, con A/C integrado como categoría.',
    impact: 'Alta',
    impactColor: 'text-green-400 bg-green-400/10 border-green-400/30',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
    ),
    tag: 'Arquitectura',
    title: 'Navegación por categorías mejorada',
    desc: 'Nueva arquitectura de 3 niveles (categoría → subcategoría → tipo) con filtros laterales y pills horizontales. El usuario siempre sabe dónde está y puede cambiar de categoría sin volver al inicio.',
    impact: 'Alta',
    impactColor: 'text-green-400 bg-green-400/10 border-green-400/30',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
    ),
    tag: 'Búsqueda',
    title: 'Búsqueda global prominente',
    desc: 'Barra de búsqueda siempre visible en el header, con autocompletado y acceso rápido a productos, categorías y marcas. Antes estaba relegada o ausente en la vista principal.',
    impact: 'Media',
    impactColor: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
    ),
    tag: 'Identidad',
    title: 'Dark mode industrial premium',
    desc: 'Cambio completo a tema oscuro con paleta de negros y rojos. Refuerza la identidad industrial de la marca, mejora el contraste para uso prolongado y eleva la percepción de calidad.',
    impact: 'Alta',
    impactColor: 'text-green-400 bg-green-400/10 border-green-400/30',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
    ),
    tag: 'Responsive',
    title: 'Mobile-first responsive',
    desc: 'Diseño que prioriza la experiencia móvil: navegación inferior, cards optimizadas para touch, menú lateral deslizable y formularios adaptados. El catálogo se consume mayormente desde el celular.',
    impact: 'Alta',
    impactColor: 'text-green-400 bg-green-400/10 border-green-400/30',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
    ),
    tag: 'Checkout',
    title: 'Checkout en 3 pasos claros',
    desc: 'Proceso de compra rediseñado: Carrito → Método de pago → Datos del cliente → Confirmación. Indicador de progreso visible, validaciones inline y resumen de pedido siempre presente.',
    impact: 'Alta',
    impactColor: 'text-green-400 bg-green-400/10 border-green-400/30',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    ),
    tag: 'B2B',
    title: 'Portal mayorista diferenciado',
    desc: 'Dashboard exclusivo para mayoristas con precios diferenciados, historial de pedidos, gestión de cuentas y registro simplificado. Eurotech atiende tanto B2C como B2B desde una misma plataforma.',
    impact: 'Alta',
    impactColor: 'text-green-400 bg-green-400/10 border-green-400/30',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    ),
    tag: 'Design System',
    title: 'Sistema de diseño coherente',
    desc: 'Librería de componentes reutilizables: botones, tarjetas, inputs, badges, tablas, modales y más. Garantiza consistencia visual en toda la plataforma y agiliza el desarrollo futuro.',
    impact: 'Media',
    impactColor: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
  },
]

export default function Improvements() {
  const [hRef, hVis] = useScrollAnimation()

  return (
    <section id="mejoras" className="relative py-28 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
      <div className="absolute inset-0 bg-red-vignette pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div ref={hRef} className={`reveal mb-14 ${hVis ? 'visible' : ''}`}>
          <span className="text-brand text-xs font-bold tracking-widest uppercase">Mejoras</span>
          <h2 className="font-bold text-4xl md:text-5xl text-white mt-2 mb-3">
            Lo que cambió
          </h2>
          <p className="text-dark-300 text-base max-w-xl">
            Cada decisión de diseño responde a un problema detectado en la experiencia del sitio anterior.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {improvements.map(({ icon, tag, title, desc, impact, impactColor }, i) => {
            const [ref, vis] = useScrollAnimation()
            return (
              <div
                key={title}
                ref={ref}
                className={`reveal group p-5 rounded-xl bg-dark-800 border border-dark-700 hover:border-brand/40 transition-all duration-300 hover:-translate-y-1 ${
                  vis ? 'visible' : ''
                }`}
                style={{ transitionDelay: `${(i % 4) * 80}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center text-dark-200 group-hover:bg-brand/20 group-hover:text-brand transition-all duration-300">
                    {icon}
                  </div>
                  <span className={`px-2 py-0.5 text-xs font-semibold rounded-full border ${impactColor}`}>
                    {impact}
                  </span>
                </div>
                <div className="text-brand text-xs font-bold tracking-wider uppercase mb-1">{tag}</div>
                <h3 className="text-white font-semibold text-sm mb-2 leading-snug">{title}</h3>
                <p className="text-dark-300 text-xs leading-relaxed">{desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
