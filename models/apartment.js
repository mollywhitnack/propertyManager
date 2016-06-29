'use strict';

const mongoose = require('mongoose');

let apartmentSchema = new mongoose.Schema({
     address : {type: String},
     description: {type: String},
     rent: Number,
     picture: {type: String},
     maxOccupancy: Number,
     createdAt: { type: Date, default: Date.now }
});


let Apartment =  mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;