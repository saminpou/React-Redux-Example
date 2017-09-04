import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { Link } from 'react-router';

class Counter extends Component {
  render() {
    const { value, onIncrementClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncrementClick}>Plus</button>
      </div>
    )
  }
}

const incrementAction = { type: 'INCREMENT' }

const counter = (state = { count: 0 }, action) => {
  const count = state.count
  switch (action.type) {
    case 'INCREMENT':
      return { count: count + 1 }
    default:
      return state
  }
}

const store = createStore(counter)

function mapStateToProps(state) {
  return {
    value: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick: () => dispatch(incrementAction)
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
