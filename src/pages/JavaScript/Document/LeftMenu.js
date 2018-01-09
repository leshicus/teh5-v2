import React from "react"
import { Route, Link, BrowserRouter as Router } from "react-router-dom"

import { Nav } from "office-ui-fabric-react/lib/Nav"

const LeftMenu = () => {
  return (
    <div className="ms-NavExample-LeftPane">
      <Nav
        groups={[
          {
            links: [
              {
                name: "Document",
                links: [
                  {
                    name: "Scroll",
                    url: "#/document/scroll",
                    key: "key1"
                  },
                  {
                    name: "Events",
                    url: "#/document/events",
                    key: "key2"
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
