import React from "react";
import { connect } from "react-redux";

import TopicTitle from "./../../../../components/TopicTitle";

const exampleText_1 = `111111111 111111111 2222222 2222222222222
33333333333333333333333 44444444444444444 55555555555
6666666666666666666666666 77777777777777 7777777
66666666666666666 7777777777777777777777 888888888 888888888
11111111111111 222222 2222222222 3333333333 44444444444444
55555555555555 666666666666`;

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
                {exampleText_1}
            </div>
        </div>
    );
};

const exampleCode_1 = () =>
    `<div
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
        {exampleText_1}
    </div>
</div>`;

class ScrollContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{}}>
                <TopicTitle title="Metrics" code={exampleCode_1()} />
                {doc()}
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
                1111111<br />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    ...state
});

export default connect(mapStateToProps)(ScrollContainer);