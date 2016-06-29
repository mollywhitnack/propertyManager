'use strict';

const express = require('express');

const Pizza = require('../models/pizza');

let router = express.Router();

// pizzas.js
// /api/pizzas

router.get('/', (req, res)=>{

//can add more methods here now (exec in place of cb)
//limit limits number of pizzas /*.limit(2) */
// populate -> git it key for object we want to populate
  Pizza.find( {}, (err, pizzas)=>{
    res.status(err ? 400 : 200).send(err || pizzas);
  }).populate('chef')
})



router.post('/', (req, res)=>{
  Pizza.create(req.body, (err, pizza)=>{
    res.status(err ? 400 : 200).send(err || Pizza);
  })
})

router.route('/:id')
 .get((req, res) =>{
  Pizza.findById(req.params.id, (err, pizza) =>{
     //if(err) return res.status(400)
     res.status(err ? 400 : 200).send(err || Pizza);
    });
  })
  .put((req, res) =>{
  Pizza.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, pizza) =>{
     res.status(err ? 400 : 200).send(err || Pizza);
    });
  })
  .delete((req, res) =>{
  Pizza.findByIdAndRemove(req.params.id, err =>{
     res.status(err ? 400 : 200).send(err || pizza);
  });
});


router.put('/:pizzaId/addChef/:chefId', (req, res)=>{
  pizza.findById(req.params.pizzaId, (err , pizza)=>{
    if(err || !pizza) return res.satus(400).send(err || 'Pizza not found');
    pizza.chef = req.params.chefId;
    pizza.save((err, savedPizza)=>{
      res.status(err? 400: 200).send(err || savedPizza)
    });
  });
});

module.exports = router;





