const express = require("express");
const router = express.Router();
const aboutUsController = require("../controllers/aboutUsController");

// Define routes for each property
router.get("/title", aboutUsController.getTitle);
router.patch("/title", aboutUsController.updateTitle);

router.get("/company-bio", aboutUsController.getCompanyBio);
router.patch("/company-bio", aboutUsController.updateCompanyBio);

router.get("/what-we-do", aboutUsController.getWhatWeDo);
router.patch("/what-we-do", aboutUsController.updateWhatWeDo);

router.get("/our-vision", aboutUsController.getOurVision);
router.patch("/our-vision", aboutUsController.updateOurVision);

router.get("/our-mission", aboutUsController.getOurMission);
router.patch("/our-mission", aboutUsController.updateOurMission);

router.get("/our-goals", aboutUsController.getOurGoals);
router.patch("/our-goals", aboutUsController.updateOurGoals);

router.get("/our-promise", aboutUsController.getOurPromise);
router.patch("/our-promise", aboutUsController.updateOurPromise);

module.exports = router;
