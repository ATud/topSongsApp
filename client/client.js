// ARTISTI

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
        $(event.target).siblings('input').val('');
    }
});

// CANTECE


Template.songList.helpers({
    songs: function () {
        return Songs.find({});
    }
});

Template.songList.events({
    'click .remove': function (event) {
        var elementToRemove = Songs.findOne({
            name: $(event.target).closest('tr').find('.name').text()
        });
        Songs.remove({'_id' : elementToRemove._id});
    }
    , 'click .url': function (event) {
        Session.set('youtubeUrl', $(event.target).attr('data-url').replace('watch?v=','embed/'));
    }
    , 'click .btn-info': function (event) {
        var currentSong = Songs.findOne({
            name: $(event.target).closest('tr').find('.name').text()
        });
        currentSong.likes+=1;
        Songs.update(currentSong._id,currentSong);
    }
});

Template.song.helpers({
    artistName: function () {
        return Artists.findOne({_id:this.artistId}).name;
    }
});

Template.insertSong.helpers({
    artists: function () {
        return Artists.find({});
    }
});

Template.insertSong.events({
    'click button': function (event) {
        Songs.insert({
            name: $(event.target).siblings('.song-name').val()
            , urlYoutube: $(event.target).siblings('.youtube-url').val()
            , artistId: $(event.target).siblings('select').val()
            , likes: 0
        });
        $(event.target).siblings('input').val('');
    }
});

Template.modalTpl.helpers({
    urlYoutube: function () {
        return Session.get('youtubeUrl');
    }
});

Template.modalTpl.events({
    'click .btn-default': function (event) {
        Session.set('youtubeUrl', '');
    }
});
