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
// --------- tag----------
controller.showAdminTag = async (req, res) => {
    const limit = 6;
    let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));
    let {rows, count} = await models.Tag.findAndCountAll({
        order: [['createdAt', 'DESC']],
        limit: limit,
        offset: limit * (page-1)
    });
    res.locals.pagination = {
        page: page,
        limit: limit,
        totalRows: count, 
        queryParams: req.query
    }
    res.locals.tags = rows;
    res.render('AdminTag');
}

controller.addTag = async (req, res) => {
    let name = req.body.tag_name;
    await models.Tag.create({
        tag_name: name
    }).then(async (tag) => {
        return res.json(tag);
    });
}

controller.updateTag = async(req, res) => {
    let newName = req.body.newName;
    let id = req.body.id;
    await models.Tag.update({tag_name: newName}, {where: {id: id}});
}

controller.deleteTag = async(req, res) => {
    let id = req.body.id;
    await models.Tag.destroy({ where: {id: id}}).then(console.log("deleted"));
}

// end--------- tag----------
// ----------------editor----------
controller.showAdmineditorDetail = async (req, res) => {
    const limit = 6;
    let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));
    let {rows, count} = await models.Editor.findAndCountAll({
        include: [{
            model: models.User
        }, {
            model: models.Category
        }],
        order: [['createdAt', 'DESC']],
        limit: limit,
        offset: limit * (page-1)
    });
    let categories = await models.Category.findAll();
    rows.forEach ((row) => {
        if (row.Category == null){
            row.category_name = "Chưa có";
        } else {
            row.category_name = row.Category.category_name;
        }
        row.categories = categories;
    })
    res.locals.pagination = {
        page: page,
        limit: limit,
        totalRows: count, 
        queryParams: req.query
    }
    res.locals.editors = rows;
    res.locals.categories = categories;
    res.render('AdmineditorDetail');
}
controller.updateEditorCategory = async (req, res) =>{
    let id = req.body.id;
    let newCategory = req.body.newCategory;
    let cateId = await models.Category.findOne({where: {category_name: newCategory}});
    await models.Editor.update({category_id: cateId.id}, {where: {id: id}})
}
// end--------- editor----------
// ------------user--------------
controller.showAdminUserManagement = async (req, res) => {
    const limit = 6;
    let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));
    let {rows, count} = await models.User.findAndCountAll({
        order: [['createdAt', 'DESC']],
        limit: limit,
        offset: limit * (page-1)
    });
    rows.forEach ((user) => {
        if (user.role == 'reader') user.userRole = 'Đã đăng ký';
        else if (user.role == 'writer') user.userRole = 'Người viết bài';
        else if (user.role == 'editor') user.userRole = 'Biên tập viên';
        else if (user.role == 'admin') user.userRole = 'Admin';
    })
    res.locals.pagination = {
        page: page,
        limit: limit,
        totalRows: count, 
        queryParams: req.query
    }
    res.locals.users = rows;
    res.render('AdminUserManagement');
}

controller.updateUserStatus = async (req, res) => {
    let id = req.body.id;
    let newRole = req.body.role;
    let oldRole = req.body.oldRole;
    await models.User.update({role: newRole}, {where: {id: id}});
    if (oldRole == 'reader'){
        await models.Reader.destroy({where: {id: id}});
    } else if (oldRole == 'writer'){
        await models.Writer.destroy({where: {id: id}});
    } else if (oldRole == 'editor'){
        await models.Editor.destroy({where: {id: id}});
    } else if (oldRole == 'admin'){
        await models.Admin.destroy({where: {id: id}});
    }
    if (newRole == 'reader') {
        await models.Reader.create({
            id: id,
            expire_date: Date.now()
        })
    } else if (newRole == 'writer'){
        await models.Writer.create({
            id: id
        })
    } else if (newRole == 'editor'){
        await models.Editor.create({
            id: id
        })
    } else if (newRole == 'admin') {
        await models.Admin.create({
            id: id
        })
    }
}
// end--------user--------------
// --------extend--------------

controller.showAdminAddpremium = async (req, res) => {
    const limit = 6;
    let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));
    let {rows, count} = await models.Reader.findAndCountAll({
        include: [{
            model: models.User
        }],
        order: [['expire_date', 'DESC']],
        limit: limit,
        offset: limit * (page-1)
    });
    rows.forEach((row) => {
        let y = row.expire_date.getFullYear();
        let m = row.expire_date.getMonth() + 1;
        let d = row.expire_date.getDate();
        let day = d + '/' + m + '/' + y;
        row.expireDay = day;
    })
    res.locals.pagination = {
        page: page,
        limit: limit,
        totalRows: count, 
        queryParams: req.query
    }
    res.locals.readers = rows;
    res.render('admin-addpremium');
}
function addWeeks(date, weeks) {
    date.setDate(date.getDate() + 7 * weeks);
    return date;
  }
controller.extendPremium = async (req, res) => {
    let id = req.body.id;
    let reader = await models.Reader.findOne({where: {id: id}});
    let newDate;
    if (reader.expire_date > Date.now()){
        newDate = addWeeks(reader.expire_date, 1);
    } else {
        newDate = addWeeks(new Date(), 1);
    }
    await models.Reader.update(
        {expire_date: newDate}, 
        {where: {id: id}}
    ).then(async () => {
        let y = newDate.getFullYear();
        let m = newDate.getMonth() + 1;
        let d = newDate.getDate();
        let expire_date = d + '/' + m + '/' + y;
        return res.json(expire_date);
    })
}
// end--------extend--------------

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
    let categories = await models.Category.findAll({
        order: [['createdAt', 'DESC']]
    });

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
    category.categoryId = categoryId
    res.locals.category = category;
    res.render('CategoriesDetail')
}

controller.addCategory = async (req, res) => {
    let category_name = req.body.category_name
    let root_category_id = req.body.root_category_id

    await models.Category.create({
        category_name: category_name,
        root_category_id: root_category_id
    }).then(async (category) => {
        return res.json(category);
    });
}

controller.deleteCategory = async (req, res) => {
    let id = req.body.id;
    await models.Category.destroy({ where: {id: id}}).then(console.log("deleted"));
}

controller.updateCategory = async (req, res) => {
    let newName = req.body.newName;
    console.log(newName);
    let id = req.body.id;
    await models.Category.update({category_name: newName}, {where: {id: id}});
}

function min(a, b) {
    if (a < b) return a;
    else return b;
}

module.exports = controller;