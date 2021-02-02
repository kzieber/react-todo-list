import React, { Component } from 'react'

export default class NewTodoForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      todoText: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt){
    evt.preventDefault()


    this.setState({
      todoText: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.todoText} name="todoText" placeholder='walk that dog' onChange={this.handleChange} />
          <button type="submit">Add new todo</button>
        </form>
      </div>
    )
  }
}
