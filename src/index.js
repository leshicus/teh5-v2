import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

// Router
import createHashHistory from "history/createHashHistory"
import { ConnectedRouter } from "react-router-redux"
import { Route, Redirect } from "react-router-dom"

// Store
import { Provider } from "react-redux"
import configStore from "./util/configStore"

// View
import Layout from "./components/Layout/Layout"
import MetroContainer from "./pages/Metro/MetroContainer"
import JSMainContainer from "./pages/JavaScript/JSMainContainer"

import { initializeIcons } from "@uifabric/icons/lib"
import { Fabric } from "office-ui-fabric-react/lib/Fabric"

// import registerServiceWorker from "./registerServiceWorker"

// registerServiceWorker()

initializeIcons(/* optional base url */)

const history = createHashHistory()
const store = configStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Fabric /* className="ms-font-m" */ style={{ height: "100%" }}>
        <Layout>
          {/* <Redirect exact from="/" to="/document/window" /> */}
          <Route path="/metro" component={MetroContainer} />
          <Route path="/javascript" component={JSMainContainer} />
        </Layout>
      </Fabric>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)

// * HMR
if (module.hot) {
  module.hot.accept()
}
