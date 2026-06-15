// src/controllers/propertyController.js
// HTTP controller layer — handles request/response lifecycle

import {
  getAllProperties,
  getPropertyById,
} from "../services/propertyService.js";

/**
 * GET /api/properties
 * Returns all investment properties.
 */
export const listProperties = (req, res) => {
  try {
    const data = getAllProperties();
    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

/**
 * GET /api/properties/:id
 * Returns a single property by UUID.
 */
export const getProperty = (req, res) => {
  try {
    const { id } = req.params;
    const property = getPropertyById(id);

    if (!property) {
      return res.status(404).json({
        success: false,
        message: `Property with id '${id}' not found`,
      });
    }

    res.status(200).json({ success: true, data: property });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
