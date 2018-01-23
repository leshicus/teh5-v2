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
                name: "Other",
                links: [
                  {
                    name: "semicolons",
                    url: "#/other/semicolons",
                    key: "semicolons"
                  },
                  {
                    name: "Style Guide",
                    url: "#/other/styleguide",
                    key: "styleguide"
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
