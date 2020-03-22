import React from 'react';
import { Provider } from 'mobx-react';
import Name from './components/Name'
import Playlists from './components/Playlists'
import Footer from './components/Footer'

import SpotifyStore from './lib/SpotifyStore'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.store = new SpotifyStore();
    }
    render() {
        return (
        <Provider spotifyStore={this.store}>
            <div className="App container">
                <div className="row">
                    <div className="col-12 col-md-12 px-5 pt-5 text-center">
                        <img src='/avatarPrakharSmall.jpeg' className="img-fluid rounded-circle" style={{ maxWidth: '150px' }} alt='avatar'/>
                        <Name />
                    </div>
                    <div className="col-12 col-md-12 px-5 mt-5 d-flex justify-content-center align-items-center flex-column">
                        <p>a few of my playlists</p>
                    </div>
                    
                    <Playlists />
                </div>

            </div>
                <Footer/>
        </Provider>
        );
    }
}

export default App;