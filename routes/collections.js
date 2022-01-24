const express = require('express');
const router = express.Router();
const performersCtrl = require('../controllers/collections');

// This router is mounted to a "starts with" path of '/'

// GET /performers/new
router.get('/collections/new', collectionsCtrl.new);
// POST /performers
router.post('/collections', collectionsCtrl.create);