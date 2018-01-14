import React from "react"
import { DefaultButton, IButtonProps } from "office-ui-fabric-react/lib/Button"

import SyntaxHighlighter from "react-syntax-highlighter/prism"
import okaidia from "react-syntax-highlighter/styles/prism/okaidia"

import { mergeDeep } from "./../actions/mergeDeep"

const style = {
  'pre[class*="language-"]': {
    marginTop: "0px",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  }
}
const highlightStyle = mergeDeep(okaidia, style)

class ExampleCode extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showCode: props.open
    }
  }

  getIcon = () => {
    return this.state.showCode
      ? { iconName: "CalculatorSubtract" }
      : { iconName: "CalculatorAddition" }
  }

  getText = () => {
    return this.state.showCode ? "Hide code" : "Show code"
  }

  changeShowCodeStatus = () => {
    this.setState({
      showCode: !this.state.showCode
    })
  }

  render() {
    const lang = "jsx" || this.props.language

    return (
      <div>
        <div
          style={{
            borderBottom: "1px solid #a6a6a6",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{
              paddingTop: "10px",
              fontWeight: "600",
              color: "rgb(255, 0, 246)"
            }}
          >
            {this.props.title}
          </div>
          {this.props.code && (
            <DefaultButton
              iconProps={this.getIcon()}
              text={this.getText()}
              onClick={() => this.changeShowCodeStatus()}
            />
          )}
        </div>
        {this.state.showCode && (
          <SyntaxHighlighter language={lang} style={highlightStyle}>
            {this.props.code}
          </SyntaxHighlighter>
        )}
      </div>
    )
  }
}

export default ExampleCode
