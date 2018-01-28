import React from "react"
import { Link } from "office-ui-fabric-react/lib/Link"
import LeftMenu from "./../../../../components/MainContainer/LeftMenu"
// import"./../../../../components/MainContainer/LeftMenu.css"

export default props => {
  return (
    <div className="ms-Grid" style={{ height: "100%" }}>
      <div className="ms-Grid-row" style={{ height: "100%" }}>
        <div
          className="ms-Grid-col ms-sm12 ms-md12 ms-lg9"
          style={{ height: "100%" }}
        >
          {props.item &&
            props.item.links &&
            props.item.links.map((item, idx) => {
              return <item.component item={item} key={idx} id={item.name} />
            })}
        </div>

        <div className="ms-Grid-col ms-lg3">
          {props.item && props.item.links && <LeftMenu routes={props.item} />}
        </div>
      </div>
    </div>
  )
}
