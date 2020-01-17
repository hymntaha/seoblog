const express = require("express");
const router = express.Router();
const { requireSignin, authMiddleware } = require("../controllers/auth");
const { read } = require("../controllers/read");


router.get("/profile", requireSignin, authMiddleware, read);


module.exports = router;
