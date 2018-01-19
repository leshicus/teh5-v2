import React from "react"

import { CommandBarButton } from "office-ui-fabric-react/lib/Button"
import { CommandBar } from "office-ui-fabric-react/lib/CommandBar"
import { ContextualMenuItemType } from "office-ui-fabric-react/lib/ContextualMenu"

const items = [
  {
    // key: "portfolio",
    name: "Portfolio",
    disabled: true,
    items: [
      {
        // key: "1",
        name: "1"
      },
      {
        // key: "2",
        name: "2"
      }
    ]
  },
  {
    // key: "cssFrameworks",
    name: "CSS Frameworks",
    // iconProps: {
    //   iconName: "Css"
    // },
    _iconName: "Css",
    disabled: true,
    items: [
      {
        // key: "cssFrameworks",
        name: "Metro",
        // iconProps: {
        //   iconName: "WindowsLogo"
        // }
        _iconName: "WindowsLogo"
      },
      {
        // key: "cheatSheets",
        name: "Semantic UI"
      }
    ]
  },
  {
    // key: "cheatSheets",
    name: "Cheat sheets",
    // iconProps: {
    //   iconName: "EditNote"
    // },
    _iconName: "EditNote",
    items: [
      {
        // key: "sectionJs",
        // itemType: ContextualMenuItemType.Section,
        _itemType: "section",
        _title: "JavaScript",
        // sectionProps: {
        // title: "JavaScript",
        // key: "JavaScript",
        _items: [
          {
            // key: "document",
            name: "document",
            href: "#/document"
          },
          {
            // key: "other",
            name: "Other",
            href: "#/other"
          }
        ]
      }
      // }
    ]
  }
]

const commandBarItems = {
  items: [
    {
      key: "portfolio",
      name: "Portfolio",
      iconProps: {
        // iconName: "Css"
      },
      disabled: true,
      items: [
        {
          key: "1",
          name: "1"
        },
        {
          key: "2",
          name: "2"
        }
      ]
    },
    {
      key: "cssFrameworks",
      name: "CSS Frameworks",
      iconProps: {
        iconName: "Css"
      },
      disabled: true,
      items: [
        {
          key: "cssFrameworks",
          name: "Metro",
          iconProps: {
            iconName: "WindowsLogo"
          }
        },
        {
          key: "cheatSheets",
          name: "Semantic UI"
        }
      ]
    },
    {
      key: "cheatSheets",
      name: "Cheat sheets",
      iconProps: {
        iconName: "EditNote"
      },
      items: [
        {
          key: "sectionJs",
          itemType: ContextualMenuItemType.Section,
          sectionProps: {
            // topDivider: true,
            // bottomDivider: true,
            title: "JavaScript",
            key: "JavaScript",
            items: [
              {
                key: "document",
                name: "document",
                href: "#/document"
              },
              {
                key: "other",
                name: "Other",
                href: "#/other"
              }
            ]
          }
        }

        // {
        //     key: "cssFrameworks",
        //     name: "JavaScript",
        //     iconProps: {
        //         iconName: "JavaScriptLanguage"
        //     }
        // }
      ]
    }
  ]
}

const Header = props => (
  <CommandBar isSearchBoxVisible={false} items={commandBarItems.items} />
)

export default Header
