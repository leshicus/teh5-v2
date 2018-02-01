import { onClickSubLink } from "./../../actions/general"

import ScrollContainer from "./Document/Scroll"
import EventsContainer from "./Document/Event"

import DomContainer from "./Document/Dom"
// import Dom from "./Document/Dom/Dom"
// import Navigation from "./Document/Dom/Navigation"
// import Siblings from "./Document/Dom/Siblings"
// import IterateNodeList from "./Document/Dom/IterateNodeList"

import WindowContainer from "./Document/Window"
import SemicolonsContainer from "./Other/SemicolonsContainer"

import StyleGuideContainer from "./Other/StyleGuide"
// import FuncDecWithinBlock from "./Other/StyleGuide/FuncDecWithinBlock"
// import WrapperObjects from "./Other/StyleGuide/WrapperObjects"
// import MethodPropDef from "./Other/StyleGuide/MethodPropDef"
// import BooleanExpression from "./Other/StyleGuide/BooleanExpression"

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
            // links: [
            //   {
            //     name: "Dom",
            //     component: Dom,
            //     onClick: onClickSubLink
            //   },
            //   {
            //     name: "Navigation",
            //     component: Navigation,
            //     onClick: onClickSubLink
            //   },
            //   {
            //     name: "Siblings",
            //     component: Siblings,
            //     onClick: onClickSubLink
            //   },
            //   {
            //     name: "Iteration over Node List",
            //     component: IterateNodeList,
            //     onClick: onClickSubLink
            //   }
            // ]
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
            // links: [
            //   {
            //     name: "FuncDecWithinBlock",
            //     component: FuncDecWithinBlock,
            //     onClick: onClickSubLink
            //   },
            //   {
            //     name: "WrapperObjects",
            //     component: WrapperObjects,
            //     onClick: onClickSubLink
            //   },
            //   {
            //     name: "MethodPropDef",
            //     component: MethodPropDef,
            //     onClick: onClickSubLink
            //   },
            //   {
            //     name: "BooleanExpression",
            //     component: BooleanExpression,
            //     onClick: onClickSubLink
            //   }
            // ]
          }
        ],
        isExpanded: true
      }
    ]
  }
]
