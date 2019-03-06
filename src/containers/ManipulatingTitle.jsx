import React from 'react'
import {connect} from 'react-redux'
// import actions
import { manipulate, customTitle } from '../store/actions/kosasih'
import {bindActionCreators} from 'redux'


function ManipulatingTitle(props) {
  return (
    <div>
      <h1>I want to change the title</h1>
      <h2>{props.teacher}</h2>
      <button onClick={props.change}>Change!</button>
      <input value={props.title} onChange={props.cust}></input>
    </div>
  )
}

const mapStateToProps = (state) => ({
  title: state.kosasih.message,
  teacher: state.kosasih.teacher
})

const mapDispatchToProps = (dispatch) => ({
  change: () => dispatch(manipulate()),
  cust: (e) => dispatch(customTitle(e.target.value)) 
})
// const mapDispatchToProps = (dispatch) => bindActionCreators({change: manipulate, cust: customTitle}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(ManipulatingTitle)