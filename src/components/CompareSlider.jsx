import { useRef, useState, useEffect, useCallback } from 'react'

export default function CompareSlider({
  before,
  after,
  beforeLabel = 'Antes',
  afterLabel  = 'Después',
  initialPosition = 50,
  aspectRatio = '16/9',
}) {
  const containerRef = useRef(null)
  const [pos, setPos]         = useState(initialPosition)
  const [dragging, setDragging] = useState(false)
  const [moved, setMoved]     = useState(false)

  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v))

  const toPercent = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return pos
    return clamp(((clientX - rect.left) / rect.width) * 100, 1, 99)
  }, [pos])

  const onPointerDown = useCallback((e) => {
    e.preventDefault()
    setDragging(true)
    setMoved(true)
    const x = e.clientX ?? e.touches?.[0]?.clientX
    if (x != null) setPos(toPercent(x))
  }, [toPercent])

  useEffect(() => {
    if (!dragging) return
    const move = (e) => {
      const x = e.clientX ?? e.touches?.[0]?.clientX
      if (x != null) setPos(toPercent(x))
    }
    const up = () => setDragging(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('touchmove', move, { passive: true })
    window.addEventListener('mouseup', up)
    window.addEventListener('touchend', up)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('touchmove', move)
      window.removeEventListener('mouseup', up)
      window.removeEventListener('touchend', up)
    }
  }, [dragging, toPercent])

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-b-xl select-none"
      style={{
        aspectRatio,
        cursor: dragging ? 'col-resize' : 'ew-resize',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
      onMouseDown={onPointerDown}
      onTouchStart={onPointerDown}
    >
      {/* ── AFTER — full layer ── */}
      <img
        src={after}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
        draggable={false}
      />

      {/* ── BEFORE — clip-path reveals left portion ── */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
          draggable={false}
        />
      </div>

      {/* ── Divider line ── */}
      <div
        className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_16px_rgba(0,0,0,0.7)]"
        style={{ left: `${pos}%`, transform: 'translateX(-50%)', willChange: 'left' }}
      >
        {/* Handle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white flex items-center justify-center gap-0"
          style={{
            boxShadow: '0 0 0 3px #B31D23, 0 6px 28px rgba(0,0,0,0.55)',
          }}
        >
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path d="M7 2L2 8L7 14" stroke="#B31D23" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="w-px h-5 bg-dark-300 mx-0.5" />
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path d="M3 2L8 8L3 14" stroke="#B31D23" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* ── Labels ── */}
      <div
        className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold bg-dark-900/85 border border-dark-600 text-dark-200 backdrop-blur-sm transition-opacity duration-150 pointer-events-none"
        style={{ opacity: pos > 12 ? 1 : 0 }}
      >
        {beforeLabel}
      </div>
      <div
        className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold bg-brand/85 border border-brand text-white backdrop-blur-sm transition-opacity duration-150 pointer-events-none"
        style={{ opacity: pos < 88 ? 1 : 0 }}
      >
        {afterLabel}
      </div>

      {/* ── Drag hint ── */}
      {!moved && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-dark-900/85 border border-dark-600/80 rounded-full text-dark-300 text-xs backdrop-blur-sm pointer-events-none animate-pulse">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          arrastrá para comparar
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
        </div>
      )}
    </div>
  )
}
