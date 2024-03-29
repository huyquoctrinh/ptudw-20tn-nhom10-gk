"use strict";

const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");
router.get("/myprofile", controller.showProfile);
router.get("/update-profile", controller.showUpdate);

module.exports = router;
