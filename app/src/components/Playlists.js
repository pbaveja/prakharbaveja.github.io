import React from "react";
import { inject, observer } from "mobx-react";
import Playlist from './Playlist';
import Track from './Track';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class Playlists extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        isOpen: false,
        playlistToOpen: false
    }
  }

  componentDidMount() {
  	this.props.spotifyStore.getPlaylistAsync('55kaalmMfuanMgINNafOQ8');
  	this.props.spotifyStore.getPlaylistAsync('53JEaESR7YzMhfK3I8WEan');
  	this.props.spotifyStore.getPlaylistAsync('1qGVxjrbNySEhHh8MzGo8c');
  }

  handleClick = (title) => {
    this.setState({ isOpen: !this.state.isOpen, playlistToOpen: title })
  }
  render() {
  	const playlists = this.props.spotifyStore.status !== 'error' ? this.props.spotifyStore.playlists : [];

    return (
      <div className='col-12 mt-5'>
      <div className='row justify-content-center'>
        {
        	playlists.map((el) => {
        		return (
        		<div key={el.name} className='col-12 col-sm-6 col-md-4 px-md-2'>
                    <Playlist handleClick={this.handleClick} img={el.images[0].url} title={el.name} description={el.description} />
                    
                    <TransitionGroup className={(this.state.isOpen && el.name === this.state.playlistToOpen) && "track-list" }>
    					{(this.state.isOpen && el.name === this.state.playlistToOpen) && el.tracks.items.map(track => (
                            <CSSTransition
                              key={track.track.name}
                              timeout={250}
                              classNames="track-item"
                            >
                                <Track track={track} />
                            </CSSTransition>
    					))}
                    </TransitionGroup>

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
