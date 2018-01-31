import { onClickSubLink } from "./../../actions/general"

import MarginPaddingContainer from "./Other/Margin"
import OtherContainer from "./Other/Other"

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
            component: OtherContainer
            // links: [
            //   {
            //     name: "Units",
            //     component: Units,
            //     onClick: onClickSubLink
            //   },
            //   {
            //     name: "Position",
            //     component: Positions,
            //     onClick: onClickSubLink
            //   },
            //   {
            //     name: "Display & Visibility",
            //     component: DisplayVisibility,
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
