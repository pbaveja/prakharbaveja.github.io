import React from 'react';
import { Provider } from 'mobx-react';
import Name from './components/Name'
import Playlists from './components/Playlists'
import Footer from './components/Footer'

import SpotifyStore from './lib/SpotifyStore'
import PlayerStore from './lib/PlayerStore'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.store = new SpotifyStore();
        this.playerStore = new PlayerStore();
    }
    render() {
        return (
        <Provider spotifyStore={this.store} PlayerStore={this.PlayerStore}>
            <div className="App container">
                <div className="row">
                    <div className="col-12 col-md-12 px-5 pt-5 text-center">
                        <img src='/avatarPrakharSmall.jpeg' className="img-fluid rounded-circle" style={{ maxWidth: '150px' }} alt='avatar'/>
                        <Name />
                    </div>
                    <div className="col-12 col-md-12 px-5 mt-5 d-flex justify-content-center align-items-center flex-column">
                        

                        <ul class="nav nav-tabs">
                            <li class="nav-item text-center my-tabs">
                                <a class="nav-link my-tabs-link text-dark-gray" href="#">Projects</a>
                            </li>
                            <li class="nav-item text-center my-tabs border-bottom-black">
                                <a class="nav-link my-tabs-link text-dark-gray" href="#">Spotify x Me</a>
                            </li>
                        </ul>




                    </div>
                    
                    <Playlists />
                </div>

            </div>
            {/* <Footer/> */}
        </Provider>
        );
    }
}

export default App;