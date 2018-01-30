import { onClickSubLink } from "./../../actions/general"

import MarginPaddingContainer from "./Other/MarginPaddingContainer"

import OtherContainer from "./Other/Other"
import Units from "./Other/Other/Units"
import Positions from "./Other/Other/Position"
import DisplayVisibility from "./Other/Other/DisplayVisibility"

import * as otherComponents from "./Other/Other"
console.log(otherComponents)
console.log(Object.keys(otherComponents))

export default [
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
            component: OtherContainer,
            links: [
              {
                name: "Units",
                component: Units,
                onClick: onClickSubLink
              },
              {
                name: "Position",
                component: Positions,
                onClick: onClickSubLink
              },
              {
                name: "Display & Visibility",
                component: DisplayVisibility,
                onClick: onClickSubLink
              }
            ]
          }
        ],
        isExpanded: true
      }
    ]
  }
]
