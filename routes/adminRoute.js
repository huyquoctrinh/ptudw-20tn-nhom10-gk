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
router.post('/CategoriesDetail/add', controller.addCategory);
router.delete('/Category/delete', controller.deleteCategory);
router.post('/Category/edit', controller.updateCategory);
router.post('/tag/add', controller.addTag);
router.post('/Tag/edit', controller.updateTag);
router.delete('/Tag/delete', controller.deleteTag);
router.post('/User/update', controller.updateUserStatus);
router.post('/Editor/update', controller.updateEditorCategory);
module.exports = router;