// src/services/propertyService.js
// Business logic layer — isolated from the HTTP transport layer

import properties from "../data/properties.js";

/**
 * Returns the full list of available investment properties.
 * @returns {Array} Array of property objects
 */
export const getAllProperties = () => {
  return properties;
};

/**
 * Returns a single property by its UUID.
 * @param {string} id - Property UUID
 * @returns {Object|null} Property object or null if not found
 */
export const getPropertyById = (id) => {
  return properties.find((p) => p.id === id) ?? null;
};
