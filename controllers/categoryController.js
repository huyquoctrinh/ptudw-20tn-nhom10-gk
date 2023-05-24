'use strict';

const controller = {};
const models = require('../models');

controller.showCategory = async (req, res) => {
    let category = isNaN(req.query.id) ? 0 : parseInt(req.query.id);
    
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
    let articlesArray = []
    
    while (articles.length >= 4){
        articlesArray.push(articles.splice(0, 4));
        
    }
    articlesArray.push(articles)
    res.locals.articles = articlesArray;
    res.render('Categories');
}

module.exports = controller;