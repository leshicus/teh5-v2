import React from "react";
import { CommandBarButton } from "office-ui-fabric-react/lib/Button";

const Header = props => (
    <div
        style={{
            display: "flex",
            height: "40px",
            background: "rgb(244, 244, 244)"
        }}
    >
        <CommandBarButton
            data-automation-id="test"
            disabled={false}
            checked={false}
            iconProps={{ iconName: "Css" }}
            text="CSS Frameworks"
            menuProps={{
                items: [
                    {
                        key: "emailMessage",
                        name: "Metro",
                        icon: "Mail"
                    },
                    {
                        key: "calendarEvent",
                        name: "Semantic UI",
                        icon: "Calendar"
                    }
                ]
            }}
        />
    </div>
);

export default Header;
