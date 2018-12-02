import React from "react"

import "./MyBreadcrumb.css"
import { Breadcrumb } from "office-ui-fabric-react/lib/Breadcrumb"

const MyBreadcrumb = props => (
  <Breadcrumb
    className="myBreadcrumb"
    items={props.items}
    ariaLabel={props.ariaLabel}
  />
)

export default MyBreadcrumb
