import React from "react"
import { Route, Link, BrowserRouter as Router } from "react-router-dom"

import { Nav } from "office-ui-fabric-react/lib/Nav"
import './LeftMenu.css'
import { getItems } from "./../../actions/getLeftMenu"

export default props => {
  const items = getItems(props.routes)

  return (
    // <div id="sideMenu" className="stick">
    <div className="ms-NavExample-LeftPane stick"
      /* style={{
        position: 'fixed',
        top: '0',
        marginTop: '40px'
      }} */>
      <Nav
        groups={items}
        expandedStateText={"expanded"}
        collapsedStateText={"collapsed"}
      // selectedKey={"key3"}
      />
    </div>
    // </div>
  )
}
