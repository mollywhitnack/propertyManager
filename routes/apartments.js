'use strict';

const express = require('express');

const Apartment = require('../models/apartment');

let router = express.Router();

// apartments.js
// /api/apartments

router.get('/', (req, res)=>{
  Apartment.find({}, (err, apartments)=>{
    res.status(err ? 400 : 200).send(err || apartments);
  })
})

router.post('/', (req, res)=>{
  Apartment.create(req.body, (err, apartment)=>{
    res.status(err ? 400 : 200).send(err || apartment);
  })
})

router.route('/:id')
 .get((req, res) =>{
  Apartment.findById(req.params.id, (err, apartment) =>{
     res.status(err ? 400 : 200).send(err || apartment);
    });
  })
  .put((req, res) =>{
  Apartment.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, apartment) =>{
     res.status(err ? 400 : 200).send(err || apartment);
    });
  })
  .delete((req, res) =>{
  Apartment.findByIdAndRemove(req.params.id, err =>{
     res.status(err ? 400 : 200).send(err || apartment);
  });
});

module.exports = router;


