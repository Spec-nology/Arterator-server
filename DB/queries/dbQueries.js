const { join: joinPath } = require('path');
const { QueryFile } = require('pg-promise')();

function sql(file) {
  const fullPath = joinPath(__dirname, file); // generating full path;
  return new QueryFile(fullPath, { minify: true });
}

const dbInit = async (db) => {
  try {
    await db.none(sql('init.SQL'));
  } catch (error) {
    console.log(error);
  }
};

const dbSeed = async (db) => {
  try {
    await db.none(sql('dbSeed.SQL'));
  } catch (error) {
    console.log(error);
  }
};

const getTagsWithCategories = async (db) => {
  try {
    const result = await db.any(sql('tagsWithCategories.SQL'));

    return result;
  } catch (error) {
    console.log(error);
  }
};

const getAllCatagories = async (db) => {
  try {
    const result = await db.any(sql('getAllCategories.SQL'));
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getAllTags = async (db) => {
  try {
    const result = await db.any(sql('getAllTags.SQL'));
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  dbInit,
  dbSeed,
  getTagsWithCategories,
  getAllCatagories,
  getAllTags,
};
