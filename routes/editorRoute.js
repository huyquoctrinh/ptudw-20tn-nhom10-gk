'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../controllers/editorController');

router.get('/checkStatus', controller.showStatus);
router.get('/EditorViewPostDetail', controller.showPostDetail);
router.post('/reject', controller.reject);
router.post('/approve', controller.approve);
router.get('/EditorProcessed', controller.showProcessed);
module.exports = router;