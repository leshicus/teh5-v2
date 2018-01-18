import React from "react"
import { Link } from "office-ui-fabric-react/lib/Link"

import TopicTitle from "./../../../components/TopicTitle"
import ExampleCode from "./../../../components/ExampleCode"

const code_1 = `;(function() {
  console.log(123)
})()`
const code_2 = `;[1, 2, 3].forEach(function(n) {
  console.log(n)
})`
const code_3 = `// wrong!!!
return 
{ prop: 1 }
// will be parsed as:
return;
{ prop: 1 }

// correct
return {
  prop: 1}`

export default () => {
  return (
    <div>
      <TopicTitle title="When semicolons are necessary" />
      <Link href="http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding">
        Explanation 1
      </Link>,
      <Link href="http://inimino.org/%7Einimino/blog/javascript_semicolons">
        Explanation 2
      </Link>
      <ul>
        <li>
          In most cases semicolons in JS are not necessary. Because linebreaker{" "}
          <b>\n</b> terminates statement.
        </li>
        <li>ASI - automatic semicolon insertion</li>
        <li>You need them:</li>
        <ul>
          <li>
            Before <b>( [ ` / + - , . -- ++</b>
          </li>
          <ExampleCode
            title="Before execution anonymous function"
            code={code_1}
            language="javascript"
          />
          <ExampleCode
            title="Before using array literal syntax"
            code={code_2}
            language="javascript"
          />
          <li>
            Linebreaker <b>\n</b> triggers semicolon insertion in restricted
            productions
          </li>
          <ExampleCode
            title="In the end of a return statement"
            code={code_3}
            language="javascript"
          />
        </ul>
      </ul>
    </div>
  )
}
