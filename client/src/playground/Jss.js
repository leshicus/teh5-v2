//@flow
import * as React from 'react'
import { JssThemeViewer } from './JssThemeViewer'
import { JssButton } from './JssButton'
import { Example } from '../components/Codeblock/Example'

const styles = {
  layout: {
    // display: 'flex',
    width: '100%',
  },
}

export class Jss extends React.Component<{}> {
  render() {
    return (
      <div style={styles.layout}>
        <Example>
          <JssThemeViewer />
        </Example>
        <Example src="./playground/codeblock/jss/1.js">
          <JssButton />
        </Example>
      </div>
    )
  }
}
