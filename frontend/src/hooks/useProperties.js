// src/hooks/useProperties.js
// Custom hook encapsulating fetch logic, loading, and error state

import { useState, useEffect } from "react";
import { fetchProperties } from "../services/api.js";

/**
 * Hook that fetches the property list on mount.
 * @returns {{ properties: Array, loading: boolean, error: string|null }}
 */
const useProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProperties();
        if (!cancelled) setProperties(data);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return { properties, loading, error };
};

export default useProperties;
