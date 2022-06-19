const app = require('./index');
const port = process.env.PORT || 3000;
const helpers = require('./helpers');

const db = require('./DB/dbConfig');
const dbQueries = require('./DB/queries/dbQueries');

const promptRoutes = require('./routes/prompts.js');
app.use('/prompt', promptRoutes);

const categoryRoutes = require('./routes/categories.js');
app.use('/categories', categoryRoutes);

app.get('/', async (req, res) => {
    res.send(`welcome to our art API`);
});

app.get('/recommendation', (req, res) => {
    console.log('recommendation request');
});

if (process.env.DEV === 'true') {
    app.get('/resetDB', async (req, res) => {
        try {
            await dbQueries.dbInit(db);
            await dbQueries.dbSeed(db);
            res.status(200).send('DB reset');
        } catch (error) {
            res.status(500).send('Error resetting DB', error);
        }
    });
}

// Error handling for missing routes
app.get('*', function (req, res) {
    res.status(404).send('what???');
});

app.listen(port, () => {
    console.log(`${helpers.getServerGreeting()} & listening on port ${port}`);
});
