import React from "react"
import { Route, Link, BrowserRouter as Router } from "react-router-dom"

import { Nav } from "office-ui-fabric-react/lib/Nav"

import { getItems } from "./../../actions/getLeftMenu"

export default props => {
  const items = getItems(props.routes)

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
