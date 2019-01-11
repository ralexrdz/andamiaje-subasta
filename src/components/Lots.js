import React, { Component } from 'react'
import Pusher from 'pusher-js'

import './Lots.css';

import Lot from './Lot'
import Axios from 'axios';


class Activity extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lots: []
    }
    var pusher = new Pusher('a8ee0fa5cc66b88f3a48', {
      cluster: 'us2',
      forceTLS: true
    });
    var channel = pusher.subscribe('my-channel');
    channel.bind('new-transaction', function(data) {
      console.log(data)
      let list = document.getElementById('lots')
      list.innerHTML += `<div>${data.participant} - ${data.amount}</div>`
    });
    Axios.get('http://localhost:4000/lots')
      .then(this.setLots.bind(this))
  }
  setLots (res) {
    console.log(res)
    let lots = res.data.map(lot => {
      return <Lot me={this.props.me} lot={lot} key={lot.id}/>
    })
    console.log(lots)
    this.setState({
      lots
    })
  }
  render() {
    return (
      <div id="box">
        <h1>Lotss</h1>
        <div id="lots">
          {this.state.lots}
        </div>
      </div>
    )
  }
}

export default Activity
