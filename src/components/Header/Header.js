import React from "react";
import { CommandBarButton } from "office-ui-fabric-react/lib/Button";
import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";
import { ContextualMenuItemType } from "office-ui-fabric-react/lib/ContextualMenu";

const commandBarItems = {
    items: [
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
                        topDivider: true,
                        bottomDivider: true,
                        title: "JavaScript",
                        items: [
                            {
                                key: "scroll",
                                name: "scroll"
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
};

const Header = props => (
    <CommandBar isSearchBoxVisible={false} items={commandBarItems.items} />
);

export default Header;
