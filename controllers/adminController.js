'use strict';

const controller = {};
const models = require('../models');

controller.showAdminViewAllPost = async (req, res) => {
    const limit = 6;
    let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));
    let {rows, count} = await models.Article.findAndCountAll({
        include: [{
            model: models.ArticleStatus,
            order: [['createdAt', 'DESC']],
            limit: 1
        },
        {
            model: models.Writer,
            include: {
                model: models.User,
                attributes: ['name']
            }
        }, {
            model: models.Category,
            attributes: ['category_name']
        }
        ],
        order: [['createdAt', 'DESC']],
        limit: limit,
        offset: limit * (page-1)
    });
    rows.forEach(post => {
        let y = post.createdAt.getFullYear();
        let m = post.createdAt.getMonth() + 1;
        let d = post.createdAt.getDate();
        let day = d + '/' + m + '/' + y;
        post.createDay = day;
        if (post.ArticleStatuses.length == 0){
            post.status = "Draft";
        } else {
            post.status = post.ArticleStatuses[0].status;
        }
        if (post.status == "Draft"){
            post.isPublished = false;
        } else {
            post.isPublished = true;
        }
    })
    
    res.locals.pagination = {
        page: page,
        limit: limit,
        totalRows: count, 
        queryParams: req.query
    }

    res.locals.posts = rows;
    res.render('AdminViewAllPost');
}

controller.showPostDetail = async (req, res) => {
    if (isNaN(req.query.id)) return;
    let id = parseInt(req.query.id);
    let post = await models.Article.findOne({
        where: {id: id},
        include: [{
            model: models.Category,
            attributes: ['category_name']
        }, {
            model: models.Writer,
            include: [{
                model: models.User,
                attributes: ['name']
            },]
        }, {
            model: models.Image
        }, {
            model: models.ArticleStatus,
            order: [['createdAt', 'DESC']],
            limit: 1
        }]
    })

    let y = post.createdAt.getFullYear();
    let m = post.createdAt.getMonth() + 1;
    let d = post.createdAt.getDate();
    let day = d + '/' + m + '/' + y;
    post.createDay = day;
    if (post.ArticleStatuses.length == 0){
        post.status = "Draft";
    } else {
        post.status = post.ArticleStatuses[0].status;
    }
    if (post.status == "Draft"){
        post.isPublished = false;
    } else {
        post.isPublished = true;
    }

    post.Images.forEach (image => {
        image.description = post.description;
    })

    res.locals.post = post;
    res.render('AdminViewPostDetail');
}

controller.showAdminManageCategories = async (req, res) => {

    let categories = await models.Category.findAll();

    let rootCategory = []
    categories.forEach((category) => {
        if (category.root_category_id == null){
            rootCategory.push(category);
        }
    })

    rootCategory.forEach((category) => {
        let subCategories = ""
        for (let i = 0; i < min(categories.length, 3); i++){
            if (categories[i].root_category_id == category.id){
                subCategories += categories[i].category_name + ", ";
            }
        }
        if (subCategories.length > 0){
            category.hasSub = true;
            subCategories += "...";
        }
        category.sub_categories = subCategories;
    });
    res.locals.category = rootCategory;

    res.render('AdminManageCategories');
}

controller.showAdminTag = async (req, res) => {
    res.render('AdminTag');
}

controller.showAdmineditorDetail = async (req, res) => {
    res.render('AdmineditorDetail');
}

controller.showAdminUserManagement = async (req, res) => {
    res.render('AdminUserManagement');
}

controller.showAdminAddpremium = async (req, res) => {
    res.render('admin-addpremium');
}

controller.updateStatus = async (req, res) => {
    let article = await models.ArticleStatus.findAll({
        where: { article_id: req.body.id},
    })
    console.log(article);
    if (article.length > 0) {
        await models.ArticleStatus.update({status: req.body.status}, {where: {article_id: req.body.id}});
    } else {
        await models.ArticleStatus.create({
            article_id: req.body.id,
            status: req.body.status,
            editor_id: 10,
            reason: ""
        }).then(() => {
            console.log(555);
        })
    }
}

controller.showCategoryDetail = async (req, res) => {
    let categoryId = parseInt(req.query.id);
    let categories = await models.Category.findAll();

    let category = {}
    let subCategories = []

    for (let i = 0; i < categories.length; i++){
        if (categories[i].id == categoryId){
            category = categories[i];
        }
        if (categories[i].root_category_id == categoryId){
            subCategories.push(categories[i]);
        }
    }

    category.sub_categories = subCategories;

    res.locals.category = category;
    res.render('CategoriesDetail')
}

controller.addCategory = async (req, res) => {
    let category_name = req.body.category_name
    let root_category_id = req.body.root_category_id

    await models.Category.create({
        category_name: category_name,
        root_category_id: root_category_id
    }).then(console.log(123123));
}

function min(a, b) {
    if (a < b) return a;
    else return b;
}

module.exports = controller;