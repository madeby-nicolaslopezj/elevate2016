Template.historia.onCreated(function() {
  this.subscribe('historia');
});

Template.historia.helpers({
  items: function() {
    return HistoryItems.find({}, { sort: { position: 1 } });
  }
});
