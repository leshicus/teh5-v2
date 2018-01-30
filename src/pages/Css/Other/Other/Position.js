import React from "react"

import Topic from "./../../../../components/Topic"

export default () => {
  return (
    <Topic title="Absolute, relative, fixed, static positions">
      <ul>
        <li>
          <b>Absolute</b> - relative to <mark>parent element</mark>, or{" "}
          <mark>page</mark> itself.
        </li>
        <li>
          <b>Relative</b> - relative to <mark>itself</mark> (from where it would
          be placed, if positioning wasn't applyed).
        </li>
        <li>
          <b>Fixed</b> - relative to <mark>viewport</mark> or{" "}
          <mark>window</mark>. Viewport doesn't move while scrolling.
        </li>
        <li>
          <b>Static</b> - normal flow. Used to remove other positioning.
        </li>
      </ul>
    </Topic>
  )
}
