import React, { Component } from 'react'
import axios from 'axios'

import './Auction.css';

import Participants from './Participants'
import Lots from './Lots'

class Auction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAuction: false,
      highestBid: 0
    };
  }
  joinAuction () {
    let name = document.getElementById('name').value
    this.setState({
      showAuction: true,
      me: name
    })
    axios.post('https://pusher-node-server--ralexrdz.repl.co/participants', {
      participant: name
    }).then((data) => {
      console.log('participant posted')
    })
  }
  leaveAuction () {
    let me = this.state.me 
    this.setState({
      showAuction: false,
      me: null
    })
    axios.delete(`https://pusher-node-server--ralexrdz.repl.co/participants/${me}`)
    .then((data) => {
      console.log('bye')
    })
  }
  render() {
    return (
      <div id="box">
        <h2 id="winner"> </h2>
        <h1>Auctionsss</h1>
        <Participants/>
        { this.state.showAuction ?
          (
            <div>
              <div>
                <button onClick={this.leaveAuction.bind(this)}>Abandonar</button>
              </div>
              <Lots me={this.state.me}/>
            </div>
          ) : (
            <div>
              <input id="name" type="text" placeholder="Nombre"/>
              <button onClick={this.joinAuction.bind(this)}>Participar</button>
              <h3>Escribe tu nombre y da click en participar para unirte a la adquisisción</h3>
            </div>
          )
        }
      </div>
    )
  }
}

export default Auction
