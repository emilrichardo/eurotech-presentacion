const FIGMA_DESKTOP = 'https://www.figma.com/proto/eWjURMmjifY2WrpEoxTNCW/Eurotech?node-id=58-1372&t=8phbac9P1AwN1fAU-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=58%3A1372&page-id=51%3A669'
const FIGMA_MOBILE  = 'https://www.figma.com/proto/eWjURMmjifY2WrpEoxTNCW/Eurotech?node-id=428-7261&p=f&t=8phbac9P1AwN1fAU-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=428%3A7261&page-id=0%3A1'

export default function Footer() {
  return (
    <footer id="figma" className="relative pt-24 pb-12 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
      <div className="absolute inset-0 bg-red-glow opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-dark-950 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Main CTA section */}
        <div className="text-center mb-20">
          <p className="text-brand text-xs font-bold tracking-widest uppercase mb-6">Archivos de diseño</p>
          <h2 className="font-bold text-4xl md:text-6xl text-white mb-4">
            Ver el proyecto<br />
            <span className="text-gradient-red">en Figma</span>
          </h2>
          <p className="text-dark-300 text-base max-w-md mx-auto mb-10">
            Accedé a los archivos completos de diseño: sistema de componentes,
            pantallas y prototipos interactivos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={FIGMA_DESKTOP}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-brand hover:bg-brand-hover text-white font-bold rounded-lg transition-all duration-200 glow-red text-base"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              Figma — Desktop
              <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a
              href={FIGMA_MOBILE}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 border border-brand text-brand hover:bg-brand/10 font-bold rounded-lg transition-all duration-200 text-base"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              Figma — Mobile
              <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent mb-16" />

        {/* Neuraz section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="text-center md:text-left">
            <div className="text-dark-500 text-xs font-medium tracking-widest uppercase mb-4">
              Diseñado y desarrollado por
            </div>
            <img src="/imagenes/logo-neuraz.svg" alt="Neuraz" className="h-12 w-auto mx-auto md:mx-0 mb-4 opacity-90" />
            <p className="text-dark-400 text-sm max-w-xs leading-relaxed">
              Neuraz es el estudio detrás del rediseño de Eurotech. Diseño de interfaces, sistemas y productos digitales para empresas que van en serio.
            </p>
            <a
              href="https://neuraz.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-brand text-sm font-medium hover:text-brand-light transition-colors"
            >
              neuraz.io
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>

          {/* Project summary */}
          <div className="grid grid-cols-2 gap-4 text-center md:text-left">
            {[
              { label: 'Cliente',    value: 'Eurotech Industrial' },
              { label: 'Año',        value: '2024 – 2025' },
              { label: 'Alcance',    value: 'UX/UI · Design System' },
              { label: 'Tech stack', value: 'WP · WooCommerce · PHP' },
              { label: 'Mercados',   value: 'Uruguay .uy · Argentina .ar' },
            ].map(({ label, value }) => (
              <div key={label} className="p-4 bg-dark-800/60 rounded-xl border border-dark-700">
                <div className="text-dark-400 text-xs mb-1">{label}</div>
                <div className="text-white text-sm font-semibold">{value}</div>
              </div>
            ))}
          </div>

          {/* Eurotech logo */}
          <div className="text-center md:text-right">
            <div className="text-dark-500 text-xs font-medium tracking-widest uppercase mb-4">Proyecto</div>
            <img src="/imagenes/eurotech-logo-alone.svg" alt="Eurotech" className="h-10 w-auto mx-auto md:ml-auto" />
            <p className="text-dark-500 text-xs mt-3 max-w-[200px]">
              Líder en herramientas y equipos industriales en Uruguay
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-dark-800 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-dark-600 text-xs">
            © 2025 Neuraz — Todos los derechos reservados
          </p>
          <p className="text-dark-700 text-xs font-mono">
            Eurotech Industrial · Rediseño UX/UI
          </p>
        </div>
      </div>
    </footer>
  )
}
