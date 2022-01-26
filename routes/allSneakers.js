const express = require('express');
const router = express.Router();
const allSneakersCtrl = require('../controllers/allSneakers');

// This router is mounted to a "starts with" path of '/'
router.get('/', allSneakersCtrl.index);
// GET /collections/new
router.get('/new', allSneakersCtrl.new);
// POST /sneakers
router.post('/', allSneakersCtrl.create);

router.get('/:id', allSneakersCtrl.show);

module.exports = router;