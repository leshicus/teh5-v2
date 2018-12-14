//@flow
import * as React from 'react'
import { Codeblock } from './Codeblock'

const styles = {
  layout: {
    display: 'flex',
    width: '100%',
    padding: '10px 0px',
    borderBottom: '1px solid #f4f4f4',
  },
  layoutAll: {
    width: '100%',
  },
  layoutLeft: {
    width: '50%',
  },
  layoutRight: {
    width: '50%',
  },
}

type Props = {
  children: React.Node,
  src?: string,
}

export class Example extends React.Component<Props> {
  render() {
    return (
      <div style={styles.layout}>
        <div style={this.props.src ? styles.layoutLeft : styles.layoutAll}>
          {this.props.children}
        </div>
        {this.props.src && (
          <div style={styles.layoutRight}>
            <div>
              <Codeblock src={this.props.src} />
            </div>
          </div>
        )}
      </div>
    )
  }
}
