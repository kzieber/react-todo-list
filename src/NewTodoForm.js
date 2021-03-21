import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newTodo = { ...this.state, id: uuidv4(), completed: false };

    this.props.createTodo(newTodo);

    this.setState({ task: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='task'>New Todo </label>
          <input
            type='text'
            value={this.state.task}
            id='task'
            name='task'
            placeholder='walk that dog'
            onChange={this.handleChange}
          />
          <button type='submit'>Add new todo</button>
        </form>
      </div>
    );
  }
}
