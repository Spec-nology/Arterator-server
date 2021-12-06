const app = require('./index');
const port = process.env.PORT || 3000;
const helpers = require('./helpers');

const promptRoutes = require('./routes/prompts.js');
app.use('/prompt', promptRoutes);

app.get('/', (req, res) => {
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
