var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi();

var clientId = '',
clientSecret = '';

// Create the api object with the credentials
var spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret
});


function setNewAccessToken() {
  // Retrieve an access token.
  spotifyApi.clientCredentialsGrant().then(
    function(data) {
      // console.log('The access token expires in ' + data.body['expires_in']);
      // console.log('The access token is ' + data.body['access_token']);

      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token']);
    },
    function(err) {
      console.log('Something went wrong when retrieving the spotify access token', err);
    }
  );
}

setNewAccessToken();

tokenRefreshInterval = setInterval(setNewAccessToken, 1000 * 60 * 60);

module.exports = spotifyApi;
