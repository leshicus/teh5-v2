import React from "react"

import Topic from "./../../../../components/Topic"

export default props => {
  return (
    <Topic title="Units: px, em % or pt" {...props}>
      <ul>
        <li>
          <b>px</b> - gives control, 1px is sharp. Not cascade.
        </li>
        <li>
          <b>em</b> - relative size, <mark>em - width of "m"</mark> in the
          selected typeface. <mark>em = font-size</mark>. Cascade.
        </li>
        <li>
          <b>%</b> - relative to <mark>font-size of the body</mark>. Cascade.
        </li>
        <li>
          <b>pt</b> - <mark>1pt = 1/72 inch</mark>
        </li>
      </ul>
    </Topic>
  )
}
