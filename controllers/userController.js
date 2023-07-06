"use strict";

const controller = {};
const models = require("../models");

controller.showProfile = (req, res) => {
  res.render("myprofile");
};

module.exports = controller;
