const express = require('express');
const router = express.Router();

const promptController = require('../controllers/database');

router.get('/', promptController.resetDatabase);

module.exports = router;
