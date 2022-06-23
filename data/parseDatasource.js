const fs = require('fs');
const Papa = require('papaparse');
const { dirname } = require('path');

const appDir = dirname(require.main.filename);

const readFile = fileLocation => {
    try {
        const data = fs.readFileSync(appDir + fileLocation, 'utf8');
        const result = Papa.parse(data, { header: true });

        return result.data;
    } catch (err) {
        throw new Error('There was an error reading the target file.');
    }
};

module.exports = { readFile };
