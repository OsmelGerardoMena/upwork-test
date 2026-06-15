// src/App.jsx
// Root application component

import { useCallback } from "react";
import Header from "./components/Header.jsx";
import PropertyGrid from "./components/PropertyGrid.jsx";
import useProperties from "./hooks/useProperties.js";

const App = () => {
  const { properties, loading, error } = useProperties();

  // Expose a stable retry callback to the grid
  const handleRetry = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 relative z-10">
        <div>
          <section
            id="propiedades"
            className="max-w-7xl mx-auto px-6 py-16"
            aria-labelledby="properties-heading"
          >
            <div className="mb-12 text-center">
              <h2
                id="properties-heading"
                className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4"
              >
                Ready to Find Your{" "}
                <span className="font-serif italic text-gold drop-shadow-lg">Dream</span>{" "}
                Property?
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">
                Propiedades verificadas con altos rendimientos garantizados.
              </p>
            </div>

            <PropertyGrid
              properties={properties}
              loading={loading}
              error={error}
              onRetry={handleRetry}
            />
          </section>
        </div>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-gray-400 text-sm bg-dark-900/50 backdrop-blur-md">
        © {new Date().getFullYear()} PropInvest — Inversión inmobiliaria digital.
      </footer>
    </div>
  );
};

export default App;
