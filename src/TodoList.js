import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

export default class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: []
    }
  }

  render() {

    const todoItems = this.state.todos.map(todo => {
      return <Todo />
    })

    return (
      <div>
        <NewTodoForm />
        {todoItems}
      </div>
    )
  }
}

