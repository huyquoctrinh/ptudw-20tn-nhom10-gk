"use strict";
const Op = require("sequelize").Op;
const controller = {};
const models = require("../models");

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

controller.showNav = async (req, res) => {
  const categories = await models.Category.findAll();
  let rootCate = [];
  categories.forEach((cate) => {
    if (cate.root_category_id == null) rootCate.push(cate);
  });
  for (let i = 0; i < rootCate.length; i++) {
    rootCate[i].subCate = [];
    rootCate[i].hasSubCate = false;
    for (let j = 0; j < categories; j++) {
      if (categories[j].root_category_id == rootCate[i].id) {
        rootCate[i].hasSubCate = true;
        rootCate[i].subCate.push(categories[j]);
      }
    }
  }
  res.locals.rootCate = rootCate;
  res.render("layout");
};

controller.showHomepage = async (req, res) => {
  // 1.noi bat trong tuan: filter theo view_count + #createdAt trong tuan
  let isSubcribeValid = (await validateUser(req) == true);
  let featureOptions = {
    include: models.Category,
    order: [["view_count", "DESC"]],
    where: {
      publishDay: {
        [Op.not]: null,
        [Op.lte]: Date.now(),
      },
    },
    limit: 10,
  };
  if (isSubcribeValid) featureOptions.order.unshift(["is_premium", "DESC"]);
  else featureOptions.where.is_premium = false;

  let featureArticle = await models.Article.findAll(featureOptions);
  featureArticle.forEach((article) => {
    let y = article.createdAt.getFullYear();
    let m = article.createdAt.getMonth() + 1;
    let d = article.createdAt.getDate();
    let day = d + "/" + m + "/" + y;
    article.createDay = day;
  });
  const firstNews = featureArticle.splice(0, 1);
  const secondNews = featureArticle.splice(0, 1);
  res.locals.firstNews = firstNews;
  res.locals.secondNews = secondNews;
  res.locals.featureArticle = featureArticle;

  //## 1

  // 2.moi nhat: filter theo createdAt
  let newesOptions = {
    include: models.Category,
    order: [["createdAt", "DESC"]],
    where: {
      publishDay: {
        [Op.not]: null,
        [Op.lte]: Date.now(),
      },
    },
    limit: 10,
  };
  if (isSubcribeValid) newesOptions.order.unshift(["is_premium", "DESC"]);
  else newesOptions.where.is_premium = false;
  let newestArticle = await models.Article.findAll(newesOptions);
  newestArticle.forEach((article) => {
    let y = article.createdAt.getFullYear();
    let m = article.createdAt.getMonth() + 1;
    let d = article.createdAt.getDate();
    let day = d + "/" + m + "/" + y;
    article.createDay = day;
  });

  res.locals.newestArticle = newestArticle;
  //##2

  // 3.xem nhieu nhat : filter theo view_count
  let mostViewOptions = {
    include: models.Category,
    order: [["view_count", "DESC"]],
    where: {
      publishDay: {
        [Op.not]: null,
        [Op.lte]: Date.now(),
      }
    },
    limit: 20,
  };
  if (isSubcribeValid) mostViewOptions.order.unshift(["is_premium", "DESC"]);
  else mostViewOptions.where.is_premium = false;
  let mostViewArticle = await models.Article.findAll(mostViewOptions);

  mostViewArticle.forEach((article) => {
    let y = article.createdAt.getFullYear();
    let m = article.createdAt.getMonth() + 1;
    let d = article.createdAt.getDate();
    let day = d + "/" + m + "/" + y;
    article.createDay = day;
  });
  res.locals.mostViewArticle = mostViewArticle;
  //##3

  // 4. moi chuyen muc
  let allCates = await models.Category.findAll();
  
  let allCateOptions = {
    where: {
      publishDay: {
        [Op.not]: null,
        [Op.lte]: Date.now(),
      },
    },
    order: [["createdAt", "DESC"]],
    limit: 1,
  }
  if (isSubcribeValid) allCateOptions.order.unshift(['is_premium', 'DESC']);
  else allCateOptions.where.is_premium = false;

  for (let i = 0; i < allCates.length; i++) {
    console.log(allCates[i].id);
    allCateOptions.where.category_id = allCates[i].id;
    let post = await models.Article.findAll(allCateOptions);
    allCates[i].article = post;
  }
  res.locals.allCates = allCates;
  res.render("index");
};

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
    "writer",
    "tags",
    "update-list",
    "update-profile",
    "updatePost",
  ];
  if (pages.includes(req.params.page)) return res.render(req.params.page);
  next();
};

controller.showAllTag = async (req, res) => {
  const limit = 12;
  let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));
  let tagPostOptions = {
    order: [["createdAt", "DESC"]],
    limit: limit,
    offset: limit * (page - 1),
  };
  let { rows, count } = await models.Tag.findAndCountAll(tagPostOptions);
  res.locals.pagination = {
    page: page,
    limit: limit,
    totalRows: count,
    queryParams: req.query,
  };
  res.locals.tags = rows;
  res.render("AllTag");
};

controller.showTagPost = async (req, res) => {
  let id = parseInt(req.query.id);
  console.log(id);
  let tag = await models.Tag.findOne({ where: { id: id } });
  const limit = 6;
  let page = isNaN(req.query.page) ? 1 : Math.max(1, parseInt(req.query.page));
  let tagOptions = {
    include: [
      {
        model: models.Article,
        include: {
          model: models.Category,
          attributes: ["category_name"],
        },
        order: [["createdAt", "DESC"]],
        
      },
    ],
    where: { tag_id: id },
    limit: limit,
    offset: limit * (page - 1),
  }; 
  let { rows, count } = await models.ArticleTag.findAndCountAll(tagOptions);

  rows.forEach((article) => {
    let y = article.Article.createdAt.getFullYear();
    let m = article.Article.createdAt.getMonth() + 1;
    let d = article.Article.createdAt.getDate();
    let day = d + "/" + m + "/" + y;
    article.createDay = day;
    console.log(article.Article.Category.category_name);
  });

  res.locals.pagination = {
    page: page,
    limit: limit,
    totalRows: count,
    queryParams: req.query,
  };
  if (rows.length == 0) res.locals.hasArticle = false;
  else res.locals.hasArticle = true;
  res.locals.articles = rows;
  res.locals.tag = tag;
  res.render("TagPost");
};

controller.showSearchResults = async (req, res) => {
  const { query } = req.query;

  try {
    // Sử dụng Sequelize để thực hiện tìm kiếm full-text
    const searchResults = await models.Article.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.iLike]: `%${query}%` } }, // Tìm theo title (không phân biệt hoa thường)
          { briefDescription: { [Op.iLike]: `%${query}%` } }, // Tìm theo abstract (không phân biệt hoa thường)
          { description: { [Op.iLike]: `%${query}%` } }, // Tìm theo nội dung (không phân biệt hoa thường)
        ],
      },
    });

    // Render kết quả tìm kiếm
    res.render("search", { searchResults });
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error(error);
    res.render("error");
  }
};

module.exports = controller;
