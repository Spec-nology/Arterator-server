const express = require('express');
const router = express.Router();

const promptController = require('../controllers/prompts');

router.post('/', promptController.getPromptFromRequestForm);

//TODO - Move this.
router.get('/', promptController.getAllPromptFragments);
router.get('/tag/:tag', promptController.getPromptFragmentsByTagName);

module.exports = router;
