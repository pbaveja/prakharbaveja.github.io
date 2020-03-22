var express = require('express');
var router = express.Router();
var spotifyApi = require('../lib/spotify');
var redisClient = require('../lib/redis');

// Get tracks in a playlist
router.get('/playlists/:id', function(req, res, next) {
	redisClient.hget('playlists', req.params.id, function(err, result) {
		if (err) {
			console.error(err);
		} else {
			if (result == null) {
				spotifyApi
				  .getPlaylist(req.params.id)
				  .then(
				    function(data) {
				    	// console.log('The playlist contains these tracks', data.body);
				  		redisClient.hset('playlists', req.params.id, JSON.stringify(data.body));
				  		redisClient.expire('playlists', 60*60*24*2) // Two days expiry
				  		res.json(data.body);
				    },
				    function(err) {
				    	console.log('Something went wrong!', err);
						res.status(500).json({
							error: err
						});
				    }
				);
			} else {
				res.json(JSON.parse(result));
			}
		}
	});
});
module.exports = router;
