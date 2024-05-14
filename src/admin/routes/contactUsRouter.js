const express = require("express");
const contactusController = require("../controllers/contactUsController.js");
const router = express.Router();

//Get All Messages
router.get("/messages", contactusController.getMessages);
//Get Specific Message by ID
router.get("/messages/:id", contactusController.getMessage);
//Delete one message by ID
router.delete("/messages/:id", contactusController.deleteMessage);
module.exports = router;
