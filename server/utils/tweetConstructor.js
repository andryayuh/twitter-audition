const Promise = require('bluebird');
const fs = require('fs');
const Tweet = require('../../db/index');
const getDate = require('./dateTimeHelper');

const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'grey', 'black'];


const createDBTweetObj = (tweets) => {
  console.log('initiate create document');
  Tweet.remove().then(() => {
    tweets.forEach(el => {
      var tweet = new Tweet({
        username: el[el.length - 1],
        dateTime: getDate(el.slice(0, 2).join(' ')),
        text: el.slice(2, -1).join(' '),
        color: colors[Math.floor(Math.random() * 11)]
      });
      tweet.save((err, tweet) => { if (err) { console.error(err); } });
    });
  }).catch(err => { console.log('ERR removing existing tweet document/adding tweets to db', err); });
};


const modifyHaiku = (tweets, cb) => {
  // pop last el, which is an empty arr
  tweets.pop();
  for (var i = 0; i < tweets.length; i++) {
    if (tweets[i][0].slice(0, 4) !== '2014') {
      var start = i - 1;
      counter = i;
      while (tweets[counter][0].slice(0, 4) !== '2014') {
        tweets[start] = tweets[start].concat(tweets[counter]);
        tweets[start].push('\n');
        tweets.splice(counter, 1);
      }
      tweets[start].pop();
    }
  }
};

// simple check that all usernames (i.e. accounts) are nytimes (in place of tests)
// var usernames = tweets.map(el => el[el.length - 1]);
// var notNYT = usernames.filter(el => el !== 'nytimes');
// console.log(notNYT.length); //0

// simple check for concatenated tweetArray for haiku tweets (in place of tests)
// var fixed = tweets.map(el => el[0]);
// var notDate = tweets.filter(el => el[0].slice(0, 4) !== '2014');
// console.log(notDate.length) //0


const splitWords = (data, cb) => {
  // remove extra spaces in each tweet, split by word, remove trailing space
  let parsedTweet = data.map(tweet => tweet.replace(/\s\s+/g, ' ').split(' ').filter(el => el.length > 0));
  cb(parsedTweet, createDBTweetObj);
};

const splitTweets = (err, data) => {
  // create 1 arr for each tweet
  if (err) { console.log('ERROR splitting tweets', err); }
  let input = data.toString().split('\n'); 
  splitWords(input, modifyHaiku);
};


const parseTweets = (cb) => {
  fs.readFile(__dirname + '/../../assignment_tweet.txt', 'utf8', splitTweets);
};

module.exports = parseTweets;

