const siteController = require("../controllers/siteController");
const router = require("express").Router();

router.get("/", siteController.homePage);
router.get("/about", siteController.aboutPage);
router.get("/data", siteController.getData);

module.exports = router;
