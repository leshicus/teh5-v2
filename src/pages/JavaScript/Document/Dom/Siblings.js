import React from 'react'
import { DefaultButton } from 'office-ui-fabric-react/lib/Button'

import Topic from './../../../../components/Topic'
import ExampleCode from './../../../../components/ExampleCode'
// import { MyEnhancedComp } from "./../../../../todo/reduxStore";

const code_5 = `<div id="parent" style="hidden:true;">
  <p>Some text</p>
  <div>Some element</div>
  <p>
    <!-- some comment -->
  </p>  
</div>`

class WorkingExample extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      current: '',
    }
  }

  componentDidMount() {
    this.setState({
      current: document.getElementById('parent').firstChild,
    })
  }

  render() {
    return (
      <div>
        <div id="parent" style={{ visibility: 'hidden', marginTop: '-80px' }}>
          <p>Some text</p>
          <div>Some element</div>
          <p dangerouslySetInnerHTML={{ __html: '<!-- some comment -->' }} />
        </div>
        <DefaultButton
          data-automation-id="left"
          text="<- previousSibling"
          primary={true}
          style={{ marginTop: '8px' }}
          onClick={() => {
            const current = this.state.current
            const next = current.previousSibling

            if (next) {
              this.setState({
                current: next,
              })
            }
          }}
        />

        <DefaultButton
          data-automation-id="right"
          text="nextSibling ->"
          style={{ marginLeft: '8px', marginTop: '8px' }}
          primary={true}
          onClick={() => {
            const current = this.state.current
            const next = current.nextSibling

            if (next) {
              this.setState({
                current: next,
              })
            }
          }}
        />
        <div
          style={{
            display: 'inline-block',
            marginTop: '12px',
            marginLeft: '8px',
          }}
        >
          <u>Result:</u>
          {` `}
          {this.state.current.innerHTML}
        </div>
      </div>
    )
  }
}

export default props => {
  return (
    <Topic title="Navigation on siblings" {...props}>
      {/* <MyEnhancedComp rSelf={0} /> */}
      <ExampleCode title="Siblings" code={code_5} language="jsx" />
      <WorkingExample />
    </Topic>
  )
}
