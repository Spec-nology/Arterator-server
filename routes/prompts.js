const express = require('express');
const router = express.Router();

const promptController = require('../controllers/prompts');

router.get('/', promptController.index);

module.exports = router;
