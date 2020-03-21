import React from 'react';
import { Provider } from 'mobx-react';
import Name from './components/Name'
import SpotifyStore from './lib/SpotifyStore'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.store = new SpotifyStore();
    }
    render() {
        return (
        <Provider spotifyStore={this.store}>
            <div className="App container-fluid">
                <div className="row">
                    <div className="col-12 p-5">
                        <Name />
                    </div>
                </div>
            </div>
        </Provider>
        );
    }
}

export default App;