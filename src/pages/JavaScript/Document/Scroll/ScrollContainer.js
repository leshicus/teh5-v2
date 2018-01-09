import React from "react"
import { connect } from "react-redux"

import TopicTitle from "./../../../../components/TopicTitle"
import { code_1, text } from "./examples/metrics"

const exampleText_1 = `111111111 111111111 2222222 2222222222222
33333333333333333333333 44444444444444444 55555555555
6666666666666666666666666 77777777777777 7777777
66666666666666666 7777777777777777777777 888888888 888888888
11111111111111 222222 2222222222 3333333333 44444444444444
55555555555555 666666666666`

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
  constructor(props) {
    super(props)
  }

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
