const express = require('express');
const router = express.Router();

const categoriesController = require('../controllers/categories');

router.get('/', categoriesController.getCatagories);
router.get('/tags', categoriesController.getTags);
router.get('/categoriesWithTags', categoriesController.getCatagoriesAndTags);

module.exports = router;
