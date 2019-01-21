import React, { Component } from 'react'
import axios from 'axios'

import './Auction.css';

import Participants from './Participants'
import Lots from './Lots'

class Auction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAuction: false
    };
  }
  joinAuction () {
    let name = document.getElementById('name').value
    this.setState({
      showAuction: true,
      me: name
    })
    axios.post('http://localhost:4000/participants', {
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
    axios.delete(`http://localhost:4000/participants/${me}`)
    .then((data) => {
      console.log('bye')
    })
  }
  render() {
    return (
      <div id="box">
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
