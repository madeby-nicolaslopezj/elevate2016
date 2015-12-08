Tweets = new ReactiveVar([]);

Template.twitter.helpers({
  tweets: function() {
    return Tweets.get().map(function(document, index) {
      document.index = index;
      return document;
    });
  },
  isCero: function(index) {
    return index === 0;
  }
});

Template.twitter.rendered = function() {
  var tf = new TweetFetcher('521862817826103296');
  tf.fetch(function(tweets) {
    Tweets.set(tweets);
  }, 3);
};
