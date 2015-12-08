Meteor.publish('historia', function() {
  return HistoryItems.find();
});
