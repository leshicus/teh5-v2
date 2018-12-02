import * as foo from "./../getRoutes"

describe("Test file: getRoutes.js", () => {
  test("Test function: getItems", () => {
    const arr = [
      {
        links: [
          {
            name: "document",
            links: [
              {
                name: "window",
                url: "/javascript/document/window",
                component: "WindowContainer"
              },
              {
                name: "DOM",
                url: "/javascript/document/dom",
                component: "WindowContainer"
              }
            ],
            isExpanded: true
          },
          {
            name: "Other",
            links: [
              {
                name: "semicolons",
                url: "/javascript/other/semicolons",
                component: "WindowContainer"
              }
            ],
            isExpanded: true
          }
        ]
      },
      {
        links: [
          {
            name: "document",
            links: [
              {
                name: "window",
                url: "/javascript/document/window",
                component: "WindowContainer"
              }
            ],
            isExpanded: true
          }
        ]
      }
    ]

    const test = [
      {
        name: "window",
        url: "/javascript/document/window",
        component: "WindowContainer"
      },
      {
        name: "DOM",
        url: "/javascript/document/dom",
        component: "WindowContainer"
      },
      {
        name: "semicolons",
        url: "/javascript/other/semicolons",
        component: "WindowContainer"
      },
      {
        name: "window",
        url: "/javascript/document/window",
        component: "WindowContainer"
      }
    ]

    expect(foo.getItems(arr)).toEqual(test)
  })
})
