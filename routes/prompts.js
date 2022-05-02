const express = require('express');
const router = express.Router();

const promptController = require('../controllers/prompts');

router.post('/', promptController.getPromptFromRequestForm);

module.exports = router;
