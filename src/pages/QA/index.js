import React from "react"

import MainContainer from "./../../components/MainContainer/MainContainer"

import HtmlContainer from "./Other/Html"

const routes = [
  {
    links: [
      {
        name: "Other",
        url: "/qa/other",
        links: [
          {
            name: "Html",
            url: "/html",
            component: HtmlContainer
          }
        ],
        isExpanded: true
      }
    ]
  }
]

export default () => <MainContainer routes={routes} />
