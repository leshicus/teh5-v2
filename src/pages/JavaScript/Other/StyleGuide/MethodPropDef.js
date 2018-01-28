import React from "react"
import { Link } from "office-ui-fabric-react/lib/Link"

import Topic from "./../../../../components/Topic"
import ExampleCode from "./../../../../components/ExampleCode"

const code_1 = `Foo.prototype.bar = function() {
  /* ... */
};`

const code_2 = `/** @constructor */
function Foo() {
  this.bar = value;
}`

export default (props) => {
  return (
    <Topic title="Method and property definitions" {...props}>
      <ExampleCode
        title="Attach method in prototype"
        code={code_1}
        language="javascript"
      />

      <ExampleCode
        title="Initialize property in constructor"
        code={code_2}
        language="javascript"
      />
    </Topic>
  )
}
