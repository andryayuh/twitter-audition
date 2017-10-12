const filterQuery = (q, text) => {

  let queryMatch = q.split(' ').filter(el => {
    return text.includes(el.toLowerCase());
  });
  return queryMatch.join(' ');
};


const filterTweet = (textArr, queryArr) => {

  let textMatch = [];
  for (var i = 0; i < queryArr.length; i++) {
    textArr.forEach(word => {
      if (word.includes(queryArr[i])) {
        textMatch.push(word);
      }
    });
  }
  return textMatch;
};


const addRelevanceProperty = (res, query) => {

  // filter out results that don't match query
  let matchingTweets = [];
  for (var i = 0; i < res.length; i++) {
    let tweetObj = res[i];
    let text = tweetObj.text.toLowerCase();
    let textArr = text.split(' ');
    let queryMatch = filterQuery(query.toLowerCase(), text);
    if (queryMatch !== '') {
      let queryArr = queryMatch.split(' ');

      //quantify relevance with num of words in text matching any elements in query
      let count = filterTweet(textArr, queryArr).length;

      let newObj = {};
      newObj.id = tweetObj.id;
      newObj.username = tweetObj.username;
      newObj.dateTime = tweetObj.dateTime;
      newObj.text = tweetObj.text;
      newObj.color = tweetObj.color;
      newObj.relevance = count;

      matchingTweets.push(newObj);
    }
  }

  return matchingTweets;
};


const sortResults = (res, query) => {
  let tweetArr = addRelevanceProperty(res, query);
  console.log(`ordering results of ${tweetArr.length} tweets...`);

  tweetArr.sort((a, b) => b.relevance - a.relevance);
  return tweetArr;
};


module.exports = sortResults;







