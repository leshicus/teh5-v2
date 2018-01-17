import React from "react"
import { Route } from "react-router-dom"

import LeftMenu from "./DocumentLeftMenu"
import ScrollContainer from "./Scroll/ScrollContainer"
import EventsContainer from "./EventsContainer"
import DomContainer from "./DomContainer"
import WindowContainer from "./WindowContainer"

class DocumentContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="ms-Grid" style={{ height: "100%" }}>
        <div className="ms-Grid-row" style={{ height: "100%" }}>
          <div
            style={{
              width: "175px"
            }} /* className="ms-Grid-col ms-sm6 ms-md4 ms-lg2" */
            className="ms-Grid-col"
          >
            <LeftMenu />
          </div>
          <div
            className="ms-Grid-col ms-sm12 ms-md9"
            style={{ height: "100%" }}
          >
            <Route path="/document/window" component={WindowContainer} />
            <Route path="/document/dom" component={DomContainer} />
            <Route path="/document/scroll" component={ScrollContainer} />
            <Route path="/document/events" component={EventsContainer} />
          </div>
        </div>
      </div>
    )
  }
}

export default DocumentContainer
