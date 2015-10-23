Artists = new Mongo.Collection("artists");
if (Meteor.isClient) {
  //Template.body.helpers({
  //  artists: function () {
  //    return Artists.find({});
  //  }
  //});
  //
  //Template.insertArtist.events({
  //  'click button': function (event) {
  //    Artists.insert({
  //      name: $(event.target).siblings('input').val()
  //    });
  //  }
  //});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
