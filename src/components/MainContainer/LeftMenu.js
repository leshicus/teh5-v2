import React from "react"
// import { Route, Link, BrowserRouter as Router } from "react-router-dom"

import { Nav } from "office-ui-fabric-react/lib/Nav"
import "./LeftMenu.css"
import { getItems } from "./../../actions/getLeftMenu"

/**
 * Left menu navigation inside MainContainer. On click shows new article.
 * Right menu navigation inside SubMainContainer. On click navigates to section inside of the article.
 */
const LeftMenu = props => {
  const items = getItems(props.routes)

  return (
    <div className="ms-NavExample-LeftPane stick">
      <Nav
        groups={items}
        expandedStateText={"expanded"}
        collapsedStateText={"collapsed"}
      />
    </div>
  )
}

export default LeftMenu
