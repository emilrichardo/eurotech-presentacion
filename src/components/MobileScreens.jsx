import { useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { PhoneFrame } from "./Mockups";

const FIGMA_MOBILE =
  "https://www.figma.com/proto/eWjURMmjifY2WrpEoxTNCW/Eurotech?node-id=428-7261&p=f&t=8phbac9P1AwN1fAU-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=428%3A7261&page-id=0%3A1";

const mobileScreens = [
  { file: "Inicio - Eurotech Industrial.png", label: "Home" },
  { file: "menu-panel.png", label: "Menú" },
  { file: "Barra de busqueda.png", label: "Búsqueda" },
  { file: "Categoria - Eurotech.png", label: "Categoría" },
  { file: "Categoria nivel 2 - Eurotech.png", label: "Subcategoría" },
  { file: "Categoria nivel 3 - Eurotech.png", label: "Cat. Nivel 3" },
  { file: "Pistola de Impacto Pro-Series - Eurotech.png", label: "Producto" },
  { file: "Paso 1_ Carrito y Envío.png", label: "Carrito" },
  { file: "Paso 2_ Método de Pago.png", label: "Pago" },
  { file: "Paso 3_ Datos del Cliente.png", label: "Datos" },
  { file: "¡Gracias por tu compra! simple.png", label: "Confirmación" },
  { file: "Iniciar sesión/Registro - Eurotech.png", label: "Login" },
  { file: "Mi cuenta Escritorio - Eurotech.png", label: "Mi Cuenta" },
  { file: "Mi cuenta Pedidos - Eurotech.png", label: "Pedidos" },
  { file: "Mi cuenta Direcciones - Eurotech.png", label: "Direcciones" },
  { file: "Mi cuenta Detalles de cuenta - Eurotech.png", label: "Perfil" },
  { file: "Registro mayoristas - Eurotech.png", label: "Reg. Mayorista" },
];

function encode(str) {
  return str.split("/").map(encodeURIComponent).join("/");
}

export default function MobileScreens() {
  const scrollRef = useRef(null);
  const [hRef, hVis] = useScrollAnimation();

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <section id="mobile" className="relative py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
      <div className="absolute inset-0 bg-red-glow-sm opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={hRef}
          className={`reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 ${hVis ? "visible" : ""}`}
        >
          <div>
            <span className="text-brand text-xs font-bold tracking-widest uppercase">
              Pantallas
            </span>
            <h2 className="font-bold text-4xl md:text-5xl text-white mt-2">
              Vistas Mobile
            </h2>
            <p className="text-dark-300 text-sm mt-2">
              {mobileScreens.length} pantallas · Diseño mobile-first
            </p>
          </div>
          <a
            href={FIGMA_MOBILE}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-brand text-brand hover:bg-brand hover:text-white font-semibold rounded-md transition-all text-sm shrink-0"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
              <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
              <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-7 0z" />
              <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
            </svg>
            Abrir Figma Mobile
          </a>
        </div>

        {/* Hero phone - scrollable */}
        <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
          <div className="flex flex-col items-center gap-4">
            <div className="text-dark-400 text-xs font-mono flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand animate-glow" />
              Home — scroll para ver pantalla completa
            </div>
            <PhoneFrame>
              <img
                src={`/imagenes/mobile/${encode("Inicio - Eurotech Industrial.png")}`}
                alt="Mobile Home"
                className="w-full"
              />
            </PhoneFrame>
          </div>

          {/* Key mobile insights */}
          <div className="flex-1 space-y-5 pt-4">
            <h3 className="text-white font-bold text-xl">
              Diseño Mobile-First
            </h3>
            <p className="text-dark-300 text-sm leading-relaxed">
              La experiencia móvil fue diseñada desde cero teniendo en cuenta
              que la mayoría de los usuarios acceden desde sus celulares. Cada
              pantalla fue optimizada para interacción táctil.
            </p>
            <div className="space-y-3">
              {[
                {
                  label: "Navegación táctil",
                  desc: "Targets de touch ≥ 44px, swipe en carousels",
                },
                {
                  label: "Header compacto",
                  desc: "Logo + búsqueda + carrito en la misma línea",
                },
                {
                  label: "Menú lateral",
                  desc: "Panel deslizable con categorías completas",
                },
                {
                  label: "Cards de producto",
                  desc: "Grid de 2 columnas, información prioritizada",
                },
                {
                  label: "Checkout simplificado",
                  desc: "Formularios de una columna, teclados nativos",
                },
                {
                  label: "Bottom sheet",
                  desc: "Filtros y opciones emergentes desde abajo",
                },
              ].map(({ label, desc }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 p-3 bg-dark-800/50 rounded-lg border border-dark-700"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0" />
                  <div>
                    <span className="text-white text-sm font-medium">
                      {label}
                    </span>
                    <span className="text-dark-400 text-sm"> — {desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal scroll of all phones */}
      <div className="relative">
        <div className="px-6 mb-4 flex items-center justify-between max-w-6xl mx-auto">
          <h3 className="text-dark-200 text-sm font-medium">
            Todas las pantallas
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-8 h-8 rounded-full border border-dark-600 flex items-center justify-center text-dark-300 hover:text-white hover:border-dark-400 transition-all"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-8 h-8 rounded-full border border-dark-600 flex items-center justify-center text-dark-300 hover:text-white hover:border-dark-400 transition-all"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-8 px-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {mobileScreens.map(({ file, label }, i) => {
            const [ref, vis] = useScrollAnimation();
            return (
              <div
                key={file}
                ref={ref}
                className={`reveal shrink-0 flex flex-col items-center gap-3 ${vis ? "visible" : ""}`}
                style={{ transitionDelay: `${Math.min(i, 5) * 60}ms` }}
              >
                <PhoneFrame>
                  <img
                    src={`/imagenes/mobile/${encode(file)}`}
                    alt={label}
                    className="w-full"
                    loading="lazy"
                  />
                </PhoneFrame>
                <div className="text-center">
                  <div className="text-dark-300 text-xs font-medium">
                    {label}
                  </div>
                  <div className="text-dark-600 text-xs font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-8 w-12 bg-gradient-to-r from-dark-900 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-8 w-12 bg-gradient-to-l from-dark-900 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
