import React from "react";
import { connect } from "react-redux";

class MetroContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div style={{}}>1</div>;
    }
}

const mapStateToProps = (state, ownProps) => ({
    ...state
});

export default connect(mapStateToProps)(MetroContainer);
