import React, { Component } from 'react'
import Pusher from 'pusher-js'

import './Lot.css';
import Axios from 'axios';


class Activity extends Component {
  constructor (props) {
    super(props)
    this.state = {
      timer: 5,
      hiddingClass: 'hidding',
      intervalId: null,
      myTransactionId: null
    }

    var pusher = new Pusher('a8ee0fa5cc66b88f3a48', {
      cluster: 'us2',
      forceTLS: true
    });
      
    var channel = pusher.subscribe('my-channel');
    channel.bind('new-transaction', function(data) {
      console.log('pusher new-transaction', data)
      // let list = document.getElementById(`transactions-for-lot-${data.transaction.lotId}`)
      // list.innerHTML += `<div id="transaction-${data.transaction.id}">${data.transaction.participant} is pushing</div>`
    });
    channel.bind('transaction-canceled', function(data) {
      console.log('pusher transaction-canceled', data)
      let transaction = document.getElementById(`transaction-${data.transaction.id}`)
      console.log(transaction)
    });
    channel.bind('adquisition-confirmed', function(data) {
      console.log('pusher adquisition-confirmed', data)
      // bloquear el boton de adquirir
      // borrar lista de pusheantes
      // agregar mensaje de quien es el ganador de ese lote
    });
  }
  startBid () {
    console.log('startBidndo')
    let component = this
    let interval = setInterval(() => {
      if (component.state.timer > 0) {
        component.setState({
          timer: component.state.timer-1
        })
      } else {
        console.log('confirma compra')
      }
    }, 1000)
    component.setState({
      hiddingClass: '',
      intervalId: interval
    })
    Axios.post('http://localhost:4000/transactions', {
      participant: component.props.me,
      lotId: component.props.lot.id
    }).then(function (response) {
      component.setState({
        myTransactionId: response.data.transaction.id
      })
      console.log('post transaction', response) 
    })
  }
  cancelBid () {
    console.log('soltando', this.state)
    clearInterval(this.state.intervalId)
    this.setState({
      hiddingClass: 'hidding',
      timer: 5
    })
    Axios.delete(`http://localhost:4000/transactions/${this.state.myTransactionId}`, {
    }).then(function (response) {
      console.log('pushing') 
    })
  }
  render() {
    return (
      <div className="lot" id={this.props.lot.id}>
        <h1>{this.props.lot.title}</h1>
        <button onMouseDown={this.startBid.bind(this)} onMouseUp={this.cancelBid.bind(this)}>Adquirir</button>
        <div id="pressed" className={this.state.hiddingClass}><span>pusheando {this.state.timer}</span></div>
        <div id={`transactions-for-lot-${this.props.lot.id}`}></div>
      </div>
    )
  }
}

export default Activity
