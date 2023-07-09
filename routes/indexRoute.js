"use strict";
const express = require("express");
const router = express.Router();
const controller = require("../controllers/indexController");

router.get("/", controller.showHomepage);
router.get("/AllTag", controller.showAllTag);
router.get("/TagPost", controller.showTagPost);
router.get("/search", controller.showSearchResults);
// router.post("/search");

router.get("/:page", controller.showPage);

module.exports = router;
