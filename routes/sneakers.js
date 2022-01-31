const express = require('express');
const router = express.Router();
const sneakersCtrl = require('../controllers/sneakers');
var isLoggedIn = require('../config/auth');

router.get('/', sneakersCtrl.index);

router.get('/new', isLoggedIn, sneakersCtrl.new);

router.post('/', isLoggedIn, sneakersCtrl.create);

router.get('/:id', sneakersCtrl.show);


module.exports = router;