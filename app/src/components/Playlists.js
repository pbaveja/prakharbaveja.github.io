import React from "react";
import { inject, observer } from "mobx-react";
import Playlist from './Playlist';
import Track from './Track';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
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
      <Row justify='center'>
        {
          !playlists ?
          <Spin indicator={antIcon} />
          :
        	playlists.map((el) => {
        		return (
                <Col key={el.name} xs={24} sm={12} md={8} className='px-2'>
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
                </Col>
        		)
        	})
        }
      </Row>
    );
  }
}

export default inject('spotifyStore')(observer(Playlists));
