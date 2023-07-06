'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../controllers/writerController');

router.get('/mylist', controller.showMylist);
router.get('/draft', controller.showDraft);
router.get('/approve', controller.showApprove);
router.get('/reject', controller.showReject);
router.get('/WriterViewPostDetail', controller.showPostDetail);
module.exports = router;