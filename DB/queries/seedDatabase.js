const db = require('../dbConfig');
const { readFile } = require('../../data/parseDatasource');

const seedCategories = async () => {
    const categories = await readFile('/data/datasources/categories.csv');

    db.tx(t => {
        const queries = categories.map(category => {
            return t.none('INSERT INTO categories (categoryName) VALUES ($1);', category.category_name);
        });
        return t.batch(queries);
    });
};

module.exports = { seedCategories };
