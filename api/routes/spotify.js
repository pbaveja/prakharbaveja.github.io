var express = require('express');
var router = express.Router();
var spotifyApi = require('../lib/spotify');

router.get('/playlists/:id', function(req, res, next) {
	// Get tracks in a playlist
	// res.json({ name: 'my Playlist Name' });
	spotifyApi
	  .getPlaylist(req.params.id)
	  .then(
	    function(data) {
	    	// console.log('The playlist contains these tracks', data.body);
	  		res.json(data.body);
	    },
	    function(err) {
	    	console.log('Something went wrong!', err);
			res.status(500).json({
				error: err
			});
	    }
	);
});
module.exports = router;
