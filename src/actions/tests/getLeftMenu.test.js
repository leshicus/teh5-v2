import * as foo from "./../getLeftMenu"

describe("Test file: getLeftMenu.js", () => {
  test("Test function: getItems", () => {
    const arr = [
      {
        links: [
          {
            name: "document",
            links: [
              {
                name: "window",
                url: "/javascript/document/window"
              },
              {
                name: "DOM",
                url: "/javascript/document/dom"
              }
            ],
            isExpanded: true
          },
          {
            name: "Other",
            links: [
              {
                name: "semicolons",
                url: "/javascript/other/semicolons"
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
                url: "/javascript/document/window"
              }
            ],
            isExpanded: true
          }
        ]
      }
    ]

    const test = [
      {
        key: 1,
        links: [
          {
            key: 2,
            name: "document",
            links: [
              {
                key: 3,
                name: "window",
                url: "#/javascript/document/window"
              },
              {
                key: 4,
                name: "DOM",
                url: "#/javascript/document/dom"
              }
            ],
            isExpanded: true
          },
          {
            key: 5,
            name: "Other",
            links: [
              {
                key: 6,
                name: "semicolons",
                url: "#/javascript/other/semicolons"
              }
            ],
            isExpanded: true
          }
        ]
      },
      {
        key: 7,
        links: [
          {
            key: 8,
            name: "document",
            links: [
              {
                key: 9,
                name: "window",
                url: "#/javascript/document/window"
              }
            ],
            isExpanded: true
          }
        ]
      }
    ]

    expect(foo.getItems(arr)).toEqual(test)
  })

  // элементы верхнего (первого) уровня
  test("Test function: getLinksArray_1", () => {
    const arr = [
      {
        name: "document",
        links: [
          {
            name: "window",
            url: "/javascript/document/window"
          },
          {
            name: "DOM",
            url: "/javascript/document/dom"
          }
        ],
        isExpanded: true
      },
      {
        name: "Other",
        links: [
          {
            name: "semicolons",
            url: "/javascript/other/semicolons"
          }
        ],
        isExpanded: true
      }
    ]

    const test = [
      {
        key: 1,
        name: "document",
        links: [
          {
            key: 2,
            name: "window",
            url: "#/javascript/document/window"
          },
          {
            key: 3,
            name: "DOM",
            url: "#/javascript/document/dom"
          }
        ],
        isExpanded: true
      },
      {
        key: 4,
        name: "Other",
        links: [
          {
            key: 5,
            name: "semicolons",
            url: "#/javascript/other/semicolons"
          }
        ],
        isExpanded: true
      }
    ]

    expect(foo.getLinksArray_1(arr, { key: 0 })).toEqual(test)
  })

  // элементы второго уровня
  test("Test function: getLinksArray_2", () => {
    const arr = [
      {
        name: "window",
        url: "/javascript/document/window"
      },
      {
        name: "DOM",
        url: "/javascript/document/dom"
      }
    ]

    const test = [
      {
        key: 1,
        name: "window",
        url: "#/javascript/document/window"
      },
      {
        key: 2,
        name: "DOM",
        url: "#/javascript/document/dom"
      }
    ]

    expect(foo.getLinksArray_2(arr, { key: 0 })).toEqual(test)
  })
})
