import React, { Component } from 'react'
import { connect } from "react-redux";
import { removeTodo } from "../actions/index";

class List extends Component {
  render() {
    return (
      <ol>
        {
          this.props.todos.map((todo, index) => {
            return (
              <li 
                key={todo.id}
                onClick={() => this.props.removeTodo(todo.id)}
              >
                {todo.text}
              </li>
            )
          })
        }
      </ol>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchProps = dispatch => {
  return {
    removeTodo: id => {
      dispatch(removeTodo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(List)
