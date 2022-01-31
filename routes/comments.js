const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
var isLoggedIn = require('../config/auth');


router.post('/collections/:collectionId/comments', commentsCtrl.create);

router.delete('/comments/:id', isLoggedIn, commentsCtrl.delete);

module.exports = router;