import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Router
import createHashHistory from "history/createHashHistory";
import { ConnectedRouter } from "react-router-redux";
import { Route, Redirect } from "react-router-dom";

// Store
import { Provider } from "react-redux";
import configStore from "./util/configStore";

// View
import MetroContainer from "./pages/Metro/MetroContainer";
import Layout from "./components/Layout/Layout";

import { initializeIcons } from "@uifabric/icons";

import registerServiceWorker from "./registerServiceWorker";

registerServiceWorker();
initializeIcons(/* optional base url */);

// Style
const styles = {
    router: {
        height: "100%"
    }
};

const history = createHashHistory();
const store = configStore(history);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Layout>
                <Redirect from="/" to="/metro" />
                <Route exact path="/metro" component={MetroContainer} />
            </Layout>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);

// * HMR
if (module.hot) {
    module.hot.accept();
}
