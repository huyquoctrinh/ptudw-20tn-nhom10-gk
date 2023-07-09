"use strict";

const controller = {};
const models = require("../models");

controller.showMylist = async (req, res) => {
  let writer_id = req.user.id;
  let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));
  const limit = 5;
  let { rows, count } = await models.Article.findAndCountAll({
    where: { writer_id: writer_id },
    include: [
      {
        model: models.ArticleStatus,
        order: [["createdAt", "DESC"]],
        limit: 1,
      },
    ],
    order: [["createdAt", "DESC"]],
    limit: limit,
    offset: limit * (page - 1),
  });
  rows.forEach((article) => {
    let y = article.createdAt.getFullYear();
    let m = article.createdAt.getMonth() + 1;
    let d = article.createdAt.getDate();
    let day = d + "/" + m + "/" + y;
    article.createDay = day;
    if (article.publishDay != null) {
      article.status = "Published";
    } else if (article.publishDay == null && article.ArticleStatuses.length == 0) article.status = "Draft";
    else {
      article.status = article.ArticleStatuses[0].status;
    }
    article.briefDescription = article.briefDescription.substring(0, 100);
  });
  res.locals.pagination = {
    page: page,
    limit: limit,
    totalRows: count,
    queryParams: req.query,
  };
  if (count > 0) res.locals.hasPost = true;
  else res.locals.hasPost = false;
  res.locals.posts = rows;
  res.render("mylist");
};

controller.showDraft = async (req, res) => {
  let writer_id = req.user.id;
  let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));
  const limit = 5;
  let { rows, count } = await models.Article.findAndCountAll({
    where: { writer_id: writer_id },
    include: [
      {
        model: models.ArticleStatus,
        order: [["createdAt", "DESC"]],
        limit: 1,
      },
    ],
    order: [["createdAt", "DESC"]],
    limit: limit,
    offset: limit * (page - 1),
  });
  let posts = [];
  rows.forEach((article) => {
    let y = article.createdAt.getFullYear();
    let m = article.createdAt.getMonth() + 1;
    let d = article.createdAt.getDate();
    let day = d + "/" + m + "/" + y;
    article.createDay = day;
    if ( article.publishDay == null &&
        (article.ArticleStatuses.length == 0 || 
          (article.ArticleStatuses.length != 0 &&
            article.ArticleStatuses[0].status == "Draft"
          )
        )
    ) {
      article.status = "Draft";
      posts.push(article);
    }
    article.briefDescription = article.briefDescription.substring(0, 100);
  });

  res.locals.pagination = {
    page: page,
    limit: limit,
    totalRows: posts.length,
    queryParams: req.query,
  };
  if (posts.length > 0) res.locals.hasPost = true;
  else res.locals.hasPost = false;
  res.locals.posts = posts;
  res.render("myPostDraft");
};

controller.showApprove = async (req, res) => {
  let writer_id = req.user.id;

  let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));
  const limit = 5;
  let { rows, count } = await models.Article.findAndCountAll({
    where: { writer_id: writer_id },
    include: [
      {
        model: models.ArticleStatus,
        order: [["createdAt", "DESC"]],
        limit: 1,
      },
    ],
    order: [["createdAt", "DESC"]],
    limit: limit,
    offset: limit * (page - 1),
  });
  let posts = [];
  rows.forEach((article) => {
    let y = article.createdAt.getFullYear();
    let m = article.createdAt.getMonth() + 1;
    let d = article.createdAt.getDate();
    let day = d + "/" + m + "/" + y;
    article.createDay = day;
    if ( article.publishDay != null) {
      article.status = "Published";
      posts.push(article);
    }
    article.briefDescription = article.briefDescription.substring(0, 100);
  });

  res.locals.pagination = {
    page: page,
    limit: limit,
    totalRows: posts.length,
    queryParams: req.query,
  };
  if (posts.length > 0) res.locals.hasPost = true;
  else res.locals.hasPost = false;
  res.locals.posts = posts;
  res.render("myPostApprove");
};

controller.showReject = async (req, res) => {
  let writer_id = req.user.id;

  let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));
  const limit = 5;
  let { rows, count } = await models.Article.findAndCountAll({
    where: { writer_id: writer_id },
    include: [
      {
        model: models.ArticleStatus,
        order: [["createdAt", "DESC"]],
        limit: 1,
      },
    ],
    order: [["createdAt", "DESC"]],
    limit: limit,
    offset: limit * (page - 1),
  });
  let posts = [];
  rows.forEach((article) => {
    let y = article.createdAt.getFullYear();
    let m = article.createdAt.getMonth() + 1;
    let d = article.createdAt.getDate();
    let day = d + "/" + m + "/" + y;
    article.createDay = day;
    if (
      article.ArticleStatuses.length != 0 &&
      article.ArticleStatuses[0].status == "Rejected"
    ) {
      article.status = "Rejected";
      posts.push(article);
    }
    article.briefDescription = article.briefDescription.substring(0, 100);
  });

  res.locals.pagination = {
    page: page,
    limit: limit,
    totalRows: posts.length,
    queryParams: req.query,
  };
  if (posts.length > 0) res.locals.hasPost = true;
  else res.locals.hasPost = false;
  res.locals.posts = posts;
  res.render("myPostReject");
};

controller.showPostDetail = async (req, res) => {
  let article_id = parseInt(req.query.articleId);
  console.log(article_id);
  let post = await models.Article.findOne({
    where: { id: article_id },
    include: [
      {
        model: models.Category,
        attributes: ["category_name"],
      },
      {
        model: models.Writer,
        include: [
          {
            model: models.User,
            attributes: ["name"],
          },
        ],
      },
      {
        model: models.Image,
      },
      {
        model: models.ArticleStatus,
        order: [["createdAt", "DESC"]],
        limit: 1,
      },
    ],
  });

  let y = post.createdAt.getFullYear();
  let m = post.createdAt.getMonth() + 1;
  let d = post.createdAt.getDate();
  let day = d + "/" + m + "/" + y;
  post.createDay = day;
  post.Images.forEach((image) => {
    image.description = post.description;
  });
  if (post.ArticleStatuses.length == 0) post.status = "Published";
  else post.status = post.ArticleStatuses[0].status;
  res.locals.post = post;
  res.render("WriterViewPostDetail");
};
controller.showEditPostDetail = async (req, res) => {
  let article_id = parseInt(req.query.articleId);
  console.log(article_id);
  let post = await models.Article.findOne({
    where: { id: article_id },
    include: [
      {
        model: models.Category,
        attributes: ["category_name"],
      },
      {
        model: models.Writer,
        include: [
          {
            model: models.User,
            attributes: ["name"],
          },
        ],
      },
      {
        model: models.Image,
      },
      {
        model: models.ArticleStatus,
        order: [["createdAt", "DESC"]],
        limit: 1,
      },
    ],
  });

  let y = post.createdAt.getFullYear();
  let m = post.createdAt.getMonth() + 1;
  let d = post.createdAt.getDate();
  let day = d + "/" + m + "/" + y;
  post.createDay = day;
  post.Images.forEach((image) => {
    image.description = post.description;
  });
  if (post.ArticleStatuses.length == 0) post.status = "Published";
  else post.status = post.ArticleStatuses[0].status;
  res.locals.post = post;
  res.render("WriterEditPostDetail");
};

module.exports = controller;
