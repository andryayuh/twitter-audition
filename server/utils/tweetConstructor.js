const fs = require('fs');

const colors = {
  A: 'red',
  B: 'orange',
  C: 'yellow',
  D: 'olive',
  E: 'green',
  F: 'teal',
  G: 'blue',
  H: 'violet',
  I: 'purple',
  J: 'pink',
  K: 'brown',
  L: 'grey',
  M: 'black',
  N: 'red',
  O: 'orange',
  P: 'yellow',
  Q: 'olive',
  R: 'green',
  S: 'teal',
  T: 'blue',
  U: 'violet',
  V: 'purple',
  W: 'pink',
  X: 'brown',
  Y: 'grey',
  Z: 'black',
}; 

const splitTweet = (err, data) => {
  if (err) { console.log('ERROR', err); }
  data = data.toString().split('\n');
  data.forEach(tweet => {

    tweet = tweet.replace(/\s\s+/g, ' ');
    console.log(tweet);
    
  });
  // console.log(data);
};

const getUsername = (tweet) => {
  let words = tweet.split(' ');
  let username = words[words.length - 1];
  return username;
};

const createTweets = () => {
  // create id in server
  // parse msg
  fs.readFile('../../assignment_tweet.txt', 'utf8', splitTweet);
};

createTweets();

module.exports.createDBTweetObj = () => {

};