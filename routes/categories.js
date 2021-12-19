const express = require('express');
const router = express.Router();

const categoriesController = require('../controllers/categories');

router.get('/', categoriesController.index);
router.get('/categories', categoriesController.index);
router.get('/tags', categoriesController.index);
router.get('/categoriesWithTags', categoriesController.index);

module.exports = router;
