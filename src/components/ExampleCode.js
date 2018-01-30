import React from "react"
import { DefaultButton } from "office-ui-fabric-react/lib/Button"

import SyntaxHighlighter from "react-syntax-highlighter/prism"
import okaidia from "react-syntax-highlighter/styles/prism/okaidia"

import { mergeDeep } from "./../actions/mergeDeep"

const styles = {
  highlightStyle: {
    'pre[class*="language-"]': {
      marginTop: "0px",
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0
    }
  },
  mainTitle: {
    borderBottom: "1px solid #a6a6a6",
    display: "flex",
    justifyContent: "space-between"
  },
  title: {
    paddingTop: "10px",
    fontWeight: "600"
    // color: "rgb(115, 115, 115)"
  },
  titleColor: {
    success: {
      color: "rgb(50, 193, 69)"
    },
    danger: {
      color: "rgb(255, 69, 69)"
    },
    default: {
      color: "rgb(115, 115, 115)"
    }
  }
}
const highlightStyle = mergeDeep(okaidia, styles.highlightStyle)

class ExampleCode extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showCode: !props.hide
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

  getTitleColor = () => {
    const alert = this.props.alert

    if (alert && alert === "success") {
      return styles.titleColor.success
    } else if (alert && alert === "danger") {
      return styles.titleColor.danger
    } else {
      return styles.titleColor.default
    }
  }

  render() {
    const lang = "jsx" || this.props.language
    const titleStyle = Object.assign({}, styles.title, this.getTitleColor())

    return (
      <div>
        <div style={styles.mainTitle}>
          <div style={titleStyle} id={this.props.itemId}>
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
