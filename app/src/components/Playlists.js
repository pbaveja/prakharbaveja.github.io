import React from "react";
import { inject, observer } from "mobx-react";
import Playlist from './Playlist';
import Track from './Track';

class Playlists extends React.Component {
  componentDidMount() {
  	this.props.spotifyStore.getPlaylistAsync('55kaalmMfuanMgINNafOQ8');
  	this.props.spotifyStore.getPlaylistAsync('53JEaESR7YzMhfK3I8WEan');
  	this.props.spotifyStore.getPlaylistAsync('1qGVxjrbNySEhHh8MzGo8c');
  }

  render() {
  	const playlists = this.props.spotifyStore.status !== 'error' ? this.props.spotifyStore.playlists : [];

    return (
      <div className='col-12'>
      <div className='row justify-content-center'>
        {
        	playlists.map((el) => {
        		return (
        		<div className='col-12 col-sm-6 col-md-4 px-md-2'>
        			<Playlist img={el.images[0].url} title={el.name} description={el.description} />

					{el.tracks.items.map(track => (
                        <Track track={track} />
					))}
        		</div>
        		)
        	})
        }
      </div>
      </div>
    );
  }
}

export default inject('spotifyStore')(observer(Playlists));
