const express = require("express");
const router = express.Router();

const { getUserDetails } = require("../controllers/user");

router.route("/userDetails/:id").get(getUserDetails);

module.exports = router;
