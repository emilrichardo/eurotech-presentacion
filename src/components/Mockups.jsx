/* ── Browser Frame (Desktop) ── */
export function BrowserFrame({ url = 'eurotech.uy', children, className = '', title = '' }) {
  return (
    <div className={`rounded-xl overflow-hidden border border-dark-700 bg-dark-850 shadow-2xl ${className}`}>
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-dark-800 border-b border-dark-700/80">
        <div className="w-3 h-3 rounded-full bg-brand/70 hover:bg-brand transition-colors" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
        <div className="flex-1 mx-3 flex items-center gap-2 bg-dark-750 rounded-full px-3 py-1">
          <div className="w-2 h-2 rounded-full bg-green-500/60" />
          <span className="text-dark-400 text-xs font-mono truncate">{url}</span>
        </div>
        {title && <span className="text-dark-500 text-xs hidden sm:block">{title}</span>}
      </div>
      {children}
    </div>
  )
}

/* ── Phone Frame (Mobile) ── */
export function PhoneFrame({ children, className = '' }) {
  return (
    <div className={`relative ${className}`} style={{ width: '260px' }}>
      {/* Outer shell */}
      <div
        className="relative rounded-[36px] bg-dark-800 border-2 border-dark-600 shadow-2xl overflow-hidden"
        style={{ padding: '10px 8px 14px', boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 30px 60px rgba(0,0,0,0.6)' }}
      >
        {/* Side buttons */}
        <div className="absolute left-[-3px] top-[80px] w-1 h-8 bg-dark-600 rounded-l-sm" />
        <div className="absolute left-[-3px] top-[120px] w-1 h-12 bg-dark-600 rounded-l-sm" />
        <div className="absolute left-[-3px] top-[148px] w-1 h-12 bg-dark-600 rounded-l-sm" />
        <div className="absolute right-[-3px] top-[100px] w-1 h-14 bg-dark-600 rounded-r-sm" />

        {/* Screen */}
        <div className="rounded-[28px] overflow-hidden bg-dark-950 relative" style={{ height: '540px' }}>
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-1 bg-dark-900/80 backdrop-blur-sm">
            <span className="text-white text-[11px] font-semibold">9:41</span>
            <div className="flex items-center gap-1.5">
              <svg width="14" height="10" viewBox="0 0 24 18" fill="white"><path d="M1 1C5 1 8.5 3 12 3C15.5 3 19 1 23 1M4 7C7.5 7 10 9 12 9C14 9 16.5 7 20 7M7 13C9.5 13 11 15 12 15C13 15 14.5 13 17 13" stroke="white" strokeWidth="2" fill="none"/></svg>
              <svg width="12" height="10" viewBox="0 0 20 14" fill="white"><path d="M4 11L1 14V3L4 0V11Z" opacity="0.4"/><path d="M9 8L6 11V0L9 3V8Z" opacity="0.6"/><path d="M14 5L11 8V0H14V5Z" opacity="0.8"/><path d="M19 11L16 14V0H19V11Z"/></svg>
              <div className="flex items-center gap-0.5">
                <div className="w-4 h-2 rounded-sm border border-white/80 relative">
                  <div className="absolute left-0.5 top-0.5 bottom-0.5 bg-white rounded-sm" style={{ width: '65%' }} />
                </div>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="phone-scroll" style={{ height: 'calc(100% - 30px)' }}>
            {children}
          </div>
        </div>

        {/* Home indicator */}
        <div className="flex justify-center pt-2">
          <div className="w-24 h-1 rounded-full bg-dark-500" />
        </div>
      </div>
    </div>
  )
}
