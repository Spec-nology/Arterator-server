const db = require('../DB/dbConfig');
const dbQueries = require('../DB/queries/dbQueries');

const { formatTagData } = require('./helpers');

// const init = async () => {
//   await dbQueries.dbInit(db);
//   await dbQueries.dbSeed(db);
// };

class CatagoriesAndTags {
  constructor(data) {}

  static get getAllCategoriesAndTags() {
    return new Promise(async (resolve, reject) => {
      try {
        // const result = await dbQueries.getTagsWithCategories(db);
        const categories = await dbQueries.getAllCatagories(db);
        const tags = await dbQueries.getAllTags(db);

        const result = formatTagData(categories, tags);

        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  static get getAllCategories() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await dbQueries.getAllCatagories(db);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }

  static get getAllTags() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await dbQueries.getAllTags(db);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = CatagoriesAndTags;
