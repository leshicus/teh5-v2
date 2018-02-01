import React from "react"

import SubMainContainer from "./../../../../components/MainContainer/SubMainContainer"

import * as сomponents from "./"
delete сomponents["Index"]

export default props => (
  <SubMainContainer {...props} subComponents={сomponents} />
)
