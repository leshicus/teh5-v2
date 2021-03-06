import React from "react"

import Topic from "./../../../../components/Topic"
import ExampleCode from "./../../../../components/ExampleCode"

const code_1 = `if (x) {
  function foo() {}
}`

const code_2 = `if (x) {
  var foo = function foo() {}
}`

export default props => {
  return (
    <Topic title="Function Declarations Within Blocks" {...props}>
      <ExampleCode
        title="Do not declare function inside a block"
        code={code_1}
        language="javascript"
        alert={"danger"}
      />
      <ExampleCode
        title="Use function expression"
        code={code_2}
        language="javascript"
        alert={"success"}
      />
    </Topic>
  )
}
