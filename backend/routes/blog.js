const express = require('express');
const router = express.Router();
const {time} = './controllers/blog';

router.get('/',time)

module.exports = router;
