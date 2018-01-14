import React from "react"
import { Route, Link, BrowserRouter as Router } from "react-router-dom"

import { Nav } from "office-ui-fabric-react/lib/Nav"

const LeftMenu = () => {
  const _onBreadcrumbItemClicked = () => {}
  return (
    <div className="ms-NavExample-LeftPane">
      <Nav
        groups={[
          {
            links: [
              {
                name: "document",
                links: [
                  {
                    name: "window",
                    url: "#/document/window",
                    key: "window"
                  },
                  {
                    name: "DOM",
                    url: "#/document/dom",
                    key: "dom"
                  },
                  {
                    name: "Scroll",
                    url: "#/document/scroll",
                    key: "scroll"
                  },
                  {
                    name: "Events",
                    url: "#/document/events",
                    key: "events"
                  }
                ],
                isExpanded: true
              }
            ]
          }
        ]}
        expandedStateText={"expanded"}
        collapsedStateText={"collapsed"}
        // selectedKey={"key3"}
      />
    </div>
  )
}

export default LeftMenu
