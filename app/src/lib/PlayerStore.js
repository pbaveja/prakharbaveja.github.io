import { observable, action, decorate } from 'mobx';

class PlayerStore {
	constructor() {
	}
    playerState = {
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
	    playedSeconds: 0
	}

	load = action(url => {
		this.playerState.url = url;
		this.playerState.playing = true;
		this.playerState.played = 0;
		this.playerState.loaded = 0;
	})
	handlePlayPause = action(() => { this.playerState.playing = !this.playerState.playing })
	handlePlay = action(() => { this.playerState.playing = true })
  	handleStop = action(() => { this.playerState.url = null; this.playerState.playing = false })
  	handleVolumeChange = action(e => { this.playerState.volume = parseFloat(e.target.value) })
	handleToggleMuted = action(() => { this.playerState.muted = !this.playerState.muted })
	handleSetPlaybackRate = action(e => { this.playerState.playbackRate = parseFloat(e.target.value) })
}

decorate(PlayerStore, {
    playerState: observable,
});

export default PlayerStore;