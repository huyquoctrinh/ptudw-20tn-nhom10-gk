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
    res.render('newDetail');
}

module.exports = controller;