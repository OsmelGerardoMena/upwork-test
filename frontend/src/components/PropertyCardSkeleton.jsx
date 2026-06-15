// src/components/PropertyCardSkeleton.jsx
// Skeleton loader — refleja el layout exacto de PropertyCard (glassmorphism claro)

const PropertyCardSkeleton = () => (
  <div
    className="glass-card p-4"
    role="status"
    aria-label="Cargando propiedad..."
  >
    {/* Image placeholder */}
    <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-gray-200 skeleton" />

    {/* Metrics panel placeholder */}
    <div className="metrics-panel p-4 mb-4 grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <div className="skeleton h-2.5 w-20 rounded bg-white/20" />
        <div className="skeleton h-4 w-16 rounded bg-white/20" />
      </div>
      <div className="space-y-2 text-right flex flex-col items-end">
        <div className="skeleton h-2.5 w-14 rounded bg-white/20" />
        <div className="skeleton h-4 w-20 rounded bg-white/20" />
      </div>
    </div>

    {/* Button placeholder */}
    <div className="skeleton h-12 w-full rounded-full bg-gray-200" />
  </div>
);

export default PropertyCardSkeleton;
