'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../controllers/newsDetailController');
const authController = require('../controllers/authController');

router.get('/', controller.showDetail);
router.post('/comment',
    controller.addComment
);
module.exports = router;