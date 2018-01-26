import WebPageRenderingContainer from "./Other/WebPageRenderingContainer"

export default [
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
