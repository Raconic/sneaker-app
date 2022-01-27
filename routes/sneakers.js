const express = require('express');
const router = express.Router();
const sneakersCtrl = require('../controllers/sneakers');


router.get('/', sneakersCtrl.index);

router.get('/new', sneakersCtrl.new);

router.post('/', sneakersCtrl.create);

router.get('/:id', sneakersCtrl.show);

router.post('/collection/:id/sneakers', sneakersCtrl.addToCollection);

module.exports = router;