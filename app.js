const app = require('./index');
const port = process.env.PORT || 3000;
const helpers = require('./helpers');

app.get('/', async (req, res) => {
    res.send(`welcome to our art API`);
});

const promptRoutes = require('./routes/prompts.js');
app.use('/prompt', promptRoutes);

const categoryRoutes = require('./routes/categories.js');
app.use('/categories', categoryRoutes);

const databaseRoutes = require('./routes/database.js');
app.use('/resetdb', databaseRoutes);

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
