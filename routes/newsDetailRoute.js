'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../controllers/newsDetailController');

router.get('/', controller.showDetail);

module.exports = router;