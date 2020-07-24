var express = require('express');
var router = express.Router();
var spotifyApi = require('../lib/spotify');
var mcache = require('memory-cache');

var cache = (duration) => {
  return (req, res, next) => {
    let key = '__express__' + req.originalUrl || req.url
    let cachedBody = mcache.get(key)
    if (cachedBody) {
      res.json(cachedBody)
      return
    } else {
      res.sendResponse = res.json
      res.json = (body) => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body)
      }
      next()
    }
  }
}

// Get tracks in a playlist
router.get('/playlists/:id', cache(86400), function(req, res, next) {
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
