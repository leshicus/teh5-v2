import React from "react"
import { Route } from "react-router-dom"

import LeftMenu from "./JSMainLeftMenu"
import routes from "./routes"
import { getItems, getItems1 } from "./../../actions/getRoutes"

const items = getItems(routes)

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
            <LeftMenu />
          </div>
          <div
            className="ms-Grid-col ms-sm12 ms-md8"
            style={{ height: "100%" }}
          >
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
          <div
            style={{
              width: "175px"
            }} /* className="ms-Grid-col ms-sm6 ms-md4 ms-lg2" */
            className="ms-Grid-col"
          >
            <LeftMenu />
          </div>
        </div>
      </div>
    )
  }
}

export default DocumentContainer