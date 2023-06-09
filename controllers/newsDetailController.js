'use strict';

const controller = {};
const models = require('../models');

controller.showDetail = async (req, res) => {
    let id = isNaN(req.query.id) ? 0 : parseInt(req.query.id)
    let article = await models.Article.findAll({
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
            attributes: ['id']
        }, {
            model: models.Category,
            attributes: ['category_name']
        }]
    })
    console.log(article.length)
    article.forEach(ar => {
    let y = ar.createdAt.getFullYear();
    let m = ar.createdAt.getMonth() + 1;
    let d = ar.createdAt.getDate();
    let day = d + '/' + m + '/' + y;
    ar.createDay = day;
    })
    res.locals.article = article
    let articles = await models.Article.findAll({include: models.Category});
    articles.forEach(article => {
        let y = article.createdAt.getFullYear();
        let m = article.createdAt.getMonth() + 1;
        let d = article.createdAt.getDate();
        let day = d + '/' + m + '/' + y;
        article.createDay = day;
        console.log(article.id);
    })
    let products = articles;
    res.locals.featuredProducts = products;
    res.render('newDetail');
}

module.exports = controller;