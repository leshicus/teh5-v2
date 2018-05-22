import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { initializeIcons } from "@uifabric/icons/lib";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";

// Router
import createHashHistory from "history/createHashHistory";
import { ConnectedRouter } from "react-router-redux";
import { Route /* , Redirect */ } from "react-router-dom";

// Store
import { Provider } from "react-redux";
import configStore from "./util/configStore";

// View
import Layout from "./components/Layout/Layout";
import DocContainer from "./pages/Docs";
import MetroContainer from "./pages/Metro/MetroContainer";
import JSMainContainer from "./pages/JavaScript";
import CssMainContainer from "./pages/Css";
import BrowserMainContainer from "./pages/Browser";
import QA from "./pages/QA";

// import "./todo/lenses";
import "./todo/HOC";

// import registerServiceWorker from "./registerServiceWorker"

// registerServiceWorker()

initializeIcons(/* optional base url */);

const history = createHashHistory();
// history.replace("/") // clears url after page reload
const store = configStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Fabric /* className="ms-font-m" */ style={{ height: "100%" }}>
        <Layout>
          {/* <Redirect exact from="/" to="/document/window" /> */}
          <Route path="/jsdocs" component={DocContainer} />
          <Route path="/metro" component={MetroContainer} />
          <Route path="/javascript" component={JSMainContainer} />
          <Route path="/css" component={CssMainContainer} />
          <Route path="/browser" component={BrowserMainContainer} />
          <Route path="/qa" component={QA} />
        </Layout>
      </Fabric>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// * HMR
if (module.hot) {
  module.hot.accept();
}

// adds some addition in master
// some addition in dev branch

// First change in server
// Second change in server
