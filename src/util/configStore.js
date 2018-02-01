import thunk from "redux-thunk"
import { routerReducer, routerMiddleware } from "react-router-redux"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
// import reducers from "./../reducers";

/**
 * Configures Redux store, adding history and other middlewares to it
 * @param {object} history
 */
const configStore = history => {
  const middlewares = [
    thunk,
    routerMiddleware(history) /*, orchestrate(processManager)*/
  ]

  const store = createStore(
    // reducers,
    routerReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  )

  return store
}

export default configStore
