import React from "react"
import { Link } from "office-ui-fabric-react/lib/Link"

import FuncDecWithinBlock from "./FuncDecWithinBlock"
import WrapperObjects from "./WrapperObjects"
import MethodPropDef from "./MethodPropDef"
import BooleanExpression from "./BooleanExpression"

export default () => {
  return (
    <div>
      <FuncDecWithinBlock />
      <WrapperObjects />
      <MethodPropDef />
      <BooleanExpression />
    </div>
  )
}
