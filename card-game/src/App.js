import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  x ="Hello"
  y =" {''World''}"
  render() {
    return (
      <div>
       {this.x + this.y} 
      </div>
    );
  }
}

export default App;
