import React from "react"

// import { CommandBarButton } from "office-ui-fabric-react/lib/Button"
import { CommandBar } from "office-ui-fabric-react/lib/CommandBar"
// import { ContextualMenuItemType } from "office-ui-fabric-react/lib/ContextualMenu"

import { getItems } from "./../../actions/getHeaderMenu"
import commandBarItems from "./routes"

const items = getItems(commandBarItems)

const Header = props => <CommandBar isSearchBoxVisible={false} items={items} />

export default Header
