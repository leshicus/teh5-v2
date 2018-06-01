// realization of redux store
import * as React from "react";

const createStore = (reducer, initialState) => {
  const currentReducer = reducer;
  let currentState = initialState;

  this.getState = () => {
    return currentState;
  };

  this.setState = (newState) => {
    currentState = {
      ...currentState,
      ...newState
    };
  };

  this.makeAction = (action) => {
    currentState = currentReducer(currentState, action);
  };

  return this;
};

// ----- reducer

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "INC_A":
      return {
        ...state,
        a: state.a + payload
      };
      break;
    case "INC_B":
      return {
        ...state,
        b: state.b + payload
      };
      break;
    default:
      break;
  }

  return state;
};

const initialState = {
  a: 0,
  b: 0
};

const store = createStore(reducer, initialState);

// ----- calls (change state by actions)

store.setState({ c: 0 });
store.makeAction({ type: "INC_A", payload: 10 });
store.makeAction({ type: "INC_B", payload: 5 });
store.makeAction({ type: "INC_C", payload: 5 });
// setInterval(() => {
//   store.makeAction({ type: "INC_A", payload: 10 });
//   console.log("store.state: ", store.getState());
// }, 3000);

// ----- connect

const connect = (state) => (WrappedComponent) => {
  class Wrapped extends React.Component {
    render() {
      return <WrappedComponent {...state} {...this.props} />;
    }
  }
  return Wrapped;
};

class MyComp extends React.Component {
  render() {
    return (
      <div>
        Implementation of Redux store
        <div>rSelf = {this.props.rSelf}</div>
        <div>aFromStore = {this.props.aFromStore}</div>
        <div>bFromStore = {this.props.bFromStore}</div>
      </div>
    );
  }
}

export const MyEnhancedComp = connect({
  aFromStore: store.getState().a,
  bFromStore: store.getState().b
})(MyComp);

// ----- console

// console.log("store.state:", store.getState());
