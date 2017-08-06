import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TechTree from './TechTree'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>TechTree</h2>
                </div>
                <p className="App-intro">
                    Show Off Your Masteries
                </p>
                <TechTree />
            </div>
        );
    }
}

export default App;
