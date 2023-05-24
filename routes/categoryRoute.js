'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../controllers/categoryController');

router.get('/', controller.showCategory);

module.exports = router;