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
  }
  componentDidMount () {
    // const pusher = new Pusher('a8ee0fa5cc66b88f3a48', {
    //   cluster: 'us2',
    //   forceTLS: true
    // });
    // let component = this
    // const channel = pusher.subscribe('my-channel');
    // channel.bind('new-transaction', function(data) {
    //   if (data.transaction.lotId === component.props.lot.id){
    //     console.log('this lot', component.props.lot.id)
    //     // let list = document.getElementById(`transactions-for-lot-${data.transaction.lotId}`)
    //     // list.innerHTML += `<div id="transaction-${data.transaction.id}">${data.transaction.participant} is pushing</div>`
    //   }
    // });
    // channel.bind('transaction-canceled', function(data) {
    //   console.log('pusher transaction-canceled', data)
    //   let transaction = document.getElementById(`transaction-${data.transaction.id}`)
    //   console.log(transaction)
    // });
    // channel.bind('adquisition-confirmed', function(data) {
    //   if (data.transaction.lotId === component.props.lot.id){
    //     console.log('pusher adquisition-confirmed', data)
    //     // bloquear el boton de adquirir
    //     // borrar lista de pusheantes
    //     // agregar mensaje de quien es el ganador de ese lote
    //   }
    // });
  }
  startBid () {
    let component = this
    console.log('sending new transaction', component.props.lot.id, component.props.me)
    // AL LANZAR ESTA PETICION SE ROMPEN TODOS LOS EVENTOS ONMOUSEUP y ONMOUSEDOWN
    // Axios.post('http://localhost:4000/transactions', {
    //   participant: component.props.me,
    //   lotId: component.props.lot.id
    // }).then(response => {
    //   // component.setState({
    //   //   myTransactionId: response.data.transaction.id
    //   // })
    //   console.log('post transaction', response) 
    // }).catch(err => { console.log('err', err) })
    let interval = setInterval(() => {
      if (component.state.timer > 0) {
        // document.getElementById(`timer-for-lot-${component.props.lot.id}`).innerHTML = component.state.timer
        component.setState({
          timer: component.state.timer-1
        })
      }
    }, 1000)
    component.setState({
      hiddingClass: '',
      intervalId: interval
    })
  }
  cancelBid () {
    console.log('soltando', this.state)
    clearInterval(this.state.intervalId)
    this.setState({
      hiddingClass: 'hidding',
      timer: 5
    })
    // Axios.delete(`http://localhost:4000/transactions/${this.state.myTransactionId}`, {
    // }).then(response => { console.log('deleted') })
    // .catch(err => console.log(err))
    
  }
  render() {
    console.log('rendering lot')
    return (
      <div className="lot" id={this.props.lot.id}>
        <h1>{this.props.lot.title}</h1>
        <button onMouseDown={this.startBid.bind(this)} onMouseUp={this.cancelBid.bind(this)}>Adquirir</button>
        <div id="pressed" className={this.state.hiddingClass}><span>timer: {this.state.timer}</span></div>
        <div id={`transactions-for-lot-${this.props.lot.id}`}></div>
      </div>
    )
  }
}

export default Activity
