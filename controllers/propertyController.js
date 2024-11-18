const Property = require('../models/Property');

// Create a new property
const createProperty = async (req, res) => {
    try {
        const property = new Property(req.body);
        const savedProperty = await property.save();
        res.status(201).json(savedProperty);
    } catch (error) {
        res.status(500).json({ error: 'Error creating property' });
    }
};

// Get all properties
const getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching properties' });
    }
};

// Get a property by ID
const getPropertyById = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ error: 'Property not found' });
        }
        res.json(property);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching property' });
    }
};

// Update property by ID
const updateProperty = async (req, res) => {
    try {
        const propertyId = req.params.id;
        const updates = req.body;  // Get the data to update from request body

        // Validate if the property ID exists
        const property = await Property.findById(propertyId);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        // Update the property with new data
        const updatedProperty = await Property.findByIdAndUpdate(propertyId, updates, { new: true });
        
        // Respond with updated property
        res.status(200).json(updatedProperty);
    } catch (error) {
        console.error('Error updating property:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { createProperty, getAllProperties, getPropertyById, updateProperty };
