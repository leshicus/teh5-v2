import React from 'react';
import ReactDOM from 'react-dom';

const Text = ({ color, width }) => (
  <div style={{ color: color, fontWeight: width }}>1</div>
);

const withColor = color => WrappedComponent => props => (
  <WrappedComponent {...props} color={color} />
);

const ColoredText = withColor('blue')(Text);

ReactDOM.render(<ColoredText width="bold" />, document.getElementById('app'));
