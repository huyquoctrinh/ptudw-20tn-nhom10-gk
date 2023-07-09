'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../controllers/editorController');

router.get('/checkStatus', controller.showStatus);
router.get('/EditorViewPostDetail', controller.showPostDetail);
router.post('/editorReject', controller.reject);
router.post('/editorApprove', controller.approve);
router.get('/EditorProcessed', controller.showProcessed);
router.get('/EditorViewPostDetailProcess', controller.showProcessedPostDetail);
module.exports = router;