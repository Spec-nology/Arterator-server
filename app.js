const app = require('./index');
const port = process.env.PORT || 3000;

const helpers = require('./helpers');

app.listen(port, () => {
  console.log('hey');
});

app.get('/', (req, res) => {
  res.send('welcome to our art API');
});

app.get('/recommendation', (req, res) => {
  console.log('recommendation request');
});

app.get('/prompt/:promptText', (req, res) => {
  // Users artwork attached to this prompt gets sent back here.
  res.status(200).send('placeholder');
});
app.post('/prompt/:promptText', (req, res) => {
  // User can add a post to a prompt here.
  res.status(201).send('placeholder');
});

app.get('*', function (req, res) {
  res.status(404).send('what???');
});
