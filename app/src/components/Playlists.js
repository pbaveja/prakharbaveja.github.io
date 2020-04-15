import React from "react";
import { inject, observer } from "mobx-react";
import Playlist from './Playlist';
import Track from './Track';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { Row, Col, Spin, List, Avatar } from 'antd';
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
        {
          !playlists ?
          <Spin indicator={antIcon} />
          :
        	playlists.map((el) => {
        		return (
                <Col key={el.name} xs={24} sm={12} md={8} className='px-2'>
                    <Playlist handleClick={this.handleClick} img={el.images[0].url} title={el.name} description={el.description} />
					{(this.state.isOpen && el.name === this.state.playlistToOpen) && 
                        <List
                            className="playlist-track text-left mt-1"
                            itemLayout="horizontal"
                            dataSource={el.tracks.items}
                            renderItem={item => (
                              <List.Item>
                                <List.Item.Meta
                                    className='align-items-center'
                                    avatar={<Avatar src={item.track.album.images[0].url} />}
                                    title={<span>{item.track.name}</span>}
                                    description={item.track.artists[0].name}
                                />
                              <button className='track-play-btn'><i className='fas fa-play text-gray'></i></button>
                              </List.Item>
                        )}
                      />
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
