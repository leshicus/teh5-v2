import React from "react"

import MainContainer from "./../../components/MainContainer/MainContainer"

import WebPageRenderingContainer from "./Other/WebPageRenderingContainer"

const routes = [
  {
    links: [
      {
        name: "Other",
        url: "/browser/other",
        links: [
          {
            name: "Webpage Rendering",
            url: "/webpagerendering",
            component: WebPageRenderingContainer
          }
        ],
        isExpanded: true
      }
    ]
  }
]

/**
 * Main container for Browser page
 */
export default () => <MainContainer routes={routes} />
