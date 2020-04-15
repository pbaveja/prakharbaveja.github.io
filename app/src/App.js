import React from 'react';
import { Provider } from 'mobx-react';
import Name from './components/Name'
import Playlists from './components/Playlists'
import Projects from './components/Projects'
import ContactInfo from './components/ContactInfo'
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
            <Row justify='center' className='my-5'>
                <Col xs={24} md={20}>
                    <Row justify='center'>
                        <Col span={24} className='text-center'>
                            <img src='/avatarPrakharSmall.jpeg' className="img-fluid rounded-circle" style={{ maxWidth: '150px' }} alt='avatar'/>
                        </Col>
                        <Col span={24}>
                            <Name />
                        </Col>
                    </Row>

                    <Row justify="center" className='mt-4'>
                        <Col span={24} className="text-center">
                            <Tabs 
                            size='large' 
                            defaultActiveKey="1" 
                            onChange={this.handleSection} 
                            tabBarStyle={{borderBottom: 'none'}}
                            tabBarGutter={50}
                            >
                                <TabPane tab="Projects" key="1">
                                  <Row justify='start'> <Projects /> </Row>
                                </TabPane>
                                <TabPane tab="Spotify x Me" key="2">
                                  <Playlists />
                                </TabPane>
                                <TabPane tab="Contact" key="3">
                                  <ContactInfo />
                                </TabPane>
                            </Tabs>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Footer/>
        </Provider>
        );
    }
}

export default App;