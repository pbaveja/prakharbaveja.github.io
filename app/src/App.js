import React from 'react';
import { Provider } from 'mobx-react';
import Name from './components/Name'
import Playlists from './components/Playlists'
import SpotifyStore from './lib/SpotifyStore'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.store = new SpotifyStore();
    }
    render() {
        return (
        <Provider spotifyStore={this.store}>
            <div className="App container-fluid d-flex justify-content-center" style={{ height: '100vh' }}>
                <div className="row">
                    <div className="col-12 col-md-12 px-5 pt-5 d-flex justify-content-center align-items-center flex-column">
                        <img src='/avatarPrakharSmall.jpeg' className="img-fluid rounded-circle" style={{ maxWidth: '20%' }}/>
                        <Name />
                    </div>
                    <div className="col-12 col-md-12 px-5 mt-5 d-flex justify-content-center align-items-center flex-column">
                        <p>Playlists</p>
                    </div>
                    <Playlists />
                </div>
            </div>
        </Provider>
        );
    }
}

export default App;