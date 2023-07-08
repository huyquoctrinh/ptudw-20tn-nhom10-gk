"use strict";
const express = require("express");
const router = express.Router();
const multer = require("multer");
const controller = require("../controllers/writerController");
const path = require("path");
const models = require("../models");

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
router.get("/post", controller.showCreatePost);
router.post("/post", upload.single("image"), async (req, res) => {
  try {
    const { title, summary, selectedCategory, content } = req.body;
    const image = req.file;

    // Tìm category_id dựa trên tên category đã chọn
    const category = await models.Category.findOne({
      where: { category_name: selectedCategory },
    });
    console.log("hello vo duoc r ne111111111111111111111");

    if (!category) {
      // Xử lý khi không tìm thấy category
      console.log("Category not found");
      res.redirect("/404");
      return;
    }
    console.log("hello vo duoc r ne2222222222222222222");

    // Tạo bài viết mới
    const newPost = await models.Article.create({
      title: title,
      briefDescription: summary,
      category_id: category.id,
      description: content,
    });
    console.log("hello vo duoc r n3333333333333333333333333333333");

    // Kiểm tra và lưu hình ảnh
    if (image) {
      await models.Image.create({
        article_id: newPost.id,
        image_thumbnail: image.filename,
      });
    }
    console.log("hello vo duoc r ne3444444444444444444444444444");

    res
      .status(200)
      .send("<script>alert('Post created successfully!');</script>");
    res.redirect("/writer/mylist");
  } catch (error) {
    // Xử lý lỗi nếu có
    console.log("hello vo duoc r ne0000000000000000000000000000");

    console.error("Error creating post:", error);
    res.redirect("/404"); // Điều hướng đến trang lỗi
  }
});

module.exports = router;
