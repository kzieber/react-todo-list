import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    console.log('props', this.props)
    return (
      <div>
        <h1>this.props.</h1>
      </div>
    )
  }
}

