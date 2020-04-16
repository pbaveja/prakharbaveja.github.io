import React from 'react';
import { inject, observer } from "mobx-react";
import { List, Avatar } from 'antd';

@inject('playerStore')
@observer
class Tracks extends React.Component {
	handlePlay = (track) => {
	    this.props.playerStore.playSong({
	    	url: track.preview_url,
	    	id: track.id,
	    	name: track.name,
	    	artist: track.artists[0].name,
	    	image: track.album.images[0].url
	    });
	}

	render() {
		const playerState = this.props.playerStore.playerState;
		console.log(playerState.trackData.name);
		return (
			<List
	            className="playlist-track text-left mt-1"
	            itemLayout="horizontal"
	            dataSource={this.props.el.tracks.items}
	            renderItem={item => (
	            	<List.Item onClick={() => this.handlePlay(item.track)}>
	            		<List.Item.Meta
	                    className='align-items-center'
	                    avatar={<Avatar src={item.track.album.images[0].url} />}
	                    title={<span>{item.track.name}</span>}
	                    description={item.track.artists[0].name}
	                	/>
	              		<button className='track-play-btn'>
	              			{
	              			playerState.playing && playerState.trackData.trackId === item.track.id ?
	              			<i className='fas fa-pause text-gray'></i>
	              			:
	              			<i className='fas fa-play text-gray'></i>
	              			}
	              		</button>
	              		<span>{playerState.playing}</span>
	              	</List.Item>
	        	)}
	        />
		)
	}
}

export default Tracks;