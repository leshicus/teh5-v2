import React from "react"
import TopicTitle from "./../../../components/TopicTitle"
import ExampleCode from "./../../../components/ExampleCode"

const code_1 = `document.documentElement; // html
document.body; // body
document.head; // head

document.body.style.backgroundColor = 'red'; // set body color
document.body.style.backgroundColor = ''; // unset body color`

const Dom = () => (
  <ul>
    <li>DOM - HTML in form of an object</li>
    <li>DOM - HTML with required elemets</li>
    <p>
      <u>Example:</u> {`<html>`}, {`<body>`}, {`<tbody>`}, forgotten finishing
      tags
    </p>
    <li>Browser makes the DOM</li>
    <li>
      <b>document</b> - root element of the DOM
      <ExampleCode
        title="How to get DOM elements in JS"
        code={code_1}
        language="javascript"
        open
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
)

const navScheme = `document - document.documentElement - document.body`

const Navigation = () => (
  <ul>
    <li>{navScheme}</li>
    <li>
      <b>previousSibling</b> - <b>{`<div>`}</b> - <b>nextSibling</b>
    </li>
    <li>
      <b>parentNode</b> - <b>{`<div>`}</b> - <b>childNodes</b> (firstChild,
      lastChild)
    </li>
  </ul>
)

export default () => {
  return (
    <div>
      <TopicTitle title="DOM" />
      {<Dom />}

      <TopicTitle title="Navigation on DOM" itemId="navigation" />
      {<Navigation />}
    </div>
  )
}
