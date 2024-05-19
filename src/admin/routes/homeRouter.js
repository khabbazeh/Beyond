const express = require("express");
const homeController = require("../controllers/homeController");
const uploadMulter = require("../middleware/multer");
const router = express.Router();
router.get("/", homeController.getHome);
// router.patch("/title", homeController.updateTitle);
// router.patch("/subTitle", homeController.updateSubTitle);
// router.patch("/statisticTitle", homeController.updateStatisticTitle);
// router.patch("/statistic", homeController.updateStatistic);

// router.patch("/quote", homeController.updateQuote);
// router.patch("/testimonialTitle", homeController.updateTestimonialTitle);
// router.patch("/testimonialSubTitle", homeController.updateTestimonialSubTitle);
// router.patch(
//   "/testimonials",
//   uploadMulter.single("img"),
//   homeController.updateTestimonials
// );
// router.patch("/certificatesTitle", homeController.updateCertificatesTitle);
// router.patch("/certificates", homeController.updateCertificates);

router.put("/", homeController.updateHomePage);
module.exports = router;
