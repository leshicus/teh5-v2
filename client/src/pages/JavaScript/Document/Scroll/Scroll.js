import React from "react"
import { connect } from "react-redux"

import TopicTitle from "./../../../../components/TopicTitle"
import { code_1, text } from "./examples/metrics"

const doc = () => {
  return (
    <div
      id="exampleParent_1"
      style={{
        padding: "10px",
        border: "1px dashed black"
      }}
    >
      <div
        style={{
          width: "300px",
          height: "100px",
          border: "25px solid #E8C48F",
          padding: "20px",
          overflow: "auto"
        }}
      >
        {text}
      </div>
    </div>
  )
}

class ScrollContainer extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div style={{}}>
        <TopicTitle title="Metrics" code={code_1} />
        {doc()}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...state
})

export default connect(mapStateToProps)(ScrollContainer)
