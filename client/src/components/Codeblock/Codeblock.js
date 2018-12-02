//@flow
import * as React from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-coy.css'
// import 'prismjs/themes/prism-okaidia.css'

//! This way highlighting fails after reload page. Needs another reload.
// export const Codeblock = ({ code }: { code: string }) => (
//   <pre>
//     <code className="language-javascript">{code}</code>
//   </pre>
// )

type Props = {
  code?: string,
  src?: string,
}

export class Codeblock extends React.Component<Props> {
  componentDidMount() {
    //! force highlighting
    Prism.highlightAll()
  }
  render() {
    return (
      <pre data-src={this.props.src}>
        {!this.props.src &&
        this.props.code && (
          <code className="language-javascript">{this.props.code}</code>
        )}
      </pre>
    )
  }
}
