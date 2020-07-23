import React, { Component } from 'react';
import WaveSurfer from 'wavesurfer.js';

import { WaveformContianer, Wave, PlayButton } from './elements-waveform.js';

class Waveform extends Component {  
  state = {
    playing: false,
  };

  componentDidMount() {
    const track = "https://p.scdn.co/mp3-preview/acfab1fa7b512ae118b69237f9b2625bfab702a1?cid=896165c1b73340dfbffb8639fb43b2c7";

    this.waveform = WaveSurfer.create({
      barWidth: 2,
      barRadius: 2,
      barGap: 3,
      barMinHeight: 0.1,
      cursorWidth: 1,
      container: '#waveform',
      backend: 'WebAudio',
      height: 50,
      progressColor: '#4661a3',
      responsive: true,
      waveColor: '#4661a32b',
      cursorColor: 'transparent',
    });

    this.waveform.load(track);
    // document.querySelector('#waveform').addEventListener('mouseup', function (e) {
    //     console.log(e)
    // });
    // document.querySelector('#waveform').addEventListener('mousedown', function (e) {
    //     console.log(e)
    // });

    this.waveform.drawer.on('click', function (e) { console.log(e) })
  };
  
  handlePlay = () => {
    this.setState({ playing: !this.state.playing });
    this.waveform.playPause();
  };
  // handleMouseDown = (e) => {
  //   console.log(e.target)
  //   this.waveform.seekTo(0.5);
  // };
  
  render() {
    const url = 'https://cors-anywhere.herokuapp.com/https://www.bensound.com/bensound-music/bensound-ukulele.mp3';

    return (
      <WaveformContianer>
        <PlayButton onClick={this.handlePlay} >
          {!this.state.playing ? 'Play' : 'Pause'}
        </PlayButton>
        <Wave id="waveform" />
        {/*<audio id="track" src={url} />*/}
      </WaveformContianer>
    );
  }
};

export default Waveform;