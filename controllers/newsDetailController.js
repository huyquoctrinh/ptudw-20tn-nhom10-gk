'use strict';

const controller = {};
const models = require('../models');

async function validateUser(req) {
    if (!req.user) return false;
    let id = req.user.id;
    let res = await models.Reader.findAll({
        where: {id: id}
    })
    if (res.length == 0) return false;
    console.log(res[0].expire_date < Date.now());
    if (res[0].expire_date < Date.now()) return false;
    return true; 
}

controller.showDetail = async (req, res) => {
    let id = isNaN(req.query.id) ? 0 : parseInt(req.query.id)
    let article = await models.Article.findOne({
        where: {id: id},
        include: [{
            model: models.Image,
            attributes: ['name', 'imagePath']
        }, {
            model: models.Comment,
            attributes: ['id', 'content', 'createdAt'],
            include: [{
                model: models.User,
                attributes: ['name'] 
            }]
        }, {
            model: models.Tag,
            attributes: ['tag_name', 'id']
        }, {
            model: models.Category,
            attributes: ['category_name', 'id']
        }, {
            model: models.Writer,
            include: [{
                model: models.User, 
                attributes: ['name'] 
            }]
        }]
    })
    await models.Article.update(
        {view_count: parseInt(article.view_count) + 1},
        {where: {id: article.id}}
    )
    let y = article.createdAt.getFullYear();
    let m = article.createdAt.getMonth() + 1;
    let d = article.createdAt.getDate();
    let day = d + '/' + m + '/' + y;
    article.createDay = day;
    article.isPremiumUser = (await validateUser(req) == true);
    if (req.user) article.isLogin = true;
    res.locals.article = article

    article.Images.forEach (image => {
        image.description = article.description;
    })
    let articleTag = ""
    article.Tags.forEach (tag => {
        articleTag += tag.tag_name + " / ";
    })
    articleTag = articleTag.slice(0, -3);
    article.tag = articleTag
    let articles = await models.Article.findAll({
        include: [{
            model: models.Category,
            where: {id: article.category_id}
        }],
        limit: 10
    });
    articles.forEach(art => {
        let y = art.createdAt.getFullYear();
        let m = art.createdAt.getMonth() + 1;
        let d = art.createdAt.getDate();
        let day = d + '/' + m + '/' + y;
        art.createDay = day;
    })
    article.featuredProducts = articles;

    let comments = await models.Comment.findAll({
        where: {article_id: id},
        include: [{
            model: models.User,
            attributes: ['name']
        }],
        order: [['createdAt', 'DESC']],
    })
    comments.forEach(comment => {
        let y = comment.createdAt.getFullYear();
        let m = comment.createdAt.getMonth() + 1;
        let d = comment.createdAt.getDate();
        let h = comment.createdAt.getHours();
        let min = comment.createdAt.getMinutes();
        let day = h + ':' + min + " " + d + '/' + m + '/' + y;
        comment.createDay = day;
    })
    res.locals.comments = comments;
    
    res.render('newDetail');
}

controller.addComment = async (req, res) => {
    let comment = req.body.comment;
    let article_id = req.body.article_id;
    let user_id = req.user.id;
    console.log("123" + article_id);
    console.log(user_id);
    if (comment) {
        models.Comment.create({
            content: comment,
            article_id: article_id,
            user_id: user_id
        }).then(async (comment) => {
            let name = await models.User.findOne({where: {id: user_id} })
            return res.json({name: name.name})
        }).catch((err) => {
            console.log("123" + err);
        });
    }
}

module.exports = controller;