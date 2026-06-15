// src/components/PropertyCard.jsx
// Glassmorphism card — datos mapeados 100% desde la prop `property`

/**
 * @param {{ property: Object }} props
 * @param {string}  props.property.id          - UUID de la propiedad
 * @param {string}  props.property.name        - Nombre de la propiedad
 * @param {string}  props.property.location    - Ubicación (ciudad, país)
 * @param {number}  props.property.price       - Precio numérico en USD
 * @param {string}  props.property.image       - URL de la imagen
 * @param {string}  props.property.annualYield - Rendimiento anual, ej: "8.5%"
 */
const PropertyCard = ({ property }) => {
  const { id, name, location, price, image, annualYield } = property;

  // Formatea el precio como moneda USD sin decimales
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);

  const handleInvest = () => {
    console.log("Invirtiendo en propiedad ID:", id);
  };

  return (
    <article className="glass-card p-2 relative group flex flex-col">
      {/* ── Imagen con overlay ───────────────────────────────────── */}
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
        <img
          src={image}
          alt={`Fotografía de ${name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Botón de favorito */}
        <button
          className="absolute top-4 right-4 p-2.5 bg-black/20 backdrop-blur-md
                     rounded-full border border-white/20 text-white
                     hover:bg-brand-500 hover:border-brand-400 transition-all duration-300"
          aria-label={`Añadir ${name} a favoritos`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0
                 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </button>

        {/* Info overlay (nombre + ubicación) */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white">
          {/* Ubicación — tipografía pequeña y sutil */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold tracking-wide text-brand-200 uppercase">{location}</span>
            {/* Icono de verificado */}
            <svg
              className="w-3.5 h-3.5 text-gold fill-gold shrink-0 drop-shadow-lg"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M6.267 3.455a3.066 3.066 0 001.745-.713 3.066 3.066 0 013.976 0 3.066
                       3.066 0 001.745.713 3.066 3.066 0 012.812 2.812 3.066 3.066 0 00.713
                       1.745 3.066 3.066 0 010 3.976 3.066 3.066 0 00-.713 1.745 3.066 3.066
                       0 01-2.812 2.812 3.066 3.066 0 00-1.745.713 3.066 3.066 0 01-3.976 0
                       3.066 3.066 0 00-1.745-.713 3.066 3.066 0 01-2.812-2.812 3.066 3.066
                       0 00-.713-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.713-1.745
                       3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9
                       10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
            </svg>
          </div>

          {/* Nombre principal de la propiedad */}
          <h3 className="text-2xl font-bold leading-tight drop-shadow-md">{name}</h3>
        </div>
      </div>

      <div className="px-4 pb-4 flex-1 flex flex-col justify-end">
        {/* ── Panel de métricas ────────────────────────────────────── */}
        <div className="metrics-panel p-4 mb-5 grid grid-cols-2 gap-4 text-white">
          {/* Bloque izquierdo → Rendimiento Anual */}
          <div>
            <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1 font-semibold">
              Rendimiento Anual
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse shrink-0 shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
              <span className="font-bold text-base text-brand-300">{annualYield}</span>
            </div>
          </div>

          {/* Bloque derecho → Precio */}
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1 font-semibold">
              Precio
            </p>
            <p className="font-bold text-base text-gold drop-shadow-sm">{formattedPrice}</p>
          </div>
        </div>

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <button
          id={`invest-btn-${id}`}
          onClick={handleInvest}
          className="w-full btn-primary py-4 text-sm tracking-wide uppercase shadow-lg"
          aria-label={`Invertir en ${name}`}
        >
          Invertir Ahora
        </button>
      </div>
    </article>
  );
};

export default PropertyCard;
