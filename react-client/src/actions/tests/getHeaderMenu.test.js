import * as foo from "./../getHeaderMenu"
import { ContextualMenuItemType } from "office-ui-fabric-react/lib/ContextualMenu"

describe("Test file: getHeaderMenu.js", () => {
  test("Test function: getItems", () => {
    const arr = [
      {
        name: "1",
        disabled: true,
        items: [
          {
            name: "2"
          },
          {
            name: "3",
            href: "#/document"
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
            name: "6",
            href: "#/document"
          }
        ]
      },
      {
        name: "7",
        iconName: "EditNote",
        items: [
          {
            sectionProps: {
              title: "9",
              items: [
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
            name: "3",
            href: "#/document"
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
            name: "6",
            href: "#/document"
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

  // элементы меню
  test("Test function: getHeaderItems", () => {
    const arr = [
      {
        name: "Name1",
        disabled: true,
        items: [
          {
            name: "2"
          },
          {
            name: "3",
            href: "#/document"
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
            name: "6",
            href: "#/document"
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
            name: "3",
            href: "#/document"
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
            name: "6",
            href: "#/document"
          }
        ]
      }
    ]

    expect(foo.getHeaderItems(arr, { key: 0 })).toEqual(test)
  })

  // элементы внутри раскрывающегося списка меню
  test("Test function: getMenuItems", () => {
    const arr = [
      {
        name: "1",
        iconName: "WindowsLogo"
      },
      {
        name: "2"
      },
      {
        sectionProps: {
          title: "9",
          items: [
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
      },
      {
        key: 3,
        itemType: ContextualMenuItemType.Section,
        sectionProps: {
          title: "9",
          key: 4,
          items: [
            {
              key: 5,
              name: "10",
              href: "#/document"
            },
            {
              key: 6,
              name: "11",
              href: "#/other"
            }
          ]
        }
      }
    ]

    expect(foo.getMenuItems(arr, { key: 0 })).toEqual(test)
  })

  // секция section
  test("Test function: getSectionProps", () => {
    const sectionProps = {
      title: "9",
      items: [
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

    const test = {
      title: "9",
      key: 1,
      items: [
        {
          key: 2,
          name: "10",
          href: "#/document"
        },
        {
          key: 3,
          name: "11",
          href: "#/other"
        }
      ]
    }

    expect(foo.getSectionProps(sectionProps, { key: 0 })).toEqual(test)
  })

  // элементы секции section
  test("Test function: getSectionPropsItems", () => {
    const arr = [
      {
        name: "10",
        href: "#/document"
      },
      {
        name: "11",
        href: "#/other"
      }
    ]

    const test = [
      {
        key: 1,
        name: "10",
        href: "#/document"
      },
      {
        key: 2,
        name: "11",
        href: "#/other"
      }
    ]

    expect(foo.getSectionPropsItems(arr, { key: 0 })).toEqual(test)
  })
})
