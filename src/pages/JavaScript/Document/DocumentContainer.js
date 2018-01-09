import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import LeftMenu from "./LeftMenu";
// import ScrollContainer from "./Scroll/ScrollContainer";
// import EventsContainer from "./EventsContainer";

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
    )} />
)

class DocumentContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div className="ms-Grid" style={{ height: "100%" }}>
                <div className="ms-Grid-row" style={{ height: "100%" }}>
                    <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
                        {/* <Route
                            path="/document"
                            component={LeftMenu}
                        /> */}
                        {/* <LeftMenu /> */}
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><Link to="/document/scroll">scroll</Link></li>
                            <li><Link to="/document/events">events</Link></li>
                        </ul>
                    </div>
                    <div
                        className="ms-Grid-col ms-sm6 ms-md8 ms-lg10"
                        style={{ height: "100%" }}
                    >
                        111
                          {this.props.routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}
                        {/* <Route
                            key="1"
                            exact
                            path="/document/scroll"
                            component={ScrollContainer}
                        />
                        <Route
                            key="2"
                            exact
                            path="/document/events"
                            component={EventsContainer}
                        /> */}

                    </div>
                </div>
            </div>
        );
    }
}

export default DocumentContainer;
