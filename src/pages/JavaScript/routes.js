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
        links: [
          {
            name: "window",
            url: "/javascript/document/window",
            component: WindowContainer
          },
          {
            name: "DOM",
            url: "/javascript/document/dom",
            component: DomContainer
          },
          {
            name: "Scroll",
            url: "/javascript/document/scroll",
            component: ScrollContainer
          },
          {
            name: "Events",
            url: "/javascript/document/events",
            component: EventsContainer
          }
        ],
        isExpanded: true
      },
      {
        name: "Other",
        links: [
          {
            name: "Semicolons",
            url: "/javascript/other/semicolons",
            component: SemicolonsContainer
          },
          {
            name: "Style Guides",
            url: "/javascript/other/styleguide",
            component: StyleGuideContainer
          }
        ],
        isExpanded: true
      }
    ]
  }
]
