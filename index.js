const express = require('express');
const cors = require('cors');
const app = express();

// app.use(cors());
app.use(express.json());

var whitelist = ['http://localhost:8080', 'https://arterator.netlify.app', '*'];
var corsOptions = {
    credentials: true,
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

app.use(cors(corsOptions));

module.exports = app;
