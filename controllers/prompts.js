// TODO bring in the model.
const CategoriesAndTags = require('../models/categories');

const index = async (req, res) => {
  try {
    const init = await CategoriesAndTags.getAllCategoriesAndTags;
    console.log(init);
    res.status(200).send(init);
  } catch (error) {
    res.status(500).send('oops');
  }
};

module.exports = { index };
