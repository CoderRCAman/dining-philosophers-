const { submitForm, vendorLogin } = require("../controllers/vendor.controller");

const router = require("express").Router();

// get route for fetching vendor details
// GET: /api/vendor/:id
// router.get("/:id", Get_Product)
router.post("/form", submitForm);
router.post("/login", vendorLogin);

module.exports = router;
