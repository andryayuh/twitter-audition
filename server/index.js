const express = require('express');
const Tweet = require('./../db/index');
const parseTweets = require('./utils/tweetConstructor');
const app = express();

app.use(express.static(__dirname + '/../client/dist/'));

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.get('/tweets', (req, res) => {
  console.log('+++++++GET REQ', req.query.query);
  // Tweet.find({$regex : `.*${req.query.query}.*`})

  // $or
  console.log('^^^^^^^', typeof req.query.query)

  Tweet.find({$text: { $search: req.query.query}}, (err, matches) => {
    console.log('{{{{{{{{{ match', matches); //array
    res.json(matches);

  });
  // if (err) {
  //   res.sendStatus(500);
  // } else {
  //   res.send(req.query.query);
  // }
});

// uncomment to add tweets to db
// parseTweets();


var port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});