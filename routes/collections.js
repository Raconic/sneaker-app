const express = require('express');
const router = express.Router();
const collectionsCtrl = require('../controllers/collections');
var isLoggedIn = require('../config/auth');


router.get('/', collectionsCtrl.index);

router.get('/new', isLoggedIn, collectionsCtrl.new);

router.post('/', isLoggedIn, collectionsCtrl.create);

router.get('/:id', collectionsCtrl.show);

router.post('/:collectionId/sneakers', isLoggedIn, collectionsCtrl.addToCollection);

module.exports = router;