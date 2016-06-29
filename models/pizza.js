'use strict';

const mongoose = require('mongoose');

let pizzaSchema = new mongoose.Schema({
  name: { type: String, required: true /*, enum: ['pepperoni', 'mushroom']*/},
  toppings: [ {type: String}],
  slices: { type: Number, min: 1, max: 16, default: randomInt},
  createdAt: { type: Date, default: Date.now },
  //embeded document, object in object
  chef: {type: mongoose.Schema.Types.ObjectId, ref: 'Chef'}
});

  /*email: {
    type: String, 

    validate:{
      validator: function(val){
        console.log("val :", val);
        return val.length >4;
      },
      message: '{VALUE} is too short!'
    },
    //match: /^\w+@\w+\.+\w+$/, 
    required: true, 
    trim: true, 
    lowercase: true}*/


function randomInt(){
  return Math.floor(Math.random()*16)+1;
}

let Pizza =  mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;