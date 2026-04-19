import { useScrollAnimation } from '../hooks/useScrollAnimation'
import CompareSlider from './CompareSlider'

const BEFORE_IMG = '/imagenes/sitioviejo.png'
const AFTER_IMG  = '/imagenes/desktop/Inicio%20-%20Eurotech%20Industrial.png'

const problems = [
  'Home forzaba a elegir entre Herramientas o Aire Acondicionado',
  'Sin visibilidad de productos hasta elegir una categoría',
  'Diseño con menos jerarquía visual y contraste reducido',
  'Sin buscador global prominente desde el inicio',
  'Experiencia mobile no optimizada para touch',
]

const solutions = [
  'Home unificado: todos los productos accesibles de entrada',
  'A/C integrado como categoría, no como sección separada',
  'Dark mode premium con rojo de marca como acento visual',
  'Buscador global siempre visible en el header',
  'Diseño mobile-first con navegación táctil optimizada',
]

export default function BeforeAfter() {
  const [hRef, hVis] = useScrollAnimation()
  const [sliderRef, sliderVis] = useScrollAnimation(0.05)
  const [listRef, listVis] = useScrollAnimation()

  return (
    <section id="comparativa" className="relative py-28 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={hRef} className={`reveal mb-14 ${hVis ? 'visible' : ''}`}>
          <span className="text-brand text-xs font-bold tracking-widest uppercase">Comparativa</span>
          <h2 className="font-bold text-4xl md:text-5xl text-white mt-2 mb-3">
            Antes<span className="text-brand mx-3">/</span>Después
          </h2>
          <p className="text-dark-300 text-base max-w-xl">
            Arrastrá el divisor para comparar el sitio anterior con el rediseño propuesto.
            El cambio más crítico: pasar de un home que obligaba a elegir,
            a uno que muestra todos los productos de inmediato.
          </p>
        </div>

        {/* ── SLIDER ── */}
        <div
          ref={sliderRef}
          className={`reveal mb-4 ${sliderVis ? 'visible' : ''}`}
        >
          {/* Browser chrome wrapper */}
          <div className="rounded-xl overflow-hidden border border-dark-600 shadow-2xl glow-red">
            {/* Title bar */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-dark-800 border-b border-dark-700">
              <div className="w-3 h-3 rounded-full bg-brand/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <div className="flex-1 mx-3 flex items-center gap-2 bg-dark-750 rounded-full px-3 py-1">
                <div className="w-2 h-2 rounded-full bg-brand/50" />
                <span className="text-dark-400 text-xs font-mono">eurotech.uy</span>
              </div>
              <div className="hidden sm:flex items-center gap-3 text-dark-500 text-xs">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full border border-dark-500 inline-block" />
                  Sitio anterior
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-brand/60 inline-block" />
                  Propuesta nueva
                </span>
              </div>
            </div>

            <CompareSlider
              before={BEFORE_IMG}
              after={AFTER_IMG}
              beforeLabel="Sitio anterior"
              afterLabel="Rediseño 2024"
              initialPosition={50}
            />
          </div>

          <p className="mt-3 text-center text-dark-500 text-xs">
            Arrastrá el divisor ← → para comparar ambas versiones
          </p>
        </div>

        {/* ── LISTS ── */}
        <div
          ref={listRef}
          className={`reveal mt-10 grid md:grid-cols-2 gap-6 ${listVis ? 'visible' : ''}`}
        >
          {/* Problems */}
          <div className="p-6 rounded-xl bg-dark-800/60 border border-dark-700">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-full bg-dark-700 border border-dark-600 flex items-center justify-center">
                <svg className="text-dark-300" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </div>
              <span className="text-dark-300 font-semibold text-sm">Problemas del sitio anterior</span>
            </div>
            <ul className="space-y-3">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-2.5 text-dark-300 text-sm">
                  <svg className="text-brand/50 mt-0.5 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="p-6 rounded-xl bg-dark-800/60 border border-brand/20">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-full bg-green-900/30 border border-green-700/40 flex items-center justify-center">
                <svg className="text-green-400" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <span className="text-white font-semibold text-sm">Soluciones en el rediseño</span>
            </div>
            <ul className="space-y-3">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-2.5 text-dark-200 text-sm">
                  <svg className="text-green-400 mt-0.5 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Insight callout */}
        <div className="mt-8 p-6 rounded-2xl bg-brand/10 border border-brand/25 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand/5 to-transparent pointer-events-none" />
          <div className="relative flex gap-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-brand flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-base mb-1">El cambio más importante</h3>
              <p className="text-dark-200 text-sm leading-relaxed">
                El home anterior obligaba al usuario a elegir entre <em className="text-white font-medium">Herramientas para taller</em> o{' '}
                <em className="text-white font-medium">Equipos de Aire Acondicionado</em> antes de ver cualquier producto.
                El nuevo diseño unifica el catálogo desde la primera pantalla, con A/C integrado como una categoría más —
                eliminando fricción y reduciendo la tasa de abandono en el primer paso del funnel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
