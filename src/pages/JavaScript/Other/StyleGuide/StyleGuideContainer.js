import React from "react"
import { Link } from "office-ui-fabric-react/lib/Link"

import FuncDecWithinBlock from "./FuncDecWithinBlock"
import WrapperObjects from "./WrapperObjects"
import MethodPropDef from "./MethodPropDef"

export default () => {
  return (
    <div>
      <FuncDecWithinBlock />
      <WrapperObjects />
      <MethodPropDef />
    </div>
  )
}
