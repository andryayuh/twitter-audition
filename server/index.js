const express = require('express');
const Tweet = require('./../db/index');
const parseTweets = require('./utils/tweetConstructor');
const app = express();
const sortResults = require('./utils/sortResults');

app.use(express.static(__dirname + '/../client/dist/'));

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.get('/tweets', (req, res) => {

  console.log('querying db for', req.query.query);

  Tweet.find({$text: { $search: req.query.query}}, (err, matches) => {
    if (err) {
      res.sendStatus(500);
    } else {
      // sort by relevance
      let sorted = sortResults(matches, req.query.query);
      res.status(200).json(sorted);
    }
  });
});

// comment out to stop re-add of tweets to db
parseTweets();


var port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});