import React from "react"
import { Link } from "office-ui-fabric-react/lib/Link"

import Topic from "./../../../components/Topic"
import ExampleCode from "./../../../components/ExampleCode"
import Demo from "./../../../components/Demo"

export default () => {
  return (
    <Topic title="Webpage Rendering">
      <ul>
        <li>
          <b>Render</b>
          <ol>
            <li>DOM</li>
            <li>CSSOM</li>
            <li>
              <b>Render tree</b> is created on top of DOM and CSSOM
              <ul>
                <li>
                  Render tree reflects DOM structure except for invisible
                  elements ( like {`<head>`}, and which has{" "}
                  <code>display:none</code>)
                </li>
                <li>
                  Each <b>renderer</b> contains corresponding DOM object and
                  calculated styles.
                  <li>Render tree describes visual representation of a DOM</li>
                </li>
                <li>
                  <b>Layout</b> - coordinates of each render tree object
                </li>
              </ul>
            </li>
            <li>
              <b>Painting</b> - dispalying in a browser
            </li>
          </ol>
        </li>
        <li>
          <b>Repaint</b> - when changes style of the element which don't affect
          the position
        </li>
        <li>
          <b>Reflow</b> - when the changes affect document content or structure,
          or element position the position
        </li>
        <li>
          CSS rank according to their perfomance
          <ul>
            <li>#id</li>
            <li>.class</li>
            <li>div</li>
            <li>a + 1 - Adjacent sibling selector</li>
            <li>ul > li</li>
            <li>*</li>
            <li>input[type="text"]</li>
            <li>a:hover</li>
          </ul>
        </li>
        <li>
          Modifying <b>"class"</b> - the most performant way of changing
          element's style
        </li>
        <li>
          Disable <b>:hover</b> animation while scrolling (add "no-hover" to{" "}
          {`<body>`})
        </li>
      </ul>
    </Topic>
  )
}
