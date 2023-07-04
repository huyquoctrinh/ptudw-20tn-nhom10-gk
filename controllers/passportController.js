"use strict";

const controller = {};
const models = require("../models");

controller.showProfile = async (req, res) => {
  return res.render("myprofile");
};
