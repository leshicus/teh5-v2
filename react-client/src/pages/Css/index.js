import React from "react"

import MainContainer from "./../../components/MainContainer/MainContainer"

import MarginPaddingContainer from "./Other/Margin"
import OtherContainer from "./Other/Other"

const routes = [
  {
    links: [
      {
        name: "Other",
        url: "/css/other",
        links: [
          {
            name: "Margin vs Padding",
            url: "/marginpadding",
            component: MarginPaddingContainer
          },
          {
            name: "Other",
            url: "/other",
            component: OtherContainer
          }
        ],
        isExpanded: true
      }
    ]
  }
]

/**
 * Main container for CSS page
 */
export default () => <MainContainer routes={routes} />
