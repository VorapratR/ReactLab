import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "HELLO"
class App extends Component {
  
  render() {
    return (
      <div className="App">
      {
        <p className="Login">NAME :    
        <input type="text" onBlur={this.onBlur} /></p>
        
      }<img src ='./Star-Wars-Millenium-Falcon-Render.jpg'/> 
      <WordCard value = {word}/> 
      </div>
    );
  }
}

export default App;
