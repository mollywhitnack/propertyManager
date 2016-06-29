'use strict';

const mongoose = require('mongoose');

let chefSchema = new mongoose.Schema({
    name: {type: String},
    yearsOfExperience: Number
});


function randomInt(){
  return Math.floor(Math.random()*16)+1;
}

let Chef =  mongoose.model('Chef', chefSchema);

module.exports = Chef;