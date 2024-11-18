const express = require('express');
const { createProperty, getAllProperties, getPropertyById, updateProperty, deleteProperty } = require('../controllers/propertyController');

const router = express.Router();

router.post('/', createProperty);
router.get('/', getAllProperties);
router.get('/:id', getPropertyById);
router.put('/:id', updateProperty);
router.delete('/:id', deleteProperty);

module.exports = router;
