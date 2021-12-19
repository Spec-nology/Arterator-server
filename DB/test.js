const db = require('./dbConfig');
const dbQueries = require('./queries/dbQueries');

dbQueries.dbInit(db);
dbQueries.dbSeed(db);
