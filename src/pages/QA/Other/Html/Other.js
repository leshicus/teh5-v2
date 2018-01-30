import React from "react"

import Topic from "./../../../../components/Topic"
import ExampleCode from "./../../../../components/ExampleCode"

const code_1 = `//Switch text direction
<p><bdo dir="rtl">This text will go right to left.</bdo></p>

// pseudo class :root refers to <html> element`

export default () => {
  return (
    <Topic title="Other">
      <ExampleCode code={code_1} language="html" />
    </Topic>
  )
}
