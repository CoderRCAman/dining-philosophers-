const express = require("express");
const { login, GET_User_Details } = require("../controllers/users.controller");
const router = express.Router();

router.route("/login").post(login);

router.route("/:id").get(GET_User_Details)

module.exports = router;
