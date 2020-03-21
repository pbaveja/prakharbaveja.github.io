import { observable, runInAction, decorate } from 'mobx';
import ApiService from './ApiService'

class SpotifyStore {
	constructor() {
	    this.apiService = new ApiService();
	}
    playlistData = {};
    status = false;

    getPlaylistAsync = async () => {
        try {
            var params = {};
            const urlParams = new URLSearchParams(Object.entries(params));
            const data = await this.apiService.get('spotify/trycatch', urlParams)
            runInAction(() => {
                this.playlistData = data;
            });
        } catch (error) {
            runInAction(() => {
                this.status = 'error';
            });
        }
    };
}

decorate(SpotifyStore, {
    playlistData: observable,
    searchQuery: observable,
    status: observable
});

export default SpotifyStore;