import React from "react"

import Topic from "./../../../../components/Topic"
import ExampleCode from "./../../../../components/ExampleCode"

const code_1 = `var x = new Boolean(false);
if (x) { // x is object
  alert('hi');  // Shows 'hi'. 
}`

const code_2 = `var x = Boolean(0);
if (x) {
  alert('hi');  // This will never be alerted.
}
typeof Boolean(0) == 'boolean';
typeof new Boolean(0) == 'object';`

export default props => {
  return (
    <Topic title="Wrapper objects for primitive types" {...props}>
      <ExampleCode
        title="Do not use wrapper objects for primitive types"
        code={code_1}
        language="javascript"
        alert={"danger"}
      />
      <ExampleCode
        title="But use them for type casting"
        code={code_2}
        language="javascript"
        alert={"success"}
      />
    </Topic>
  )
}
