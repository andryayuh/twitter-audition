const mongoose = require('mongoose');
const db = mongoose.connection;
var Promise = require('bluebird');
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/tweets', { useMongoClient: true });

db.on('error', console.error.bind(console, 'db connection error!'));
db.once('open', () => console.log('mongoose connected successfully'));

const tweetSchema = new mongoose.Schema({
  username: String,
  dateTime: String,
  text: String,
  color: String
});

tweetSchema.index(
  {
    username: 'text',
    text: 'text'
  }
);

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;