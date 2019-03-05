import React from 'react'

export default function SingleTodo(props) {
  const {todo, del} = props
  return (
    <li>
      {todo.name} <button style={{padding: '10px', backgroundColor:'crimson', color: 'white', borderRadius:'5px'}} onClick={() => del(todo.id)}>Delete</button>
    </li>
  )
}
