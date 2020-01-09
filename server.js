const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Api running'));

const PORT = process.env.port || 5000;

app.listen(PORT, function() {
  console.log(`Sever started on port ${PORT}`);
});
