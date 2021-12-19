// TODO bring in the model.
const CategoriesAndTags = require('../models/catagories');

const index = async (req, res) => {
  try {
    const result = await CategoriesAndTags.getAllCategoriesAndTags;
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send('oops');
  }
};

module.exports = { index };
