import React from "react"
import { Route } from "react-router-dom"

import LeftMenu from "./OtherLeftMenu"
import SemicolonsContainer from "./SemicolonsContainer"
import StyleGuideContainer from "./StyleGuide/StyleGuideContainer"

class OtherContainer extends React.Component {
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
            }}
            className="ms-Grid-col"
          >
            <LeftMenu />
          </div>
          <div
            className="ms-Grid-col ms-sm12 ms-md9"
            style={{ height: "100%" }}
          >
            <Route path="/other/semicolons" component={SemicolonsContainer} />
            <Route path="/other/styleguide" component={StyleGuideContainer} />
          </div>
        </div>
      </div>
    )
  }
}

export default OtherContainer
