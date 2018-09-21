import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = "HELLO"
class App extends Component {
  
  render() {
    return (
      <div className="App">
      <p  className="App">NAME :    
      <input type="string" onBlur={this.onBlur} /></p> 
      <WordCard value = {word}/>
       
      </div>
    );
  }
}

export default App;
