import { observable, runInAction, decorate } from 'mobx';
import ApiService from './ApiService'

class SpotifyStore {
	constructor() {
	    this.apiService = new ApiService();
	}
    playlists = [];
    status = false;

    getPlaylistAsync = async (id) => {
        try {
            var params = {};
            const urlParams = new URLSearchParams(Object.entries(params));
            const data = await this.apiService.get('spotify/playlists/'+id, urlParams)
            runInAction(() => {
                this.playlists.push(data);
            });
        } catch (error) {
            runInAction(() => {
                this.status = 'error';
            });
        }
    };
}

decorate(SpotifyStore, {
    playlists: observable,
    searchQuery: observable,
    status: observable
});

export default SpotifyStore;