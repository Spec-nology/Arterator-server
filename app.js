const app = require('./index');

app.listen(3000, () => {
  console.log('hey');
});

app.get('/', (req, res) => {
  res.send('welcome to our art API');
});

app.get('/recommendation', (req, res) => {
  console.log('recommendation request');
});

app.get('/prompt/:prompt', (req, res) => {
  // Users artwork attached to this prompt gets sent back here.
});
app.post('/prompt/:prompt', (req, res) => {
  // User can add a post to a prompt here.
});
