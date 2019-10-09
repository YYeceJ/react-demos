import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import ToDoList from '../../ToDoList/ToDoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ToDoList />
      </div>
    );
  }
}

export default App;
