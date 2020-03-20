import React from 'react';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            data: false
        }
    }
    componentDidMount() {
        fetch('api/spotify/tryCatch')
        .then(res => res.json())
        .then(data => this.setState({ data: data }))
        .catch(e => console.log(e))
    }
    render() {
        return (
        <div className="App container-fluid">
            <div className="row">
                <div className="col-12 p-5">
                    <p className="">{this.state.data && this.state.data.name}</p>
                </div>
            </div>
        </div>
        );
    }
}

export default App;
