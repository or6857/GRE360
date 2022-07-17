const express = require("express");
const router = express.Router();

const { getUserDetails, updateScore } = require("../controllers/user");

router.route("/userDetails/:id").get(getUserDetails);

router.route("/update/:id").get(updateScore);

module.exports = router;
