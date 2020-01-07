const express = require('express');
const router = express.Router();
const {signup} = require('../controllers/auth');

const {runValidation} = require('../validators');
const {userSignupValidation} = require('../validators/auth');


router.post('./signup', userSignupValidation, runValidation, signup);

module.exports = router;

