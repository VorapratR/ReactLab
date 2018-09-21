import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "HELLO"
class App extends Component {
  
  render() {
    return (
      /*<div className="App">
      {
        <p className="Login">NAME :    
        <input type="text" onBlur={this.onBlur} /></p>
        
      }<img src ='http://www.jwam.com.au/media/images/easy-photogallery/Star-Wars-Millenium-Falcon-Render.jpg'/> 
      <WordCard value = {word}/> 
      </div>*/
      <video id="background-video" loop autoPlay>
    <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
    <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg" />
    Your browser does not support the video tag.
</video>
    );
  }
}

export default App;
