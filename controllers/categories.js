// TODO bring in the model.
const CategoriesAndTags = require('../models/categories');

const getCatagoriesAndTags = async (req, res) => {
  try {
    const result = await CategoriesAndTags.getAllCategoriesAndTags;
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send('oops');
  }
};

const getCatagories = async (req, res) => {
  try {
    const result = await CategoriesAndTags.getAllCategories;
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send('oops');
  }
};

const getTags = async (req, res) => {
  try {
    const result = await CategoriesAndTags.getAllTags;
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send('oops');
  }
};

module.exports = { getCatagoriesAndTags, getCatagories, getTags };
