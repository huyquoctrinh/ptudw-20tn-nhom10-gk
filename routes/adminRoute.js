'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../controllers/adminController.js');

router.get('/AdminViewAllPost', controller.showAdminViewAllPost);
router.get('/AdminManageCategories', controller.showAdminManageCategories);
router.get('/AdminTag', controller.showAdminTag);
router.get('/AdmineditorDetail', controller.showAdmineditorDetail);
router.get('/AdminUserManagement', controller.showAdminUserManagement);
router.get('/admin-addpremium', controller.showAdminAddpremium);

router.post('/AdminViewAllPost/update', controller.updateStatus)
module.exports = router;