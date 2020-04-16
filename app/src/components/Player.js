import React from 'react';
import ReactPlayer from 'react-player'
import { inject, observer } from 'mobx-react'
import { Slider, Col, Row } from 'antd';
import { StepBackwardFilled, PauseCircleFilled, PlayCircleFilled, StepForwardFilled, CloseOutlined } from '@ant-design/icons';

@inject('playerStore')
@observer
class Player extends React.Component {
	render() {
		const currentPlayerProps = this.props.playerStore;
		const playerState = this.props.playerStore.playerState;
		return (
			<div>
				{ playerState.playerActive &&
				<div className='player' style={{position: 'fixed', bottom: 0, height: '90px', width: '100%', background: '#ffffffbf', boxShadow: '0px 30px 40px #eee', backdropFilter: 'blur(5px)'}}>
		        	<Row justify='center'>
		        		<CloseOutlined onClick={currentPlayerProps.handleStop} className='player-icon player-close' style={{zIndex: '100'}}/>
			        	<Col span={24} className='text-center mt-3'>
			        		<StepBackwardFilled className='player-icon mx-3' style={{fontSize: '20px'}}/>
				        	{ 
				        		playerState.playing ? 
				        		<PauseCircleFilled onClick={currentPlayerProps.handlePlayPause} className='player-icon mx-3'/> 
				        		: 
				        		<PlayCircleFilled onClick={currentPlayerProps.handlePlayPause} className='player-icon mx-3'/> 
				        	}
				        	<StepForwardFilled className='player-icon mx-3' style={{fontSize: '20px'}}/>
			        	</Col>

			        	<Col span={24} className='d-flex justify-content-center align-items-center mt-2'>
				        	<span className='text-sm text-player-gray text-right px-2 ' style={{width: '10%'}}>{playerState.playedSeconds.toFixed()}</span>
				        	<Slider {...this.props} 
				        	value={playerState.played*100} 
				        	tipFormatter={null} 
				        	onChange={currentPlayerProps.handleSeekChange}
				        	onMouseDown={() => {console.log('mouse down mouse down')}}
							onAfterChange={currentPlayerProps.handleSeekMouseUp}
				        	style={{width: '80%', transition: '0.2s ease all', color: '#4661a3'}} step={0.1}/>
				        	<span className='text-sm text-player-gray text-left px-2 ' style={{width:'10%'}}>{playerState.loadedSeconds.toFixed()}</span>
			        	</Col>
		        	</Row>

					{/*<Row justify='center' className='mt-3'>
				        <Col xs={2} md={4} className='px-1 text-right'>
				        </Col>
				        <Col xs={20} md={16} className='px-1 text-center'>
				        </Col>
				        <Col xs={2} md={4} className='px-1 text-left'>
				        </Col>
			        </Row>*/}
				</div>
				}

				<div className='d-none'>
					<ReactPlayer
						ref={this.props.playerStore.ref}
						className='react-player'
						width='100%'
						height='100%'
						url={playerState.url}
						playing={playerState.playing}
						loop={playerState.loop}
						playbackRate={playerState.playbackRate}
						volume={playerState.volume}
						muted={playerState.muted}
						onReady={this.props.playerStore.onReady}
						onStart={this.props.playerStore.onStart}
						onPlay={this.props.playerStore.handlePlay}
						onPause={this.props.playerStore.handlePause}
						onSeek={e => console.log('onSeek', e)}
						onEnded={this.props.playerStore.handleEnded}
						onError={e => console.log(e)}
						onProgress={this.props.playerStore.handleProgress}
						onDuration={this.props.playerStore.handleDuration}
					/>
				</div>
			</div>
		)
	}
}

export default Player;