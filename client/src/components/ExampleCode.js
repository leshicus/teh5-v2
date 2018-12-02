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

/**
 * Class for showing an example of code with the syntax highlighting
 */
class ExampleCode extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showCode: !props.hide
    }
  }

  /**
   * Returns icon "plus" or "minus" depending on the state of the example code,
   * if it shown or closed
   */
  getIcon = () => {
    return this.state.showCode
      ? { iconName: "CalculatorSubtract" }
      : { iconName: "CalculatorAddition" }
  }

  /**
   * Returns texts "Hide code" or "Show code" depending on the state of the example code,
   * if it shown or closed
   */
  getText = () => {
    return this.state.showCode ? "Hide code" : "Show code"
  }

  /**
   * Toggles the state of the code, visible it or hidden
   */
  changeShowCodeStatus = () => {
    this.setState({
      showCode: !this.state.showCode
    })
  }

  /**
   * Set color of the title, it could be "success" - green, "danger" - red, or absent.
   * Serves to emphasize that smth is good or bad example.
   */
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
