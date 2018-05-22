// HOC- High order component
import React from "react";

export class Operand extends React.Component {
  render() {
    return this.props.value;
  }
}

console.log(<Operand value={1} />);
