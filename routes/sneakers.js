const express = require('express');
const sneakers = require('../controllers/sneakers');
const router = express.Router();
const sneakersCtrl = require('../controllers/sneakers');


router.get('/', sneakersCtrl.index);

router.get('/new', sneakersCtrl.new);

router.post('/', sneakersCtrl.create);

router.get('/:id', sneakersCtrl.show);


module.exports = router;