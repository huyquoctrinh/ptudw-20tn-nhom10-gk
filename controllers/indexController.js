"use strict";

const controller = {};
const models = require("../models");

controller.showNav = async (req, res) => {
  const categories = await models.Category.findAll();
  
  // const featuredProducts = await models.Product.findAll({
  //     attributes: ['id', 'name', 'imagePath', 'stars', 'price', 'oldPrice'],
  //     order: [['stars', 'DESC']],
  //     limit: 10
  // });
  // res.locals.featuredProducts = featuredProducts;
  // const recentProducts = await models.Product.findAll ({
  //     attributes: ['id', 'name', 'imagePath', 'stars', 'price', 'oldPrice'],
  //     order: [['createdAt', 'DESC']],
  //     limit: 10
  // })

  // res.locals.recentProducts = recentProducts;
  // const Brand = models.Brand;
  // const brands = await Brand.findAll();
  res.render("layout");
};

controller.showHomepage = async (req, res) => {
    let articles = await models.Article.findAll({include: models.Category});
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
    console.log(firstNews);
    // let products = articles;
    // res.locals.featuredProducts = products;
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

  let thoisu = await models.Article.findAll({
    include: models.Category,
    where: {
      category_id: 5,
    },
  });

  res.locals.thoisu = thoisu;
  res.locals.thoisu3 = thoisu.slice(0, 3);

  let health = await models.Article.findAll({
    include: models.Category,
    where: {
      category_id: 5,
    },
  });

  res.locals.health = health;
  res.locals.health3 = health.slice(0, 3);

  let entertainment = await models.Article.findAll({
    include: models.Category,
    where: {
      category_id: 6,
    },
  });

  res.locals.entertainment = entertainment;
  res.locals.entertainment3 = entertainment.slice(0, 3);


    // res.locals.articles = articlesArray;
    res.locals.mostViewArticle = mostViewArticle;
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
