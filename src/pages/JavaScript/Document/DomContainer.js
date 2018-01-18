import React from "react"
import { DefaultButton } from "office-ui-fabric-react/lib/Button"

import TopicTitle from "./../../../components/TopicTitle"
import ExampleCode from "./../../../components/ExampleCode"

const code_1 = `document.documentElement; // html
document.body; // body
document.head; // head

document.body.style.backgroundColor = 'red'; // set body color
document.body.style.backgroundColor = ''; // unset body color`

const code_2 = `const el = document.documentElement.childNodes
el.map // undefined

// but NodeList has forEach:
el.forEach // function `

const code_3 = `[].map.call(el, function(elem){})`

const code_4 = `arr = Array.prototype.slice.call(el)`

const code_5 = `<div id="parent" style="hidden:true;">
  <p>Some text</p>
  <div>Some element</div>
  <p>
    <!-- some comment -->
  </p>  
</div>`

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
      Don't use <b>for in</b> to iterate collections- it will return and private
      methods, such as <b>length</b>, <b>item</b>
    </li>
  </ul>
)

class WorkingExample extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      current: ""
    }
  }

  componentDidMount() {
    this.setState({
      current: document.getElementById("parent").firstChild
    })
  }

  render() {
    return (
      <div>
        <div id="parent" style={{ visibility: "hidden", marginTop: "-80px" }}>
          <p>Some text</p>
          <div>Some element</div>
          <p dangerouslySetInnerHTML={{ __html: "<!-- some comment -->" }} />
        </div>
        <DefaultButton
          data-automation-id="left"
          text="<- previousSibling"
          primary={true}
          style={{ marginTop: "8px" }}
          onClick={() => {
            const current = this.state.current
            const next = current.previousSibling

            if (next) {
              this.setState({
                current: next
              })
            }
          }}
        />

        <DefaultButton
          data-automation-id="right"
          text="nextSibling ->"
          style={{ marginLeft: "8px", marginTop: "8px" }}
          primary={true}
          onClick={() => {
            const current = this.state.current
            const next = current.nextSibling

            if (next) {
              this.setState({
                current: next
              })
            }
          }}
        />
        <div
          style={{
            display: "inline-block",
            marginTop: "12px",
            marginLeft: "8px"
          }}
        >
          <u>Result:</u>
          {` `}
          {this.state.current.innerHTML}
        </div>
      </div>
    )
  }
}

const Siblings = () => {
  // let el = document.getElementById("parent").firstChild
  return (
    <div>
      <ExampleCode title="Siblings" code={code_5} language="jsx" />
      <WorkingExample />
    </div>
  )
}

export default () => {
  return (
    <div>
      <TopicTitle title="DOM" />
      {<Dom />}

      <TopicTitle title="Navigation on DOM" itemId="navigation" />
      {<Navigation />}

      <TopicTitle title="Navigation on siblings" itemId="siblings" />
      {<Siblings />}
    </div>
  )
}
