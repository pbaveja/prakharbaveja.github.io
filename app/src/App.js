import React from 'react';
import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            data: false
        }
    }
    componentDidMount() {
        fetch('api/')
        .then(res => res.json())
        .then(data => this.setState({ data: data }))
        .catch(e => console.log(e))
    }
    render() {
        return (
        <div className="App">
            { this.state.data &&
                <p>{ this.state.data.status }</p>
            }
        </div>
        );
    }
}

export default App;
