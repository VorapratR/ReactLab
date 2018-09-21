import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "HELLO"
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <WordCard value = {word}/>
        <p className="Login">NAME :    
        <input type="text" onBlur={this.onBlur} />
        </p>
        <img src ='http://www.jwam.com.au/media/images/easy-photogallery/Star-Wars-Millenium-Falcon-Render.jpg'/>  
      </div>
    );
  }
}

export default App;
