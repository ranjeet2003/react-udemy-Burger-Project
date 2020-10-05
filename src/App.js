import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

  state = {
    person: [
      { name: 'Ranjeet', age: 20 },
      { name: 'Pushpendra', age: 23 },
      { name: 'Baba', age: 72 }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Button is clicked and switchNameHandler is called !');
    // this.state.person[0].name = 'Ranjeet Gautam'  this wouldn't work if we want to update state.
    this.setState({
      person: [
        { name: newName, age: 20 },
        { name: 'Pushpendra', age: 23 },
        { name: 'Baba', age: 72 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello I am Ranjeet Gautam</h1>
        <p>I am a student</p>
        <button onClick={ () => this.switchNameHandler('Ranjeet (passing parameter) !')}>Switch Name</button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}>
        </Person>
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          click={this.switchNameHandler.bind(this, 'Ranjeet Gautam')} >Pushpa is preparing for gate 2020
        </Person>
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}>
        </Person>
      </div>
    );
  }
}

export default App;