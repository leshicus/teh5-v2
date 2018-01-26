import React from "react"
import { Route } from "react-router-dom"

import LeftMenu from "./LeftMenu"
import { getItems } from "./../../actions/getRoutes"

export default props => {
  const items = getItems(props.routes)

  return (
    <div className="ms-Grid" style={{ height: "100%" }}>
      <div className="ms-Grid-row" style={{ height: "100%" }}>
        <div
          style={{
            width: "175px"
          }} /* className="ms-Grid-col ms-sm6 ms-md4 ms-lg2" */
          className="ms-Grid-col"
        >
          <LeftMenu routes={props.routes} />
        </div>
        <div className="ms-Grid-col ms-sm12 ms-md8" style={{ height: "100%" }}>
          {items.map((item, idx) => {
            return (
              <Route
                exact
                path={item.url}
                component={item.component}
                key={idx}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
