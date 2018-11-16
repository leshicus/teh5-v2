// realization of redux store
import * as React from "react"
import { myPick } from "./myRamda"
import { intersection } from "ramda"

const createStore = (reducer, initialState) => {
  const currentReducer = reducer
  let currentState = initialState
  let subscriptions = []

  this.getState = () => {
    return currentState
  }

  const runSubscriptions = (changedStateData) => {
    subscriptions.forEach((item) => {
      let returnProps = Object.keys(item.props)
      let changedProps = Object.keys(changedStateData)

      const arrPropIntersection = intersection(returnProps, changedProps)

      if (arrPropIntersection.length) {
        const newStateData = myPick(arrPropIntersection, this.getState())

        item.func(newStateData)
      }
    })
  }

  this.setState = (newState) => {
    currentState = {
      ...currentState,
      ...newState
    }

    runSubscriptions(newState)
  }

  this.makeAction = (action) => {
    const newState = currentReducer(currentState, action)
    this.setState(newState)
  }

  this.subscribe = (func, reduxProps) => {
    subscriptions.push({ func: func, props: reduxProps })
  }

  return this
}

// ----- reducer

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "INC_A":
      return {
        ...state,
        a: state.a + payload
      }
      break
    case "INC_B":
      return {
        ...state,
        b: state.b + payload
      }
      break
    default:
      break
  }

  return state
}

const initialState = {
  a: 0,
  b: 0
}

const store = createStore(reducer, initialState)

// ----- calls (change state by actions)

store.setState({ c: 0 })
store.makeAction({ type: "INC_A", payload: 1 })
store.makeAction({ type: "INC_B", payload: 1 })
store.makeAction({ type: "INC_C", payload: 1 })
setTimeout(() => {
  store.makeAction({ type: "INC_A", payload: 1 })
  console.log("store.state: ", store.getState())
}, 3000)

// ----- connect
var o = { p: 1, p: 2 }
const connect = (reduxProps, store) => (WrappedComponent) => {
  class Wrapped extends React.Component {
    state = { ...reduxProps }

    changeState = (newState) => {
      console.log("changeState", newState)
      this.setState(newState)
    }

    render() {
      store.subscribe(this.changeState, reduxProps)
      return <WrappedComponent {...this.state} {...this.props} />
    }
  }
  return Wrapped
}

class MyComp extends React.Component {
  render() {
    return (
      <div>
        Implementation of Redux store
        <div>rSelf = {this.props.rSelf}</div>
        <div>aFromStore = {this.props.a}</div>
        <div>bFromStore = {this.props.b}</div>
      </div>
    )
  }
}

export const MyEnhancedComp = connect(
  {
    a: store.getState().a,
    b: store.getState().b
  },
  store
)(MyComp)

// ----- console

// console.log("store.state:", store.getState());
