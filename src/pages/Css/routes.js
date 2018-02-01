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
          }
        ],
        isExpanded: true
      }
    ]
  }
]
