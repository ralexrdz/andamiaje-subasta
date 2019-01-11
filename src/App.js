import React, { Component } from 'react';
import './App.css';
import Auction from './components/Auction'

class App extends Component {
  // componentDidMount() {
  //   console.log('adding event listener for before unload')
  //   window.addEventListener('beforeunload', this.handleLeavePage);
  // }
  
  // componentWillUnmount() {
  //   console.log('removing event listener for before unload')
  //   window.removeEventListener('beforeunload', this.handleLeavePage);
  // }
  
  // handleLeavePage(e) {
  //   console.log('asking')
  //   // remove user from connected
  //   const confirmationMessage = 'Quieres abandonar la subasta?';
  //   e.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
  //   return confirmationMessage;              // Gecko, WebKit, Chrome <34
  // }
  render() {
    return (
      <div className="App">
        <Auction/>
      </div>
    );
  }
}

export default App;
