import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation'

function StatCard({ target, suffix = '', label, delay }) {
  const [ref, count] = useCountUp(target)
  const [cardRef, visible] = useScrollAnimation()

  return (
    <div
      ref={cardRef}
      className={`reveal text-center p-6 rounded-xl bg-dark-800 border border-dark-700 hover:border-brand/40 transition-all duration-300 ${
        visible ? 'visible' : ''
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div ref={ref} className="font-bold text-5xl md:text-6xl text-gradient-red mb-2">
        {count}{suffix}
      </div>
      <div className="text-dark-300 text-sm font-medium">{label}</div>
    </div>
  )
}

export default function Overview() {
  const [secRef, secVisible] = useScrollAnimation()
  const [textRef, textVisible] = useScrollAnimation()

  return (
    <section id="overview" className="relative py-28 px-6">
      {/* Subtle bottom glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div ref={secRef} className={`reveal mb-4 ${secVisible ? 'visible' : ''}`}>
          <span className="text-brand text-xs font-bold tracking-widest uppercase">El Proyecto</span>
        </div>

        {/* Heading + description */}
        <div ref={textRef} className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className={`reveal ${textVisible ? 'visible' : ''}`}>
            <h2 className="font-bold text-4xl md:text-5xl leading-tight text-white mb-4">
              Eurotech Industrial<br />
              <span className="text-gradient-red">Rediseñado</span>
            </h2>
            <p className="text-dark-300 text-base leading-relaxed">
              Eurotech Industrial es la empresa líder en herramientas y equipos industriales de Uruguay y Argentina,
              con más de 40 años de experiencia y presencia en marcas internacionales.
            </p>
          </div>
          <div className={`reveal delay-200 space-y-4 ${textVisible ? 'visible' : ''}`}>
            <p className="text-dark-200 text-base leading-relaxed">
              El proyecto consistió en el rediseño completo de su e-commerce: nueva arquitectura de información,
              sistema de diseño dark-mode, experiencia unificada para consumidores y mayoristas,
              y una propuesta visual premium acorde al posicionamiento de la marca.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['UX Research', 'UI Design', 'Design System', 'Prototipado', 'WordPress + WooCommerce', 'PHP', '.uy · .ar'].map(t => (
                <span key={t} className="px-3 py-1 text-xs font-medium rounded-full border border-dark-600 text-dark-200 bg-dark-800">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard target={18} suffix="+" label="Pantallas diseñadas" delay={0} />
          <StatCard target={40} suffix="+" label="Componentes UI" delay={100} />
          <StatCard target={2}  suffix=""  label="Plataformas (web/mobile)" delay={200} />
          <StatCard target={5}  suffix="K+" label="Productos en catálogo" delay={300} />
        </div>

        {/* Context cards */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[
            { icon: '🎯', title: 'Objetivo', text: 'Unificar la experiencia y mostrar todos los productos desde el inicio, eliminando la barrera de la elección de categoría.' },
            { icon: '🏭', title: 'Cliente', text: 'Eurotech Industrial — líder en herramientas mecánicas, neumáticas y equipos de refrigeración. Presencia en Uruguay (.uy) y Argentina (.ar).' },
            { icon: '📐', title: 'Alcance', text: 'Diseño completo de UI/UX: home, catálogo, producto, carrito, checkout, cuenta cliente y portal mayorista.' },
          ].map(({ icon, title, text }, i) => {
            const [ref, vis] = useScrollAnimation()
            return (
              <div
                key={title}
                ref={ref}
                className={`reveal p-6 rounded-xl bg-dark-800/60 border border-dark-700 hover:border-brand/30 transition-all duration-300 ${
                  vis ? 'visible' : ''
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
                <p className="text-dark-300 text-sm leading-relaxed">{text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
