import * as foo from "./../general"
import { ContextualMenuItemType } from "office-ui-fabric-react/lib/ContextualMenu"

describe("general.js", () => {
  it("arrays should be equal", () => {
    const arr = [
      {
        name: "1",
        disabled: true,
        items: [
          {
            name: "2"
          },
          {
            name: "3"
          }
        ]
      },
      {
        name: "4",
        iconName: "Css",
        disabled: true,
        items: [
          {
            name: "5",
            iconName: "WindowsLogo"
          },
          {
            name: "6"
          }
        ]
      },
      {
        name: "7",
        iconName: "EditNote",
        items: [
          {
            _itemType: "section",
            _title: "9",
            _items: [
              {
                name: "10",
                href: "#/document"
              },
              {
                name: "11",
                href: "#/other"
              }
            ]
          }
        ]
      }
    ]

    const test = [
      {
        key: 1,
        name: "1",
        disabled: true,
        items: [
          {
            key: 2,
            name: "2"
          },
          {
            key: 3,
            name: "3"
          }
        ]
      },
      {
        key: 4,
        name: "4",
        iconProps: {
          iconName: "Css"
        },
        disabled: true,
        items: [
          {
            key: 5,
            name: "5",
            iconProps: {
              iconName: "WindowsLogo"
            }
          },
          {
            key: 6,
            name: "6"
          }
        ]
      },
      {
        key: 7,
        name: "7",
        iconProps: {
          iconName: "EditNote"
        },
        items: [
          {
            key: 8,
            itemType: ContextualMenuItemType.Section,
            sectionProps: {
              title: "9",
              key: 9,
              items: [
                {
                  key: 10,
                  name: "10",
                  href: "#/document"
                },
                {
                  key: 11,
                  name: "11",
                  href: "#/other"
                }
              ]
            }
          }
        ]
      }
    ]

    expect(foo.getItems(arr)).toEqual(test)
  })

  test("getHeaderItems", () => {
    const arr = [
      {
        name: "Name1",
        disabled: true,
        items: [
          {
            name: "2"
          },
          {
            name: "3"
          }
        ]
      },
      {
        name: "Name2",
        iconName: "Css",
        items: [
          {
            name: "5"
          },
          {
            name: "6"
          }
        ]
      }
    ]

    const test = [
      {
        key: 1,
        name: "Name1",
        disabled: true,
        items: [
          {
            key: 2,
            name: "2"
          },
          {
            key: 3,
            name: "3"
          }
        ]
      },
      {
        key: 4,
        name: "Name2",
        iconProps: {
          iconName: "Css"
        },
        items: [
          {
            key: 5,
            name: "5"
          },
          {
            key: 6,
            name: "6"
          }
        ]
      }
    ]

    expect(foo.getHeaderItems(arr, { key: 0 })).toEqual(test)
  })

  test("getMenuItems", () => {
    const arr = [
      {
        name: "1",
        iconName: "WindowsLogo"
      },
      {
        name: "2"
      }
    ]

    const test = [
      {
        key: 1,
        name: "1",
        iconProps: {
          iconName: "WindowsLogo"
        }
      },
      {
        key: 2,
        name: "2"
      }
    ]

    expect(foo.getMenuItems(arr, { key: 0 })).toEqual(test)
  })
})
