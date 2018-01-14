import React from "react"
import { Route, Link, BrowserRouter as Router } from "react-router-dom"

import { Nav } from "office-ui-fabric-react/lib/Nav"

export default () => {
  return (
    <div className="ms-NavExample-LeftPane">
      <Nav
        groups={[
          {
            links: [
              {
                name: "JavaScript",
                key: "js",
                isExpanded: true,
                // url: 'http://example.com',
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
