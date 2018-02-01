import HtmlContainer from "./Other/Html"
// import Doctype from "./Other/Html/Doctype"
// import Other from "./Other/Html/Other"
// import DownloadOrder from "./Other/Html/DownloadOrder"

export default [
  {
    links: [
      {
        name: "Other",
        url: "/qa/other",
        links: [
          {
            name: "Html",
            url: "/html",
            component: HtmlContainer
            // links: [
            //   {
            //     name: "Doctype",
            //     component: Doctype,
            //     onClick: onClickSubLink
            //   },
            //   {
            //     name: "Other",
            //     component: Other,
            //     onClick: onClickSubLink
            //   },
            //   {
            //     name: "Download order",
            //     component: DownloadOrder,
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
