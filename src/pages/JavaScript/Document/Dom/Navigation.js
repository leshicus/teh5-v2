import React from "react"

import Topic from "./../../../../components/Topic"
import ExampleCode from "./../../../../components/ExampleCode"

const code_2 = `const el = document.documentElement.childNodes
el.map // undefined

// but NodeList has forEach:
el.forEach // function `

const code_3 = `[].map.call(el, function(elem){})`

const code_4 = `arr = Array.prototype.slice.call(el)`

const navScheme = `document - document.documentElement - document.body`

export default props => {
  return (
    <Topic title="Navigation on DOM" {...props}>
      <ul>
        <li>{navScheme}</li>
        <li>
          <b>previousSibling</b> - <b>{`<div>`}</b> - <b>nextSibling</b>
        </li>
        <li>
          <b>parentNode</b> - <b>{`<div>`}</b> - <b>childNodes</b> (firstChild,
          lastChild)
        </li>
        <p>
          <u>Note:</u> if <b>{`<script>`}</b> is inside <b>{`<head>`}</b>
          {` `}then{` `}
          <b>document.body</b> not accessible there
        </p>
        <ul>
          <li>
            <b>child elements</b> (pseudo array <i>childNodes</i>) - immidiate
            descendants
          </li>
          <li>
            <b>descendants</b>
            - all elements which lays within this
          </li>
        </ul>
        <li>Navigational properties are readonly</li>
        <li>childNodes - not array</li>
        <ExampleCode
          title="childNodes (NodeList) - DOM collection, not array"
          code={code_2}
          language="javascript"
        />
        <li>If you want to use Array methods:</li>
        <ExampleCode title="[].map.call" code={code_3} language="javascript" />
        <ExampleCode
          title="Array.prototype.slice"
          code={code_4}
          language="javascript"
        />
        <li>
          Don't use <b>for in</b> to iterate collections- it will return and
          private methods, such as <b>length</b>, <b>item</b>
        </li>
      </ul>
    </Topic>
  )
}
