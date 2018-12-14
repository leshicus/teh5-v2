import React from "react"

import Topic from "./../../../../components/Topic"
import ExampleCode from "./../../../../components/ExampleCode"

const code_1 = `var paragraphs = document.getElementsByTagName('p')

// calculates "paragraphs.length" everytime
for (var i = 0; i < paragraphs.length; i++) {
  doSomething(paragraphs[i])
}`

const code_2 = `// "paragraphs[i]" becomes undefined at some point
for (var i = 0, paragraph; paragraph = paragraphs[i]; i++) {
  doSomething(paragraph)
}`

const code_3 = `// "child" becomes undefined at some point
for (var child = parentNode.firstChild; child; child = child.nextSibling) {
  doSomething(child)
}`

export default props => {
  return (
    <Topic title="Iteration over Node List" {...props}>
      <ExampleCode
        title="Re-check length property each iteration"
        code={code_1}
        language="javascript"
        alert="danger"
      />
      <ExampleCode
        title="Exit iteration on undefined"
        code={code_2}
        language="javascript"
        alert="success"
      />
      <ExampleCode
        title="Exit iteration when nextSibling is undefined"
        code={code_3}
        language="javascript"
        alert="success"
      />
    </Topic>
  )
}
