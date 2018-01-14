import React from "react"
import { Route } from "react-router-dom"

import MainLeftMenu from "./MainLeftMenu"
import ScrollContainer from "./JavaScript/Document/Scroll/ScrollContainer"
import EventsContainer from "./JavaScript/Document/EventsContainer"
import DomContainer from "./JavaScript/Document/DomContainer"
import WindowContainer from "./JavaScript/Document/WindowContainer"

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
            <MainLeftMenu />
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
