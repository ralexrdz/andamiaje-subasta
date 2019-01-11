import React, { Component } from 'react'
import Pusher from 'pusher-js'

import './Lot.css';
import Axios from 'axios';


class Activity extends Component {
  constructor (props) {
    super(props)

    var pusher = new Pusher('a8ee0fa5cc66b88f3a48', {
      cluster: 'us2',
      forceTLS: true
    });
      
    var channel = pusher.subscribe('my-channel');
    channel.bind('new-transaction', function(data) {
      console.log('pusher new-transaction', data)
      let list = document.getElementById(data.lotId)
      list.innerHTML += `<div>${data.participant} is pushing</div>`
    });
  }
  pushTransaction () {
    console.log(this.props.lot)
    Axios.post('https://pusher-node-server--ralexrdz.repl.co/transactions', {
      participant: this.props.me,
      lot: this.props.lot.id
    }).then(data => {
      console.log(data)
    })
  }
  render() {
    return (
      <div className="lot" id={this.props.lot.id}>
        <h1>{this.props.lot.title}</h1>
        <button onClick={this.pushTransaction.bind(this)}>Adquirir</button>
      </div>
    )
  }
}

export default Activity
