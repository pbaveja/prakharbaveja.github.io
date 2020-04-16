import React from "react";
import { inject, observer } from "mobx-react";
import Playlist from './Playlist';
import Tracks from './Tracks';
import { Row, Col, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

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
  componentWillUnmount() {
  	this.props.spotifyStore.playlists = [];
  }

  handleClick = (title) => {
    this.setState({ isOpen: !this.state.isOpen, playlistToOpen: title })
  }

  render() {
  	const playlists = this.props.spotifyStore.status !== 'error' ? this.props.spotifyStore.playlists : [];

    return (
      <Row justify='center my-3'>
        { playlists &&
            <Col span={24}>
            <p className='text-md'>Here are a few playlists of mine from <a href='https://developer.spotify.com/documentation/web-api/' target='_blank'>
            Spotify's API.</a><br/>
            </p>
            <p className='text-md'>This is using ExpressJS as the backend framework, and Redis for caching the playlist data.<br/>
            For the frontend, Mobx is used for state management. You can check out the source code for this website <a href='https://github.com/pbaveja/prakharbaveja.github.io' target='blank'>here.</a>
            </p>
            </Col>
        } 
        {
          !playlists ?
          <Spin indicator={antIcon} />
          :
        	playlists.map((el) => {
        		return (
                <Col key={el.name} xs={24} sm={12} md={8} className='px-2'>
                    <Playlist handleClick={this.handleClick} img={el.images[0].url} title={el.name} description={el.description} />
					{(this.state.isOpen && el.name === this.state.playlistToOpen) && 
                        <Tracks el={el} handlePlay={this.handlePlay}/>   
				    }
                </Col>
        		)
        	})
        }
      </Row>
    );
  }
}

export default inject('spotifyStore')(observer(Playlists));
