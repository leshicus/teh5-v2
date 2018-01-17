import React from "react"
import TopicTitle from "./../../../components/TopicTitle"
import ExampleCode from "./../../../components/ExampleCode"

const code_1 = `window.open('http://ya.ru') // open new window/tab with URL http://ya.ru`
const code_2 = `alert( location.href ); // http://localhost:3000/#/document/window`

export default () => {
  return (
    <div>
      <TopicTitle title="window" />
      <ul>
        <li>window - global object in JavaScript in a browser</li>
        <p>
          <u>Note:</u> in Node.js it is <b>global</b>, in Worker it is{" "}
          <b>WorkerGlobalScope </b>
        </p>
        <li>
          window has properties and methods to work with browser window, to open
          new, close etc.
        </li>
        <ExampleCode title="window.open" code={code_1} language="javascript" />

        <li>
          window - DOM, BOM (browser object model), JavaScript
          <ul type="square">
            {" "}
            Inline objects:
            <li>DOM: document</li>
            <li>
              BOM: navigator, screen, location, frames, history, XMLHttpRequest
              <ExampleCode
                title="location.href"
                code={code_2}
                language="javascript"
              />
            </li>
            <li>JavaScript: Object, Array, Date, Number, Function</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
