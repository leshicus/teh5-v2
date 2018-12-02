import React from "react"

import MainContainer from "./../../components/MainContainer/MainContainer"

import ScrollContainer from "./Document/Scroll"
import EventsContainer from "./Document/Event"
import DomContainer from "./Document/Dom"
import WindowContainer from "./Document/Window"
import SemicolonsContainer from "./Other/SemicolonsContainer"
import StyleGuideContainer from "./Other/StyleGuide"

const routes = [
  {
    links: [
      {
        name: "document",
        url: "/javascript/document",
        links: [
          {
            name: "window",
            url: "/window",
            component: WindowContainer
          },
          {
            name: "DOM",
            url: "/dom",
            component: DomContainer
          },
          {
            name: "Scroll",
            url: "/scroll",
            component: ScrollContainer
          },
          {
            name: "Events",
            url: "/events",
            component: EventsContainer
          }
        ],
        isExpanded: true
      },
      {
        name: "Other",
        url: "/javascript/other",
        links: [
          {
            name: "Semicolons",
            url: "/semicolons",
            component: SemicolonsContainer
          },
          {
            name: "Style Guides",
            url: "/styleguide",
            component: StyleGuideContainer
          }
        ],
        isExpanded: true
      }
    ]
  }
]

/**
 * Main container for JavaScript page
 */
export default () => <MainContainer routes={routes} />
