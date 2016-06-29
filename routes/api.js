'use strict';

const express = require('express');

let router = express.Router();

router.use('/pizzas', require('./pizzas'));
router.use('/chefs', require('./chefs'));

module.exports = router;