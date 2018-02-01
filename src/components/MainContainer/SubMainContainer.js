import React from "react"
import { onClickSubLink } from "./../../actions/general"

import LeftMenu from "./LeftMenu"

export default props => {
  const arrCompKeys = Object.keys(props.subComponents)
  // const arrCompValues = Object.values(props.subComponents)
  //console.log(props.subComponents)
  const links = []
  let subRoutes = []

  if (arrCompKeys.length > 1) {
    for (let key of arrCompKeys) {
      const comp = props.subComponents[key]

      links.push({
        name: key,
        component: comp,
        onClick: onClickSubLink
      })
    }

    subRoutes.push({ links: links })
  }

  // console.log(subRoutes)

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
