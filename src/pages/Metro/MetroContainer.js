import React from "react"
import { connect } from "react-redux"

import SyntaxHighlighter from "react-syntax-highlighter/prism"
import okaidia from "react-syntax-highlighter/styles/prism/okaidia"

class MetroContainer extends React.Component {
  // constructor(props) {
  //     super(props);
  // }
  // cb okaidia prism
  render() {
    const codeString = `<SyntaxHighlighter language="jsx" style={prism}>
    {codeString}
</SyntaxHighlighter>`
    return (
      <div style={{}}>
        123
        <SyntaxHighlighter language="jsx" style={okaidia}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...state
})

export default connect(mapStateToProps)(MetroContainer)
