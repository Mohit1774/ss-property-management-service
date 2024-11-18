const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    type: { type: String, enum: ['Residential', 'Commercial'], required: true },
    price: { type: Number, required: true },
    location: {
        city: String,
        state: String,
        country: String,
        zip: String,
    },
    features: [String],
    media: [String],
}, { timestamps: true });

module.exports = mongoose.model('Property', propertySchema);
