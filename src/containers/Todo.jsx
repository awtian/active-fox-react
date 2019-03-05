import React, { Component } from 'react'
// Components
import SingleTodo from './Todo/SingleTodo'
import {
  Route
} from 'react-router-dom'

export default class Todo extends Component {
  state = {
    todos: [
      {id: '1', name: 'Bangun'},
      {id: '2', name: 'Mandi'},
      {id: '3', name: 'Jalan'},
    ],
    newTodo: 'ini new todo'
  }

  delete = (id) => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id)    
    this.setState({
      todos: newTodos
    })
  }

  addNewTodo = () => {
    this.setState({
      todos: this.state.todos.concat({id: Math.floor(Math.random()*99999), name:this.state.newTodo}),
      newTodo: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  } 

  render() {
    const {todos, newTodo} = this.state;

    return (
      <div>
        <h2>{this.props.name}</h2>
        <Route exact path="/todo/easter" component={() => <h1>welcome to oasis</h1>} />
        <h1>TodoList</h1>
        <input type="text" value={newTodo} name="newTodo" onChange={this.handleChange.bind(this)}></input>
        <button onClick={this.addNewTodo}> hehehe </button>
        <div style={{display: 'flex', justifyContent:'center'}}>
          <ul style={{maxWidth: '50vw'}}>
              {todos.map(todo => <SingleTodo key={todo.id} todo={todo} del={this.delete} />)}      
          </ul>
        </div>
      </div>
    )
  }
}
