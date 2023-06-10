'use strict';

const controller = {};
const models = require('../models');

controller.showCategory = async (req, res) => {
    let category = isNaN(req.query.id) ? 0 : parseInt(req.query.id);
    
    let categoryInfo = await models.Category.findOne({ where: {id: category}})
    res.locals.categoryInfo = categoryInfo
    let options = {
        include: models.Category,
        where: {}
    }
    if (category > 0){
        options.where.category_id = category;
    }
    
    let articles = await models.Article.findAll(options)
    articles.forEach(article => {
        let y = article.createdAt.getFullYear();
        let m = article.createdAt.getMonth() + 1;
        let d = article.createdAt.getDate();
        let day = d + '/' + m + '/' + y;
        article.createDay = day;
    })
    const firstNews = articles.splice(1, 1);
    const secondNews = articles.splice(1, 1);
    res.locals.firstNews = firstNews;
    res.locals.secondNews = secondNews;
    res.locals.featuredProducts = articles;

    res.render('Categories');
}

module.exports = controller;