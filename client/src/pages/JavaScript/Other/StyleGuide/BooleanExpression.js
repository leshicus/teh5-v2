import React from "react"

import Topic from "./../../../../components/Topic"
import ExampleCode from "./../../../../components/ExampleCode"

const code_1 = `'0' // the string
{} // the empty opject
[] // the epmty array

if([]){
  /**/
}
`

const code_2 = `null
undefined
''
0
`

const code_3 = `'0' != true

0 != null
0 == []
0 == false

null != true
null != false

undefined != true
undefined != false

{} != true
{} != false
`

export default props => {
  return (
    <Topic title="True and False Boolean Expressions" {...props}>
      Boolean expressions: ==, ===, !=, !==, > <br />
      <ExampleCode
        title="true in Boolean Expressions"
        code={code_1}
        language="javascript"
      />
      <ExampleCode
        title="false in Boolean Expressions"
        code={code_2}
        language="javascript"
      />
      <ExampleCode title="Quirks" code={code_3} language="javascript" />
    </Topic>
  )
}
