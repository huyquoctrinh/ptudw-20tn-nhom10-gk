'use strict';

const controller = {};
const models = require('../models');

controller.showStatus = async (req, res) => {
    let editor_id = 9;
    let editor = await models.Editor.findOne({
        where: {id: editor_id},
        attributes: ['category_id']
    });
    let category_id = editor.category_id;
    let articles = await models.ArticleStatus.findAll({
        where: {status: 'Draft'},
        include: [{
            model: models.Article,
            where: {category_id: category_id},
            include: [{
                model: models.Writer
            }]
        }]
    });
    articles.forEach((article) => {
        let y = article.Article.createdAt.getFullYear();
        let m = article.Article.createdAt.getMonth() + 1;
        let d = article.Article.createdAt.getDate();
        let day = d + '/' + m + '/' + y;
        article.created_at = day;
        article.briefDescription = article.Article.briefDescription.substring(0, 100) + "...";
    });
    res.locals.articles = articles;
    if (articles.length > 0) res.locals.hasArticle = true;
    else res.locals.hasArticle = false;
    res.render('checkStatus'); 
}

controller.showPostDetail = async (req, res) => {
    let article_id = parseInt(req.query.articleId);
    let categories = await models.Category.findAll();
    let tags = await models.Tag.findAll();
    let post = await models.Article.findOne({
        where: {id: article_id},
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
    post.Images.forEach (image => {
        image.description = post.description;
    })
    post.articleStatusId = parseInt(req.query.id);
    post.categories = categories;
    post.tags = tags;
    res.locals.post = post;
    res.render('EditorViewPostDetail');
}

controller.reject = async (req, res) => {
    let editor_id = 9;
    let id = req.body.id;
    let reason = req.body.reason;
    await models.ArticleStatus.update(
        {
            reason: reason, 
            editor_id: editor_id,
            status: 'Rejected'
        },
        {where: {id: id}}
    ).then(() => {
        return res.json({status: 'ok'});
    })
}

function changeToDate(pubday){
    let eles = pubday.split("/");
    let myDate = new Date(eles[2],eles[1]-1,eles[0]);
    return myDate.setDate(myDate.getDate());
}

controller.approve = async (req, res) => {
    let editor_id = 9;
    let tag = req.body.tag;
    let category = req.body.category;
    let article_id = req.body.articleId;
    let articleStatusId = req.body.statusId;
    let pubDay = req.body.pubDay;
    let date = changeToDate(pubDay);
    let findTag = await models.Tag.findOne({where: {tag_name: tag}});
    let findCate = await models.Category.findOne({where: {category_name: category}});
    await models.ArticleStatus.update(
        {status: 'Published', editor_id: editor_id},
        {where: {id: articleStatusId}}
    ).then(() => {
        res.json({status: 'ok'})
    })

    await models.Article.update(
        {category_id: findCate.id,
        publish_day: date},
        {where: {id: article_id}}
    )

    await models.ArticleTag.create({
        article_id: article_id,
        tag_id: findTag.id
    })
}
controller.showProcessed = async (req, res) => {
    let editor_id = 9;
    let {rows, count} = await models.ArticleStatus.findAndCountAll(
    { 
        where: { editor_id: editor_id },
        include: [{
            model: models.Article,
            include : [{
                model: models.Category,
                attributes: ['category_name']
            }, {
                model: models.Writer,
                include: [{
                    model: models.User,
                    attributes: ['name']
                },]
            }]
        }]
    })
    rows.forEach((article) => {
        let y = article.Article.createdAt.getFullYear();
        let m = article.Article.createdAt.getMonth() + 1;
        let d = article.Article.createdAt.getDate();
        let day = d + '/' + m + '/' + y;
        article.created_at = day;
        article.briefDescription = article.Article.briefDescription.substring(0, 100) + "...";
        if (article.status == 'Rejected')
            article.isApprove = false;
        else if (article.status == 'Published')
            article.isApprove = true;
    });
    if (rows.length>0) res.locals.hasArticle = true;
    else res.locals.hasArticle = false;
    res.locals.articles = rows;
    res.render('EditorProcessed')
} 

controller.showProcessedPostDetail = async (req, res) => {
    let article_id = parseInt(req.query.articleId);
    let post = await models.Article.findOne({
        where: {id: article_id},
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
    post.Images.forEach (image => {
        image.description = post.description;
    })
    if (post.ArticleStatuses[0].status == 'Rejected') post.isReject = true;
    else post.isReject = false;
    res.locals.post = post;
    res.render('EditorViewPostDetailProcess')
}
module.exports = controller;