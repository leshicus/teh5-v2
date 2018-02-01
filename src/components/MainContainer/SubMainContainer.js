import React from "react"

import { getSubRoutes } from "./../../actions/getRoutes"

import LeftMenu from "./LeftMenu"

export default props => {
  const subRoutes = getSubRoutes(props.subComponents)
  const arrCompKeys = Object.keys(props.subComponents)

  return (
    <div className="ms-Grid" style={{ height: "100%" }}>
      <div className="ms-Grid-row" style={{ height: "100%" }}>
        <div
          className="ms-Grid-col ms-sm12 ms-md12 ms-lg9"
          style={{ height: "100%" }}
        >
          {arrCompKeys.map((key, idx) => {
            const item = props.subComponents[key]
            const comp = { component: item }

            return <comp.component item={item} key={idx} id={key} />
          })}
        </div>

        <div className="ms-Grid-col ms-lg3">
          {subRoutes && <LeftMenu routes={subRoutes} />}
        </div>
      </div>
    </div>
  )
}
