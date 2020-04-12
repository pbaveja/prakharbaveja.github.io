import React from 'react';
import { Provider } from 'mobx-react';
import Name from './components/Name'
import Playlists from './components/Playlists'
import Footer from './components/Footer'
import { Row, Col, Tabs } from 'antd';
import SpotifyStore from './lib/SpotifyStore'
import PlayerStore from './lib/PlayerStore'

const { TabPane } = Tabs;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.store = new SpotifyStore();
        this.playerStore = new PlayerStore();

        this.state = {
            activeSection: '1'
        }
    }
    
    handleSection = (key) => {
        this.setState({
            activeSection: key
        })
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
                    <div className='col-12 mt-4 p-0'>
                    <Row justify="center">
                        <Col span={24} className="text-center">
                            <Tabs size='large' defaultActiveKey="1" onChange={this.handleSection}>
                                <TabPane tab="Projects" key="1">
                                  Projects here
                                </TabPane>
                                <TabPane tab="Spotify x Me" key="2">
                                  <Playlists />
                                </TabPane>
                                <TabPane tab="Contact" key="3">
                                  Contact info here
                                </TabPane>
                            </Tabs>
                        </Col>
                    </Row>
                    </div>

                </div>

            </div>
            {/* <Footer/> */}
        </Provider>
        );
    }
}

export default App;