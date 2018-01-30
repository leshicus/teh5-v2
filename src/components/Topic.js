import React from "react"

import TopicTitle from "./TopicTitle"
// import ExampleCode from "./ExampleCode"

export default props => {
  return (
    <div style={{ paddingBottom: "20px" }} id={props.id}>
      <TopicTitle title={props.title} />
      {props.children}
    </div>
  )
}
