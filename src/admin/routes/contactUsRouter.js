const express = require("express");
const contactusController = require("../controllers/contactUsController.js");
const router = express.Router();

//Get All Messages
router.get("/messages", contactusController.getMessages);
//Get Specific Message by ID
router.get("/messages/:id", contactusController.getMessage);

//mark it as seen
router.patch("/messages/:id/seen", contactusController.markSeen);

//Delete one message by ID
router.delete("/messages/:id", contactusController.deleteMessage);
module.exports = router;
