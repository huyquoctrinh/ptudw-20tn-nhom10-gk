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
    // 1. noi bat
    options.order = [['view_count', 'DESC']]
    let featureArticle = await models.Article.findAll(options)
    featureArticle.forEach(article => {
        let y = article.createdAt.getFullYear();
        let m = article.createdAt.getMonth() + 1;
        let d = article.createdAt.getDate();
        let day = d + '/' + m + '/' + y;
        article.createDay = day;
    })
    const firstNews = featureArticle.splice(0, 1);
    const secondNews = featureArticle.splice(0, 1);
    res.locals.firstNews = firstNews;
    res.locals.secondNews = secondNews;
    res.locals.featureArticle = featureArticle;
    //##1
    // 2.tin xem nhieu nhat
    options.order = [['view_count', 'DESC']]
    let mostViewArticle = await models.Article.findAll(options)
    mostViewArticle.forEach(article => {
        let y = article.createdAt.getFullYear();
        let m = article.createdAt.getMonth() + 1;
        let d = article.createdAt.getDate();
        let day = d + '/' + m + '/' + y;
        article.createDay = day;
    })
    res.locals.mostViewArticle = mostViewArticle;
    //##2
    // 3. tin moi nhat
    const limit = 3;
    let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));
    options.order = [['createdAt', 'DESC']]
    options.limit = limit,
    options.offset = limit * (page-1)
    let {rows, count}= await models.Article.findAndCountAll(options)
    rows.forEach(article => {
        let y = article.createdAt.getFullYear();
        let m = article.createdAt.getMonth() + 1;
        let d = article.createdAt.getDate();
        let day = d + '/' + m + '/' + y;
        article.createDay = day;
    })
    res.locals.pagination = {
        page: page,
        limit: limit,
        totalRows: count, 
        queryParams: req.query
    }

    res.locals.newestArticle = rows;
    res.render('Categories');
}

module.exports = controller;