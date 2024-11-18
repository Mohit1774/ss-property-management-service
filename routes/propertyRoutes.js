const express = require('express');
const { createProperty, getAllProperties, getPropertyById, updateProperty } = require('../controllers/propertyController');

const router = express.Router();

router.post('/', createProperty);
router.get('/', getAllProperties);
router.get('/:id', getPropertyById);
router.put('/:id', updateProperty);

module.exports = router;
