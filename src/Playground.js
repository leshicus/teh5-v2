//@flow
import * as React from 'react'
import { Link } from 'react-router-dom'
import { ListItem } from './components/ListItem'

const styles = {
  root: {
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
}

export class Playground extends React.Component<{}> {
  render() {
    return (
      <div style={styles.root}>
        <ListItem to="/javascript">1</ListItem>
        <ListItem to="/playground/javascript">1</ListItem>
      </div>
    )
  }
}
