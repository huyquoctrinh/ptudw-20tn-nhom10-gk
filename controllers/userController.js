"use strict";

const controller = {};
const models = require("../models");

controller.showProfile = (req, res) => {
  res.render("myprofile");
};

controller.showUpdate = (req, res) => {
  res.render("update-profile");
};

module.exports = controller;
