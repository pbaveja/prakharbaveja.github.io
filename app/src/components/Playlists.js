import React from "react";
import { inject, observer } from "mobx-react";
import Heading from './Text/Heading';

class Playlists extends React.Component {
  componentDidMount() {
  	this.props.spotifyStore.getPlaylistAsync('55kaalmMfuanMgINNafOQ8');
  	this.props.spotifyStore.getPlaylistAsync('53JEaESR7YzMhfK3I8WEan');
  	this.props.spotifyStore.getPlaylistAsync('1qGVxjrbNySEhHh8MzGo8c');
  }

  render() {
  	const playlists = this.props.spotifyStore.status != 'error' ? this.props.spotifyStore.playlists : [];

    return (
      <div className='col-12 d-flex justify-content-around text-center'>
        {
        	playlists.map((el) => {
        		return (
        		<div className='px-5'>
        			<p className='m-2'>{el.name}</p>
        			{/*<p className='m-1 font-regular' style={{fontSize: '0.6em'}}>Followers: {el.followers.total}</p>*/}
					{el.tracks.items.map(track => (
						<p>{track.track.name}</p>
					))}
        		</div>
        		)
        	})
        }
      </div>
    );
  }
}

export default inject('spotifyStore')(observer(Playlists));
