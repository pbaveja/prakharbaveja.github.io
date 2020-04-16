import { observable, action, decorate } from 'mobx';

class PlayerStore {
    @observable playerState = {
    	trackData: {},
	    url: null,
	    playing: false,
	    volume: 1,
	    muted: false,
	    played: 0,
	    loaded: 0,
	    duration: 0,
	    playbackRate: 1.0,
	    loop: false,
	    buffering: false,
	    loadedSeconds: 0,
	    playedSeconds: 0,
	    playerActive: false
	}
	@observable trackData = {
		trackId: null,
		name: null,
		image: null,
		artist: null
	}
	
	playSong = action(data => {
		this.setTrackData(data);
		this.load(data.url);
	})
	setTrackData = action(data => {
		this.playerState.trackData.trackId = data.id;
		this.playerState.trackData.name = data.name;
		this.playerState.trackData.image = data.image;
		this.playerState.trackData.artist = data.artist;
	})

	load = action(url => {
		this.playerState.url = url;
		this.playerState.playing = true;
		this.playerState.played = 0;
		this.playerState.loaded = 0;
	})
	activatePlayer = action(() => { this.playerState.playerActive = true; })
	handlePlayPause = action(() => { this.playerState.playing = !this.playerState.playing })
	handlePlay = action(() => { this.playerState.playing = true; this.playerState.playerActive = true; })
  	handleStop = action(() => { this.playerState.url = null; this.playerState.playing = false; this.playerState.playerActive = false; })
  	handleEnded = action(() => { this.playerState.playing = false })
  	handleVolumeChange = action(e => { this.playerState.volume = parseFloat(e.target.value) })
	handleToggleMuted = action(() => { this.playerState.muted = !this.playerState.muted })
	handleSetPlaybackRate = action(e => { this.playerState.playbackRate = parseFloat(e.target.value) })
	handleSeekMouseDown = action(e => {
		this.playerState.seeking = true
	})
	handleSeekMouseUp = action(value => {
		console.log(value)
		this.playerState.seeking = false
		this.player.seekTo(parseFloat(value/100))
	})
	handleSeekChange = action(value => {
	    this.playerState.played = parseFloat(value/100)
	  })
	handleProgress = action(state => {
    // We only want to update time slider if we are not currently seeking
    if (!this.playerState.seeking) {
        this.playerState.loaded = state.loaded
        this.playerState.loadedSeconds = state.loadedSeconds
        this.playerState.played = state.played
        this.playerState.playedSeconds = state.playedSeconds
    }
  })

	ref = player => { this.player = player }
}

// decorate(PlayerStore);

export default PlayerStore;