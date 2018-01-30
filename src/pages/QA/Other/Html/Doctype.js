import React from "react"

import Topic from "./../../../../components/Topic"
import ExampleCode from "./../../../../components/ExampleCode"

const code_1 = `<!DOCTYPE html>`

export default () => {
  return (
    <Topic title="Doctype">
      <ExampleCode title="HTML5 doctype" code={code_1} language="html" />
      <ul>
        <li>
          Instruction to browser about html <mark>version</mark>, and how
          browser should <mark>render</mark> page
        </li>
        <li>
          Otherwise browser will go to <mark>quirks mode</mark>
          <ul>
            <li>
              <b>Standart mode</b> - page are rendered according to HTML and CSS
              specifications
            </li>
            <li>
              <b>Quirks mode</b> - browser try to <mark>emulate</mark> the
              behavior of older browsers
            </li>
          </ul>
        </li>
      </ul>
    </Topic>
  )
}
