const express = require('express');
const app = express();
const port = 3000;

// Standard-Endpunkt
app.get('/', (req, res) => {
  res.send('Hello from GitHub Actions new1!');
});

// /health Endpunkt 
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});