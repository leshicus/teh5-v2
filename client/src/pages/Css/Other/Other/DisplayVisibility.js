import React from "react"

import Topic from "./../../../../components/Topic"

export default props => {
  return (
    <Topic title="Display vs visibility" {...props}>
      <ul>
        <li>
          <b>display: none</b> - removes element from normal layout flow. Causes
          DOM <mark>reflow</mark>.
        </li>
        <li>
          <b>visibility: hidden</b> - tag is rendered, it takes space, but
          doesn't show.
        </li>
      </ul>
    </Topic>
  )
}
