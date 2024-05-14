const express = require("express");
const servicesController = require("../controllers/ourServicesController");
const uploadMulter = require("../middleware/multer");
const router = express.Router();

router.get("/", servicesController.getAllServices);

router.get("/:id", servicesController.getOneService);

router.patch(
  "/:id",
  uploadMulter.single("icon"),
  servicesController.updateService
);

module.exports = router;
