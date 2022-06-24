const express = require('express');
const router = express.Router();
var cors = require('cors');

const categoriesController = require('../controllers/categories');

router.get('/', categoriesController.getCategories);
router.get('/tags', categoriesController.getTags);
router.get('/categoriesWithTags', categoriesController.getCategoriesAndTags);

module.exports = router;
