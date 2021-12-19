const app = require('./index');
const port = process.env.PORT || 3000;
const helpers = require('./helpers');

const db = require('./DB/dbConfig');

const promptRoutes = require('./routes/prompts.js');
app.use('/prompt', promptRoutes);

const categoryRoutes = require('./routes/categories.js');
app.use('/categories', categoryRoutes);

app.get('/', async (req, res) => {
  try {
    const response = await db.any('SELECT * FROM tags');
    console.log(response);
  } catch (error) {
    console.log('error');
  }

  res.send('welcome to our art API');
});

app.get('/recommendation', (req, res) => {
  console.log('recommendation request');
});

// Error handling for missing routes
app.get('*', function (req, res) {
  res.status(404).send('what???');
});

app.listen(port, () => {
  console.log(`${helpers.getServerGreeting()} & listening on port ${port}`);
});
