import React from "react";
import { DefaultButton, IButtonProps } from "office-ui-fabric-react/lib/Button";

import SyntaxHighlighter from "react-syntax-highlighter/prism";
import okaidia from "react-syntax-highlighter/styles/prism/okaidia";

import { mergeDeep } from "./../actions/mergeDeep";

const style = {
    'pre[class*="language-"]': {
        marginTop: "-16.38px",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    }
};
const highlightStyle = mergeDeep(okaidia, style);

class TopicTitle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showCode: false
        };
    }

    getIcon = () => {
        return this.state.showCode
            ? { iconName: "CalculatorSubtract" }
            : { iconName: "CalculatorAddition" };
    };

    getText = () => {
        return this.state.showCode ? "Hide code" : "Show code";
    };

    changeShowCodeStatus = () => {
        this.setState({
            showCode: !this.state.showCode
        });
    };

    render() {
        return (
            <div>
                <h3
                    style={{
                        borderBottom: "1px solid #a6a6a6",
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >
                    <div>{this.props.title}</div>
                    <DefaultButton
                        iconProps={this.getIcon()}
                        text={this.getText()}
                        onClick={() => this.changeShowCodeStatus()}
                    />
                </h3>
                {this.state.showCode && (
                    <SyntaxHighlighter language="jsx" style={highlightStyle}>
                        {this.props.code}
                    </SyntaxHighlighter>
                )}
            </div>
        );
    }
}

export default TopicTitle;
