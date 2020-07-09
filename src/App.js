import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    state = {
        count: 0,
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1,
        })
    }

    render() {
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>

                    <p>Here is a fancy counter: {this.state.count}</p>

                    <button onClick={this.increment}>
                        Increment
                    </button>

                    <button onClick={this.decrement}>
                        Decrement
                    </button>

                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        )
    }
}

export default App;
