import React from "react"

import Topic from "./../../../components/Topic"
import ExampleCode from "./../../../components/ExampleCode"
import Demo from "./../../../components/Demo"

import "./MarginPaddingContainer.css"

const code_1 = `margin: "10px",
border: "1px dashed white",
background: "green"`

const code_2 = `padding: "10px",
border: "1px dashed white",
background: "red"`

const Demo1 = () => (
  <Demo width="100px">
    <div
      style={{
        background: "green",
        margin: "10px"
      }}
      className="clickZone"
    >
      1
    </div>
    <div
      style={{
        background: "red",
        margin: "10px"
      }}
      className="clickZone"
    >
      2
    </div>
  </Demo>
)

const Demo2 = () => (
  <Demo width="100px">
    <div
      style={{
        background: "green",
        padding: "10px"
      }}
      className="clickZone"
    >
      1
    </div>
    <div
      style={{
        background: "red",
        padding: "10px"
      }}
      className="clickZone"
    >
      2
    </div>
  </Demo>
)

export default () => {
  return (
    <Topic title="Margin vs padding">
      <ul>
        <li>
          <b>Vertical</b> margins auto-collapse (overlap) in block element.
          Horizontal margins never collapse.
        </li>
        <li>Paddings summarize, so the distance between elements doubles</li>
        <li>Padding is included in the click region</li>
        <li>Padding is included in background color</li>
      </ul>
      <ExampleCode title="Margins" code={code_1} language="javascript" />
      <Demo1 />
      <ExampleCode title="Paddings" code={code_2} language="javascript" />
      <Demo2 />
    </Topic>
  )
}
