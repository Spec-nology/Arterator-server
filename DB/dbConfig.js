require('dotenv').config();
const { join: joinPath } = require('path');
const pgp = require('pg-promise')();

let ssl = { rejectUnauthorized: false };

const config = {
  connectionString: process.env.DB_URI,
  max: 30,
  ssl: ssl,
};

const db = pgp(config);

function sql(file) {
  const fullPath = joinPath(__dirname, file); // generating full path;
  return new pgp.QueryFile(fullPath, { minify: true });
}

db.none(sql('init.SQL'))
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log('ERROR:', error);
  });

console.log(sql('init.SQL'));

module.exports = db;
