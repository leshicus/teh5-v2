import React from "react"
import { Route, withRouter } from "react-router-dom"
import { connect } from "react-redux"

import LeftMenu from "./LeftMenu"
import { getItems } from "./../../actions/getRoutes"

class MainContainer extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const items = getItems(this.props.routes)

    return (
      <div className="ms-Grid" style={{ height: "100%" }}>
        <div className="ms-Grid-row" style={{ height: "100%" }}>
          <div className="ms-Grid-col ms-lg3">
            <LeftMenu routes={this.props.routes} />
          </div>
          <div
            className="ms-Grid-col ms-sm12 ms-md12 ms-lg9"
            style={{ height: "100%" }}
          >
            {items.map((item, idx) => {
              return (
                <Route
                  exact
                  path={item.url}
                  render={() => <item.component item={item} />}
                  key={idx}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...state
})

// we are using withRouter because instead router will lag one step
// it occurs only when in receives state
// without connection router works fine
export default withRouter(connect(mapStateToProps)(MainContainer))
