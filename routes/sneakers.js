const express = require('express');
const router = express.Router();
const sneakersCtrl = require('../controllers/sneakers');

// This router is mounted to a "starts with" path of '/'
router.get('/', sneakersCtrl.index);
// GET /collections/new
router.get('/new', sneakersCtrl.new);
// POST /sneakers
router.post('/', sneakersCtrl.create);

router.get('/:id', sneakersCtrl.show);

module.exports = router;