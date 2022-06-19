require('dotenv').config();
// const { join: joinPath } = require('path');
const pgp = require('pg-promise')();
// const dbQueries = require('./queries/dbQueries');

let ssl = { rejectUnauthorized: false };

const config = {
    // connectionString: process.env.DB_URI,
    connectionString: 'postgres://dan@localhost:5434/dan',
    max: 30,
    ssl: false,
};

// const db = pgp(config);
// console.log(db);

// dbQueries.dbInit();
// dbQueries.dbSeed();

module.exports = pgp(config);
