import React, { Component } from 'react'
import Title from './components/Title'
import Form from './components/Form'
import List from './components/List'
import {createStore} from 'redux'
import todoReducer from './reducers/index'
import { Provider } from "react-redux";

let store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Title />
          <Form />
          <List />
        </div>
      </Provider>
    )
  }
}


