const express = require('express');
const router = express.Router();
const collectionsCtrl = require('../controllers/collections');


router.get('/', collectionsCtrl.index);

router.get('/new', collectionsCtrl.new);

router.post('/', collectionsCtrl.create);

router.get('/:id', collectionsCtrl.show);

module.exports = router;