import React from "react"

import Topic from "./../../../../components/Topic"
import ExampleCode from "./../../../../components/ExampleCode"

const code_1 = `<head>
<!-- style2.css doesn't wait style1.css -->
<link href="style1.css" rel="stylesheet">
<link href="style2.css" rel="stylesheet">
</head>`

const code_2 = `<head>
<link href="style1.css" rel="stylesheet">
</head>
<body>
<!-- Paragraph waits style2.css -->
<p>Paragraph 1</p>
<link href="style2.css" rel="stylesheet">
</body>`

export default () => {
  return (
    <Topic title="Download order">
      <ul>
        <li>
          Styles download and parse independently
          <ExampleCode title="styles" code={code_1} language="html" />
        </li>
        <li>
          Tags inside body renders <mark>after</mark> all styles are downloaded
          <ExampleCode title="body" code={code_2} language="html" />
        </li>
      </ul>
    </Topic>
  )
}
