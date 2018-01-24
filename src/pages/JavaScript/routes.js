import ScrollContainer from "./Document/Scroll/ScrollContainer"
import EventsContainer from "./Document/EventsContainer"
import DomContainer from "./Document/DomContainer"
import WindowContainer from "./Document/WindowContainer"
import SemicolonsContainer from "./Other/SemicolonsContainer"
import StyleGuideContainer from "./Other/StyleGuide/StyleGuideContainer"

export default [
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
