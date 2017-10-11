const express = require('express');

const app = express();

app.use(express.static(__dirname + '/../client/dist/'));

app.get('/', (req, res) => {
  res.send('hello world!');
});

var port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});