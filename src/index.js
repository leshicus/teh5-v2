import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Router
import createHashHistory from "history/createHashHistory";
// import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from "react-router-redux";
import { Route, Redirect, Switch } from "react-router";

// Store
import { Provider, connect } from "react-redux";
import configStore from "./util/configStore";

// View
import Layout from "./components/Layout/Layout";
import MetroContainer from "./pages/Metro/MetroContainer";

import DocumentContainer from "./pages/JavaScript/Document/DocumentContainer";

import { initializeIcons } from "@uifabric/icons/lib";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";

import registerServiceWorker from "./registerServiceWorker";

registerServiceWorker();

initializeIcons(/* optional base url */);

const history = createHashHistory();
const store = configStore(history);

const ConnectedSwitch = connect(state => ({
    location: state.location
}))(Switch)

const ScrollContainer = () => <div>scroll</div>
const EventsContainer = () => <div>events</div>

const routes = [
    {
        path: '/metro',
        component: MetroContainer
    },
    {
        path: '/document',
        component: DocumentContainer,
        routes: [
            {
                exact: true,
                path: '/document/scroll',
                component: ScrollContainer
            },
            {
                exact: true,
                path: '/document/events',
                component: EventsContainer
            }
        ]
    }
]

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
    )} />
)

const AppContainer = () => (
    <ConnectedSwitch>
        {/*  <Route path="/metro" render={<MetroContainer />} />
        <Route
            path="/document"
            render={<DocumentContainer />}
        /> */}
        {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
        ))}
    </ConnectedSwitch>
)

const App = connect(state => ({
    location: state.location,
}))(AppContainer)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Fabric /* className="ms-font-m" */ style={{ height: "100%" }}>
                <Layout>
                    {/* <Redirect from="/" to="/document" /> */}
                    <App />
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
