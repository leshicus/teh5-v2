import React from "react"
import { Route, Link, BrowserRouter as Router } from "react-router-dom"

import { Nav } from "office-ui-fabric-react/lib/Nav"

import { getItems } from "./../../actions/getLeftMenu"
import routes from "./routes"

const items = getItems(routes)

export default () => {
  return (
    <div className="ms-NavExample-LeftPane">
      <Nav
        groups={items}
        expandedStateText={"expanded"}
        collapsedStateText={"collapsed"}
        // selectedKey={"key3"}
      />
    </div>
  )
}
