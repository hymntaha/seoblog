const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/auth");
const { signin } = require("../controllers/auth");

const { runValidation } = require("../validators");
const {
  userSignupValidation,
  userSigninValidation
} = require("../validators/auth");

router.post("./signup", userSignupValidation, runValidation, signup);
router.post("./signing", userSigninValidation, runValidation, signin);

module.exports = router;
