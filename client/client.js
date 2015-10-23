if (Meteor.isClient) {
    Template.artistList.helpers({
        artists: function () {
            return Artists.find({});
        }
    });

    Template.artistList.events({
        'click .remove': function (event) {
            var elementToRemove = Artists.findOne({
                name: $(event.target).closest('tr').find('.name').text()
            });
            Artists.remove({'_id' : elementToRemove._id});
        }
    });

    Template.insertArtist.events({
        'click button': function (event) {
            Artists.insert({
                name: $(event.target).siblings('input').val()
            });
        }
    });
}