require('dotenv').config();

const db;

// The below conditions change the environment and behavior or our DB depending on the setup in the .env file.

if (process.env.RESET_DB === 'true') {
  // Run the SQL file to reset the database.
}

if (process.env.DEV === 'true') {
  // Connect to DB one.
} else {
  // connect to the live DB.
}

module.exports = db