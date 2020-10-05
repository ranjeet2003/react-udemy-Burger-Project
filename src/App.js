import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello I am Ranjeet Gautam</h1>
        <h1>Hello</h1>
        <p>I am a student</p>
        <Person />
        <Person />
        <Person />
        <Person />
        
      </div>
    );
  }
}

export default App;
