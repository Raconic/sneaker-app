const express = require('express');
const router = express.Router();
const collectionsCtrl = require('../controllers/collections');

// This router is mounted to a "starts with" path of '/'
router.get('/', collectionsCtrl.index);
// GET /collections/new
router.get('/new', collectionsCtrl.new);
// POST /sneakers
router.post('/', collectionsCtrl.create);

router.get('/:id', collectionsCtrl.show);

module.exports = router;