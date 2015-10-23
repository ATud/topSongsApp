Artists = new Mongo.Collection("artists");
Songs = new Mongo.Collection("songs");

//if we do not put a default route, the router will warn us
Router.route('/', { data: function(){} });

//adding a route for the
Router.route('/artist/:_id', {
    template: 'artistPage'
    , data: function(){
        return {
          songs: Songs.find({ artistId: this.params._id })
          , artist: Artists.findOne({ _id: this.params._id })
        }
    }
});

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
