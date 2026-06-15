// src/components/PropertyGrid.jsx
// Contenedor responsivo para las tarjetas de propiedades

import PropertyCard from "./PropertyCard.jsx";
import PropertyCardSkeleton from "./PropertyCardSkeleton.jsx";
import ErrorMessage from "./ErrorMessage.jsx";

const SKELETON_COUNT = 4;

/**
 * @param {{ properties: Array, loading: boolean, error: string|null, onRetry: Function }} props
 */
const PropertyGrid = ({ properties, loading, error, onRetry }) => {
  if (error) {
    return <ErrorMessage message={error} onRetry={onRetry} />;
  }

  return (
    <section
      aria-label="Listado de propiedades de inversión"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
    >
      {loading
        ? Array.from({ length: SKELETON_COUNT }, (_, i) => (
          <PropertyCardSkeleton key={i} />
        ))
        : properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
    </section>
  );
};

export default PropertyGrid;
