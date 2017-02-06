import React, { Component } from 'react';
import Board from './components/Board'
import Sign from './components/Sign'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Sign />
                <Board />
            </div>
        );
    }
}

export default App;
