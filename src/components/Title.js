import React, { Component } from 'react'
import { connect } from "react-redux";

class Title extends Component {
  render() {
    return (
      <h2>代辦事項清單{this.props.todos.length}</h2>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(Title)