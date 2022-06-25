const dbQueries = require('../DB/queries/dbQueries');
const Prompts = require('../models/prompts');
const db = require('../DB/dbConfig');

const resetDatabase = async (req, res) => {
    try {
        if (process.env.DEV === 'true') {
            await dbQueries.dbInit(db);
            await Prompts.seedDatabase();

            res.status(200).send('DB reset');
        } else {
            throw new Error('Wrong environment type');
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Error resetting DB');
    }
};

module.exports = { resetDatabase };
