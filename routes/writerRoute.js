"use strict";
const express = require("express");
const router = express.Router();
const multer = require("multer");
const controller = require("../controllers/writerController");
const path = require("path");
const models = require("../models");
const sanitizeHtml = require("sanitize-html");
// const user = req.user;
// Khai báo thư mục lưu trữ hình ảnh tải lên
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads"); // Đường dẫn thư mục lưu trữ
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage });

router.get("/mylist", controller.showMylist);
router.get("/draft", controller.showDraft);
router.get("/approve", controller.showApprove);
router.get("/reject", controller.showReject);
router.get("/WriterViewPostDetail", controller.showPostDetail);
router.post("/post", upload.single("image"), async (req, res) => {
  try {
    const { title, summary, selectedCategory, summernote } = req.body;
    const image = req.file;

    // Tìm category_id dựa trên tên category đã chọn
    const category = await models.Category.findOne({
      where: { category_name: selectedCategory },
    });

    if (!category) {
      // Xử lý khi không tìm thấy category
      console.log("Category not found");
      res.redirect("/404");
      return;
    }
    // Loại bỏ các thẻ HTML không an toàn và chỉ lưu lại những thẻ cho phép, bao gồm cả thẻ iframe
    const sanitizedDescription = sanitizeHtml(summernote, {
      allowedTags: [
        "b",
        "strong",
        "i",
        "em",
        "u",
        "p",
        "ul",
        "ol",
        "li",
        "a",
        "img",
        "iframe",
      ],
      allowedAttributes: {
        a: ["href"],
        img: ["src", "alt"],
        iframe: ["src", "width", "height", "frameborder", "allowfullscreen"],
      },
    });

    // Tạo bài viết mới
    const newPost = await models.Article.create({
      title: title,
      briefDescription: summary,
      category_id: category.id,
      description: sanitizedDescription,
      view_count: 0,
      image_thumbnail: "/uploads/" + image.filename,
      writer_id: 61,
      // req.user.id
    });

    // Kiểm tra và lưu hình ảnh
    if (image) {
      await models.Image.create({
        article_id: newPost.id,
        imagePath: "/uploads/" + image.filename,
        name: image.filename,
      });
    }
    await models.ArticleStatus.create({
      status: "Draft",
      article_id: newPost.id,
    });
    res.redirect("/users/mylist");
  } catch (error) {
    // Xử lý lỗi nếu có
    console.log("hello vo duoc r ne0000000000000000000000000000");

    console.error("Error creating post:", error);
    res.redirect("/404"); // Điều hướng đến trang lỗi
  }
});

module.exports = router;
