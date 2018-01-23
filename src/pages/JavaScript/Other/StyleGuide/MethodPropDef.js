import React from "react"
import { Link } from "office-ui-fabric-react/lib/Link"

import TopicTitle from "./../../../../components/TopicTitle"
import ExampleCode from "./../../../../components/ExampleCode"

const code_1 = `Foo.prototype.bar = function() {
  /* ... */
};`

const code_2 = `/** @constructor */
function Foo() {
  this.bar = value;
}`

export default () => {
  return (
    <div>
      <TopicTitle title="Method and property definitions" />
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
    </div>
  )
}