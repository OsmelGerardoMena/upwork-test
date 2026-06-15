// src/services/api.js
// Centralised API client — all fetch calls live here

// BASE_URL vacío → el browser usa paths relativos (/api/...)
// El proxy de Vite (vite.config.js) los redirige server-side a backend:9000.
// Esto evita CORS completamente en desarrollo.
const BASE_URL = "";

/**
 * Fetches all investment properties from the backend.
 * @returns {Promise<Array>} Array of property objects
 * @throws {Error} If the network request fails
 */
export const fetchProperties = async () => {
  const response = await fetch(`${BASE_URL}/api/properties`);

  if (!response.ok) {
    throw new Error(
      `Error ${response.status}: ${response.statusText}`
    );
  }

  const json = await response.json();
  return json.data;
};
