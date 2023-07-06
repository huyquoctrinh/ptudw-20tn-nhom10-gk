"use strict";

const controller = {};
const models = require("../models");

controller.showNav = async (req, res) => {
  const categories = await models.Category.findAll();
  res.render("layout");
};

controller.showHomepage = async (req, res) => {

    // 1.noi bat trong tuan: filter theo view_count + #createdAt trong tuan
    let featureArticle  = await models.Article.findAll({
      include: models.Category,
      order: [['view_count', 'DESC']],
      limit: 10
    })
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

    //## 1

    // 2.moi nhat: filter theo createdAt
    let newestArticle  = await models.Article.findAll({
      include: models.Category,
      order: [['createdAt', 'DESC']],
      limit: 10
    })
    newestArticle.forEach(article => {
      let y = article.createdAt.getFullYear();
      let m = article.createdAt.getMonth() + 1;
      let d = article.createdAt.getDate();
      let day = d + '/' + m + '/' + y;
      article.createDay = day;
    })
    
    res.locals.newestArticle = newestArticle;
    //##2

    // 3.xem nhieu nhat : filter theo view_count
    let mostViewArticle  = await models.Article.findAll({
      include: models.Category,
      order: [['view_count', 'DESC']],
      limit: 10
    })

    mostViewArticle.forEach(article => {
        let y = article.createdAt.getFullYear();
        let m = article.createdAt.getMonth() + 1;
        let d = article.createdAt.getDate();
        let day = d + '/' + m + '/' + y;
        article.createDay = day;
    })
    res.locals.mostViewArticle = mostViewArticle;
    //##3

  // 4. moi chuyen muc
  let thoisu = await models.Article.findAll({
    include: models.Category,
    where: {
      category_id: 4,
    },
    order: [['createdAt', 'DESC']]
  });

  res.locals.thoisu = thoisu;
  res.locals.thoisu3 = thoisu.slice(0, 3);

  let health = await models.Article.findAll({
    include: models.Category,
    where: {
      category_id: 5,
    },
    order: [['createdAt', 'DESC']]
  });

  res.locals.health = health;
  res.locals.health3 = health.slice(0, 3);

  let entertainment = await models.Article.findAll({
    include: models.Category,
    where: {
      category_id: 6,
    },
    order: [['createdAt', 'DESC']]
  });

  res.locals.entertainment = entertainment;
  res.locals.entertainment3 = entertainment.slice(0, 3);
  res.render('index');
}

controller.showPage = (req, res, next) => {
    const pages = [
        "log-in",
        "sign-up",
        "admin",
        "admin-addpremium",
        "AdmineditorDetail",
        "AdminManageCategories",
        "AdminViewAllPost",
        "change-pass",
        "checkStatus",
        "confirmpass",
        "editor",
        "forgotpass",
        "mylist",
        "myprofile",
        "post",
        "premium",
        "reporter",
        "tags",
        "update-list",
        "update-profile",
        "updatePost",
      ];
      if (pages.includes(req.params.page)) return res.render(req.params.page);
      next();
};


module.exports = controller;
