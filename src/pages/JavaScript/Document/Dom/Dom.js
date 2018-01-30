import React from "react"

import Topic from "./../../../../components/Topic"
import ExampleCode from "./../../../../components/ExampleCode"

const code_1 = `document.documentElement; // html
document.body; // body
document.head; // head

document.body.style.backgroundColor = 'red'; // set body color
document.body.style.backgroundColor = ''; // unset body color`

export default props => {
  return (
    <Topic title="DOM" {...props}>
      <ul>
        <li>DOM - is HTML in form of an object</li>
        <li>
          DOM - is HTML with required elements, such as: <br />
          <mark>
            {`<html>`}, {`<body>`}, {`<tbody>`}, forgotten finishing tags
          </mark>
        </li>
        <li>Browser makes the DOM</li>
        <li>
          <b>document</b> - root element of the DOM
          <ExampleCode
            title="How to get DOM elements in JS"
            code={code_1}
            language="javascript"
          />
        </li>
        <li>
          In JavaScript DOM is accessible with global object <b>document</b>
        </li>
        <li>
          DOM has <b>node elements</b>, <b>text elements</b> and <b>comments</b>
          <ul>
            <li>text elements can't have child elements</li>
          </ul>
        </li>
      </ul>
    </Topic>
  )
}
