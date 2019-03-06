import React from 'react'
import {
  Link
} from 'react-router-dom'
import logo from '../logo.svg';
// import connect
import { connect } from 'react-redux'

function Navbar(props) {
  return (
    <header className="App-header">
    <div style={{display: 'flex'}}>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Hello, {props.dummy} ❤
      </p>
    </div>
      <div style={{display: 'flex'}}>
        <p className="link"><Link to='/todo'>Todo</Link></p>
        <p className="link"><Link to='/fetch'>Fetch</Link></p>
        <p className="link"><Link to='/manipulate'>Manipulate</Link></p>
      </div>
    </header>
  )
}

const mapStateToProps = (state) => ({
  dummy: state.kosasih.message
})

export default connect(mapStateToProps)(Navbar)
