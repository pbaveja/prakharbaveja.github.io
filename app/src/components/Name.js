import React from "react";
import { inject, observer } from "mobx-react";

class Name extends React.Component {
  componentDidMount() {
  	this.props.spotifyStore.getPlaylistAsync();
  }
  render() {
  	const playlistName = this.props.spotifyStore.status != 'error' ? this.props.spotifyStore.playlistData.name : '';
    return (
      <div>
      	<p>{ playlistName }</p>
      </div>
    );
  }
}

export default inject('spotifyStore')(observer(Name));
