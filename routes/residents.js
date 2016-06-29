'use strict';

const express = require('express');

const Resident = require('../models/resident');

let router = express.Router();

// residents.js
// /api/residents

router.get('/', (req, res)=>{

//can add more methods here now (exec in place of cb)
//limit limits number of residents /*.limit(2) */
// populate -> git it key for object we want to populate
  Resident.find( {}, (err, residents)=>{
    res.status(err ? 400 : 200).send(err || residents);
  })
});

router.post('/', (req, res)=>{
  Resident.create(req.body, (err, resident)=>{
    res.status(err ? 400 : 200).send(err || resident);
  })
})

router.route('/:id')
 .get((req, res) =>{
  Resident.findById(req.params.id, (err, resident) =>{
     //if(err) return res.status(400)
     res.status(err ? 400 : 200).send(err || resident);
    });
  })
  .put((req, res) =>{
  Resident.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, resident) =>{
     res.status(err ? 400 : 200).send(err || resident);
    });
  })
  .delete((req, res) =>{
  Resident.findByIdAndRemove(req.params.id, err =>{
     res.status(err ? 400 : 200).send(err || resident);
  });
});

//ap id: 5774554153af0cd707cea8af
// res id: 577454e253af0cd707cea8ac

//577454e253af0cd707cea8ac/addApartment/5774554153af0cd707cea8af

//add/update apartment to resident
router.put('/:residentId/addApartment/:apartmentId', (req, res)=>{
  Resident.findById(req.params.residentId, (err , resident)=>{
    if(err || !resident) return res.satus(400).send(err || 'resident not found');
    resident.apartment = req.params.apartmentId;
    resident.save((err, savedresident)=>{
      res.status(err? 400: 200).send(err || savedresident)
    });
  });
});

//remove resident from apartment
router.put('/:residentId/removeApartment/', (req, res)=>{
  Resident.findById(req.params.residentId, (err , resident)=>{
    if(err || !resident) return res.satus(400).send(err || 'resident not found');
    resident.apartment = undefined;
    resident.save((err, savedresident)=>{
      res.status(err? 400: 200).send(err || savedresident)
    });
  });
});

module.exports = router;





