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
router.get('/AdminViewPostDetail', controller.showPostDetail)
router.post('/AdminViewAllPost/update', controller.updateStatus)
router.get('/CategoriesDetail', controller.showCategoryDetail);
router.post('/admin/CategoriesDetail/add', controller.addCategory);
module.exports = router;