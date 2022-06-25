const app = require('./index');
const port = process.env.PORT || 3000;
const helpers = require('./helpers');
var cors = require('cors');
app.use(cors());

const db = require('./DB/dbConfig');
const dbQueries = require('./DB/queries/dbQueries');

app.get('/', async (req, res) => {
    res.send(`welcome to our art API`);
});

const promptRoutes = require('./routes/prompts.js');
app.use('/prompt', promptRoutes);

const categoryRoutes = require('./routes/categories.js');
const Prompts = require('./models/prompts');
app.use('/categories', categoryRoutes);

if (process.env.DEV === 'true') {
    app.get('/resetDB', async (req, res) => {
        try {
            await dbQueries.dbInit(db);
            await Prompts.seedDatabase();

            res.status(200).send('DB reset');
        } catch (error) {
            res.status(500).send('Error resetting DB');
        }
    });
}

// Error handling for missing routes
app.get('*', function (req, res) {
    res.status(404).send({
        error: "Looks like what you're looking for isn't here, try one of the below.",
        home: '/',
        prompts: '/prompt',
        categories: '/categories',
        tags: '/categories/tags',
        'categories with tags': '/categories/categorieswithtags',
    });
});

app.listen(port, () => {
    console.log(`${helpers.getServerGreeting()} & listening on port ${port}`);
});
