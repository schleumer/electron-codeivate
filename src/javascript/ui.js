import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

function counter(state = { value: 0 }, action) {
  switch (action.type) {
  case 'INCREMENT':
    return { ...state, value: state.value + 1 }
  case 'DECREMENT':
    return { ...state, value: state.value - 1 }
  default:
    return state
  }
}

let store = createStore(counter);

function select(state) {
  return state;
}

class App extends Component {
  render() {
    return <div>{this.props.value}</div>;
  }
}

const ConnectedApp = connect(select)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
, document.getElementById("app"));