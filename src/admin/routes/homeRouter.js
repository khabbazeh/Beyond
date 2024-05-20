const express = require("express");
const homeController = require("../controllers/homeController");
const authController = require("../controllers/authController.js");
const router = express.Router();
router.get("/", homeController.getHome);
router.put("/", authController.protect, homeController.updateHomePage);
module.exports = router;
